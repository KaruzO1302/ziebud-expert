/** Konsolidacja portfela ZIĘBUD → awarie24h.pl (301). */
export const AWARIE24H = "https://awarie24h.pl";

type HostRedirect = {
  source: string;
  has: [{ type: "host"; value: string }];
  destination: string;
  permanent: true;
};

const POGOTOWIE_HOSTS = [
  "pogotowie-kanalizacyjne-wroclaw.com",
  "www.pogotowie-kanalizacyjne-wroclaw.com",
] as const;

const LEGACY_HOSTS = [
  "ziebud-expert.pl",
  "www.ziebud-expert.pl",
  "kanalizacja-wroclaw.pl",
  "www.kanalizacja-wroclaw.pl",
  "pogotowie-kanalizacyjne-wroclaw.pl",
  "www.pogotowie-kanalizacyjne-wroclaw.pl",
] as const;

const POGOTOWIE_PATH_MAP: { source: string; destination: string }[] = [
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
  pathMap: { source: string; destination: string }[]
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
    entries.push({
      source: "/:path*",
      has: [{ type: "host", value: host }],
      destination: `${AWARIE24H}/`,
      permanent: true,
    });
  }

  return entries;
}

/** Na początek tablicy redirects() — przejmuje ruch z domen satelitarnych. */
export function consolidationRedirects(): HostRedirect[] {
  return [
    ...hostPathAndCatchAll(POGOTOWIE_HOSTS, POGOTOWIE_PATH_MAP),
    ...hostPathAndCatchAll(LEGACY_HOSTS, POGOTOWIE_PATH_MAP),
  ];
}
