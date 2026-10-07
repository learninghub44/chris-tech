import { NextRequest, NextResponse } from "next/server"
import { DERIV_API, OAUTH_CLIENT_ID } from "@/lib/deriv-config"

// Same-origin proxy for Deriv's Options REST API (avoids browser CORS issues).
// Only the accounts/OTP endpoints are forwarded; the caller's Bearer token is passed through.
const ALLOWED = /^trading\/v1\/options\/accounts(\/[A-Za-z0-9_-]+\/(otp|reset-demo-balance))?$/

async function forward(req: NextRequest, path: string[]) {
  const target = path.join("/")
  if (!ALLOWED.test(target)) {
    return NextResponse.json({ error: "Not allowed" }, { status: 403 })
  }
  const auth = req.headers.get("authorization")
  if (!auth) return NextResponse.json({ error: "Missing Authorization" }, { status: 401 })

  const res = await fetch(`${DERIV_API.REST_BASE}/${target}`, {
    method: req.method,
    headers: {
      Authorization: auth,
      "Deriv-App-ID": OAUTH_CLIENT_ID,
      "Content-Type": "application/json",
    },
    body: req.method === "GET" ? undefined : await req.text() || undefined,
    cache: "no-store",
  })
  const text = await res.text()
  return new NextResponse(text, {
    status: res.status,
    headers: { "Content-Type": res.headers.get("content-type") || "application/json" },
  })
}

export async function GET(req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  return forward(req, (await ctx.params).path)
}
export async function POST(req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  return forward(req, (await ctx.params).path)
}
