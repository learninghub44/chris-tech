"use client"
import "@/lib/react-19-shim"
import React from "react"

import { createContext, useContext, useEffect, useState, useRef } from "react"
import { DerivAPIClient } from "./deriv-api"
import { DERIV_APP_ID } from "./deriv-config"
import { useDerivAuthState, DerivAuthContext } from "@/hooks/use-deriv-auth"
import { DerivWebSocketManager } from "./deriv-websocket-manager"

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

interface DerivAPIContextType {
  apiClient: DerivAPIClient | null
  isConnected: boolean
  isAuthorized: boolean
  isInitializing: boolean
  authError: string | null
  error: string | null
  connectionStatus: "disconnected" | "connecting" | "connected" | "reconnecting"
  // Auth properties from useDerivAuth
  token: string
  isLoggedIn: boolean
  balance: Balance | null
  accountType: "Demo" | "Real" | null
  accountCode: string
  accounts: Account[]
  activeLoginId: string | null
  logout: () => void
  requestLogin: () => void
  switchAccount: (loginId: string) => void
  submitApiToken: (token: string) => void
  openTokenSettings: () => void
}

const DerivAPIContext = createContext<DerivAPIContextType | null>(null)

let globalAPIClient: DerivAPIClient | null = null

export function DerivAPIProvider({ children }: { children: React.ReactNode }) {
  const [apiClient, setApiClient] = useState<DerivAPIClient | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [connectionStatus, setConnectionStatus] = useState<
    "disconnected" | "connecting" | "connected" | "reconnecting"
  >("disconnected")
  const clientRef = useRef<DerivAPIClient | null>(null)
  const initAttemptRef = useRef(0)
  const auth = useDerivAuthState()
  const { token, isLoggedIn, isInitializing } = auth

  useEffect(() => {
    // 1. Ensure basic API client exists even without token
    if (!globalAPIClient) {
      console.log("[v0] Initializing baseline DerivAPIClient")
      globalAPIClient = new DerivAPIClient({
        appId: String(DERIV_APP_ID || "34t6D3VOm0Kv3LadCeJjL"),
      })
      
      globalAPIClient.setErrorCallback((err) => {
        const errorMessage = err?.message || (typeof err === 'string' ? err : 'Unknown API Error');
        setError(errorMessage)
      })

      clientRef.current = globalAPIClient
      setApiClient(globalAPIClient)
    }

    const client = globalAPIClient

    // 2. Handle Connection and Authorization
    const syncConnection = async () => {
      try {
        if (!client.isConnected()) {
          setConnectionStatus("connecting")
          await client.connect()
          setConnectionStatus("connected")
        }

        // Auth is handled by useDerivAuth via REST + OTP WebSocket URL (no `authorize` message exists)

        setIsConnected(client.isConnected())
        setIsAuthorized(isLoggedIn)
        setError(null)
      } catch (err: any) {
        console.error("[v0] Sync failed:", err)
        setConnectionStatus("reconnecting")
        setError(err?.message || "Connection sync failed")
      }
    }

    syncConnection()

    // 3. Status Polling
    const interval = setInterval(() => {
      if (client) {
        const connected = client.isConnected()
        const authorized = isLoggedIn

        setIsConnected(connected)
        setIsAuthorized(authorized)

        if (connected && authorized && error) {
          setError(null)
          setConnectionStatus("connected")
        }
      }
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [token, isLoggedIn])

  return (
    <DerivAuthContext.Provider value={auth}>
    <DerivAPIContext.Provider
      value={{
        apiClient,
        isConnected,
        isAuthorized,
        isInitializing,
        authError: auth.authError,
        error,
        connectionStatus,
        token: auth.token,
        isLoggedIn: auth.isLoggedIn,
        balance: auth.balance,
        accountType: auth.accountType,
        accountCode: auth.accountCode,
        accounts: auth.accounts,
        activeLoginId: auth.activeLoginId,
        logout: auth.logout,
        requestLogin: auth.requestLogin,
        switchAccount: auth.switchAccount,
        submitApiToken: auth.submitApiToken,
        openTokenSettings: auth.openTokenSettings,
      }}
    >
      {children}
    </DerivAPIContext.Provider>
    </DerivAuthContext.Provider>
  )
}

export function useDerivAPI() {
  const context = useContext(DerivAPIContext)
  if (!context) {
    // Return a dummy context to avoid crashing, but warn
    console.error("useDerivAPI must be used within DerivAPIProvider")
    return {
      apiClient: null,
      isConnected: false,
      isAuthorized: false,
      isInitializing: false,
      authError: null,
      error: "Context not found",
      connectionStatus: "disconnected",
      token: "",
      isLoggedIn: false,
      balance: null,
      accountType: null,
      accountCode: "",
      accounts: [],
      activeLoginId: null,
      logout: () => { },
      requestLogin: () => { },
      switchAccount: () => { },
      submitApiToken: () => { },
      openTokenSettings: () => { },
    } as DerivAPIContextType
  }
  return context
}
