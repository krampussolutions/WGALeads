import { NextResponse } from "next/server";
import { createSupabaseServer } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const state = (url.searchParams.get("state") ?? "GA").toUpperCase();
    const region = url.searchParams.get("region") ?? "West Georgia";

    const supabase = await createSupabaseServer();

    let q = supabase.from("counties").select("name").eq("state", state);

    // region is optional — only filter if present
    if (region) q = q.eq("region", region);

    const { data, error } = await q.order("name", { ascending: true });

    if (error) {
      return NextResponse.json({ counties: [] }, { status: 200 });
    }

    return NextResponse.json({ counties: (data ?? []).map((r: any) => r.name) }, { status: 200 });
  } catch {
    return NextResponse.json({ counties: [] }, { status: 200 });
  }
}
