export const SITE_URL = "https://pogotowie-kanalizacyjne-wroclaw.com";
export const SITE_NAME =
  "ZIĘBUD Expert — Pogotowie Kanalizacyjne Wrocław 24/7";
export const ORG_NAME = "ZIĘBUD Expert sp. z o.o.";
export const ORG_SHORT_NAME = "ZIĘBUD Expert";
export const ORG_ALTERNATE_NAMES = [
  "ZIĘBUD Expert",
  "ZIĘBUD",
  "Pogotowie Kanalizacyjne Wrocław",
  "WUKO Wrocław",
] as const;
export const FOUNDER_NAME = "Leszek Zięba";
export const FOUNDER_LINKEDIN_URL =
  "https://www.linkedin.com/in/leszekziebaglobal";
export const COMPANY_FOUNDING_DATE = "1991-01-01";
export const COMPANY_PHONE = "+48602481688";
export const COMPANY_PHONE_DISPLAY = "602 481 688";
export const COMPANY_EMAIL = "biuro@serwis-kanalizacji.com";
export const COMPANY_STREET_ADDRESS = "ul. Polna 2F";
export const COMPANY_POSTAL_CODE = "51-180";
export const COMPANY_LOCALITY = "Krzyżanowice";
export const COMPANY_REGION = "dolnośląskie";
export const COMPANY_COUNTRY_CODE = "PL";
export const COMPANY_ADDRESS = `${COMPANY_STREET_ADDRESS}, ${COMPANY_POSTAL_CODE} ${COMPANY_LOCALITY}`;
export const COMPANY_NIP = "9151833889";
export const COMPANY_VAT_ID = "PL9151833889";
export const COMPANY_KRS = "0001158935";
export const COMPANY_REGON = "541055479";

// GPS siedziby — ul. Polna 2F, 51-180 Krzyżanowice (gmina Wisznia Mała)
export const COMPANY_LATITUDE = 51.1776249;
export const COMPANY_LONGITUDE = 17.0484044;

// Promień obsługi w metrach (40 km od siedziby = pokrywa Wrocław + okoliczne powiaty)
export const COMPANY_SERVICE_RADIUS_METERS = 40000;

// Centrum obszaru obsługi (centrum Wrocławia, nie siedziby — bo Wrocław to główny obszar)
export const SERVICE_AREA_CENTER_LATITUDE = 51.1079;
export const SERVICE_AREA_CENTER_LONGITUDE = 17.0385;

export const COMPANY_PRICE_RANGE = "200 PLN - 2000 PLN";

export const COMPANY_AREAS_SERVED = [
  { "@type": "City", name: "Wrocław" },
  { "@type": "Place", name: "Krzyki" },
  { "@type": "Place", name: "Fabryczna" },
  { "@type": "Place", name: "Śródmieście" },
  { "@type": "Place", name: "Psie Pole" },
  { "@type": "Place", name: "Stare Miasto" },
  { "@type": "Place", name: "Nadodrze" },
  { "@type": "City", name: "Trzebnica" },
  { "@type": "City", name: "Oborniki Śląskie" },
  { "@type": "City", name: "Oleśnica" },
  { "@type": "City", name: "Oława" },
  { "@type": "City", name: "Środa Śląska" },
  { "@type": "City", name: "Kąty Wrocławskie" },
  { "@type": "City", name: "Siechnice" },
  { "@type": "City", name: "Długołęka" },
  { "@type": "City", name: "Sobótka" },
  { "@type": "City", name: "Jelcz-Laskowice" },
  { "@type": "City", name: "Brzeg Dolny" },
  { "@type": "City", name: "Kobierzyce" },
  { "@type": "City", name: "Czernica" },
  { "@type": "City", name: "Żórawina" },
  { "@type": "AdministrativeArea", name: "Dolny Śląsk" },
] as const;

export const COMPANY_SAME_AS_URLS: string[] = [
  "https://ziebud-expert.pl",
  "https://pogotowie-kanalizacyjne-wroclaw.com",
  "https://www.wuko-wroclaw.pl",
  "https://serwis-kanalizacji.com",
  "https://wodociagi-kanalizacja.com",
];

// Dane do schema aggregateRating
export const COMPANY_RATING = {
  value: 4.9,
  count: 200, // TODO: zweryfikować realną liczbę opinii w Google My Business
  best: 5,
  worst: 1,
} as const;

// Statyczne opinie z homepage (do schema review)
export const COMPANY_FEATURED_REVIEWS = [
  {
    author: "Marek Kowalski",
    rating: 5,
    text: "Pan Leszek przyjechał w 30 minut. Udrożnił kanalizację szybko i profesjonalnie. Cena zgodna z wcześniejszą wyceną — zero niespodzianek. Polecam każdemu!",
  },
  {
    author: "Anna Nowak",
    rating: 5,
    text: "Awaria w sobotę wieczorem — myślałam, że nikt nie przyjedzie. ZIĘBUD był na miejscu w 40 min. Cena uczciwa, faktura od ręki. Polecam w ciemno!",
  },
  {
    author: "Tomasz Wiśniewski",
    rating: 5,
    text: "Współpracujemy od 5 lat. Regularne czyszczenie separatorów dla całej wspólnoty. Zawsze terminowo, zawsze czysto. Solidna firma z prawdziwego zdarzenia.",
  },
] as const;

export const DEFAULT_TRANSFER_URL =
  process.env.NEXT_PUBLIC_TRANSFER_URL?.trim() || "";

export const LEAD_NOTIFICATION_EMAIL =
  process.env.LEAD_TO_EMAIL?.trim() || COMPANY_EMAIL;

export const LEAD_FROM_EMAIL =
  process.env.LEAD_FROM_EMAIL?.trim() || "lead@ziebud-expert.pl";

export const SUPABASE_REST_URL = process.env.SUPABASE_URL?.trim() || "";
export const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || "";
export const SUPABASE_LEADS_TABLE =
  process.env.SUPABASE_LEADS_TABLE?.trim() || "website_leads";

export const RESEND_API_KEY = process.env.RESEND_API_KEY?.trim() || "";
