import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Chatbot } from "@/components/site/chatbot";
import { MobileStickyCta } from "@/components/site/mobile-sticky-cta";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
  jsonLdScript,
} from "@/lib/jsonld";
import { ORG_NAME, ORG_SHORT_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ZIĘBUD Expert Wrocław — WUKO, pogotowie kanalizacyjne i inspekcja TV",
    template: "%s | ZIEBUD Expert",
  },
  description:
    "ZIĘBUD Expert obsługuje Wrocław i Dolny Śląsk: WUKO, czyszczenie kanalizacji, udrażnianie rur, inspekcja TV, separatory i serwis przepompowni.",
  applicationName: ORG_SHORT_NAME,
  authors: [{ name: ORG_NAME }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: ORG_SHORT_NAME,
    title: "ZIĘBUD Expert Wrocław — WUKO, pogotowie kanalizacyjne i inspekcja TV",
    description:
      "WUKO, czyszczenie kanalizacji, udrażnianie rur, inspekcja TV, separatory i serwis przepompowni dla Wrocławia oraz Dolnego Śląska.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ZIĘBUD Expert Wrocław — WUKO i serwis kanalizacji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZIĘBUD Expert Wrocław — WUKO i pogotowie kanalizacyjne",
    description:
      "WUKO, udrażnianie rur, inspekcja TV, separatory i serwis przepompowni dla Wrocławia i okolic.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "_x6oqCy5gdJslLfaWrPWVJn5WrvUmoj4c2c3vvdig9I",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      data-scroll-behavior="smooth"
      className={cn(
        "h-full antialiased",
        inter.variable,
        spaceGrotesk.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationSchema)}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(websiteSchema)}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(localBusinessSchema)}
        />
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyCta />
        <Chatbot />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
