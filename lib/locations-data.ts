type LocationStats = {
  label: string;
  value: string;
};

export type LocationPage = {
  slug: string;
  type: "voivodeship" | "city";
  name: string;
  areaLabel: string;
  title: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  intro: string[];
  localDrivers: string[];
  differentiators: string[];
  serviceSlugs: string[];
  caseStudySlugs: string[];
  articleSlugs: string[];
  stats: LocationStats[];
  faq: { q: string; a: string }[];
};

type VoivodeshipSeed = {
  slug: string;
  name: string;
  areaLabel: string;
  capital: string;
  marketFocus: string;
  challenge: string;
  differentiator: string;
  cities: string[];
  serviceSlugs: string[];
  caseStudySlugs: string[];
  articleSlugs: string[];
};

type CitySeed = {
  slug: string;
  name: string;
  areaLabel: string;
  voivodeshipSlug: string;
  marketFocus: string;
  challenge: string;
  differentiator: string;
  cityScale: string;
  serviceSlugs: string[];
  caseStudySlugs: string[];
  articleSlugs: string[];
};

const serviceLabels: Record<string, string> = {
  wodociagi: "sieci wodociągowe",
  "kanalizacja-sanitarna": "kanalizacja sanitarna",
  "kanalizacja-deszczowa": "kanalizacja deszczowa",
  retencja: "zbiorniki retencyjne",
  "przepompownie-sciekow": "przepompownie ścieków",
  "odwodnienie-wykopow": "odwodnienie wykopów",
  "hdd-przewiert-sterowany": "HDD",
  przeciski: "przeciski",
  "kraking-rur": "kraking rur",
  "cipp-renowacja": "CIPP",
  mikrotunelowanie: "mikrotunelowanie",
  cieplownictwo: "ciepłownictwo",
};

function listServices(slugs: string[]) {
  return slugs
    .slice(0, 4)
    .map((slug) => serviceLabels[slug] ?? slug)
    .join(", ");
}

function buildVoivodeshipPage(seed: VoivodeshipSeed): LocationPage {
  return {
    slug: seed.slug,
    type: "voivodeship",
    name: seed.name,
    areaLabel: seed.areaLabel,
    eyebrow: "Obsługa regionalna",
    title: `Sieci zewnętrzne ${seed.name} — wykonawca wod-kan i retencji`,
    metaTitle: `${seed.name} — sieci wodociągowe, kanalizacja i retencja`,
    metaDescription: `ZIĘBUD Expert realizuje ${listServices(seed.serviceSlugs)} ${seed.areaLabel}. Obsługa inwestycji dla gmin, deweloperów, przemysłu i ZWiK. ${seed.capital} i cały region.`,
    lead: `Prowadzimy inwestycje w zakresie sieci zewnętrznych ${seed.areaLabel}. Obsługujemy projekty dla samorządów, zakładów wodociągowych, deweloperów i przemysłu z naciskiem na sprawną analizę dokumentacji i mobilizację ekip na cały region.`,
    intro: [
      `Najczęściej obsługujemy ${seed.marketFocus}. Dzięki temu przygotowujemy ofertę pod realny zakres robót, a nie pod ogólnikowe założenia.`,
      `${seed.challenge} Dlatego już na etapie zapytania porządkujemy kolizje, logistykę i kolejność robót, żeby inwestor dostał ofertę możliwą do wykonania w praktyce.`,
      `${seed.differentiator} Działamy z jednego modelu: analiza dokumentacji, wycena, uzgodnienie harmonogramu i realizacja z czytelnym raportowaniem postępu.`,
    ],
    localDrivers: [
      `Obsługa projektów w miastach: ${seed.cities.join(", ")}.`,
      `Najczęstsze zakresy w regionie: ${listServices(seed.serviceSlugs)}.`,
      `Model współpracy pod przetargi publiczne, duże inwestycje prywatne i modernizacje istniejącej infrastruktury.`,
    ],
    differentiators: [
      "Jedno miejsce kontaktu od analizy dokumentacji po ofertę i etap realizacyjny.",
      "Komunikacja pod inwestora technicznego: zakres, terminy, ryzyka, kolizje i logistyka.",
      "Gotowość do wejścia w projekty rozproszone na terenie całego województwa.",
      "Treści i oferta ustawione pod sieci zewnętrzne, a nie ogólną budowlankę.",
    ],
    serviceSlugs: seed.serviceSlugs,
    caseStudySlugs: seed.caseStudySlugs,
    articleSlugs: seed.articleSlugs,
    stats: [
      { label: "Stolica regionu", value: seed.capital },
      { label: "Obsługa", value: "całe województwo" },
      { label: "Priorytet", value: "B2B + sektor publiczny" },
    ],
    faq: [
      {
        q: `Czy realizujecie inwestycje ${seed.areaLabel}?`,
        a: `Tak. Prowadzimy projekty ${seed.areaLabel}, zarówno dla dużych miast wojewódzkich, jak i dla mniejszych gmin oraz inwestycji rozproszonych.`,
      },
      {
        q: `Jak wygląda start współpracy ${seed.areaLabel}?`,
        a: "Najpierw analizujemy dokumentację, lokalizację inwestycji, etap projektu i oczekiwany termin. Na tej podstawie przygotowujemy zakres robót, pytania techniczne i ofertę.",
      },
      {
        q: `Czy przygotowujecie ofertę do przetargów publicznych?`,
        a: "Tak. Obsługujemy zapytania z dokumentacją SWZ/PZP, pomagamy uporządkować zakres robót i wskazujemy elementy, które mogą wpływać na koszt, terminy i ryzyka wykonawcze.",
      },
    ],
  };
}

function buildCityPage(seed: CitySeed, voivodeship: VoivodeshipSeed): LocationPage {
  return {
    slug: seed.slug,
    type: "city",
    name: seed.name,
    areaLabel: seed.areaLabel,
    eyebrow: "Obsługa lokalna",
    title: `${seed.name} — sieci wodociągowe, kanalizacja i retencja`,
    metaTitle: `${seed.name} — wykonawca sieci wod-kan i retencji`,
    metaDescription: `Budujemy ${listServices(seed.serviceSlugs)} ${seed.areaLabel}. Obsługa inwestycji dla deweloperów, gmin, przemysłu i zarządców infrastruktury w regionie ${voivodeship.name}.`,
    lead: `Obsługujemy inwestycje ${seed.areaLabel} w zakresie sieci wodociągowych, kanalizacji sanitarnej i deszczowej, retencji oraz infrastruktury towarzyszącej. Prowadzimy projekty dla inwestorów prywatnych, sektora publicznego i przemysłu.`,
    intro: [
      `${seed.marketFocus} To dlatego ofertę budujemy wokół realnych warunków terenowych i lokalnych ograniczeń wykonawczych, a nie wyłącznie na podstawie ogólnych kosztorysów.`,
      `${seed.challenge} W praktyce oznacza to większy nacisk na koordynację prac, bezpieczeństwo harmonogramu i właściwy dobór technologii.`,
      `${seed.differentiator} Dzięki temu inwestor dostaje wykonawcę skoncentrowanego na sieciach zewnętrznych, a nie firmę od wszystkiego.`,
    ],
    localDrivers: [
      `Skala rynku: ${seed.cityScale}.`,
      `Region zaplecza: ${voivodeship.name}.`,
      `Najczęściej obsługiwane zakresy: ${listServices(seed.serviceSlugs)}.`,
    ],
    differentiators: [
      "Jasny brief techniczny już na wejściu: etap projektu, zakres, termin i oczekiwane załączniki.",
      "Podejście pod inwestycje wielobranżowe, gdzie sieci zewnętrzne trzeba wpiąć w harmonogram całej budowy.",
      "Silne CTA pod dokumentację projektową, przetargi i duże zapytania ofertowe.",
      "Możliwość dalszego przekazania ciężkich paczek projektowych przez dedykowany transfer po wysłaniu briefu.",
    ],
    serviceSlugs: seed.serviceSlugs,
    caseStudySlugs: seed.caseStudySlugs,
    articleSlugs: seed.articleSlugs,
    stats: [
      { label: "Lokalizacja", value: seed.name },
      { label: "Region", value: voivodeship.name },
      { label: "Zakres", value: "sieci zewnętrzne" },
    ],
    faq: [
      {
        q: `Czy realizujecie inwestycje ${seed.areaLabel}?`,
        a: `Tak. Prowadzimy zapytania i realizacje ${seed.areaLabel}, a także w strefie podmiejskiej i dla inwestycji rozproszonych w całym województwie.`,
      },
      {
        q: `Jakie projekty obsługujecie najczęściej ${seed.areaLabel}?`,
        a: `${seed.marketFocus} Najczęściej są to projekty wymagające dobrej koordynacji między zakresem sieciowym, drogami, kolizjami i terminem wejścia wykonawcy.`,
      },
      {
        q: `Czy mogę przesłać projekt DWG lub komplet PDF do wyceny?`,
        a: "Tak. Najpierw wypełniasz formularz zapytania, a po jego wysłaniu dostajesz instrukcję przekazania większych paczek projektowych przez dedykowany transfer plików.",
      },
    ],
  };
}

const voivodeshipSeeds: VoivodeshipSeed[] = [
  {
    slug: "dolnoslaskie",
    name: "dolnośląskie",
    areaLabel: "w województwie dolnośląskim",
    capital: "Wrocław",
    marketFocus: "strefy przemysłowe, logistykę, inwestycje mieszkaniowe i rozbudowę układów drogowych wokół Wrocławia, Legnicy i Wałbrzycha",
    challenge: "W regionie często trzeba łączyć sieci zewnętrzne z gęstą infrastrukturą podziemną, dojazdami dla ciężkiego sprzętu i etapowaniem robót na terenach aktywnych biznesowo.",
    differentiator: "Dobrze czujemy projekty, w których wod-kan musi wejść równolegle z drogami, halami i odwodnieniem terenu.",
    cities: ["Wrocław", "Legnica", "Wałbrzych"],
    serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "retencja", "przepompownie-sciekow"],
    caseStudySlugs: ["siec-wodociagowa-strefa-logistyczna-wroclaw"],
    articleSlugs: ["dokumentacja-do-wyceny-sieci-zewnetrznych", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"],
  },
  {
    slug: "kujawsko-pomorskie",
    name: "kujawsko-pomorskie",
    areaLabel: "w województwie kujawsko-pomorskim",
    capital: "Bydgoszcz",
    marketFocus: "projekty komunalne, osiedla mieszkaniowe, parki handlowe i infrastrukturę odwodnieniową dla miast regionu",
    challenge: "Wiele inwestycji wymaga pogodzenia odwodnienia, retencji i kanalizacji deszczowej z istniejącą zabudową oraz pracą w aktywnych centrach miejskich.",
    differentiator: "Mocno spinamy w jednym zakresie kanalizację deszczową, retencję i sieci sanitarne.",
    cities: ["Bydgoszcz", "Toruń", "Grudziądz", "Inowrocław"],
    serviceSlugs: ["kanalizacja-deszczowa", "retencja", "kanalizacja-sanitarna", "wodociagi"],
    caseStudySlugs: ["retencja-park-handlowy-poznan"],
    articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "kanalizacja-sanitarna-cena-co-wplywa"],
  },
  {
    slug: "lubelskie",
    name: "lubelskie",
    areaLabel: "w województwie lubelskim",
    capital: "Lublin",
    marketFocus: "gminne rozbudowy sieci, inwestycje przemysłowe, nowe osiedla i odcinki kanalizacji sanitarnej oraz tłocznej",
    challenge: "Często liczy się sprawna mobilizacja na obszarach rozproszonych i dopasowanie zakresu do realiów inwestycji miejskich oraz podmiejskich.",
    differentiator: "Dobrze układamy projekty, w których trzeba połączyć tradycyjne sieci z przepompowniami i retencją.",
    cities: ["Lublin", "Zamość", "Chełm"],
    serviceSlugs: ["kanalizacja-sanitarna", "przepompownie-sciekow", "wodociagi", "retencja"],
    caseStudySlugs: ["kanalizacja-sanitarna-osiedle-mazowieckie"],
    articleSlugs: ["przepompownia-sciekow-kiedy-jest-potrzebna", "dokumentacja-do-wyceny-sieci-zewnetrznych"],
  },
  {
    slug: "lubuskie",
    name: "lubuskie",
    areaLabel: "w województwie lubuskim",
    capital: "Zielona Góra",
    marketFocus: "sieci dla przemysłu, terenów aktywności gospodarczej i inwestycji z dużym udziałem przecisków oraz robót na terenach o rozproszonej zabudowie",
    challenge: "W regionie trzeba dobrze planować logistykę ekip i materiałów, bo projekty często są rozproszone między miastami i strefami gospodarczymi.",
    differentiator: "Łączymy elastyczną mobilizację z koncentracją na sieciach zewnętrznych i robotach technologicznie wymagających.",
    cities: ["Zielona Góra", "Gorzów Wielkopolski"],
    serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "hdd-przewiert-sterowany", "przeciski"],
    caseStudySlugs: ["siec-wodociagowa-strefa-logistyczna-wroclaw"],
    articleSlugs: ["hdd-pod-droga-kiedy-sie-oplaca", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"],
  },
  {
    slug: "lodzkie",
    name: "łódzkie",
    areaLabel: "w województwie łódzkim",
    capital: "Łódź",
    marketFocus: "projekty deweloperskie, miejskie przebudowy sieci i inwestycje logistyczne w centralnej Polsce",
    challenge: "W centrum kraju wiele inwestycji jest prowadzonych pod presją czasu, a zakres sieciowy musi być dopasowany do harmonogramów generalnych wykonawców.",
    differentiator: "Dobrze pracujemy tam, gdzie liczy się szybka analiza dokumentacji i gotowość do wejścia na budowę w krótkim terminie.",
    cities: ["Łódź", "Piotrków Trybunalski", "Skierniewice"],
    serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "kanalizacja-deszczowa", "retencja"],
    caseStudySlugs: ["retencja-park-handlowy-poznan"],
    articleSlugs: ["kanalizacja-sanitarna-cena-co-wplywa", "dokumentacja-do-wyceny-sieci-zewnetrznych"],
  },
  {
    slug: "malopolskie",
    name: "małopolskie",
    areaLabel: "w województwie małopolskim",
    capital: "Kraków",
    marketFocus: "gęstą zabudowę miejską, inwestycje komercyjne, projekty wod-kan dla osiedli i obiektów przemysłowych",
    challenge: "W regionie często trzeba precyzyjnie planować kolizje, etapowanie i transport materiałów przy ograniczonej przestrzeni roboczej.",
    differentiator: "Sprawnie łączymy standardowe sieci z przepompowniami, retencją i technologiami bezwykopowymi tam, gdzie wykop jest ryzykowny.",
    cities: ["Kraków", "Tarnów", "Nowy Sącz"],
    serviceSlugs: ["kanalizacja-sanitarna", "wodociagi", "retencja", "hdd-przewiert-sterowany"],
    caseStudySlugs: ["przepompownia-sciekow-strefa-przemyslowa-rzeszow"],
    articleSlugs: ["przepompownia-sciekow-kiedy-jest-potrzebna", "hdd-pod-droga-kiedy-sie-oplaca"],
  },
  {
    slug: "mazowieckie",
    name: "mazowieckie",
    areaLabel: "w województwie mazowieckim",
    capital: "Warszawa",
    marketFocus: "duże inwestycje kubaturowe, osiedla mieszkaniowe, projekty publiczne i modernizacje sieci w otoczeniu istniejącej zabudowy",
    challenge: "Mazowsze oznacza zwykle dużą liczbę kolizji, wysokie oczekiwania formalne i mocno pilnowane harmonogramy inwestorskie.",
    differentiator: "Stawiamy na porządek w dokumentacji, jasny zakres oferty i gotowość do pracy dla inwestora prywatnego oraz sektora publicznego.",
    cities: ["Warszawa", "Płock", "Radom", "Siedlce", "Ostrołęka", "Ciechanów"],
    serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "kanalizacja-deszczowa", "przepompownie-sciekow"],
    caseStudySlugs: ["kanalizacja-sanitarna-osiedle-mazowieckie"],
    articleSlugs: ["dokumentacja-do-wyceny-sieci-zewnetrznych", "kanalizacja-sanitarna-cena-co-wplywa"],
  },
  {
    slug: "opolskie",
    name: "opolskie",
    areaLabel: "w województwie opolskim",
    capital: "Opole",
    marketFocus: "sieci dla przemysłu, inwestycje komunalne i rozbudowę układów wod-kan przy nowych obiektach produkcyjnych",
    challenge: "W regionie częste są projekty wymagające precyzyjnego spięcia sieci z ruchem zakładów i ograniczonym czasem postoju inwestycji.",
    differentiator: "Dobrze czujemy projekty infrastrukturalne, w których liczy się porządek organizacyjny i szybka decyzja wykonawcza.",
    cities: ["Opole"],
    serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "przepompownie-sciekow", "odwodnienie-wykopow"],
    caseStudySlugs: ["przepompownia-sciekow-strefa-przemyslowa-rzeszow"],
    articleSlugs: ["przepompownia-sciekow-kiedy-jest-potrzebna", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"],
  },
  {
    slug: "podkarpackie",
    name: "podkarpackie",
    areaLabel: "w województwie podkarpackim",
    capital: "Rzeszów",
    marketFocus: "projekty przemysłowe, lotniskowe, strefy aktywności gospodarczej i inwestycje osiedlowe z rozbudową kanalizacji sanitarnej",
    challenge: "Część projektów wymaga połączenia tradycyjnych sieci z przepompowniami, odwodnieniem i dobrą logistyką dojazdu na budowę.",
    differentiator: "Mocno łączymy zakres sanitarny z obiektami technologicznymi i terenami szybko rozwijających się inwestycji.",
    cities: ["Rzeszów", "Przemyśl", "Stalowa Wola"],
    serviceSlugs: ["kanalizacja-sanitarna", "przepompownie-sciekow", "wodociagi", "retencja"],
    caseStudySlugs: ["przepompownia-sciekow-strefa-przemyslowa-rzeszow"],
    articleSlugs: ["przepompownia-sciekow-kiedy-jest-potrzebna", "dokumentacja-do-wyceny-sieci-zewnetrznych"],
  },
  {
    slug: "podlaskie",
    name: "podlaskie",
    areaLabel: "w województwie podlaskim",
    capital: "Białystok",
    marketFocus: "gminne sieci wod-kan, inwestycje rozproszone i projekty wymagające sprawnej mobilizacji na większych odległościach",
    challenge: "Kluczowe jest tutaj dobre przygotowanie materiałowe i etapowanie prac, bo projekty są często prowadzone poza głównymi ośrodkami miejskimi.",
    differentiator: "Prowadzimy zapytania tak, żeby szybko odsiać ryzyka logistyczne i ustawić realny model realizacji.",
    cities: ["Białystok", "Suwałki", "Ełk"],
    serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "kanalizacja-deszczowa", "retencja"],
    caseStudySlugs: ["odwodnienie-wykopow-kolektor-gdansk"],
    articleSlugs: ["dokumentacja-do-wyceny-sieci-zewnetrznych", "zbiornik-retencyjny-na-dzialce-deweloperskiej"],
  },
  {
    slug: "pomorskie",
    name: "pomorskie",
    areaLabel: "w województwie pomorskim",
    capital: "Gdańsk",
    marketFocus: "rozbudowę sieci miejskich, odwodnienie, retencję, inwestycje portowe i projekty w gęstych układach drogowych",
    challenge: "W regionie szczególne znaczenie ma odprowadzenie wód opadowych, odporność układów na intensywne opady i praca w warunkach miejskich oraz nadmorskich.",
    differentiator: "Łączymy myślenie o kanalizacji deszczowej, retencji i bezpiecznym prowadzeniu robót w trudnym otoczeniu terenowym.",
    cities: ["Gdańsk", "Gdynia", "Słupsk"],
    serviceSlugs: ["kanalizacja-deszczowa", "retencja", "odwodnienie-wykopow", "wodociagi"],
    caseStudySlugs: ["odwodnienie-wykopow-kolektor-gdansk"],
    articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"],
  },
  {
    slug: "slaskie",
    name: "śląskie",
    areaLabel: "w województwie śląskim",
    capital: "Katowice",
    marketFocus: "projekty w gęstej zabudowie, modernizacje sieci, inwestycje przemysłowe i terenowe układy wod-kan dla dużych generalnych wykonawców",
    challenge: "Na Śląsku trzeba dobrze ogarniać kolizje, etapowanie i dobór technologii do ciasnych korytarzy infrastrukturalnych.",
    differentiator: "Mocną stroną jest łączenie klasycznych robót sieciowych z HDD, przeciskami i obiektami technologicznymi.",
    cities: ["Katowice", "Gliwice", "Częstochowa", "Bielsko-Biała", "Tychy", "Dąbrowa Górnicza"],
    serviceSlugs: ["kanalizacja-sanitarna", "wodociagi", "hdd-przewiert-sterowany", "przeciski"],
    caseStudySlugs: ["hdd-pod-droga-krajowa-katowice"],
    articleSlugs: ["hdd-pod-droga-kiedy-sie-oplaca", "kanalizacja-sanitarna-cena-co-wplywa"],
  },
  {
    slug: "swietokrzyskie",
    name: "świętokrzyskie",
    areaLabel: "w województwie świętokrzyskim",
    capital: "Kielce",
    marketFocus: "sieci dla osiedli, obiektów produkcyjnych, inwestycji samorządowych i modernizacje układów sanitarnych",
    challenge: "Często ważna jest elastyczna mobilizacja i dobry brief wejściowy, bo projekty są prowadzone równolegle w kilku mniejszych lokalizacjach.",
    differentiator: "Pracujemy czytelnie: projekt, zakres, pytania techniczne, wycena, decyzja i mobilizacja.",
    cities: ["Kielce"],
    serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "retencja", "przepompownie-sciekow"],
    caseStudySlugs: ["kanalizacja-sanitarna-osiedle-mazowieckie"],
    articleSlugs: ["wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie", "przepompownia-sciekow-kiedy-jest-potrzebna"],
  },
  {
    slug: "warminsko-mazurskie",
    name: "warmińsko-mazurskie",
    areaLabel: "w województwie warmińsko-mazurskim",
    capital: "Olsztyn",
    marketFocus: "gospodarkę wodno-ściekową dla gmin, projekty rozproszone, obiekty turystyczne i inwestycje wymagające dobrego zarządzania wodami opadowymi",
    challenge: "Region wymaga ostrożnego planowania retencji, odwodnienia i logistyki realizacji na większych odległościach między budowami.",
    differentiator: "Łączymy prace sieciowe z naciskiem na retencję, odwodnienie i obiekty wspierające.",
    cities: ["Olsztyn", "Elbląg", "Ełk"],
    serviceSlugs: ["kanalizacja-deszczowa", "retencja", "wodociagi", "przepompownie-sciekow"],
    caseStudySlugs: ["odwodnienie-wykopow-kolektor-gdansk"],
    articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "przepompownia-sciekow-kiedy-jest-potrzebna"],
  },
  {
    slug: "wielkopolskie",
    name: "wielkopolskie",
    areaLabel: "w województwie wielkopolskim",
    capital: "Poznań",
    marketFocus: "parki handlowe, logistykę, inwestycje magazynowe i miejskie projekty odwodnieniowe oraz sanitarne",
    challenge: "W regionie liczy się szybkie tempo przygotowania oferty i czytelne spięcie branży sanitarnej z harmonogramem generalnego wykonawcy.",
    differentiator: "Bardzo dobrze czujemy układy, w których wod-kan, retencja i odwodnienie muszą zadziałać jako jeden system.",
    cities: ["Poznań", "Kalisz", "Konin", "Leszno", "Piła"],
    serviceSlugs: ["kanalizacja-deszczowa", "retencja", "wodociagi", "kanalizacja-sanitarna"],
    caseStudySlugs: ["retencja-park-handlowy-poznan"],
    articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"],
  },
  {
    slug: "zachodniopomorskie",
    name: "zachodniopomorskie",
    areaLabel: "w województwie zachodniopomorskim",
    capital: "Szczecin",
    marketFocus: "projekty miejskie, odwodnieniowe, przemysłowe i wod-kan dla inwestycji w pasie nadmorskim oraz węzłach logistycznych",
    challenge: "Duże znaczenie ma tu odwodnienie, retencja i dobra organizacja prac w obszarach o zwiększonej wilgotności oraz wysokiej zmienności warunków terenowych.",
    differentiator: "Łączymy wiedzę wykonawczą z podejściem nastawionym na sprawne prowadzenie robót i czytelną komunikację z inwestorem.",
    cities: ["Szczecin", "Koszalin"],
    serviceSlugs: ["kanalizacja-deszczowa", "retencja", "wodociagi", "odwodnienie-wykopow"],
    caseStudySlugs: ["odwodnienie-wykopow-kolektor-gdansk"],
    articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "dokumentacja-do-wyceny-sieci-zewnetrznych"],
  },
];

const citySeeds: CitySeed[] = [
  { slug: "warszawa", name: "Warszawa", areaLabel: "w Warszawie", voivodeshipSlug: "mazowieckie", marketFocus: "Warszawa to rynek dużych inwestycji kubaturowych, modernizacji miejskich i projektów z wysoką liczbą kolizji branżowych.", challenge: "Kluczowe są harmonogram, formalności i bezpieczne prowadzenie robót w gęstym otoczeniu infrastruktury.", differentiator: "Dajemy inwestorowi jeden punkt kontaktu do analizy dokumentacji i oferty pod realny zakres sieci zewnętrznych.", cityScale: "duże inwestycje miejskie, deweloperskie i publiczne", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "kanalizacja-deszczowa", "przepompownie-sciekow"], caseStudySlugs: ["kanalizacja-sanitarna-osiedle-mazowieckie"], articleSlugs: ["dokumentacja-do-wyceny-sieci-zewnetrznych", "kanalizacja-sanitarna-cena-co-wplywa"] },
  { slug: "krakow", name: "Kraków", areaLabel: "w Krakowie", voivodeshipSlug: "malopolskie", marketFocus: "Kraków oznacza projekty wymagające dobrej koordynacji między istniejącą zabudową, ruchem i ograniczoną przestrzenią roboczą.", challenge: "W praktyce ważny jest dobór technologii, etapowanie i sprawna logistyka dostaw materiałów.", differentiator: "Mocno spinamy zakres sanitarny z retencją i technologiami bezwykopowymi tam, gdzie wykop generuje ryzyko.", cityScale: "inwestycje miejskie, usługowe i osiedlowe", serviceSlugs: ["kanalizacja-sanitarna", "wodociagi", "retencja", "hdd-przewiert-sterowany"], caseStudySlugs: ["przepompownia-sciekow-strefa-przemyslowa-rzeszow"], articleSlugs: ["hdd-pod-droga-kiedy-sie-oplaca", "przepompownia-sciekow-kiedy-jest-potrzebna"] },
  { slug: "lodz", name: "Łódź", areaLabel: "w Łodzi", voivodeshipSlug: "lodzkie", marketFocus: "Łódź to rynek inwestycji logistycznych, mieszkaniowych i modernizacji sieci w centralnej Polsce.", challenge: "Najczęściej trzeba szybko dopiąć wod-kan do harmonogramu generalnego wykonawcy i prac drogowych.", differentiator: "Dobrze wchodzimy tam, gdzie inwestor oczekuje konkretnej wyceny i sprawnej decyzji wykonawczej.", cityScale: "osiedla, magazyny i rozbudowy miejskie", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "kanalizacja-deszczowa", "retencja"], caseStudySlugs: ["retencja-park-handlowy-poznan"], articleSlugs: ["dokumentacja-do-wyceny-sieci-zewnetrznych", "kanalizacja-sanitarna-cena-co-wplywa"] },
  { slug: "wroclaw", name: "Wrocław", areaLabel: "we Wrocławiu", voivodeshipSlug: "dolnoslaskie", marketFocus: "Wrocław to inwestycje logistyczne, przemysłowe i deweloperskie, gdzie wod-kan często pracuje równolegle z drogami i uzbrojeniem terenu.", challenge: "Sporo projektów wymaga precyzyjnego ogarnięcia kolizji i etapowania robót na aktywnych placach budowy.", differentiator: "Mocno pracujemy na dokumentacji i harmonogramie wejścia, co pomaga dowieźć termin i zakres.", cityScale: "strefy aktywności gospodarczej i zabudowa miejska", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "retencja", "przepompownie-sciekow"], caseStudySlugs: ["siec-wodociagowa-strefa-logistyczna-wroclaw"], articleSlugs: ["wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie", "dokumentacja-do-wyceny-sieci-zewnetrznych"] },
  { slug: "poznan", name: "Poznań", areaLabel: "w Poznaniu", voivodeshipSlug: "wielkopolskie", marketFocus: "Poznań to silny rynek parków handlowych, hal i nowych osiedli, gdzie kluczowe są retencja i kanalizacja deszczowa.", challenge: "Często trzeba pogodzić oczekiwania inwestora z wymaganiami odwodnienia i zagospodarowania wód opadowych.", differentiator: "Dobrze prowadzimy projekty, gdzie deszczówka, retencja i sieci sanitarne muszą tworzyć jeden spójny układ.", cityScale: "logistyka, handel i mieszkaniówka", serviceSlugs: ["kanalizacja-deszczowa", "retencja", "wodociagi", "kanalizacja-sanitarna"], caseStudySlugs: ["retencja-park-handlowy-poznan"], articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"] },
  { slug: "gdansk", name: "Gdańsk", areaLabel: "w Gdańsku", voivodeshipSlug: "pomorskie", marketFocus: "Gdańsk to rynek inwestycji portowych, miejskich i odwodnieniowych z dużą presją na retencję oraz kanalizację deszczową.", challenge: "Na wejściu ważne są warunki wodne, odporność układów na intensywne opady i plan prowadzenia robót w otoczeniu infrastruktury miejskiej.", differentiator: "Mocną stroną jest łączenie odwodnienia, retencji i klasycznych sieci w jednym modelu realizacyjnym.", cityScale: "inwestycje miejskie, portowe i komercyjne", serviceSlugs: ["kanalizacja-deszczowa", "retencja", "odwodnienie-wykopow", "wodociagi"], caseStudySlugs: ["odwodnienie-wykopow-kolektor-gdansk"], articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "dokumentacja-do-wyceny-sieci-zewnetrznych"] },
  { slug: "gdynia", name: "Gdynia", areaLabel: "w Gdyni", voivodeshipSlug: "pomorskie", marketFocus: "Gdynia wymaga sprawnego łączenia sieci zewnętrznych z inwestycjami miejskimi, przemysłowymi i terenami o podwyższonych wymaganiach odwodnieniowych.", challenge: "W praktyce ważne są retencja, deszczówka i organizacja robót bez rozjeżdżania harmonogramu całej inwestycji.", differentiator: "Stawiamy na jasne rozpisanie ryzyk wykonawczych już na etapie oferty.", cityScale: "projekty miejskie i przemysłowe", serviceSlugs: ["kanalizacja-deszczowa", "retencja", "wodociagi", "odwodnienie-wykopow"], caseStudySlugs: ["odwodnienie-wykopow-kolektor-gdansk"], articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"] },
  { slug: "szczecin", name: "Szczecin", areaLabel: "w Szczecinie", voivodeshipSlug: "zachodniopomorskie", marketFocus: "Szczecin to inwestycje komunalne, przemysłowe i logistyczne, gdzie istotną rolę odgrywa odwodnienie oraz odporność układu na zmienne warunki terenowe.", challenge: "Wiele projektów wymaga dobrego przygotowania materiałowego i sprawnej mobilizacji na duże place robót.", differentiator: "Dobrze prowadzimy inwestycje, w których liczy się termin, porządek wykonawczy i czytelne raportowanie.", cityScale: "miasto regionalne z silnym przemysłem i logistyką", serviceSlugs: ["kanalizacja-deszczowa", "retencja", "wodociagi", "odwodnienie-wykopow"], caseStudySlugs: ["odwodnienie-wykopow-kolektor-gdansk"], articleSlugs: ["dokumentacja-do-wyceny-sieci-zewnetrznych", "zbiornik-retencyjny-na-dzialce-deweloperskiej"] },
  { slug: "bydgoszcz", name: "Bydgoszcz", areaLabel: "w Bydgoszczy", voivodeshipSlug: "kujawsko-pomorskie", marketFocus: "Bydgoszcz to projekty osiedlowe, drogowe i komunalne z dużym udziałem kanalizacji deszczowej oraz retencji.", challenge: "Kluczowe jest dobre spięcie kanalizacji sanitarnej, deszczówki i układów podczyszczania.", differentiator: "Łączymy podejście wykonawcze z ofertą czytelną dla inwestora technicznego i publicznego.", cityScale: "projekty komunalne i deweloperskie", serviceSlugs: ["kanalizacja-deszczowa", "kanalizacja-sanitarna", "retencja", "wodociagi"], caseStudySlugs: ["retencja-park-handlowy-poznan"], articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "kanalizacja-sanitarna-cena-co-wplywa"] },
  { slug: "torun", name: "Toruń", areaLabel: "w Toruniu", voivodeshipSlug: "kujawsko-pomorskie", marketFocus: "Toruń to inwestycje miejskie i osiedlowe, w których liczy się uporządkowanie zakresu sanitarnego oraz retencji.", challenge: "W praktyce trzeba dobrze rozpisać kolejność wejścia wykonawców i logistykę robót.", differentiator: "Skracamy czas wejścia w temat dzięki konkretnemu briefowi i szybkiemu rozbiciu zakresu.", cityScale: "budownictwo mieszkaniowe i miejskie", serviceSlugs: ["kanalizacja-sanitarna", "kanalizacja-deszczowa", "retencja", "wodociagi"], caseStudySlugs: ["retencja-park-handlowy-poznan"], articleSlugs: ["kanalizacja-sanitarna-cena-co-wplywa", "dokumentacja-do-wyceny-sieci-zewnetrznych"] },
  { slug: "lublin", name: "Lublin", areaLabel: "w Lublinie", voivodeshipSlug: "lubelskie", marketFocus: "Lublin to projekty miejskie, samorządowe i deweloperskie z naciskiem na kanalizację sanitarną, tłoczną i przepompownie.", challenge: "Często trzeba połączyć sieci klasyczne z obiektami technologicznymi oraz rozproszoną infrastrukturą.", differentiator: "Dajemy inwestorowi wykonawcę skupionego na sieciach zewnętrznych i analizie dokumentacji, a nie tylko na szybkim kosztorysie.", cityScale: "duże i średnie inwestycje sanitarne", serviceSlugs: ["kanalizacja-sanitarna", "przepompownie-sciekow", "wodociagi", "retencja"], caseStudySlugs: ["kanalizacja-sanitarna-osiedle-mazowieckie"], articleSlugs: ["przepompownia-sciekow-kiedy-jest-potrzebna", "dokumentacja-do-wyceny-sieci-zewnetrznych"] },
  { slug: "bialystok", name: "Białystok", areaLabel: "w Białymstoku", voivodeshipSlug: "podlaskie", marketFocus: "Białystok to rynek inwestycji komunalnych, osiedlowych i rozbudowy sieci wod-kan dla nowych terenów zabudowy.", challenge: "Ważne jest dobre przygotowanie logistyki i ocena kosztów dla inwestycji rozproszonych.", differentiator: "Pracujemy tak, żeby szybko ustawić realny model oferty i mobilizacji ekip.", cityScale: "projekty samorządowe i osiedlowe", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "kanalizacja-deszczowa", "retencja"], caseStudySlugs: ["odwodnienie-wykopow-kolektor-gdansk"], articleSlugs: ["dokumentacja-do-wyceny-sieci-zewnetrznych", "zbiornik-retencyjny-na-dzialce-deweloperskiej"] },
  { slug: "olsztyn", name: "Olsztyn", areaLabel: "w Olsztynie", voivodeshipSlug: "warminsko-mazurskie", marketFocus: "Olsztyn wymaga łączenia gospodarki wodno-ściekowej z retencją i odwodnieniem przy inwestycjach miejskich oraz turystycznych.", challenge: "Projekty często mają wrażliwy kontekst wodny, więc ważna jest dobra analiza warunków terenowych.", differentiator: "Łączymy doświadczenie sieciowe z myśleniem o retencji, podczyszczaniu i stabilnej eksploatacji układu.", cityScale: "projekty miejskie i rekreacyjne", serviceSlugs: ["kanalizacja-deszczowa", "retencja", "wodociagi", "przepompownie-sciekow"], caseStudySlugs: ["odwodnienie-wykopow-kolektor-gdansk"], articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "przepompownia-sciekow-kiedy-jest-potrzebna"] },
  { slug: "katowice", name: "Katowice", areaLabel: "w Katowicach", voivodeshipSlug: "slaskie", marketFocus: "Katowice to gęsty układ infrastrukturalny, inwestycje przemysłowe i miejskie oraz duża liczba projektów wymagających przecisków i HDD.", challenge: "W praktyce trzeba dobrze rozrysować kolizje, wybrać technologię i zabezpieczyć harmonogram prac.", differentiator: "Łączymy klasyczną budowę sieci z technologiami bezwykopowymi tam, gdzie to naprawdę ma sens wykonawczy.", cityScale: "gęsta zabudowa miejska i przemysłowa", serviceSlugs: ["kanalizacja-sanitarna", "wodociagi", "hdd-przewiert-sterowany", "przeciski"], caseStudySlugs: ["hdd-pod-droga-krajowa-katowice"], articleSlugs: ["hdd-pod-droga-kiedy-sie-oplaca", "kanalizacja-sanitarna-cena-co-wplywa"] },
  { slug: "gliwice", name: "Gliwice", areaLabel: "w Gliwicach", voivodeshipSlug: "slaskie", marketFocus: "Gliwice to przemysł, logistyka i inwestycje techniczne, w których wod-kan pracuje przy aktywnych zakładach i rozbudowie układów komunikacyjnych.", challenge: "Często liczy się ograniczenie przestojów i dobrze rozpisane etapy robót.", differentiator: "Mocną stroną jest praca na konkretach: zakres, ryzyka, kolizje i wykonawcza kolejność działań.", cityScale: "przemysł, magazyny i sieci techniczne", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "przeciski", "hdd-przewiert-sterowany"], caseStudySlugs: ["hdd-pod-droga-krajowa-katowice"], articleSlugs: ["hdd-pod-droga-kiedy-sie-oplaca", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"] },
  { slug: "czestochowa", name: "Częstochowa", areaLabel: "w Częstochowie", voivodeshipSlug: "slaskie", marketFocus: "Częstochowa to inwestycje miejskie, osiedlowe i przemysłowe z zapotrzebowaniem na klasyczne sieci oraz obiekty techniczne.", challenge: "Najczęściej trzeba spiąć roboty sanitarne z ruchem ulicznym i krótkimi terminami wykonania.", differentiator: "Zapewniamy prosty model współpracy: dokumentacja, pytania techniczne, wycena i wejście wykonawcze.", cityScale: "projekty miejskie i przemysłowe", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "kanalizacja-deszczowa", "przepompownie-sciekow"], caseStudySlugs: ["hdd-pod-droga-krajowa-katowice"], articleSlugs: ["kanalizacja-sanitarna-cena-co-wplywa", "dokumentacja-do-wyceny-sieci-zewnetrznych"] },
  { slug: "rzeszow", name: "Rzeszów", areaLabel: "w Rzeszowie", voivodeshipSlug: "podkarpackie", marketFocus: "Rzeszów to inwestycje przemysłowe, lotniskowe i osiedlowe, gdzie liczy się sprawna obsługa kanalizacji sanitarnej, tłocznej i przepompowni.", challenge: "W projektach często trzeba połączyć klasyczne sieci z obiektami technologicznymi i terenami szybko rozwijających się inwestycji.", differentiator: "Dobrze wchodzimy w projekty o dużej dynamice decyzji i wysokich wymaganiach organizacyjnych.", cityScale: "strefy przemysłowe i nowa zabudowa", serviceSlugs: ["kanalizacja-sanitarna", "przepompownie-sciekow", "wodociagi", "retencja"], caseStudySlugs: ["przepompownia-sciekow-strefa-przemyslowa-rzeszow"], articleSlugs: ["przepompownia-sciekow-kiedy-jest-potrzebna", "dokumentacja-do-wyceny-sieci-zewnetrznych"] },
  { slug: "kielce", name: "Kielce", areaLabel: "w Kielcach", voivodeshipSlug: "swietokrzyskie", marketFocus: "Kielce to projekty komunalne, przemysłowe i osiedlowe, gdzie wod-kan często wymaga prostego, szybkiego modelu decyzyjnego.", challenge: "Największą wartość daje czytelne spięcie zakresu, kosztu i mobilizacji wykonawcy.", differentiator: "Działamy konkretnie i bez rozwlekania: analiza, oferta, pytania techniczne i decyzja inwestora.", cityScale: "projekty regionalne i miejskie", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "retencja", "przepompownie-sciekow"], caseStudySlugs: ["kanalizacja-sanitarna-osiedle-mazowieckie"], articleSlugs: ["wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie", "przepompownia-sciekow-kiedy-jest-potrzebna"] },
  { slug: "opole", name: "Opole", areaLabel: "w Opolu", voivodeshipSlug: "opolskie", marketFocus: "Opole to inwestycje przemysłowe, komunalne i osiedlowe, w których liczy się dobra organizacja robót sanitarnych przy działających obiektach.", challenge: "Często kluczowe jest pogodzenie robót ziemnych, odwodnienia i montażu sieci z rytmem pracy zakładu lub miasta.", differentiator: "Mocną stroną jest porządek organizacyjny i wykonawczy konkret, który dobrze czyta inwestor techniczny.", cityScale: "projekty przemysłowe i komunalne", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "przepompownie-sciekow", "odwodnienie-wykopow"], caseStudySlugs: ["przepompownia-sciekow-strefa-przemyslowa-rzeszow"], articleSlugs: ["przepompownia-sciekow-kiedy-jest-potrzebna", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"] },
  { slug: "zielona-gora", name: "Zielona Góra", areaLabel: "w Zielonej Górze", voivodeshipSlug: "lubuskie", marketFocus: "Zielona Góra to inwestycje miejskie i gospodarcze, gdzie ważne są sieci wod-kan dla nowych terenów aktywności.", challenge: "W projektach liczy się mobilizacja i dobre rozpisanie logistyki w skali całego regionu.", differentiator: "Stawiamy na proste, techniczne prowadzenie zapytania i sprawną ofertę pod realny zakres.", cityScale: "projekty regionalne i przemysłowe", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "hdd-przewiert-sterowany", "przeciski"], caseStudySlugs: ["siec-wodociagowa-strefa-logistyczna-wroclaw"], articleSlugs: ["hdd-pod-droga-kiedy-sie-oplaca", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"] },
  { slug: "gorzow-wielkopolski", name: "Gorzów Wielkopolski", areaLabel: "w Gorzowie Wielkopolskim", voivodeshipSlug: "lubuskie", marketFocus: "Gorzów Wielkopolski to rynek inwestycji komunalnych, logistycznych i przemysłowych wymagających sprawnego wejścia wykonawczego.", challenge: "Kluczowe są czytelny zakres oferty i dobra organizacja robót na rozproszonych lokalizacjach.", differentiator: "Pomagamy inwestorowi uporządkować temat jeszcze przed startem robót terenowych.", cityScale: "projekty regionalne i miejskie", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "przeciski", "retencja"], caseStudySlugs: ["siec-wodociagowa-strefa-logistyczna-wroclaw"], articleSlugs: ["wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie", "dokumentacja-do-wyceny-sieci-zewnetrznych"] },
  { slug: "legnica", name: "Legnica", areaLabel: "w Legnicy", voivodeshipSlug: "dolnoslaskie", marketFocus: "Legnica to inwestycje przemysłowe, logistyczne i komunalne, w których wod-kan pracuje dla rozwoju terenów aktywności gospodarczej.", challenge: "W praktyce ważne jest dobre ustawienie harmonogramu i etapowania robót.", differentiator: "Dobrze działamy w projektach, gdzie potrzeba konkretnej wyceny i sprawnej decyzji wykonawczej.", cityScale: "strefy gospodarcze i inwestycje miejskie", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "retencja", "przepompownie-sciekow"], caseStudySlugs: ["siec-wodociagowa-strefa-logistyczna-wroclaw"], articleSlugs: ["dokumentacja-do-wyceny-sieci-zewnetrznych", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"] },
  { slug: "walbrzych", name: "Wałbrzych", areaLabel: "w Wałbrzychu", voivodeshipSlug: "dolnoslaskie", marketFocus: "Wałbrzych to sieci zewnętrzne dla przemysłu, zabudowy miejskiej i inwestycji wymagających dobrego przygotowania terenowego.", challenge: "Często trzeba połączyć odwodnienie, roboty ziemne i układy sanitarne w krótkim czasie wejścia.", differentiator: "Mocną stroną jest uporządkowana analiza projektu i szybka odpowiedź pod realny zakres robót.", cityScale: "projekty miejskie i przemysłowe", serviceSlugs: ["kanalizacja-sanitarna", "wodociagi", "odwodnienie-wykopow", "retencja"], caseStudySlugs: ["siec-wodociagowa-strefa-logistyczna-wroclaw"], articleSlugs: ["kanalizacja-sanitarna-cena-co-wplywa", "dokumentacja-do-wyceny-sieci-zewnetrznych"] },
  { slug: "kalisz", name: "Kalisz", areaLabel: "w Kaliszu", voivodeshipSlug: "wielkopolskie", marketFocus: "Kalisz to projekty osiedlowe, przemysłowe i komunalne z silnym udziałem sieci sanitarnych i deszczowych.", challenge: "Warto dobrze rozpisać retencję oraz kolejność prac przy ograniczonej przestrzeni i napiętych terminach.", differentiator: "Dajemy inwestorowi wykonawczy konkret i czytelne CTA pod dokumentację projektową.", cityScale: "projekty regionalne i osiedlowe", serviceSlugs: ["kanalizacja-deszczowa", "retencja", "kanalizacja-sanitarna", "wodociagi"], caseStudySlugs: ["retencja-park-handlowy-poznan"], articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "kanalizacja-sanitarna-cena-co-wplywa"] },
  { slug: "konin", name: "Konin", areaLabel: "w Koninie", voivodeshipSlug: "wielkopolskie", marketFocus: "Konin to rynek inwestycji przemysłowych i miejskich, gdzie ważna jest sprawna rozbudowa układów wod-kan.", challenge: "Często trzeba połączyć klasyczne sieci z retencją i elementami obiektowymi.", differentiator: "Mocną stroną jest porządek techniczny już od pierwszego briefu.", cityScale: "projekty miejskie i przemysłowe", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "retencja", "przepompownie-sciekow"], caseStudySlugs: ["retencja-park-handlowy-poznan"], articleSlugs: ["dokumentacja-do-wyceny-sieci-zewnetrznych", "przepompownia-sciekow-kiedy-jest-potrzebna"] },
  { slug: "leszno", name: "Leszno", areaLabel: "w Lesznie", voivodeshipSlug: "wielkopolskie", marketFocus: "Leszno to inwestycje osiedlowe, komunalne i przemysłowe wymagające czytelnej organizacji robót sanitarnych.", challenge: "Największą wartość daje szybkie uporządkowanie zakresu i terminu realizacji.", differentiator: "Pracujemy zwięźle i technicznie, co pomaga skrócić drogę od zapytania do decyzji.", cityScale: "projekty osiedlowe i regionalne", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "kanalizacja-deszczowa", "retencja"], caseStudySlugs: ["retencja-park-handlowy-poznan"], articleSlugs: ["wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie", "kanalizacja-sanitarna-cena-co-wplywa"] },
  { slug: "plock", name: "Płock", areaLabel: "w Płocku", voivodeshipSlug: "mazowieckie", marketFocus: "Płock to projekty przemysłowe, miejskie i modernizacyjne, gdzie wod-kan pracuje przy dużej odpowiedzialności technicznej.", challenge: "Ważna jest dokładna analiza dokumentacji i przygotowanie wykonawcze pod projekty o dużym znaczeniu operacyjnym.", differentiator: "Dobrze czujemy inwestycje techniczne, w których nie ma miejsca na przypadkowe decyzje ofertowe.", cityScale: "przemysł i modernizacje miejskie", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "przepompownie-sciekow", "odwodnienie-wykopow"], caseStudySlugs: ["kanalizacja-sanitarna-osiedle-mazowieckie"], articleSlugs: ["dokumentacja-do-wyceny-sieci-zewnetrznych", "przepompownia-sciekow-kiedy-jest-potrzebna"] },
  { slug: "radom", name: "Radom", areaLabel: "w Radomiu", voivodeshipSlug: "mazowieckie", marketFocus: "Radom to projekty miejskie, osiedlowe i przemysłowe z dużym zapotrzebowaniem na sprawną kanalizację sanitarną i deszczową.", challenge: "Często liczy się uporządkowanie etapów i dobra współpraca z inwestorem oraz projektantem.", differentiator: "Dajemy szybki, czytelny model wejścia w temat i rozpisania zakresu prac.", cityScale: "projekty publiczne i prywatne", serviceSlugs: ["kanalizacja-sanitarna", "kanalizacja-deszczowa", "wodociagi", "retencja"], caseStudySlugs: ["kanalizacja-sanitarna-osiedle-mazowieckie"], articleSlugs: ["kanalizacja-sanitarna-cena-co-wplywa", "dokumentacja-do-wyceny-sieci-zewnetrznych"] },
  { slug: "siedlce", name: "Siedlce", areaLabel: "w Siedlcach", voivodeshipSlug: "mazowieckie", marketFocus: "Siedlce to inwestycje regionalne, komunalne i przemysłowe, gdzie ważna jest mobilizacja na kilka równoległych tematów.", challenge: "Kluczowe jest dobre zaplanowanie logistyki, materiałów i etapowania robót.", differentiator: "Pomagamy inwestorowi przejść od ogólnego zapytania do konkretnej decyzji technicznej.", cityScale: "projekty regionalne i gminne", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "retencja", "przepompownie-sciekow"], caseStudySlugs: ["kanalizacja-sanitarna-osiedle-mazowieckie"], articleSlugs: ["wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie", "dokumentacja-do-wyceny-sieci-zewnetrznych"] },
  { slug: "ostroleka", name: "Ostrołęka", areaLabel: "w Ostrołęce", voivodeshipSlug: "mazowieckie", marketFocus: "Ostrołęka to projekty przemysłowe, energetyczne i komunalne, w których sieci zewnętrzne muszą być dobrze zsynchronizowane z resztą inwestycji.", challenge: "W praktyce liczy się dyscyplina organizacyjna i dobra ocena ryzyk wykonawczych.", differentiator: "Stawiamy na czytelny zakres, odpowiedzialność i wykonawczy konkret.", cityScale: "projekty techniczne i komunalne", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "przepompownie-sciekow", "odwodnienie-wykopow"], caseStudySlugs: ["kanalizacja-sanitarna-osiedle-mazowieckie"], articleSlugs: ["przepompownia-sciekow-kiedy-jest-potrzebna", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"] },
  { slug: "ciechanow", name: "Ciechanów", areaLabel: "w Ciechanowie", voivodeshipSlug: "mazowieckie", marketFocus: "Ciechanów to sieci zewnętrzne dla osiedli, gmin i zakładów lokalnych z naciskiem na sprawną organizację prac.", challenge: "Najważniejsze jest dobre uporządkowanie dokumentacji, zakresu i terminu wejścia wykonawcy.", differentiator: "Naszą przewagą jest szybkie przełożenie projektu na realny plan robót i oferty.", cityScale: "projekty lokalne i komunalne", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "kanalizacja-deszczowa", "retencja"], caseStudySlugs: ["kanalizacja-sanitarna-osiedle-mazowieckie"], articleSlugs: ["dokumentacja-do-wyceny-sieci-zewnetrznych", "kanalizacja-sanitarna-cena-co-wplywa"] },
  { slug: "piotrkow-trybunalski", name: "Piotrków Trybunalski", areaLabel: "w Piotrkowie Trybunalskim", voivodeshipSlug: "lodzkie", marketFocus: "Piotrków Trybunalski to inwestycje logistyczne i drogowe, gdzie wod-kan musi być dobrze zsynchronizowany z uzbrojeniem terenu.", challenge: "Kluczowe są czytelne punkty kolizyjne i przygotowanie zakresu pod generalnego wykonawcę.", differentiator: "Dobrze pracujemy w środowisku, w którym potrzebna jest krótka ścieżka decyzyjna i techniczny porządek.", cityScale: "logistyka i inwestycje regionalne", serviceSlugs: ["wodociagi", "kanalizacja-deszczowa", "kanalizacja-sanitarna", "retencja"], caseStudySlugs: ["retencja-park-handlowy-poznan"], articleSlugs: ["dokumentacja-do-wyceny-sieci-zewnetrznych", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"] },
  { slug: "skierniewice", name: "Skierniewice", areaLabel: "w Skierniewicach", voivodeshipSlug: "lodzkie", marketFocus: "Skierniewice to rynek osiedlowy i komunalny, w którym liczy się sprawne przygotowanie oferty oraz prosty model współpracy.", challenge: "Duże znaczenie ma właściwe rozpisanie zakresu sieci i retencji już na wejściu.", differentiator: "Działamy konkretnie i bez przeładowania formalnościami po stronie klienta.", cityScale: "projekty miejskie i osiedlowe", serviceSlugs: ["kanalizacja-sanitarna", "kanalizacja-deszczowa", "retencja", "wodociagi"], caseStudySlugs: ["retencja-park-handlowy-poznan"], articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "dokumentacja-do-wyceny-sieci-zewnetrznych"] },
  { slug: "tarnow", name: "Tarnów", areaLabel: "w Tarnowie", voivodeshipSlug: "malopolskie", marketFocus: "Tarnów to projekty przemysłowe, komunalne i osiedlowe, w których dobrze sprawdza się połączenie klasycznych sieci z obiektami technicznymi.", challenge: "Najczęściej trzeba dobrze rozdzielić odpowiedzialność i kolejność prac na placu budowy.", differentiator: "Pomagamy inwestorowi szybko domknąć zakres i zidentyfikować krytyczne ryzyka techniczne.", cityScale: "projekty regionalne i przemysłowe", serviceSlugs: ["kanalizacja-sanitarna", "wodociagi", "retencja", "przepompownie-sciekow"], caseStudySlugs: ["przepompownia-sciekow-strefa-przemyslowa-rzeszow"], articleSlugs: ["przepompownia-sciekow-kiedy-jest-potrzebna", "dokumentacja-do-wyceny-sieci-zewnetrznych"] },
  { slug: "nowy-sacz", name: "Nowy Sącz", areaLabel: "w Nowym Sączu", voivodeshipSlug: "malopolskie", marketFocus: "Nowy Sącz to inwestycje rozproszone, osiedlowe i komunalne, gdzie liczy się dobra organizacja terenowa i etapowanie robót.", challenge: "W praktyce ważna jest elastyczna mobilizacja oraz precyzyjne rozpisanie materiałów i terminów.", differentiator: "Stawiamy na wykonawczy konkret i sprawną ścieżkę od zapytania do decyzji.", cityScale: "projekty regionalne i komunalne", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "retencja", "odwodnienie-wykopow"], caseStudySlugs: ["przepompownia-sciekow-strefa-przemyslowa-rzeszow"], articleSlugs: ["dokumentacja-do-wyceny-sieci-zewnetrznych", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"] },
  { slug: "bielsko-biala", name: "Bielsko-Biała", areaLabel: "w Bielsku-Białej", voivodeshipSlug: "slaskie", marketFocus: "Bielsko-Biała to projekty przemysłowe, osiedlowe i drogowe z dużym znaczeniem odwodnienia i dobrej logistyki robót.", challenge: "Duże znaczenie ma dobór technologii i kontrola kolizji na wymagających odcinkach.", differentiator: "Łączymy budowę sieci zewnętrznych z organizacją prac tam, gdzie przestrzeń i czas są ograniczone.", cityScale: "projekty miejskie i przemysłowe", serviceSlugs: ["kanalizacja-deszczowa", "wodociagi", "kanalizacja-sanitarna", "hdd-przewiert-sterowany"], caseStudySlugs: ["hdd-pod-droga-krajowa-katowice"], articleSlugs: ["hdd-pod-droga-kiedy-sie-oplaca", "kanalizacja-sanitarna-cena-co-wplywa"] },
  { slug: "tychy", name: "Tychy", areaLabel: "w Tychach", voivodeshipSlug: "slaskie", marketFocus: "Tychy to projekty przemysłowe i osiedlowe, w których sieci zewnętrzne muszą być sprawnie wpięte w harmonogram całości budowy.", challenge: "Kluczowe są termin, dobry brief i porządek w dokumentacji wykonawczej.", differentiator: "Wyróżnia nas koncentracja na sieciach zewnętrznych i zrozumienie potrzeb inwestora przemysłowego.", cityScale: "przemysł i nowa zabudowa", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "przepompownie-sciekow", "retencja"], caseStudySlugs: ["hdd-pod-droga-krajowa-katowice"], articleSlugs: ["wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie", "przepompownia-sciekow-kiedy-jest-potrzebna"] },
  { slug: "dabrowa-gornicza", name: "Dąbrowa Górnicza", areaLabel: "w Dąbrowie Górniczej", voivodeshipSlug: "slaskie", marketFocus: "Dąbrowa Górnicza to inwestycje przemysłowe, magazynowe i infrastrukturalne z mocnym zapotrzebowaniem na wod-kan i odwodnienie.", challenge: "Projekty często są duże obszarowo i wymagają bardzo czytelnego podziału etapów prac.", differentiator: "Dobrze prowadzimy roboty, gdzie liczy się wykonawcza dyscyplina i precyzja oferty.", cityScale: "duże inwestycje techniczne i przemysłowe", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "odwodnienie-wykopow", "retencja"], caseStudySlugs: ["hdd-pod-droga-krajowa-katowice"], articleSlugs: ["kanalizacja-sanitarna-cena-co-wplywa", "dokumentacja-do-wyceny-sieci-zewnetrznych"] },
  { slug: "koszalin", name: "Koszalin", areaLabel: "w Koszalinie", voivodeshipSlug: "zachodniopomorskie", marketFocus: "Koszalin to inwestycje miejskie i regionalne, gdzie istotne są deszczówka, retencja i bezpieczna organizacja prac terenowych.", challenge: "Warunki regionu wymagają dobrego podejścia do odwodnienia i stabilności harmonogramu.", differentiator: "Łączymy praktykę wykonawczą z prostą, techniczną komunikacją z inwestorem.", cityScale: "projekty miejskie i nadmorskie", serviceSlugs: ["kanalizacja-deszczowa", "retencja", "odwodnienie-wykopow", "wodociagi"], caseStudySlugs: ["odwodnienie-wykopow-kolektor-gdansk"], articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "dokumentacja-do-wyceny-sieci-zewnetrznych"] },
  { slug: "slupsk", name: "Słupsk", areaLabel: "w Słupsku", voivodeshipSlug: "pomorskie", marketFocus: "Słupsk to projekty komunalne, osiedlowe i przemysłowe z dużym udziałem kanalizacji deszczowej i retencji.", challenge: "Największym tematem jest zwykle gospodarka wodami opadowymi oraz organizacja prac w warunkach zmiennej pogody.", differentiator: "Mamy doświadczenie w łączeniu retencji, deszczówki i klasycznych robót sieciowych.", cityScale: "projekty regionalne i komunalne", serviceSlugs: ["kanalizacja-deszczowa", "retencja", "wodociagi", "kanalizacja-sanitarna"], caseStudySlugs: ["odwodnienie-wykopow-kolektor-gdansk"], articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"] },
  { slug: "elblag", name: "Elbląg", areaLabel: "w Elblągu", voivodeshipSlug: "warminsko-mazurskie", marketFocus: "Elbląg to inwestycje miejskie i przemysłowe, w których ważne są odwodnienie, retencja i stabilna organizacja robót sieciowych.", challenge: "Najczęściej trzeba dobrze zaplanować kolejność prac i przygotować inwestora pod realne ryzyka terenowe.", differentiator: "Naszą przewagą jest czytelne wejście w temat i wykonawczy konkret już od pierwszej rozmowy.", cityScale: "projekty miejskie i techniczne", serviceSlugs: ["kanalizacja-deszczowa", "retencja", "wodociagi", "odwodnienie-wykopow"], caseStudySlugs: ["odwodnienie-wykopow-kolektor-gdansk"], articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "dokumentacja-do-wyceny-sieci-zewnetrznych"] },
  { slug: "suwalki", name: "Suwałki", areaLabel: "w Suwałkach", voivodeshipSlug: "podlaskie", marketFocus: "Suwałki to projekty rozproszone, miejskie i przemysłowe, gdzie duże znaczenie ma logistyka robót i dobra mobilizacja ekip.", challenge: "W praktyce ważne jest sprawne przygotowanie materiałowe i dobre rozpoznanie zakresu jeszcze przed wyceną.", differentiator: "Działamy tak, żeby skrócić drogę od wstępnego zapytania do realnej decyzji inwestora.", cityScale: "projekty regionalne i komunalne", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "retencja", "kanalizacja-deszczowa"], caseStudySlugs: ["odwodnienie-wykopow-kolektor-gdansk"], articleSlugs: ["dokumentacja-do-wyceny-sieci-zewnetrznych", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"] },
  { slug: "elk", name: "Ełk", areaLabel: "w Ełku", voivodeshipSlug: "warminsko-mazurskie", marketFocus: "Ełk to inwestycje regionalne, wod-kan i retencyjne dla zabudowy mieszkaniowej oraz obiektów usługowych.", challenge: "Kluczowe jest właściwe spięcie gospodarki wodami opadowymi z zakresem robót sanitarnych.", differentiator: "Dobrze pracujemy w projektach wymagających prostego, konkretnego procesu ofertowego.", cityScale: "projekty osiedlowe i regionalne", serviceSlugs: ["kanalizacja-deszczowa", "retencja", "wodociagi", "przepompownie-sciekow"], caseStudySlugs: ["odwodnienie-wykopow-kolektor-gdansk"], articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "przepompownia-sciekow-kiedy-jest-potrzebna"] },
  { slug: "zamosc", name: "Zamość", areaLabel: "w Zamościu", voivodeshipSlug: "lubelskie", marketFocus: "Zamość to projekty samorządowe, osiedlowe i przemysłowe, gdzie ważna jest sprawna analiza dokumentacji i etapowania prac.", challenge: "Inwestorzy oczekują czytelnej oferty i dobrej kontroli ryzyk przy rozproszonych zakresach.", differentiator: "Naszą mocną stroną jest wykonawczy konkret i praca na sieciach zewnętrznych od początku do końca.", cityScale: "projekty regionalne i komunalne", serviceSlugs: ["kanalizacja-sanitarna", "wodociagi", "retencja", "przepompownie-sciekow"], caseStudySlugs: ["kanalizacja-sanitarna-osiedle-mazowieckie"], articleSlugs: ["dokumentacja-do-wyceny-sieci-zewnetrznych", "przepompownia-sciekow-kiedy-jest-potrzebna"] },
  { slug: "chelm", name: "Chełm", areaLabel: "w Chełmie", voivodeshipSlug: "lubelskie", marketFocus: "Chełm to projekty miejskie i przemysłowe z naciskiem na kanalizację sanitarną, przepompownie i rozbudowę układów wod-kan.", challenge: "W praktyce liczy się prosty model wejścia w temat i szybkie domknięcie zakresu technicznego.", differentiator: "Dajemy inwestorowi konkretną ścieżkę: brief, dokumentacja, oferta i decyzja.", cityScale: "projekty regionalne i komunalne", serviceSlugs: ["kanalizacja-sanitarna", "przepompownie-sciekow", "wodociagi", "retencja"], caseStudySlugs: ["kanalizacja-sanitarna-osiedle-mazowieckie"], articleSlugs: ["przepompownia-sciekow-kiedy-jest-potrzebna", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"] },
  { slug: "przemysl", name: "Przemyśl", areaLabel: "w Przemyślu", voivodeshipSlug: "podkarpackie", marketFocus: "Przemyśl to projekty regionalne i komunalne, gdzie ważne jest połączenie sieci sanitarnych z retencją i obiektami technicznymi.", challenge: "Największą wartość daje dobra organizacja robót i klarowne rozpisanie odpowiedzialności wykonawczej.", differentiator: "Pracujemy tak, żeby inwestor szybko wiedział, co jest realne do wykonania i w jakim modelu.", cityScale: "projekty regionalne i miejskie", serviceSlugs: ["kanalizacja-sanitarna", "przepompownie-sciekow", "retencja", "wodociagi"], caseStudySlugs: ["przepompownia-sciekow-strefa-przemyslowa-rzeszow"], articleSlugs: ["przepompownia-sciekow-kiedy-jest-potrzebna", "dokumentacja-do-wyceny-sieci-zewnetrznych"] },
  { slug: "stalowa-wola", name: "Stalowa Wola", areaLabel: "w Stalowej Woli", voivodeshipSlug: "podkarpackie", marketFocus: "Stalowa Wola to inwestycje przemysłowe i infrastrukturalne, które wymagają dyscypliny wykonawczej i dobrego planowania wejścia w teren.", challenge: "Projekty często są związane z aktywnymi zakładami albo mocno technicznym otoczeniem inwestycji.", differentiator: "Dobrze radzimy sobie tam, gdzie liczy się odpowiedzialne podejście do zakresu, terminów i ryzyk.", cityScale: "inwestycje techniczne i przemysłowe", serviceSlugs: ["wodociagi", "kanalizacja-sanitarna", "przepompownie-sciekow", "odwodnienie-wykopow"], caseStudySlugs: ["przepompownia-sciekow-strefa-przemyslowa-rzeszow"], articleSlugs: ["wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie", "przepompownia-sciekow-kiedy-jest-potrzebna"] },
  { slug: "pila", name: "Piła", areaLabel: "w Pile", voivodeshipSlug: "wielkopolskie", marketFocus: "Piła to projekty komunalne, osiedlowe i regionalne, w których dobrze sprawdza się czytelna organizacja prac sanitarnych.", challenge: "Najczęściej trzeba dobrze rozpisać retencję, odwodnienie i logistykę wejścia wykonawcy.", differentiator: "Naszą przewagą jest prosty i techniczny sposób prowadzenia zapytania ofertowego.", cityScale: "projekty regionalne i miejskie", serviceSlugs: ["kanalizacja-deszczowa", "retencja", "wodociagi", "kanalizacja-sanitarna"], caseStudySlugs: ["retencja-park-handlowy-poznan"], articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "dokumentacja-do-wyceny-sieci-zewnetrznych"] },
  { slug: "inowroclaw", name: "Inowrocław", areaLabel: "w Inowrocławiu", voivodeshipSlug: "kujawsko-pomorskie", marketFocus: "Inowrocław to inwestycje miejskie i przemysłowe wymagające dobrej koordynacji kanalizacji sanitarnej, deszczowej i retencji.", challenge: "W praktyce ważne jest czytelne uporządkowanie zakresu jeszcze przed startem procedury ofertowej.", differentiator: "Pomagamy inwestorowi wejść w temat bez chaosu i bez rozwlekania decyzji.", cityScale: "projekty regionalne i komunalne", serviceSlugs: ["kanalizacja-sanitarna", "kanalizacja-deszczowa", "retencja", "wodociagi"], caseStudySlugs: ["retencja-park-handlowy-poznan"], articleSlugs: ["kanalizacja-sanitarna-cena-co-wplywa", "zbiornik-retencyjny-na-dzialce-deweloperskiej"] },
  { slug: "grudziadz", name: "Grudziądz", areaLabel: "w Grudziądzu", voivodeshipSlug: "kujawsko-pomorskie", marketFocus: "Grudziądz to projekty miejskie, osiedlowe i przemysłowe z naciskiem na odwodnienie, retencję i sieci sanitarne.", challenge: "Największą wartość daje dobre spięcie prac sanitarnych z drogami i etapowaniem robót.", differentiator: "Dajemy wykonawczy konkret i czytelną komunikację dla inwestora technicznego.", cityScale: "projekty miejskie i regionalne", serviceSlugs: ["kanalizacja-deszczowa", "retencja", "kanalizacja-sanitarna", "wodociagi"], caseStudySlugs: ["retencja-park-handlowy-poznan"], articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "kanalizacja-sanitarna-cena-co-wplywa"] },
];

export const voivodeshipPages = voivodeshipSeeds.map(buildVoivodeshipPage);

export const cityPages = citySeeds.map((seed) => {
  const voivodeship = voivodeshipSeeds.find((item) => item.slug === seed.voivodeshipSlug);
  if (!voivodeship) {
    throw new Error(`Missing voivodeship for city: ${seed.slug}`);
  }
  return buildCityPage(seed, voivodeship);
});

export function getVoivodeshipPage(slug: string) {
  return voivodeshipPages.find((page) => page.slug === slug);
}

export function getCityPage(slug: string) {
  return cityPages.find((page) => page.slug === slug);
}
