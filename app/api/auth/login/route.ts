import { NextResponse } from "next/server";
import { cookies } from "next/headers"; // Untuk mengakses cookies

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  if (username === "admin" && password === "admin") {
    const token = "your-generated-jwt-token"; 
    cookies().set("token", token, { httpOnly: true });

    return NextResponse.json({ message: "Login berhasil", token }, { status: 200 });
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
