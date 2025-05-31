import type { Metadata } from "next";
import { Inter as GeistSans } from "next/font/google";
import { JetBrains_Mono as GeistMono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import TimeBadge from "@/components/ui/TimeBadge";

const geistSans = GeistSans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = GeistMono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "RunBoyRun.dev - Kod senin dilin, Platform senin sahnen",
  description: "RunBoyRun, yaratıcı geliştiriciler için yaşayan bir deneyim alanı.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <TimeBadge />
      </body>
    </html>
  );
}
