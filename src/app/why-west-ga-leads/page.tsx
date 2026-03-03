import Nav from "@/components/Nav";
import Link from "next/link";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export const metadata = {
  title: "Why West GA Leads",
  description:
    "Learn why West GA Leads is the better alternative to national contractor platforms. Flat $10/month pricing. No lead fees. Built for West Georgia.",
};

export default function WhyPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-6 py-16">

        {/* HERO */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-white">
            Why West GA Leads?
          </h1>

          <p className="mt-4 text-slate-300">
            West GA Leads was built to connect homeowners with trusted local
            contractors and realtors — without expensive lead fees or
            long-term contracts.
          </p>
        </div>

        {/* PROBLEM SECTION */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-white">
            The Problem with National Platforms
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="text-lg font-semibold text-white">
                Pay-Per-Lead Models
              </h3>
              <p className="mt-3 text-slate-300 text-sm">
                Many platforms charge contractors for every lead — whether the
                job is won or not. That means high costs and unpredictable
                returns.
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-white">
                Heavy Competition
              </h3>
              <p className="mt-3 text-slate-300 text-sm">
                National directories prioritize big advertisers, pushing small
                local businesses down the list.
              </p>
            </Card>
          </div>
        </div>

        {/* DIFFERENCE SECTION */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-white">
            What Makes West GA Leads Different
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card>
              <h3 className="text-lg font-semibold text-white">
                Flat $10/Month
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                No per-lead charges. No hidden fees. Simple monthly pricing.
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-white">
                Built for West Georgia
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Local homeowners connect directly with local professionals.
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-white">
                Cancel Anytime
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                No contracts. No lock-ins. Stay because it works.
              </p>
            </Card>
          </div>
        </div>

        {/* HOMEOWNER SECTION */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-white">
            For Homeowners
          </h2>

          <p className="mt-6 text-slate-300 max-w-3xl">
            Browse trusted contractor and realtor listings for free. Contact
            businesses directly and request quotes without middleman fees.
          </p>
        </div>

        {/* CONTRACTOR SECTION */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-white">
            For Contractors & Realtors
          </h2>

          <p className="mt-6 text-slate-300 max-w-3xl">
            Get visibility in a growing local directory built specifically for
            West Georgia. Publish your listing, receive quote requests, and
            manage leads from your dashboard — all for $10 per month.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-wrap gap-4">
          <Link href="/browse">
            <Button>Browse Listings</Button>
          </Link>

          <Link href="/pricing">
            <Button variant="secondary">
              List Your Business – First Month Free
            </Button>
          </Link>
        </div>

      </main>
    </>
  );
}