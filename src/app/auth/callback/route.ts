import { NextResponse } from "next/server";
import { createSupabaseServer } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  const origin = url.origin;

  if (!code) {
    return NextResponse.redirect(`${origin}/login?error=Invalid%20confirmation%20link`);
  }

  const supabase = await createSupabaseServer();

  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(
      `${origin}/login?error=${encodeURIComponent(error.message)}`
    );
  }

  // Success → send user to dashboard
  return NextResponse.redirect(`${origin}/dashboard`);
}