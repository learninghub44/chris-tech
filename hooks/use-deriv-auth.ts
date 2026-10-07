"use client"

import { createContext, useContext, useEffect, useState, useRef } from "react"
import { DerivWebSocketManager } from "@/lib/deriv-websocket-manager"
import { DERIV_REDIRECT_URL, DERIV_API, DERIV_CONFIG } from "@/lib/deriv-config"
import { derivREST } from "@/lib/deriv-rest-client"
import { startDerivLogin } from "@/lib/deriv-login"

interface Balance {
  amount: number
  currency: string
}

interface Account {
  id: string
  type: "Demo" | "Real"
  currency: string
  balance: number
}

export function useDerivAuthState() {
  const [token, setToken] = useState<string>("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [balance, setBalance] = useState<Balance | null>(null)
  const [accountType, setAccountType] = useState<"Demo" | "Real" | null>(null)
  const [accountCode, setAccountCode] = useState<string>("")
  const [accounts, setAccounts] = useState<Account[]>([])
  const [activeLoginId, setActiveLoginId] = useState<string | null>(null)
  const activeLoginIdRef = useRef<string | null>(null)
  const [isInitializing, setIsInitializing] = useState(true)
  const [showApprovalModal, setShowApprovalModal] = useState(false)
  const [showTokenModal, setShowTokenModal] = useState(false)
  const [balanceSubscribed, setBalanceSubscribed] = useState(false)
  const balanceSubscribedRef = useRef(false)
  const sessionActiveRef = useRef(false)
  const manager = DerivWebSocketManager.getInstance()

  // 1. Stable listener for balance updates (OTP sockets are pre-authenticated; no `authorize` message)
  useEffect(() => {
    const handleBalance = (data: any) => {
      if (data.msg_type !== "balance" || !data.balance) return
      const msgLoginId = data.balance.loginid || activeLoginIdRef.current
      if (msgLoginId === activeLoginIdRef.current) {
        setBalance({
          amount: Number(data.balance.balance),
          currency: data.balance.currency,
        })
      }
      setAccounts(prev => prev.map(acc =>
        acc.id === msgLoginId ? { ...acc, balance: Number(data.balance.balance) } : acc
      ))
    }

    // (Re)subscribe to balance every time the authenticated socket (re)connects
    const handleStatus = (status: string) => {
      if (status === "connected" && sessionActiveRef.current) {
        manager.send({ balance: 1, subscribe: 1 })
      }
      if (status === "disconnected" && !localStorage.getItem("deriv_api_token")) {
        setIsInitializing(false)
      }
    }

    manager.on("balance", handleBalance)
    const unbindStatus = manager.onConnectionStatus(handleStatus)
    return () => {
      manager.off("balance", handleBalance)
      unbindStatus()
    }
  }, [])

  useEffect(() => {
    activeLoginIdRef.current = activeLoginId
  }, [activeLoginId])

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleOAuthCallback = async (params: URLSearchParams) => {
      const code = params.get('code')
      const returnedState = params.get('state')
      const storedState = sessionStorage.getItem('oauth_state')
      const codeVerifier = sessionStorage.getItem('pkce_code_verifier')

      if (!code || !returnedState || !storedState || !codeVerifier) return

      if (returnedState !== storedState) {
        console.error("[v0] ❌ OAuth State mismatch! CSRF detected or invalid session.")
        return
      }

      setIsInitializing(true)
      console.log("[v0] 🔄 Exchanging OAuth code for token...")

      // Auth codes are single-use: consume PKCE state now so a re-run can't replay it
      sessionStorage.removeItem('pkce_code_verifier')
      sessionStorage.removeItem('oauth_state')

      try {
        const response = await fetch('/api/auth/deriv-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            code,
            code_verifier: codeVerifier,
            redirect_uri: DERIV_REDIRECT_URL
          })
        })

        const data = await response.json()
        if (data.error) throw new Error(data.error)

        const accessToken = data.access_token
        console.log("[v0] 🔑 OAuth 2.0 access token received")

        // Store and start session (REST accounts -> OTP -> authenticated WebSocket)
        localStorage.setItem("deriv_api_token", accessToken)
        setToken(accessToken)
        await connectWithToken(accessToken)

        // Clean URL
        const newUrl = window.location.origin + window.location.pathname
        window.history.replaceState({}, document.title, newUrl)
      } catch (err: any) {
        console.error("[v0] ❌ Token exchange failed:", err.message)
        setIsInitializing(false)
      }
    }

    const searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('code')) {
      handleOAuthCallback(searchParams)
      return
    }

    const extractTokensFromParams = (searchStr: string): Record<string, string> => {
      // Keep legacy extraction for backward compatibility or direct token pass-through
      const cleanedStr = searchStr.replace(/^[?#]/, '')
      if (!cleanedStr) return {}

      const params = new URLSearchParams(cleanedStr)
      const urlTokens: Record<string, string> = {}
      let primaryToken = ""
      let primaryAcct = ""

      for (let i = 1; i <= 20; i++) {
        const t = params.get(`token${i}`)
        const a = params.get(`acct${i}`)
        if (t && a) {
          urlTokens[a] = t
          if (i === 1 || !primaryToken) {
            primaryToken = t
            primaryAcct = a
          }
        }
      }
      return primaryToken ? { ...urlTokens, __primary: primaryToken, __primaryAcct: primaryAcct } : {}
    }

    let tokenData = extractTokensFromParams(window.location.search)

    if (window.location.hash) {
      const hashData = extractTokensFromParams(window.location.hash)
      tokenData = { ...tokenData, ...hashData }
    }

    if (Object.keys(tokenData).length > 0) {
      const primaryToken = tokenData.__primary || ""
      const primaryAcct = tokenData.__primaryAcct || ""
      delete tokenData.__primary
      delete tokenData.__primaryAcct

      console.log("[v0] 🔑 Legacy OAuth tokens detected in URL:", Object.keys(tokenData).length, "accounts")
      localStorage.setItem("deriv_auth_tokens", JSON.stringify(tokenData))
      localStorage.setItem("deriv_api_token", primaryToken)
      if (primaryAcct) localStorage.setItem("active_login_id", primaryAcct)

      const newUrl = window.location.origin + window.location.pathname
      window.history.replaceState({}, document.title, newUrl)

      setToken(primaryToken)
      connectWithToken(primaryToken)
      return
    }

    const storedToken = localStorage.getItem("deriv_api_token")
    if (storedToken && storedToken.length > 10) {
      setToken(storedToken)
      connectWithToken(storedToken)
    } else {
      console.log("[v0] ℹ️ No session found")
      setIsInitializing(false)
    }
  }, [])

  const normalizeAccount = (a: any): Account => ({
    id: a.account_id || a.loginid,
    type: a.is_virtual ? "Demo" : "Real",
    currency: a.currency || "USD",
    balance: Number(a.balance) || 0,
  })

  const clearSession = () => {
    localStorage.removeItem("deriv_api_token")
    localStorage.removeItem("deriv_auth_tokens")
    localStorage.removeItem("active_login_id")
    sessionActiveRef.current = false
    manager.setUrlProvider(null)
    setToken("")
    setIsLoggedIn(false)
    setBalance(null)
    setAccounts([])
    setActiveLoginId(null)
    activeLoginIdRef.current = null
    setAccountCode("")
  }

  // Connect the shared WebSocket to a specific account via a fresh OTP URL (no `authorize` call)
  const openAccountSocket = async (acc: Account) => {
    manager.setUrlProvider(() => derivREST.getOTPUrl(acc.id))
    const url = await derivREST.getOTPUrl(acc.id)
    sessionActiveRef.current = true
    balanceSubscribedRef.current = false
    await manager.connect(url, true)
    manager.isAuthorized = true
    manager.sessionInfo = { loginid: acc.id, currency: acc.currency, balance: acc.balance, is_virtual: acc.type === "Demo" }

    localStorage.setItem("active_login_id", acc.id)
    setActiveLoginId(acc.id)
    activeLoginIdRef.current = acc.id
    setAccountType(acc.type)
    setAccountCode(acc.id)
    setBalance({ amount: acc.balance, currency: acc.currency })
    setIsLoggedIn(true)
    setShowTokenModal(false)
    setIsInitializing(false)
  }

  const connectWithToken = async (apiToken: string, preferredId?: string) => {
    if (!apiToken || apiToken.length < 10) {
      setIsInitializing(false)
      return
    }

    try {
      derivREST.setToken(apiToken)
      const list = (await derivREST.getAccounts()).map(normalizeAccount)
      if (list.length === 0) throw new Error("No Deriv trading accounts found for this login")
      setAccounts(list)

      const wanted = preferredId || localStorage.getItem("active_login_id")
      const target = list.find(a => a.id === wanted) || list[0]
      await openAccountSocket(target)
      console.log("[v0] ✅ Session established:", target.id, `(${target.type})`)
    } catch (e: any) {
      console.error("[v0] ❌ Session setup failed:", e?.message || e)
      if (e?.status === 401 || e?.status === 403) {
        clearSession()
        setShowTokenModal(true)
      }
      setIsInitializing(false)
    }
  }

  const submitApiToken = (apiToken: string) => {
    if (!apiToken || apiToken.length < 10) {
      alert("Please enter a valid API token")
      return
    }

    setIsInitializing(true)
    localStorage.setItem("deriv_api_token", apiToken)
    setToken(apiToken)
    connectWithToken(apiToken)
  }

  const openTokenSettings = () => {
    setShowTokenModal(true)
  }

  const loginWithDeriv = () => startDerivLogin()

  const requestLogin = () => {
    loginWithDeriv()
  }

  const logout = () => {
    if (typeof window === "undefined") return
    manager.send({ forget_all: ["balance", "ticks", "proposal_open_contract"] })
    clearSession()
    setIsInitializing(false)
    balanceSubscribedRef.current = false
    setBalanceSubscribed(false)
    // Drop the account socket and fall back to the public market-data socket
    manager.disconnect()
    manager.connect(`${DERIV_API.WEBSOCKET}?app_id=${DERIV_CONFIG.APP_ID}&l=en&brand=deriv`, true).catch(() => {})
    setShowTokenModal(true)
  }

  const switchAccount = async (loginId: string) => {
    if (!loginId || typeof window === "undefined") return
    const target = accounts.find(a => a.id === loginId)
    if (!target) return

    console.log("[v0] 🔄 Switching account to:", loginId)
    setIsInitializing(true)
    try {
      await openAccountSocket(target)
    } catch (e: any) {
      console.error("[v0] ❌ Account switch failed:", e?.message || e)
      setIsInitializing(false)
    }
  }

  return {
    token,
    isLoggedIn,
    isInitializing,
    isAuthenticated: isLoggedIn,
    loginWithDeriv,
    requestLogin,
    showApprovalModal,
    logout,
    balance,
    accountType,
    accountCode,
    accounts,
    switchAccount,
    activeLoginId,
    showTokenModal,
    submitApiToken,
    openTokenSettings,
  }
}

// ── Single shared auth instance ──────────────────────────────────────────────
// useDerivAuthState() must run exactly once (in DerivAPIProvider). Every other
// component calls useDerivAuth() and reads that same state, so OAuth code exchange,
// OTP sessions and the WebSocket are never set up twice.
export type DerivAuthValue = ReturnType<typeof useDerivAuthState>
export const DerivAuthContext = createContext<DerivAuthValue | null>(null)

export function useDerivAuth(): DerivAuthValue {
  const ctx = useContext(DerivAuthContext)
  if (!ctx) throw new Error("useDerivAuth must be used within DerivAPIProvider")
  return ctx
}
