import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "La Petite Cake Shop | Continental Bakery in Harrow",
  description:
    "Handcrafted cakes, pastries & desserts in Harrow. Specialising in eggless cakes, wedding cakes, birthday cakes & continental pastries. Order online or visit us at 5 Station Road.",
  keywords:
    "bakery, cake shop, Harrow, eggless cakes, wedding cakes, birthday cakes, pastries, continental bakery",
  openGraph: {
    title: "La Petite Cake Shop | Continental Bakery",
    description: "Handcrafted cakes & pastries in the heart of Harrow",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-cream-50 text-chocolate-800 antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
