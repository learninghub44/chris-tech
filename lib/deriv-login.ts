import { DERIV_API, OAUTH_CLIENT_ID, DERIV_REDIRECT_URL } from "@/lib/deriv-config"
import { generateCodeVerifier, generateCodeChallenge, generateState } from "@/lib/pkce"

/** Starts the Deriv OAuth 2.0 PKCE login. Single entry point for every login button. */
export async function startDerivLogin(): Promise<void> {
  if (typeof window === "undefined") return

  const verifier = generateCodeVerifier()
  const challenge = await generateCodeChallenge(verifier)
  const state = generateState()

  sessionStorage.setItem("pkce_code_verifier", verifier)
  sessionStorage.setItem("oauth_state", state)

  const url = new URL(DERIV_API.OAUTH)
  url.searchParams.set("response_type", "code")
  url.searchParams.set("client_id", OAUTH_CLIENT_ID)
  url.searchParams.set("redirect_uri", DERIV_REDIRECT_URL)
  url.searchParams.set("scope", "trade")
  url.searchParams.set("state", state)
  url.searchParams.set("code_challenge", challenge)
  url.searchParams.set("code_challenge_method", "S256")

  window.location.href = url.toString()
}
