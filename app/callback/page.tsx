"use client"

import { useEffect, useRef, useState } from "react"
import { DERIV_REDIRECT_URL } from "@/lib/deriv-config"

// Deriv redirects here after login. We finish the PKCE token exchange right here
// (same origin as the login start) and show any failure on screen instead of
// silently bouncing back to "/".
function readPkce(key: string): string | null {
  return sessionStorage.getItem(key) || localStorage.getItem(key)
}
function clearPkce() {
  for (const k of ["pkce_code_verifier", "oauth_state"]) {
    sessionStorage.removeItem(k)
    localStorage.removeItem(k)
  }
}

export default function OAuthCallbackPage() {
  const started = useRef(false)
  const [status, setStatus] = useState("Completing sign-in…")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (started.current) return
    started.current = true

    const fail = (msg: string) => {
      console.error("[auth]", msg)
      setError(msg)
    }

    const run = async () => {
      const params = new URLSearchParams(window.location.search)

      const oauthError = params.get("error")
      if (oauthError) {
        clearPkce()
        return fail(`Deriv returned an error: ${oauthError}${params.get("error_description") ? " — " + params.get("error_description") : ""}`)
      }

      const code = params.get("code")
      const state = params.get("state")
      if (!code) return fail("No authorization code was returned by Deriv.")

      const expectedOrigin = new URL(DERIV_REDIRECT_URL).origin
      const verifier = readPkce("pkce_code_verifier")
      const storedState = readPkce("oauth_state")

      if (!verifier || !storedState) {
        return fail(
          window.location.origin !== expectedOrigin
            ? `Login started on a different domain than ${window.location.origin}. Open ${expectedOrigin} and log in from there.`
            : "Your login session was lost (browser cleared storage or login was started in another tab). Please try again."
        )
      }
      if (state !== storedState) return fail("Security check failed (state mismatch). Please try again.")

      // Auth codes are single-use: consume PKCE values before the request
      clearPkce()
      setStatus("Exchanging code for access token…")

      let data: any
      try {
        const res = await fetch("/api/auth/deriv-token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code, code_verifier: verifier, redirect_uri: DERIV_REDIRECT_URL }),
        })
        data = await res.json().catch(() => ({}))
        if (!res.ok || data.error || !data.access_token) {
          // If a token is already stored (code was consumed by a concurrent run), just continue
          if (localStorage.getItem("deriv_api_token")) {
            window.location.replace("/")
            return
          }
          return fail(`Token exchange failed: ${data.error_description || data.error || res.status}`)
        }
      } catch (e: any) {
        return fail(`Token exchange request failed: ${e?.message || e}`)
      }

      localStorage.setItem("deriv_api_token", data.access_token)
      localStorage.removeItem("active_login_id")
      setStatus("Signed in. Loading your accounts…")
      window.location.replace("/")
    }

    run()
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center text-sm">
      {error ? (
        <>
          <p className="max-w-md font-semibold text-red-400">Sign-in failed</p>
          <p className="max-w-md break-words text-muted-foreground">{error}</p>
          <a href="/" className="rounded-lg bg-blue-600 px-4 py-2 font-bold text-white">Back to app</a>
        </>
      ) : (
        <p className="text-muted-foreground">{status}</p>
      )}
    </div>
  )
}
