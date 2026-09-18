import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const apiUrl = process.env.SCHEDLY_API_URL || process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    return NextResponse.json({ message: "Backend Schedly non configurato." }, { status: 503 });
  }

  const credentials = await request.json();
  try {
    const response = await fetch(`${apiUrl.replace(/\/$/, "")}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
      cache: "no-store",
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      return NextResponse.json(
        { message: data?.message || "Email o password non corretti." },
        { status: response.status }
      );
    }

    const result = NextResponse.json({ user: data.user, business: data.business });
    const secure = process.env.NODE_ENV === "production";
    result.cookies.set("schedly_access", data.accessToken, {
      httpOnly: true, secure, sameSite: "lax", path: "/", maxAge: 15 * 60,
    });
    result.cookies.set("schedly_refresh", data.refreshToken, {
      httpOnly: true, secure, sameSite: "lax", path: "/", maxAge: 30 * 24 * 60 * 60,
    });
    return result;
  } catch {
    return NextResponse.json({ message: "Backend Schedly non raggiungibile." }, { status: 502 });
  }
}
