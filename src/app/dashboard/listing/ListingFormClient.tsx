"use client";

import { useEffect, useMemo, useState } from "react";
import ImageUploader from "@/components/ImageUploader";
import { Button } from "@/components/Button";

export default function ListingFormClient({
  action,
  listing,
  active,
}: {
  action: (formData: FormData) => Promise<void>;
  listing: any | null;
  active: boolean;
}) {
  const [logoUrl, setLogoUrl] = useState<string>(listing?.logo_url ?? "");
  const [coverUrl, setCoverUrl] = useState<string>(listing?.cover_url ?? "");
  const [counties, setCounties] = useState<string[]>([]);
  const [countiesError, setCountiesError] = useState<string>("");

  const note = useMemo(() => {
    if (active) return null;
    return (
      <div className="mt-6 rounded-xl border border-amber-800 bg-amber-950/30 p-4 text-sm text-amber-200">
        Your subscription is not active. You can save a draft, but you must subscribe to publish.
      </div>
    );
  }, [active]);


useEffect(() => {
  let cancelled = false;
  (async () => {
    try {
      const res = await fetch("/api/counties?state=GA&region=West%20Georgia", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const names = Array.isArray(data?.counties) ? data.counties : [];
      if (!cancelled) setCounties(names);
    } catch (e: any) {
      if (!cancelled) setCountiesError("Could not load counties list.");
    }
  })();
  return () => {
    cancelled = true;
  };
}, []);

return (
  <>

      {note}

      <div className="mt-8">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 shadow-sm">
          <form action={action} className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <ImageUploader label="Logo (optional)" kind="logo" value={logoUrl} onUploaded={setLogoUrl} />
              <ImageUploader label="Cover image (optional)" kind="cover" value={coverUrl} onUploaded={setCoverUrl} />
            </div>

            <input type="hidden" name="logo_url" value={logoUrl} />
            <input type="hidden" name="cover_url" value={coverUrl} />

            <div>
              <label className="text-sm text-slate-300">Business name</label>
              <input
                name="business_name"
                required
                defaultValue={listing?.business_name ?? ""}
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm text-slate-300">Category</label>
                <input
                  name="category"
                  required
                  defaultValue={listing?.category ?? ""}
                  placeholder="e.g., Roofing, Plumbing, Realtor"
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Service area</label>
                <input
                  name="service_area"
                  required
                  defaultValue={listing?.service_area ?? ""}
                  placeholder="e.g., Robbinsville + 50 miles"
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="text-sm text-slate-300">City</label>
                <input
                  name="city"
                  required
                  defaultValue={listing?.city ?? ""}
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">County (optional)</label>
<select
  name="county"
  defaultValue={listing?.county ?? ""}
  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
>
  <option value="">Select a county</option>
  {/* If an existing listing has a county not in the list, keep it selectable */}
  {listing?.county && !counties.includes(listing.county) ? (
    <option value={listing.county}>{listing.county}</option>
  ) : null}
  {counties.map((c) => (
    <option key={c} value={c}>
      {c}
    </option>
  ))}
</select>
{countiesError ? <p className="mt-1 text-xs text-amber-300">{countiesError}</p> : null}
              </div>
              <div>
                <label className="text-sm text-slate-300">State</label>
                <input
                  name="state"
                  required
                  defaultValue={listing?.state ?? "GA"}
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm text-slate-300">Account type</label>
                <select
                  name="account_type"
                  defaultValue={listing?.account_type ?? "contractor"}
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
                >
                  <option value="contractor">Contractor</option>
                  <option value="realtor">Realtor</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-300">Headline</label>
                <input
                  name="headline"
                  defaultValue={listing?.headline ?? ""}
                  placeholder="One-liner that sells your service"
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-300">Description</label>
              <textarea
                name="description"
                rows={8}
                defaultValue={listing?.description ?? ""}
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm text-slate-300">Phone (optional)</label>
                <input
                  name="phone"
                  defaultValue={listing?.phone ?? ""}
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Public email (optional)</label>
                <input
                  name="email_public"
                  type="email"
                  defaultValue={listing?.email_public ?? ""}
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-300">Website (optional)</label>
              <input
                name="website"
                defaultValue={listing?.website ?? ""}
                placeholder="https://..."
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                id="publish"
                name="publish"
                type="checkbox"
                defaultChecked={Boolean(listing?.is_published)}
                className="h-4 w-4 rounded border-slate-700 bg-slate-950"
              />
              <label htmlFor="publish" className="text-sm text-slate-300">
                Publish listing (requires active subscription)
              </label>
            </div>

            <div className="flex gap-2">
              <Button type="submit">Save</Button>
              <a href="/dashboard">
                <Button variant="secondary">Back</Button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
