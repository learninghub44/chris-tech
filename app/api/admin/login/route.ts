import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    try {
        const { username, password } = await request.json()

        if (!username || !password) {
            return NextResponse.json({ error: "Missing credentials" }, { status: 400 })
        }

        // Admin credentials are read from environment variables.
        // Falls back to a default only if ADMIN_USERNAME/ADMIN_PASSWORD are not set — change these in production.
        const cleanUser = username.trim().toLowerCase()
        const cleanPass = password.trim()

        const envUser = (process.env.ADMIN_USERNAME || "admin").trim().toLowerCase()
        const envPass = (process.env.ADMIN_PASSWORD || "ChangeMe123!").trim()

        const isValid = cleanUser === envUser && cleanPass === envPass

        if (!isValid) {
            console.log(`[Login Failed] Invalid attempt. User: '${username}', Pass length: ${password.length}`)
            return NextResponse.json({ error: "Invalid username or password" }, { status: 401 })
        }

        const response = NextResponse.json({ success: true, user: { username: "admin", role: "admin" } })

        // Set a simple session cookie for demo purposes
        // In a real app, use a JWT and HTTP-only cookie
        response.cookies.set("admin_session", "true", {
            path: "/",
            httpOnly: false, // Set to false so middleware or client can read for UI state if needed, but true is better for security
            maxAge: 60 * 60 * 24, // 1 day
        })

        return response
    } catch (error) {
        console.error("[Login API] Error:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}
