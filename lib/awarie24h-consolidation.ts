/** Konsolidacja satelitów ZIĘBUD — dwie żywe witryny: wuko-wroclaw.pl + awarie24h.pl */
export const AWARIE24H = "https://awarie24h.pl";
export const WUKO = "https://www.wuko-wroclaw.pl";

type HostRedirect = {
  source: string;
  has: [{ type: "host"; value: string }];
  destination: string;
  permanent: true;
};

const POGOTOWIE_HOSTS = [
  "pogotowie-kanalizacyjne-wroclaw.com",
  "www.pogotowie-kanalizacyjne-wroclaw.com",
  "ziebud-expert.pl",
  "www.ziebud-expert.pl",
  "pogotowie-kanalizacyjne-wroclaw.pl",
  "www.pogotowie-kanalizacyjne-wroclaw.pl",
] as const;

const KANALIZACJA_HOSTS = [
  "kanalizacja-wroclaw.pl",
  "www.kanalizacja-wroclaw.pl",
] as const;

/** Kanalizacja / WUKO → wuko-wroclaw.pl */
const WUKO_PATH_MAP: { source: string; destination: string }[] = [
  {
    source: "/uslugi/wuko-wroclaw",
    destination: `${WUKO}/uslugi/wuko-czyszczenie-cisnieniowe`,
  },
  {
    source: "/uslugi/czyszczenie-kanalizacji-wroclaw",
    destination: `${WUKO}/uslugi/udraznianie-rur-i-kanalizacji`,
  },
  {
    source: "/uslugi/udraznianie-rur",
    destination: `${WUKO}/uslugi/udraznianie-rur-i-kanalizacji`,
  },
  {
    source: "/uslugi/inspekcja-tv-kanalizacji",
    destination: `${WUKO}/uslugi/inspekcja-tv-kanalizacji`,
  },
  {
    source: "/uslugi/separatory-tluszczu",
    destination: `${WUKO}/uslugi/serwis-separatorow-tluszczu`,
  },
  {
    source: "/pogotowie-kanalizacyjne",
    destination: `${WUKO}/uslugi/pogotowie-kanalizacyjne-24h`,
  },
];

/** Awarie wod-kan → awarie24h.pl */
const AWARIE_PATH_MAP: { source: string; destination: string }[] = [
  {
    source: "/uslugi/wuko-wroclaw",
    destination: `${AWARIE24H}/uslugi-wuko-czyszczenie-kanalizacji/`,
  },
  {
    source: "/uslugi/czyszczenie-kanalizacji-wroclaw",
    destination: `${AWARIE24H}/udraznianie-rur-i-kanalizacji/`,
  },
  {
    source: "/uslugi/udraznianie-rur",
    destination: `${AWARIE24H}/udraznianie-rur-i-kanalizacji/`,
  },
  {
    source: "/uslugi/inspekcja-tv-kanalizacji",
    destination: `${AWARIE24H}/inspekcja-tv-kanalizacji/`,
  },
  {
    source: "/uslugi/separatory-tluszczu",
    destination: `${AWARIE24H}/czyszczenie-separatorow/`,
  },
  {
    source: "/uslugi/serwis-przepompowni",
    destination: `${AWARIE24H}/serwis-przepompowni-sciekow/`,
  },
  {
    source: "/pogotowie-kanalizacyjne",
    destination: `${AWARIE24H}/udraznianie-rur-i-kanalizacji/`,
  },
  {
    source: "/uslugi/naprawa-sieci-wodociagowych",
    destination: `${AWARIE24H}/pogotowie-wodociagowe/`,
  },
  {
    source: "/cennik",
    destination: `${AWARIE24H}/pogotowie-wodociagowe/`,
  },
  {
    source: "/kontakt",
    destination: `${AWARIE24H}/kontakt/`,
  },
];

function hostPathAndCatchAll(
  hosts: readonly string[],
  pathMap: { source: string; destination: string }[],
  catchAll: string
): HostRedirect[] {
  const entries: HostRedirect[] = [];

  for (const host of hosts) {
    for (const { source, destination } of pathMap) {
      entries.push({
        source,
        has: [{ type: "host", value: host }],
        destination,
        permanent: true,
      });
    }
    // Jawny "/" — Next.js nie zawsze matchuje root na "/:path*"
    entries.push({
      source: "/",
      has: [{ type: "host", value: host }],
      destination: catchAll,
      permanent: true,
    });
    entries.push({
      source: "/:path+",
      has: [{ type: "host", value: host }],
      destination: catchAll.endsWith("/")
        ? `${catchAll}:path*`
        : `${catchAll}/:path*`,
      permanent: true,
    });
  }

  return entries;
}

/** Na początek tablicy redirects() — satelity, nie wuko-wroclaw.pl. */
export function consolidationRedirects(): HostRedirect[] {
  return [
    ...hostPathAndCatchAll(KANALIZACJA_HOSTS, WUKO_PATH_MAP, `${WUKO}/`),
    ...hostPathAndCatchAll(POGOTOWIE_HOSTS, AWARIE_PATH_MAP, `${AWARIE24H}/`),
  ];
}
