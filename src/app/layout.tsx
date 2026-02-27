import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://wgaleads.com"),

  title: {
    default: "West GA Leads | Find Contractors in West Georgia",
    template: "%s | West GA Leads",
  },

  description:
    "Find trusted contractors and realtors in West Georgia including Carrollton, LaGrange, Newnan, Douglasville and Villa Rica. First month FREE for contractors.",

  keywords: [
    "West Georgia contractors",
    "Carrollton GA contractors",
    "Douglasville contractors",
    "LaGrange contractors",
    "Newnan GA contractors",
    "Villa Rica contractors",
    "West GA directory",
    "find contractors West Georgia",
    "local contractors Georgia"
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
    description:
      "Find trusted contractors in West Georgia",
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
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}