/**
 * Translates legacy Deriv v3 request payloads to the new Deriv API schema so every
 * caller (bots, executors, charts, UI) keeps working without per-file edits.
 * New API validates strictly ("Properties not allowed: ..."), so unknown keys are stripped.
 * Ref: developers.deriv.com/comparison/* (proposal, ticks, ticks_history, contracts_for, active_symbols)
 */
export function normalizeDerivRequest<T extends Record<string, any>>(message: T): T {
  if (!message || typeof message !== "object") return message
  const m: Record<string, any> = { ...message }

  // Removed everywhere in the new API
  delete m.loginid

  if (m.proposal !== undefined) {
    // symbol -> underlying_symbol; legacy-only params removed
    if (m.symbol !== undefined && m.underlying_symbol === undefined) m.underlying_symbol = m.symbol
    delete m.symbol
    delete m.barrier_range
    delete m.product_type
    delete m.date_start
  } else if (m.ticks_history !== undefined || m.ticks !== undefined) {
    // symbol is the value of `ticks` / `ticks_history`; there is no separate underlying_symbol
    delete m.underlying_symbol
    delete m.symbol
  } else if (m.contracts_for !== undefined) {
    delete m.underlying_symbol
    delete m.symbol
    delete m.currency
    delete m.product_type
  } else if (m.active_symbols !== undefined) {
    delete m.product_type
    delete m.landing_company
    delete m.landing_company_short
  } else if (m.balance !== undefined) {
    delete m.account // multi-account balance removed in new API
  }

  return m as T
}
