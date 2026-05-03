export const SITE_URL = "https://pogotowie-kanalizacyjne-wroclaw.com";
export const SITE_NAME = "pogotowie-kanalizacyjne-wroclaw.com";
export const ORG_NAME = "ZIEBUD Expert Sp. z o.o.";
export const ORG_SHORT_NAME = "ZIEBUD Expert";
export const FOUNDER_NAME = "Leszek Zięba";
export const FOUNDER_LINKEDIN_URL =
  "https://www.linkedin.com/in/leszekziebaglobal";
export const COMPANY_PHONE = "+48602481688";
export const COMPANY_PHONE_DISPLAY = "602 481 688";
export const COMPANY_EMAIL = "biuro@awarie24h.pl";
export const COMPANY_STREET_ADDRESS = "ul. Polna 2F";
export const COMPANY_POSTAL_CODE = "51-180";
export const COMPANY_LOCALITY = "Krzyżanowice";
export const COMPANY_COUNTRY_CODE = "PL";
export const COMPANY_ADDRESS = `${COMPANY_STREET_ADDRESS}, ${COMPANY_POSTAL_CODE} ${COMPANY_LOCALITY}`;
export const COMPANY_NIP = "9151833889";
export const COMPANY_VAT_ID = "PL9151833889";
export const COMPANY_KRS = "0001158935";
export const COMPANY_REGON = "541055479";
export const COMPANY_AREAS_SERVED = [
  { "@type": "City", name: "Wrocław" },
  { "@type": "Place", name: "Krzyki" },
  { "@type": "Place", name: "Fabryczna" },
  { "@type": "Place", name: "Śródmieście" },
  { "@type": "Place", name: "Psie Pole" },
  { "@type": "Place", name: "Stare Miasto" },
  { "@type": "Place", name: "Nadodrze" },
  { "@type": "AdministrativeArea", name: "Dolny Śląsk" },
] as const;
// TODO LESZEK: uzupełnij tu docelowe profile firmy, np. Google Business Profile i Facebook.
export const COMPANY_SAME_AS_URLS: string[] = [];

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
