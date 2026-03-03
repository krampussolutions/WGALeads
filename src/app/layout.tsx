import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://wgaleads.com"),

  title: {
    default: "West GA Leads | Find Contractors in West Georgia",
    template: "%s | West GA Leads",
  },

  description:
    "Find trusted contractors and realtors in West Georgia. Browse local services, request quotes, or list your business for $10/month. First month FREE for contractors.",

  keywords: [
    "West Georgia contractors",
    "West GA contractors",
    "contractor directory",
    "local contractors",
    "roofing",
    "plumbing",
    "electrical",
    "HVAC",
    "landscaping",
    "concrete",
    "handyman",
    "West GA Leads",
  ],

  openGraph: {
    title: "West GA Leads",
    description:
      "Find trusted contractors and realtors in West Georgia. First month FREE for contractors.",
    url: "https://wgaleads.com",
    siteName: "West GA Leads",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "West GA Leads",
    description: "Find trusted contractors in West Georgia",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const PIXEL_ID = "1381934923685815";

  return (
    <html lang="en">
      <head>
        {/* Schema markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "West GA Leads",
              url: "https://wgaleads.com",
              areaServed: "West Georgia",
              description:
                "West GA Leads is a local contractor and realtor directory that helps homeowners find and contact local professionals.",
            }),
          }}
        />
      </head>

      <body>
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}