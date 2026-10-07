/**
 * Request normalizer for the Deriv WebSocket API.
 *
 * Callers (bots, executors, charts, UI) are written against a mix of legacy and new field
 * names. The gateway validates strictly ("Properties not allowed: ..."), and the accepted
 * schema has differed from the published migration docs, so this layer:
 *   1. Normalizes requests to a sane default (proposal uses `symbol` unless learned otherwise).
 *   2. LEARNS from validation errors: see learnFromValidationError(). The WS manager calls it
 *      when the server answers "Properties not allowed: x", then retries the request once.
 */

type ProposalSymbolKey = "symbol" | "underlying_symbol"
let proposalSymbolKey: ProposalSymbolKey = "symbol"

// request type -> properties the server rejected (stripped from then on)
const learnedStrip = new Map<string, Set<string>>()

const REQUEST_TYPES = [
  "proposal", "ticks_history", "ticks", "contracts_for", "active_symbols", "buy", "sell",
  "balance", "portfolio", "profit_table", "statement", "proposal_open_contract", "transaction",
]

export function getRequestType(m: Record<string, any>): string {
  return REQUEST_TYPES.find((k) => m && m[k] !== undefined) || Object.keys(m || {})[0] || "unknown"
}

export function normalizeDerivRequest<T extends Record<string, any>>(message: T): T {
  if (!message || typeof message !== "object") return message
  const m: Record<string, any> = { ...message }
  const type = getRequestType(m)

  // Removed everywhere in the new API
  delete m.loginid

  if (type === "proposal") {
    const sym = m.symbol ?? m.underlying_symbol
    delete m.symbol
    delete m.underlying_symbol
    if (sym !== undefined) m[proposalSymbolKey] = sym
    delete m.barrier_range
    delete m.product_type
    delete m.date_start
  } else if (type === "ticks_history" || type === "ticks") {
    // the symbol is the value of `ticks` / `ticks_history`
    delete m.underlying_symbol
    delete m.symbol
  } else if (type === "contracts_for") {
    delete m.underlying_symbol
    delete m.symbol
    delete m.currency
    delete m.product_type
  } else if (type === "active_symbols") {
    delete m.product_type
    delete m.landing_company
    delete m.landing_company_short
  } else if (type === "balance") {
    delete m.account
  }

  const strip = learnedStrip.get(type)
  if (strip) strip.forEach((p) => delete m[p])

  return m as T
}

/**
 * Called with the server's validation error. Returns true if a rule was learned (so the
 * caller should retry the request, which will now be normalized differently).
 */
export function learnFromValidationError(echoReq: Record<string, any> | undefined, errorMessage: string | undefined): boolean {
  if (!echoReq || !errorMessage) return false
  const match = /Properties not allowed:\s*(.+?)\.?$/i.exec(errorMessage.trim())
  if (!match) return false

  const props = match[1].split(",").map((p) => p.trim()).filter(Boolean)
  const type = getRequestType(echoReq)
  let learned = false

  for (const p of props) {
    if (type === "proposal" && (p === "underlying_symbol" || p === "symbol")) {
      const next: ProposalSymbolKey = p === "underlying_symbol" ? "symbol" : "underlying_symbol"
      if (proposalSymbolKey !== next) {
        proposalSymbolKey = next
        learned = true
        console.warn(`[v0] Deriv rejected "${p}" on proposal -> switching to "${next}"`)
      }
      continue
    }
    const set = learnedStrip.get(type) ?? new Set<string>()
    if (!set.has(p)) {
      set.add(p)
      learnedStrip.set(type, set)
      learned = true
      console.warn(`[v0] Deriv rejected "${p}" on ${type} -> stripping it from now on`)
    }
  }
  return learned
}
