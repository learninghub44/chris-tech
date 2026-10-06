"use client"

import { useEffect } from "react"

// Deriv redirects here after login (registered redirect URL: /callback).
// Forward the OAuth params (code, state) to the main app, where useDerivAuth
// completes the PKCE token exchange using the sessionStorage verifier.
export default function OAuthCallbackPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const error = params.get("error")
    if (error) {
      console.error("[auth] Deriv OAuth error:", error, params.get("error_description"))
      window.location.replace("/")
      return
    }
    window.location.replace("/" + window.location.search)
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">
      Completing sign-in…
    </div>
  )
}
