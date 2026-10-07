import { DERIV_API, DERIV_CONFIG } from "./deriv-config"

export class DerivRESTClient {
    private appId: string
    private token: string | null = null

    constructor(appId: string = DERIV_CONFIG.APP_ID) {
        this.appId = appId
        this.resolveToken()
    }

    private resolveToken() {
        if (typeof window !== "undefined") {
            this.token = 
                localStorage.getItem("deriv_auth_token") || 
                localStorage.getItem("authToken") || 
                localStorage.getItem("clientToken") || 
                localStorage.getItem("deriv_api_token")
        }
    }

    setToken(token: string) {
        this.token = token
    }

    private async request(path: string, options: RequestInit = {}): Promise<any> {
        const url = `${DERIV_API.REST_BASE}${path}`
        const headers = new Headers(options.headers || {})

        headers.set("Deriv-App-ID", this.appId)
        headers.set("Content-Type", "application/json")

        if (this.token) {
            headers.set("Authorization", `Bearer ${this.token}`)
        }

        const response = await fetch(url, {
            ...options,
            headers
        })

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            const msg = errorData?.errors?.[0]?.message || errorData.message || `REST Request failed with status ${response.status}`
            const err: any = new Error(msg)
            err.status = response.status
            throw err
        }

        return response.json()
    }

    /**
     * Get an authenticated WebSocket URL (OTP already embedded) for an account.
     * OTP is single-use and valid ~120s, so connect immediately.
     */
    async getOTPUrl(accountId: string): Promise<string> {
        const res = await this.request(`/trading/v1/options/accounts/${accountId}/otp`, { method: "POST" })
        const url = res?.data?.url || res?.url
        if (!url) throw new Error("OTP response did not include a WebSocket URL")
        return url
    }

    /** @deprecated use getOTPUrl */
    async getOTP(accountId: string): Promise<string> {
        return this.getOTPUrl(accountId)
    }

    /**
     * Get all Options accounts (demo + real), normalized.
     * API shape: { data: [ { account_id, account_type, balance, currency, ... } ] }
     */
    async getAccounts(): Promise<any[]> {
        const res = await this.request("/trading/v1/options/accounts", { method: "GET" })
        const list = Array.isArray(res) ? res : Array.isArray(res?.data) ? res.data : []
        return list.map((a: any) => {
            const id = a.account_id ?? a.loginid ?? a.id
            const isVirtual = a.account_type ? a.account_type === "demo" : !!a.is_virtual || String(id).startsWith("VRTC") || String(id).startsWith("DOT")
            return { ...a, account_id: id, loginid: id, is_virtual: isVirtual, balance: Number(a.balance) || 0 }
        })
    }

    /**
     * Reset demo account balance
     */
    async resetDemoBalance(accountId: string): Promise<any> {
        return this.request(`/trading/v1/options/accounts/${accountId}/reset-demo-balance`, {
            method: "POST"
        })
    }
}

export const derivREST = new DerivRESTClient()
