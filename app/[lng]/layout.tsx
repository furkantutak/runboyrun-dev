import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import { ThemeProvider } from "next-themes";
import { useTranslation } from "../i18n";
import { i18n, Locale } from "../i18n-settings";
import "../globals.css";

export const metadata: Metadata = {
  title: "RunBoyRun.dev | Kod senin dilin. Platform senin sahnen.",
  description: "RunBoyRun, yaratıcı geliştiriciler için yaşayan bir deneyim alanı. AI ile insan yaratıcılığını birleştirerek geleceğin geliştirme deneyimini şekillendiriyoruz.",
  keywords: ["RunBoyRun", "development", "AI", "coding", "creative coding", "developer experience"],
  authors: [{ name: "Furkan" }],
  creator: "Furkan",
  publisher: "RunBoyRun.dev",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://runboyrun.dev",
    siteName: "RunBoyRun.dev",
    title: "RunBoyRun.dev | Kod senin dilin. Platform senin sahnen.",
    description: "RunBoyRun, yaratıcı geliştiriciler için yaşayan bir deneyim alanı.",
    images: [
      {
        url: "https://runboyrun.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "RunBoyRun.dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RunBoyRun.dev | Kod senin dilin. Platform senin sahnen.",
    description: "RunBoyRun, yaratıcı geliştiriciler için yaşayan bir deneyim alanı.",
    images: ["https://runboyrun.dev/og-image.png"],
  },
};

const namespaces = ["hero", "about", "tech", "useCases", "cta", "ecosystem", "journal", "manifesto"];

export default async function RootLayout({
  children,
  params: { lng }
}: {
  children: React.ReactNode;
  params: { lng: Locale };
}) {
  await useTranslation(lng, namespaces[0]);

  return (
    <html lang={lng} suppressHydrationWarning className={GeistSans.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 