import type { Metadata } from "next";
import { Geist, Geist_Mono, Courier_Prime, VT323 } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import CursorTrail from "./CursorTrail";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Anika Thapar",
  description: "Anika Thapar's Personal Website!",
  icons: { icon: "/laptop.jpg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${courierPrime.variable} ${vt323.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-courier-prime">
        {children}
        <CursorTrail />
        <Analytics />
      </body>
    </html>
  );
}
