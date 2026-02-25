import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "West GA Leads",
  description: "Contractors and Realtors in West Georgia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
