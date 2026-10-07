import { NextResponse } from 'next/server';
import { DERIV_API, OAUTH_CLIENT_ID } from '@/lib/deriv-config';

export async function POST(request: Request) {
  try {
    const { code, code_verifier, redirect_uri } = await request.json();

    if (!code || !code_verifier || !redirect_uri) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    const payload = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: OAUTH_CLIENT_ID,
      code,
      code_verifier,
      redirect_uri,
    });
    // Only if the Deriv OAuth client was registered as confidential
    if (process.env.DERIV_CLIENT_SECRET) payload.set('client_secret', process.env.DERIV_CLIENT_SECRET);

    const response = await fetch(DERIV_API.TOKEN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: payload.toString(),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('[v0] Token exchange failed:', data);
      return NextResponse.json(
        { error: data.error || 'Token exchange failed', error_description: data.error_description },
        { status: response.status }
      );
    }

    // Return the tokens to the client
    return NextResponse.json({
      access_token: data.access_token ?? data.data?.access_token,
      expires_in: data.expires_in,
      token_type: data.token_type,
    });
  } catch (error) {
    console.error('[v0] API Auth Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
