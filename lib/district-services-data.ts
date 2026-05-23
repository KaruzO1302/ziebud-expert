export type FaqItem = { q: string; a: string };

export type DistrictService = {
  districtSlug: string;
  serviceSlug: string;
  districtName: string;
  serviceName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: [string, string];
  zalety: string[];
  cta: string;
  faqs: FaqItem[];
  mainServiceSlug: string;
  mainServiceLabel: string;
  relatedLinks: { label: string; href: string }[];
  areaServed: string;
  serviceType: string;
  priceLow: number;
  priceHigh: number;
};

type DistrictConfig = {
  slug: string;
  name: string;
  locative: string;
  character: string;
  access: string;
  examples: string;
  risk: string;
};

type ServiceConfig = {
  slug: string;
  name: string;
  short: string;
  mainServiceSlug: string;
  mainServiceLabel: string;
  serviceType: string;
  intent: string;
  method: string;
  priceLow: number;
  priceHigh: number;
};

const districts: DistrictConfig[] = [
  {
    slug: "krzyki",
    name: "Krzyki",
    locative: "na Krzykach",
    character:
      "blokowiska, starsze osiedla Borek i Gaj oraz nowe budynki z gęstą zabudową",
    access:
      "ograniczone parkowanie, wąskie dojazdy pod klatki i konieczność sprawnego ustawienia auta serwisowego",
    examples: "Borek, Gaj, Huby, Partynice, Klecina i okolice Powstańców Śląskich",
    risk:
      "nawracające zatory w pionach, osady tłuszczowe w kuchniach i przeciążone poziomy piwniczne",
  },
  {
    slug: "fabryczna",
    name: "Fabryczna",
    locative: "na Fabrycznej",
    character:
      "Park Biznesu, magazyny, hale, obiekty B2B oraz duże parkingi i place manewrowe",
    access:
      "wjazdy serwisowe, gabaryty TIR, awizacje ochrony i praca tak, żeby nie zatrzymać logistyki",
    examples: "Strzegomska, Robotnicza, Legnicka, Muchobór, Nowy Dwór i okolice stref biznesowych",
    risk:
      "zapiaszczone odwodnienia, przeciążona deszczówka, separatory przy parkingach i awarie w obiektach firmowych",
  },
  {
    slug: "psie-pole",
    name: "Psie Pole",
    locative: "na Psim Polu",
    character:
      "domy jednorodzinne, działki, nowe osiedla, przyłącza, szamba i przydomowe oczyszczalnie",
    access:
      "dojazd przez drogi osiedlowe, praca przy ogrodzeniach, studniach, przyłączach i posesjach prywatnych",
    examples: "Zakrzów, Pawłowice, Sołtysowice, Karłowice, Lipa Piotrowska i okolice Krzywoustego",
    risk:
      "zatory w przyłączach, problemy po opadach, osad w przepompowniach i awarie na działkach bez kanalizacji miejskiej",
  },
  {
    slug: "srodmiescie",
    name: "Śródmieście",
    locative: "w Śródmieściu",
    character:
      "apartamenty nad Odrą, kamienice, lokale usługowe, biura i intensywna zabudowa przy uczelniach",
    access:
      "dyskretna praca, uzgodnienia z ochroną lub zarządcą oraz możliwość terminów weekendowych",
    examples: "Plac Grunwaldzki, Ołbin, Biskupin, okolice Odry, Sępolno i Nadodrze",
    risk:
      "stare piony, tłuszcz z lokali, trudny dostęp do piwnic i potrzeba szybkiej diagnozy bez rozkuwania",
  },
  {
    slug: "stare-miasto",
    name: "Stare Miasto",
    locative: "na Starym Mieście",
    character:
      "Rynek, kamienice, restauracje, hotele, deptaki i lokale z dużym obciążeniem kanalizacji",
    access:
      "brak pełnego dojazdu, prace pieszo z kompaktowym sprzętem i planowanie poza godzinami ciszy",
    examples: "Rynek, Świdnicka, Oławska, Kuźnicza, Kazimierza Wielkiego i Plac Solny",
    risk:
      "tłuszcz gastronomiczny, stare przyłącza, ograniczony dostęp i konieczność pracy bez utrudnień dla gości",
  },
];

const services: ServiceConfig[] = [
  {
    slug: "wuko",
    name: "WUKO",
    short: "WUKO",
    mainServiceSlug: "wuko-wroclaw",
    mainServiceLabel: "WUKO Wrocław — pełna oferta",
    serviceType: "Czyszczenie kanalizacji WUKO",
    intent: "czyszczenie ciśnieniowe kanalizacji, studni, wpustów i dłuższych poziomów",
    method:
      "dobieramy głowicę, ciśnienie i punkt wejścia, a po czyszczeniu sprawdzamy przepływ oraz ryzyko nawrotu",
    priceLow: 350,
    priceHigh: 1800,
  },
  {
    slug: "udraznianie-rur",
    name: "Udrażnianie rur",
    short: "Udrażnianie rur",
    mainServiceSlug: "udraznianie-rur",
    mainServiceLabel: "Udrażnianie rur Wrocław — pełna oferta",
    serviceType: "Udrażnianie rur i kanalizacji",
    intent: "usuwanie zatorów w odpływach, pionach, poziomach, studniach i przyłączach",
    method:
      "zaczynamy od objawów, a potem wybieramy spiralę, WUKO albo kamerę, jeśli zator wraca",
    priceLow: 250,
    priceHigh: 1100,
  },
  {
    slug: "inspekcja-tv",
    name: "Inspekcja TV",
    short: "Inspekcja TV",
    mainServiceSlug: "inspekcja-tv-kanalizacji",
    mainServiceLabel: "Inspekcja TV kanalizacji Wrocław — pełna oferta",
    serviceType: "Inspekcja TV kanalizacji",
    intent: "diagnostyka kamerą przy zatorach, pęknięciach, korzeniach, złych spadkach i odbiorach",
    method:
      "wprowadzamy kamerę od dostępnego punktu, zapisujemy obraz i wskazujemy miejsce problemu",
    priceLow: 400,
    priceHigh: 1000,
  },
  {
    slug: "pogotowie-kanalizacyjne",
    name: "Pogotowie kanalizacyjne",
    short: "Pogotowie",
    mainServiceSlug: "uslugi-kanalizacyjne",
    mainServiceLabel: "Usługi kanalizacyjne Wrocław — pełna oferta",
    serviceType: "Pogotowie kanalizacyjne",
    intent: "pilne awarie kanalizacji, cofki, wybicia ścieków, niedrożne piony i zalane studnie",
    method:
      "oddzwaniamy szybko, zbieramy objawy i wysyłamy ekipę ze sprzętem dopasowanym do awarii",
    priceLow: 300,
    priceHigh: 1600,
  },
  {
    slug: "separatory-tluszczu",
    name: "Separatory tłuszczu",
    short: "Separatory",
    mainServiceSlug: "separatory-tluszczu",
    mainServiceLabel: "Separatory tłuszczu Wrocław — pełna oferta",
    serviceType: "Serwis separatorów tłuszczu",
    intent: "czyszczenie, kontrola i serwis separatorów tłuszczu w gastronomii oraz kuchniach zbiorowych",
    method:
      "łączymy czyszczenie separatora z kontrolą dopływu, odpływu i odcinka za urządzeniem",
    priceLow: 450,
    priceHigh: 2200,
  },
  {
    slug: "serwis-przepompowni",
    name: "Serwis przepompowni",
    short: "Przepompownie",
    mainServiceSlug: "serwis-przepompowni",
    mainServiceLabel: "Serwis przepompowni Wrocław — pełna oferta",
    serviceType: "Serwis przepompowni ścieków",
    intent: "czyszczenie komór, kontrola pomp, pływaków, armatury, sterowania i odpływu tłocznego",
    method:
      "sprawdzamy osad, pracę pomp, automatykę, zawory i warunki bezpiecznego dostępu do komory",
    priceLow: 500,
    priceHigh: 2600,
  },
];

function titleFor(district: DistrictConfig, service: ServiceConfig) {
  return `${service.short} Wrocław ${district.name} — serwis 24h`;
}

function descriptionFor(district: DistrictConfig, service: ServiceConfig) {
  return `${service.name} Wrocław ${district.name}. ${service.intent}. Dojazd 30-60 min, ZIĘBUD Expert, tel. 602 481 688.`;
}

function h1For(district: DistrictConfig, service: ServiceConfig) {
  if (service.slug === "wuko") {
    return `WUKO Wrocław ${district.name} — czyszczenie ciśnieniowe 24h`;
  }

  return `${service.name} Wrocław ${district.name} — szybki serwis kanalizacji`;
}

function introFor(
  district: DistrictConfig,
  service: ServiceConfig,
): [string, string] {
  return [
    `${service.name} ${district.locative} wymaga dopasowania sprzętu do realiów miejsca. To teren, gdzie dominują ${district.character}. Dlatego już przy pierwszym telefonie pytamy o dostęp, typ budynku i objawy, a nie tylko o samą nazwę usługi.`,
    `W praktyce ${district.locative} najczęściej liczą się ${district.access}. Obsługujemy ${district.examples}. Przy tej usłudze skupiamy się na tym, żeby zamknąć problem technicznie, a nie tylko chwilowo przywrócić odpływ: ${service.method}.`,
  ];
}

function benefitsFor(district: DistrictConfig, service: ServiceConfig) {
  return [
    `znajomość lokalnej zabudowy: ${district.character}`,
    `dobór metody pod objawy: ${service.intent}`,
    `organizacja dojazdu z uwzględnieniem: ${district.access}`,
    "kontakt telefoniczny przed przyjazdem i jasne potwierdzenie zakresu",
    "faktura VAT oraz krótka informacja po wykonanej usłudze",
    `możliwość połączenia z usługami: WUKO, udrażnianie, kamera, separatory lub przepompownie`,
  ];
}

function faqFor(district: DistrictConfig, service: ServiceConfig): FaqItem[] {
  return [
    {
      q: `Czy realizujecie ${service.name.toLowerCase()} ${district.locative}?`,
      a: `Tak. Obsługujemy ${district.name} oraz najbliższe osiedla: ${district.examples}. Przy zgłoszeniu od razu ustalamy dostęp, pilność i potrzebny sprzęt.`,
    },
    {
      q: `Jak szybko można umówić usługę ${district.locative}?`,
      a: "Przy pilnych zgłoszeniach celujemy w dojazd 30-60 minut, zależnie od ruchu, dostępu do obiektu i aktualnego obłożenia ekip.",
    },
    {
      q: `Co jest typowym problemem ${district.locative}?`,
      a: `Najczęściej widzimy tu: ${district.risk}. Dlatego sam opis objawów jest dla nas ważny już przed wyjazdem.`,
    },
    {
      q: `Czy ${service.name.toLowerCase()} można wykonać poza standardowymi godzinami?`,
      a: "Tak, przy awariach i obiektach komercyjnych ustalamy pracę wieczorem, rano albo w weekend, jeśli ogranicza to uciążliwość dla mieszkańców, gości lub pracowników.",
    },
    {
      q: "Czy po usłudze dostanę dokumentację?",
      a: "Tak. Wystawiamy fakturę VAT, a przy zleceniach dla zarządców, firm i wspólnot przekazujemy informację o zakresie prac oraz zaleceniach.",
    },
  ];
}

function relatedLinksFor(district: DistrictConfig, service: ServiceConfig) {
  return services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3)
    .map((item) => ({
      label: `${item.name} ${district.name}`,
      href: `/wroclaw/${district.slug}/${item.slug}`,
    }));
}

export const districtServices: DistrictService[] = districts.flatMap((district) =>
  services.map((service) => ({
    districtSlug: district.slug,
    serviceSlug: service.slug,
    districtName: district.name,
    serviceName: service.name,
    metaTitle: titleFor(district, service),
    metaDescription: descriptionFor(district, service),
    h1: h1For(district, service),
    intro: introFor(district, service),
    zalety: benefitsFor(district, service),
    cta: "Zadzwoń +48 602 481 688 — dojazd 30-60 min",
    faqs: faqFor(district, service),
    mainServiceSlug: service.mainServiceSlug,
    mainServiceLabel: service.mainServiceLabel,
    relatedLinks: relatedLinksFor(district, service),
    areaServed: `Wrocław (${district.name})`,
    serviceType: service.serviceType,
    priceLow: service.priceLow,
    priceHigh: service.priceHigh,
  })),
);

export function getDistrictService(
  districtSlug: string,
  serviceSlug: string,
): DistrictService | undefined {
  return districtServices.find(
    (service) =>
      service.districtSlug === districtSlug && service.serviceSlug === serviceSlug,
  );
}
