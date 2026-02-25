import { NextResponse } from "next/server";
import { createSupabaseServer } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  // Read form values
  const form = await req.formData();
  const full_name = String(form.get("full_name") ?? "").trim();
  const account_type = String(form.get("account_type") ?? "contractor").trim();
  const email = String(form.get("email") ?? "").trim();
  const password = String(form.get("password") ?? "");

  // Basic validation
  if (!email || !password || !full_name) {
    return NextResponse.redirect(
      new URL("/signup?error=Missing%20required%20fields", req.url),
      { status: 303 }
    );
  }

  const supabase = await createSupabaseServer();

  // Ensure confirmation link returns to your app callback
  const origin = new URL(req.url).origin;
  const emailRedirectTo = `${origin}/auth/callback`;

  // Create the user
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo,
      data: {
        full_name,
        account_type,
      },
    },
  });

  // Handle signup errors
  if (error) {
    return NextResponse.redirect(
      new URL(`/signup?error=${encodeURIComponent(error.message)}`, req.url),
      { status: 303 }
    );
  }

  /**
   * If email confirmations are ON, Supabase usually returns no session.
   * In that case, redirect back to /signup so your page can show:
   * "Check your email to verify your account..."
   */
  if (!data.session) {
    return NextResponse.redirect(
      new URL(`/signup?check_email=1&email=${encodeURIComponent(email)}`, req.url),
      { status: 303 }
    );
  }

  // If confirmations are OFF (or instant session), send them to dashboard
  return NextResponse.redirect(new URL("/dashboard", req.url), { status: 303 });
}