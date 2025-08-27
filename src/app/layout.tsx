import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plasencia 160th Anniversary | Omnichannel Premium Campaign",
  description: "A Year-Long Omnichannel Campaign Celebrating Six Generations of Excellence",
  keywords: "Plasencia, cigars, anniversary, campaign, luxury, premium",
  authors: [{ name: "Plasencia Cigars" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
