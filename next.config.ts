import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536, 1920, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "media.istockphoto.com" },
      { protocol: "https", hostname: "stock.adobe.com" },
      { protocol: "https", hostname: "as1.ftcdn.net" },
      { protocol: "https", hostname: "as2.ftcdn.net" },
      { protocol: "https", hostname: "image.shutterstock.com" },
      { protocol: "https", hostname: "*.r2.cloudflarestorage.com" },
      { protocol: "https", hostname: "*.r2.dev" },
      { protocol: "https", hostname: "pogotowie-kanalizacyjne-wroclaw.com" },
      { protocol: "https", hostname: "www.pogotowie-kanalizacyjne-wroclaw.com" },
      { protocol: "https", hostname: "ziebud-expert.pl" },
      { protocol: "https", hostname: "cdn.ziebud-expert.pl" },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "ziebud-expert.vercel.app" }],
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/blog/cennik-orientacyjny-uslug",
        has: [{ type: "host", value: "ziebud-expert.pl" }],
        destination: "https://pogotowie-kanalizacyjne-wroclaw.com/cennik",
        permanent: true,
      },
      {
        source: "/blog/cennik-orientacyjny-uslug",
        has: [{ type: "host", value: "www.ziebud-expert.pl" }],
        destination: "https://pogotowie-kanalizacyjne-wroclaw.com/cennik",
        permanent: true,
      },
      {
        source: "/blog/firmy-kanalizacyjne--budowa-sieci",
        has: [{ type: "host", value: "ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/uslugi/uslugi-kanalizacyjne",
        permanent: true,
      },
      {
        source: "/blog/firmy-kanalizacyjne--budowa-sieci",
        has: [{ type: "host", value: "www.ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/uslugi/uslugi-kanalizacyjne",
        permanent: true,
      },
      {
        source: "/blog/ziebud--uslugi-wodnokanalizacyjne--cennik",
        has: [{ type: "host", value: "ziebud-expert.pl" }],
        destination: "https://pogotowie-kanalizacyjne-wroclaw.com/cennik",
        permanent: true,
      },
      {
        source: "/blog/ziebud--uslugi-wodnokanalizacyjne--cennik",
        has: [{ type: "host", value: "www.ziebud-expert.pl" }],
        destination: "https://pogotowie-kanalizacyjne-wroclaw.com/cennik",
        permanent: true,
      },
      {
        source: "/blog/udraznianie-rur-wroclaw--cennik-uslug-ziebud",
        has: [{ type: "host", value: "ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/uslugi/udraznianie-rur",
        permanent: true,
      },
      {
        source: "/blog/udraznianie-rur-wroclaw--cennik-uslug-ziebud",
        has: [{ type: "host", value: "www.ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/uslugi/udraznianie-rur",
        permanent: true,
      },
      {
        source: "/blog/separator-tluszczu-w-gastronomii--obowiazek",
        has: [{ type: "host", value: "ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/uslugi/separatory-tluszczu",
        permanent: true,
      },
      {
        source: "/blog/separator-tluszczu-w-gastronomii--obowiazek",
        has: [{ type: "host", value: "www.ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/uslugi/separatory-tluszczu",
        permanent: true,
      },
      {
        source: "/blog/pogotowie-kanalizacyjne-wroclaw",
        has: [{ type: "host", value: "ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/pogotowie-kanalizacyjne",
        permanent: true,
      },
      {
        source: "/blog/pogotowie-kanalizacyjne-wroclaw",
        has: [{ type: "host", value: "www.ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/pogotowie-kanalizacyjne",
        permanent: true,
      },
      {
        source: "/blog/inspekcja-kamera-kanalizacji-kiedy-warto-ja",
        has: [{ type: "host", value: "ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/uslugi/inspekcja-tv-kanalizacji",
        permanent: true,
      },
      {
        source: "/blog/inspekcja-kamera-kanalizacji-kiedy-warto-ja",
        has: [{ type: "host", value: "www.ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/uslugi/inspekcja-tv-kanalizacji",
        permanent: true,
      },
      {
        source: "/blog/czyszczenie-separatorow-tluszczu-serwis",
        has: [{ type: "host", value: "ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/uslugi/separatory-tluszczu",
        permanent: true,
      },
      {
        source: "/blog/czyszczenie-separatorow-tluszczu-serwis",
        has: [{ type: "host", value: "www.ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/uslugi/separatory-tluszczu",
        permanent: true,
      },
      {
        source: "/blog/konserwacja-i-naprawa-przepompowni-sciekow-",
        has: [{ type: "host", value: "ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/uslugi/serwis-przepompowni",
        permanent: true,
      },
      {
        source: "/blog/konserwacja-i-naprawa-przepompowni-sciekow-",
        has: [{ type: "host", value: "www.ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/uslugi/serwis-przepompowni",
        permanent: true,
      },
      {
        source: "/blog/wuko-czyszczenie-kanalizacji-kraking",
        has: [{ type: "host", value: "ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/uslugi/wuko-wroclaw",
        permanent: true,
      },
      {
        source: "/blog/wuko-czyszczenie-kanalizacji-kraking",
        has: [{ type: "host", value: "www.ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/uslugi/wuko-wroclaw",
        permanent: true,
      },
      {
        source: "/blog",
        has: [{ type: "host", value: "ziebud-expert.pl" }],
        destination: "https://pogotowie-kanalizacyjne-wroclaw.com/blog",
        permanent: true,
      },
      {
        source: "/blog",
        has: [{ type: "host", value: "www.ziebud-expert.pl" }],
        destination: "https://pogotowie-kanalizacyjne-wroclaw.com/blog",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        has: [{ type: "host", value: "ziebud-expert.pl" }],
        destination: "https://pogotowie-kanalizacyjne-wroclaw.com/blog/:slug*",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        has: [{ type: "host", value: "www.ziebud-expert.pl" }],
        destination: "https://pogotowie-kanalizacyjne-wroclaw.com/blog/:slug*",
        permanent: true,
      },
      {
        source: "/blog/index.html",
        has: [{ type: "host", value: "kanalizacja-wroclaw.pl" }],
        destination: "https://pogotowie-kanalizacyjne-wroclaw.com/blog",
        permanent: true,
      },
      {
        source: "/blog/index.html",
        has: [{ type: "host", value: "www.kanalizacja-wroclaw.pl" }],
        destination: "https://pogotowie-kanalizacyjne-wroclaw.com/blog",
        permanent: true,
      },
      {
        source: "/kanalizacja",
        has: [{ type: "host", value: "ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/pogotowie-kanalizacyjne",
        permanent: true,
      },
      {
        source: "/kanalizacja",
        has: [{ type: "host", value: "www.ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/pogotowie-kanalizacyjne",
        permanent: true,
      },
      {
        source: "/kanalizacja/:slug*",
        has: [{ type: "host", value: "ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/pogotowie-kanalizacyjne",
        permanent: true,
      },
      {
        source: "/kanalizacja/:slug*",
        has: [{ type: "host", value: "www.ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/pogotowie-kanalizacyjne",
        permanent: true,
      },
      {
        source: "/nasza-oferta",
        has: [{ type: "host", value: "ziebud-expert.pl" }],
        destination: "https://pogotowie-kanalizacyjne-wroclaw.com/uslugi",
        permanent: true,
      },
      {
        source: "/nasza-oferta",
        has: [{ type: "host", value: "www.ziebud-expert.pl" }],
        destination: "https://pogotowie-kanalizacyjne-wroclaw.com/uslugi",
        permanent: true,
      },
      {
        source: "/nasza-oferta/:slug*",
        has: [{ type: "host", value: "ziebud-expert.pl" }],
        destination: "https://pogotowie-kanalizacyjne-wroclaw.com/uslugi",
        permanent: true,
      },
      {
        source: "/nasza-oferta/:slug*",
        has: [{ type: "host", value: "www.ziebud-expert.pl" }],
        destination: "https://pogotowie-kanalizacyjne-wroclaw.com/uslugi",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ziebud-expert.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "pogotowie-kanalizacyjne-wroclaw.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.pogotowie-kanalizacyjne-wroclaw.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "kanalizacja-wroclaw.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kanalizacja-wroclaw.pl" }],
        destination:
          "https://pogotowie-kanalizacyjne-wroclaw.com/:path*",
        permanent: true,
      },
      {
        source: "/uslugi/kanalizacja",
        destination: "/uslugi/udraznianie-rur",
        permanent: true,
      },
      {
        source: "/wuko-wroclaw",
        destination: "/uslugi/wuko-wroclaw",
        permanent: true,
      },
      {
        source: "/pogotowie-kanalizacyjne-wroclaw",
        destination: "/pogotowie-kanalizacyjne",
        permanent: true,
      },
      {
        source: "/udraznianie-rur-wroclaw",
        destination: "/uslugi/udraznianie-rur",
        permanent: true,
      },
      {
        source: "/czyszczenie-kanalizacji-wroclaw",
        destination: "/uslugi/czyszczenie-kanalizacji-wroclaw",
        permanent: true,
      },
      {
        source: "/inspekcja-kanalizacji-kamera-wroclaw",
        destination: "/uslugi/inspekcja-tv-kanalizacji",
        permanent: true,
      },
      {
        source: "/czyszczenie-separatorow-wroclaw",
        destination: "/uslugi/separatory-tluszczu",
        permanent: true,
      },
      {
        source: "/frezowanie-kanalizacji-wroclaw",
        destination: "/uslugi/frezowanie-kanalizacji",
        permanent: true,
      },
      {
        source: "/czyszczenie-studzienek-wroclaw",
        destination: "/uslugi/czyszczenie-studzienek-wroclaw",
        permanent: true,
      },
      {
        source: "/czyszczenie-kanalizacji-deszczowej-wroclaw",
        destination: "/uslugi/czyszczenie-kanalizacji-deszczowej-wroclaw",
        permanent: true,
      },
      {
        source: "/usuwanie-zatorow-kanalizacyjnych-wroclaw",
        destination: "/uslugi/usuwanie-zatorow-kanalizacyjnych-wroclaw",
        permanent: true,
      },
      {
        source: "/wuko-krzyki",
        destination: "/wroclaw/krzyki/wuko",
        permanent: true,
      },
      {
        source: "/wuko-fabryczna",
        destination: "/wroclaw/fabryczna/wuko",
        permanent: true,
      },
      {
        source: "/wuko-psie-pole",
        destination: "/wroclaw/psie-pole/wuko",
        permanent: true,
      },
      {
        source: "/wuko-srodmiescie",
        destination: "/wroclaw/srodmiescie/wuko",
        permanent: true,
      },
      {
        source: "/wuko-stare-miasto",
        destination: "/wroclaw/stare-miasto/wuko",
        permanent: true,
      },
      {
        source: "/awarie-:slug",
        destination: "/pogotowie-kanalizacyjne",
        permanent: true,
      },
      {
        source: "/awaria-wody",
        destination: "/uslugi/naprawa-sieci-wodociagowych",
        permanent: true,
      },
      {
        source: "/kanalizacja/pogotowie-kanalizacyjne-wroclaw-247",
        destination: "/pogotowie-kanalizacyjne",
        permanent: true,
      },
      {
        source: "/kanalizacja/inspekcja-tv-kanalizacji",
        destination: "/uslugi/inspekcja-tv-kanalizacji",
        permanent: true,
      },
      {
        source: "/kanalizacja/przepychanie-rur-cennik-ziebud-expert-wuko",
        destination: "/cennik",
        permanent: true,
      },
      {
        source: "/nasza-oferta/awarie-wodkan",
        destination: "/pogotowie-kanalizacyjne",
        permanent: true,
      },
      {
        source: "/blog/awarie-hydrauliczne-wroclaw",
        destination: "/pogotowie-kanalizacyjne",
        permanent: true,
      },
      {
        source: "/pogotowie-kanalizacyjne-24h",
        destination: "/pogotowie-kanalizacyjne",
        permanent: true,
      },
      {
        source: "/dla-wspolnot-i-spoldzielni",
        destination: "/dla-wspolnot-i-firm",
        permanent: true,
      },
      {
        source: "/kalkulator",
        destination: "/cennik",
        permanent: true,
      },
      {
        source: "/uslugi/bezwykopowe",
        destination: "/uslugi/bezwykopowe-naprawy-kanalizacji",
        permanent: true,
      },
      // Naprawa 404 wykrytych w GSC (stare/sklejone URL-e w cache Google)
      {
        source: "/regulaminRegulamin",
        destination: "/regulamin",
        permanent: true,
      },
      {
        source: "/cookiesCookies",
        destination: "/cookies",
        permanent: true,
      },
      {
        source: "/blog/inspekcja-kamera-tv-kanalizacji-wroclaw",
        destination: "/blog/inspekcja-kamera-tv-kanalizacji-we-wroclawiu",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
