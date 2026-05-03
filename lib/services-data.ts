import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  Waves,
  Compass,
  Hammer,
  RefreshCw,
  Mountain,
  Flame,
  CloudRain,
  ArrowDownToLine,
  Container,
  Construction,
} from "lucide-react";

export type ServiceVariant = {
  name: string;
  desc: string;
  specs?: string;
};

export type CostRow = {
  scope: string;
  range: string;
  note?: string;
};

export type FaqItem = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  icon: LucideIcon;
  trenchless: boolean;
  overview: string[];
  variants: ServiceVariant[];
  whenToUse: string[];
  costs: CostRow[];
  costNote?: string;
  process: { title: string; desc: string }[];
  faqs: FaqItem[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "wodociagi",
    title: "Budowa i modernizacja sieci wodociągowych",
    eyebrow: "Sieci wod-kan",
    tagline:
      "Projekt, wykonawstwo i odbiory sieci wody pitnej. Materiały PE100, PVC, żeliwo sferoidalne — od przyłączy po magistrale.",
    metaTitle: "Budowa sieci wodociągowych — projekt, wykonanie, odbiory",
    metaDescription:
      "Kompleksowa budowa i modernizacja sieci wodociągowych. Materiały PE100, PVC, żeliwo sferoidalne. Przyłącza, rozbudowy, magistrale. Wycena online w 60 sekund.",
    keywords: [
      "budowa sieci wodociągowych",
      "wykonanie wodociągu",
      "przyłącze wodociągowe",
      "modernizacja wodociągu",
      "rury PE100",
      "magistrale wodociągowe",
    ],
    icon: Droplets,
    trenchless: false,
    overview: [
      "Budujemy, modernizujemy i renowujemy sieci wodociągowe dla zakładów wodociągowych, gmin, deweloperów i inwestorów prywatnych. Pracujemy w metodzie tradycyjnej (wykop otwarty) i bezwykopowej (HDD, kraking) — dobór zależy od warunków terenowych, rodzaju gruntu i koordynacji z istniejącą infrastrukturą.",
      "W zakresie kontraktu bierzemy odpowiedzialność za projekt, uzgodnienia z właścicielem sieci (ZWiK), pozwolenie na budowę, realizację, próby ciśnieniowe oraz odbiór techniczny. Dostarczamy dokumentację powykonawczą w standardzie GIS zgodnym z oczekiwaniami eksploatatora sieci.",
      "Dobieramy materiały pod parametry medium i obciążenia terenu: PE100 dla elastyczności i długości odcinków, PVC-U dla niższych kosztów przy mniejszych średnicach, żeliwo sferoidalne z wykładziną cementową dla magistral i przejść pod drogami wysokich klas.",
    ],
    variants: [
      {
        name: "Magistrale wodociągowe",
        desc: "Sieci rozdzielcze i tranzytowe zasilające miasta i osiedla.",
        specs: "DN200–DN800, PE100 lub żeliwo sferoidalne",
      },
      {
        name: "Sieci osiedlowe",
        desc: "Rozprowadzenie wody po zabudowie jedno- i wielorodzinnej.",
        specs: "DN80–DN150, PE100",
      },
      {
        name: "Przyłącza wodociągowe",
        desc: "Od sieci rozdzielczej do budynku, z wodomierzem i zasuwą.",
        specs: "DN25–DN63, PE",
      },
      {
        name: "Modernizacje i wymiany",
        desc: "Odnawiane starzejącej infrastruktury bez przerw w dostawie.",
        specs: "Kraking, CIPP, hybrydowo",
      },
    ],
    whenToUse: [
      "Nowe osiedla, strefy przemysłowe, inwestycje deweloperskie",
      "Rozbudowa miejskich sieci wodociągowych (ZWiK, MPWiK)",
      "Przyłącza wodne dla obiektów usługowych i produkcyjnych",
      "Modernizacja starzejącej się infrastruktury (rury żeliwne sprzed 1990)",
      "Poprawa parametrów hydraulicznych — podniesienie ciśnienia",
      "Przygotowanie projektu do przetargów publicznych (PZP, SWZ)",
    ],
    costs: [
      {
        scope: "Przyłącze wodne do budynku",
        range: "150–400 zł/mb",
        note: "Grunt miękki, bez kolizji z infrastrukturą podziemną",
      },
      {
        scope: "Sieć osiedlowa PE100 DN100",
        range: "280–550 zł/mb",
        note: "Z uwzględnieniem studni i zasuw",
      },
      {
        scope: "Magistrala DN300–DN500",
        range: "650–1400 zł/mb",
        note: "Żeliwo sferoidalne, z komorami",
      },
      {
        scope: "HDD pod drogą klasy GP",
        range: "900–1800 zł/mb",
        note: "Rura ochronna + medium",
      },
    ],
    costNote:
      "Ceny orientacyjne, brutto. Ostateczna wycena po analizie dokumentacji, warunków gruntowych i kolizji.",
    process: [
      {
        title: "Wizja i rozpoznanie",
        desc: "Weryfikacja warunków terenowych, kolizje z istniejącymi mediami, ustalenie punktów wpięcia.",
      },
      {
        title: "Projekt i uzgodnienia",
        desc: "Projekt budowlano-wykonawczy, ZUDP, uzgodnienia z ZWiK, pozwolenie na budowę.",
      },
      {
        title: "Budowa",
        desc: "Wykop lub bezwykopowo, układanie rur, spawanie doczołowe/zgrzewanie elektrooporowe, studnie.",
      },
      {
        title: "Próby i odbiór",
        desc: "Próba ciśnieniowa 1.5× ciśnienia roboczego, płukanie, dezynfekcja, badania bakteriologiczne, odbiór.",
      },
      {
        title: "Dokumentacja powykonawcza",
        desc: "Inwentaryzacja geodezyjna, powykonawka, przekazanie eksploatatorowi.",
      },
    ],
    faqs: [
      {
        q: "Ile trwa wykonanie przyłącza wodociągowego?",
        a: "Sam montaż to 1–3 dni dla typowego przyłącza do budynku jednorodzinnego. Cały proces z projektem, uzgodnieniami z ZWiK i pozwoleniem trwa zwykle 2–4 miesiące. Dla obiektów komercyjnych i większych inwestycji — 3–6 miesięcy.",
      },
      {
        q: "Jakie rury są najlepsze do wodociągu?",
        a: "Standardem w Polsce są rury PE100 (polietylen wysokiej gęstości) — trwałość 50+ lat, odporność na korozję, szybkie zgrzewanie doczołowe lub elektrooporowe. Dla magistral i przejść pod drogami wysokich klas stosujemy żeliwo sferoidalne z wykładziną cementową.",
      },
      {
        q: "Czy wykonujecie wodociągi metodą bezwykopową?",
        a: "Tak — stosujemy HDD (przewiert sterowany) pod drogami, rzekami i zabudową. Dla starych rur żeliwnych używamy krakingu z jednoczesnym upsize'em średnicy. To oszczędza 40–60% kosztów odtworzenia nawierzchni.",
      },
      {
        q: "Kto odbiera wykonaną sieć wodociągową?",
        a: "Odbioru dokonuje eksploatator sieci — zwykle ZWiK/MPWiK lub przedsiębiorstwo wodociągowe gminy. Wymagane są: próba ciśnieniowa, płukanie, dezynfekcja, badanie bakteriologiczne z Sanepidu oraz inwentaryzacja geodezyjna powykonawcza.",
      },
      {
        q: "Czy robicie też projekty wodociągów?",
        a: "Tak, oferujemy pełną obsługę projektową — projekt koncepcyjny, budowlany, wykonawczy, operat wodnoprawny, dokumentację przetargową. Współpracujemy z uprawnionymi projektantami branży sanitarnej.",
      },
    ],
    related: ["kanalizacja-sanitarna", "hdd-przewiert-sterowany", "kraking-rur"],
  },

  {
    slug: "kanalizacja-sanitarna",
    title: "Budowa kanalizacji sanitarnej",
    eyebrow: "Sieci zewnętrzne",
    tagline:
      "Kanalizacja sanitarna grawitacyjna i tłoczna. PVC-U, GRP, kamionka. Studnie rewizyjne, przepompownie, odbiory kamerowe CCTV.",
    metaTitle:
      "Budowa kanalizacji sanitarnej — grawitacyjna, tłoczna",
    metaDescription:
      "Budowa kanalizacji sanitarnej grawitacyjnej i tłocznej. Studnie, przepompownie, inspekcja CCTV. Realizacje w całej Polsce. Prześlij dokumentację do wyceny.",
    keywords: [
      "budowa kanalizacji sanitarnej",
      "kanalizacja sanitarna",
      "kanalizacja grawitacyjna",
      "kanalizacja tłoczna",
      "przyłącze kanalizacyjne",
      "studnia rewizyjna",
    ],
    icon: Waves,
    trenchless: false,
    overview: [
      "Realizujemy kanalizację sanitarną grawitacyjną i tłoczną w pełnym zakresie — od analizy dokumentacji, przez budowę, po odbiory z inspekcją kamerową CCTV. Studnie rewizyjne, przepompownie, przyłącza i kolektory zbiorcze.",
      "Dobieramy materiały pod profil pracy kanału: PVC-U dla sieci o typowych obciążeniach, GRP (żywica wzmocniona włóknem szklanym) dla dużych średnic i trudnych warunków, kamionka dla przemysłowych spływów agresywnych.",
      "Prowadzimy pełną obsługę formalną — operat wodnoprawny, decyzja o środowiskowych uwarunkowaniach, uzgodnienia z ZWiK i zarządcą drogi. Na zakończenie inwestycji dostarczamy inspekcję telewizyjną (CCTV) potwierdzającą jakość wykonania.",
    ],
    variants: [
      {
        name: "Kanalizacja sanitarna grawitacyjna",
        desc: "Klasyczna sieć rozdzielcza dla osiedli i obszarów zabudowanych.",
        specs: "DN200–DN400, PVC-U lub kamionka",
      },
      {
        name: "Kanalizacja tłoczna",
        desc: "Dla terenów płaskich lub oddalonych od grawitacji. Z przepompowniami.",
        specs: "DN63–DN200, PE100 SDR17",
      },
      {
        name: "Magistrale i kolektory",
        desc: "Kanalizacja zbiorcza dla całych aglomeracji — GRP lub żelbet.",
        specs: "DN600–DN2500, GRP/żelbet",
      },
    ],
    whenToUse: [
      "Nowe osiedla, galerie handlowe, obiekty produkcyjne",
      "Rozbudowa miejskich sieci kanalizacyjnych (ZWiK, MPWiK)",
      "Kanalizacja tłoczna z przepompownią dla terenów płaskich",
      "Inwestycje w strefach aktywności gospodarczej (SSE, WSE)",
      "Projekty z dofinansowaniem UE (programy wod-kan)",
    ],
    costs: [
      {
        scope: "Przyłącze kanalizacyjne do budynku",
        range: "200–450 zł/mb",
        note: "PVC DN160, z jedną studzienką",
      },
      {
        scope: "Sieć sanitarna PVC DN200",
        range: "350–700 zł/mb",
        note: "Grawitacja, ze studniami co 50 m",
      },
      {
        scope: "Kanalizacja tłoczna z przepompownią",
        range: "850–2000 zł/mb",
        note: "PE100 SDR17 + komplet pompowni",
      },
      {
        scope: "Kolektor GRP DN800",
        range: "1200–2800 zł/mb",
        note: "Metoda wykopowa, z komorami",
      },
    ],
    costNote:
      "Ceny orientacyjne netto. Kalkulacja indywidualna po analizie dokumentacji i warunków terenowych.",
    process: [
      {
        title: "Analiza i koncepcja",
        desc: "Badanie warunków gruntowo-wodnych, analiza spadków, dobór systemu (grawitacyjny/tłoczny).",
      },
      {
        title: "Projekt i decyzje",
        desc: "Projekt budowlany, operat wodnoprawny, DUŚ, uzgodnienia ZUDP, pozwolenie na budowę.",
      },
      {
        title: "Wykonawstwo",
        desc: "Wykop lub bezwykopowo, układanie rur ze spadkiem ≥0.5%, studzienki betonowe DN1000 lub PE.",
      },
      {
        title: "Próba i inspekcja TV",
        desc: "Próba szczelności, płukanie, inspekcja kamerowa CCTV, protokoły, dokumentacja.",
      },
      {
        title: "Odbiór i GIS",
        desc: "Odbiór techniczny z ZWiK, inwentaryzacja geodezyjna, wprowadzenie do systemu GIS eksploatatora.",
      },
    ],
    faqs: [
      {
        q: "Czy kanalizację można robić w gruntach wodonośnych?",
        a: "Tak, stosujemy odwodnienie igłofiltrowe lub otwarte oraz ścianki szczelne w wykopach. Dla trudnych gruntów korzystamy z metod bezwykopowych (HDD, mikrotunelowanie) — całkowicie eliminują problem napływu wody gruntowej.",
      },
      {
        q: "Jaka jest różnica między kanalizacją sanitarną a deszczową?",
        a: "Kanalizacja sanitarna odbiera ścieki bytowe z domów i obiektów — trafiają do oczyszczalni. Deszczowa odbiera wody opadowe — po podczyszczeniu trafiają do odbiornika (rzeka, zbiornik retencyjny, rozsączanie). W Polsce od 2018 r. obowiązuje rozdział kanalizacji dla nowych inwestycji.",
      },
      {
        q: "Co to jest inspekcja TV kanalizacji?",
        a: "Inspekcja kamerowa CCTV — specjalistyczny robot z kamerą sprawdza stan rur po wykonaniu. Dokumentujemy wszystkie odcinki, protokół trafia do teczki odbiorowej. Standard dla sieci odbieranych przez ZWiK.",
      },
      {
        q: "Czy można zrobić kanalizację bez pozwolenia?",
        a: "Przyłącza kanalizacyjne do 50 m długości zwykle wymagają tylko zgłoszenia. Sieci i kanalizacje zbiorcze — pozwolenie na budowę. Zawsze sprawdzamy lokalną interpretację urzędu przed rozpoczęciem projektu.",
      },
      {
        q: "Jaka gwarancja na wykonaną kanalizację?",
        a: "5 lat gwarancji na roboty budowlane. Dla rur i urządzeń — gwarancja producenta (PVC zwykle 50 lat, PE 50+, GRP 50+). Pełna gwarancja uwzględniana w umowie, zgodnie z KC.",
      },
    ],
    related: ["kanalizacja-deszczowa", "wodociagi", "retencja"],
  },

  {
    slug: "kanalizacja-deszczowa",
    title: "Budowa kanalizacji deszczowej i odwodnienia",
    eyebrow: "Sieci zewnętrzne",
    tagline:
      "Kanalizacja deszczowa, wpusty uliczne, studnie, separatory, systemy rozsączające. Odprowadzanie wód opadowych dla inwestycji drogowych, deweloperskich i przemysłowych.",
    metaTitle:
      "Budowa kanalizacji deszczowej — odwodnienie terenu",
    metaDescription:
      "Budowa kanalizacji deszczowej i systemów odprowadzania wód opadowych. Wpusty, separatory, studnie chłonne, rozsączanie. Realizacje w całej Polsce.",
    keywords: [
      "kanalizacja deszczowa",
      "odwodnienie terenu",
      "odprowadzanie wód opadowych",
      "wpusty uliczne",
      "separator ropopochodnych",
      "studnia chłonna",
      "rozsączanie",
    ],
    icon: CloudRain,
    trenchless: false,
    overview: [
      "Budujemy kanalizację deszczową odprowadzającą wody opadowe z dachów, dróg, parkingów i placów utwardzonych. Projektujemy i realizujemy kompletne systemy: od wpustów deszczowych przez kolektory zbiorcze po urządzenia podczyszczające i odbiorniki.",
      "Stosujemy rury PVC-U, PEHD karbowane i GRP — dobór materiału zależy od średnicy, obciążeń ruchowych i agresywności ścieków. Dla dróg i parkingów montujemy separatory substancji ropopochodnych klasy I i II zgodnie z PN-EN 858.",
      "Każda inwestycja wymaga analizy retencji — od 2018 r. nowe przepisy zobowiązują do zagospodarowania wód opadowych na terenie działki. Projektujemy systemy rozsączające, zbiorniki retencyjne i studnie chłonne jako integralną część kanalizacji deszczowej.",
    ],
    variants: [
      {
        name: "Kanalizacja deszczowa grawitacyjna",
        desc: "Kolektory odprowadzające wody opadowe do odbiornika. Standard dla osiedli i dróg.",
        specs: "DN200–DN1200, PVC lub PEHD karbowane",
      },
      {
        name: "Wpusty deszczowe uliczne",
        desc: "Wpusty krawężnikowe i jezdniowe z osadnikami. Klasa D400 dla ruchu drogowego.",
        specs: "Żeliwo sferoidalne, z kratką",
      },
      {
        name: "Separatory ropopochodnych",
        desc: "Podczyszczanie wód opadowych z parkingów i dróg. Wymagane przed odprowadzeniem do odbiornika.",
        specs: "Klasa I i II wg PN-EN 858",
      },
      {
        name: "Systemy rozsączające",
        desc: "Skrzynki rozsączające, studnie chłonne, drenaże — zagospodarowanie wód na terenie działki.",
        specs: "Geoplast, Wavin, Graf",
      },
    ],
    whenToUse: [
      "Nowe osiedla i inwestycje deweloperskie (obowiązek retencji)",
      "Drogi gminne, powiatowe i krajowe (odwodnienie jezdni)",
      "Parkingi, place logistyczne, centra handlowe",
      "Zakłady produkcyjne i strefy ekonomiczne",
      "Tereny po utwardzeniu wymagające zagospodarowania wód opadowych",
      "Projekty z wymaganiami wodnoprawnymi",
    ],
    costs: [
      {
        scope: "Kanalizacja deszczowa PVC DN200",
        range: "300–600 zł/mb",
        note: "Ze studniami co 50 m",
      },
      {
        scope: "Kanalizacja deszczowa DN400",
        range: "500–1000 zł/mb",
        note: "PEHD karbowane, drogi i parkingi",
      },
      {
        scope: "Wpust deszczowy uliczny",
        range: "1500–3000 zł/szt",
        note: "Z osadnikiem i przyłączem",
      },
      {
        scope: "Separator ropopochodnych",
        range: "8000–25000 zł/szt",
        note: "Klasa I lub II, z osadnikiem",
      },
    ],
    costNote:
      "Ceny orientacyjne netto. Kalkulacja indywidualna po analizie dokumentacji i warunków terenowych.",
    process: [
      {
        title: "Analiza retencji",
        desc: "Obliczenie natężenia deszczu, powierzchni zlewni, wymaganej retencji i przepustowości.",
      },
      {
        title: "Projekt i uzgodnienia",
        desc: "Projekt z profilem podłużnym, operat wodnoprawny, uzgodnienia z zarządcą drogi i ZWiK.",
      },
      {
        title: "Roboty ziemne i montaż",
        desc: "Wykopy, podsypki, układanie rur ze spadkiem, montaż wpustów, separatorów i studni.",
      },
      {
        title: "Próby i odbiór",
        desc: "Próba szczelności, inspekcja kamerowa, odbiór techniczny, inwentaryzacja geodezyjna.",
      },
    ],
    faqs: [
      {
        q: "Czym różni się kanalizacja deszczowa od sanitarnej?",
        a: "Kanalizacja deszczowa odprowadza wody opadowe (deszcz, śnieg) — po podczyszczeniu trafiają do rzeki, rowu lub systemu rozsączającego. Sanitarna odprowadza ścieki bytowe do oczyszczalni. W Polsce obowiązuje system rozdzielczy — dwie osobne sieci.",
      },
      {
        q: "Czy potrzebuję pozwolenia wodnoprawnego?",
        a: "Jeśli odprowadzasz wody opadowe do wód lub do ziemi, potrzebujesz pozwolenia wodnoprawnego od Wód Polskich. Dla małych inwestycji (do 600 m² uszczelnionej powierzchni) może wystarczyć zgłoszenie. Pomagamy w przygotowaniu operatu.",
      },
      {
        q: "Co to jest obowiązek retencji?",
        a: "Od 2018 r. nowe inwestycje muszą zagospodarować wody opadowe na terenie działki — nie wolno odprowadzać całości bezpośrednio do kanalizacji. Realizujemy zbiorniki retencyjne, skrzynki rozsączające i studnie chłonne spełniające te wymagania.",
      },
      {
        q: "Jak długo trwa budowa kanalizacji deszczowej?",
        a: "Dla typowego osiedla (500-1000 mb): 4-8 tygodni. Dla dużych inwestycji drogowych: 2-4 miesiące. Czas zależy od długości sieci, głębokości wykopów i warunków gruntowych.",
      },
    ],
    related: ["kanalizacja-sanitarna", "retencja", "odwodnienie-wykopow"],
  },

  {
    slug: "hdd-przewiert-sterowany",
    title: "HDD — przewiert sterowany horyzontalny",
    eyebrow: "Technologie bezwykopowe",
    tagline:
      "Przewierty sterowane pod drogami, rzekami, lasami i zabudową. Bez rozkopywania — z pełną kontrolą trasy w 3D. Średnice od DN50 do DN1000.",
    metaTitle: "HDD — przewiert sterowany | Wykonanie, cena, średnice",
    metaDescription:
      "Przewierty sterowane HDD pod drogami, rzekami, lasami. Średnice DN50-DN1000, długości do 1500 m. Dla wodociągów, kanalizacji, gazu, telekomunikacji.",
    keywords: [
      "HDD",
      "przewiert sterowany",
      "przewiert horyzontalny",
      "przewiert pod drogą",
      "przewiert pod rzeką",
      "wiercenie kierunkowe",
      "Horizontal Directional Drilling",
    ],
    icon: Compass,
    trenchless: true,
    overview: [
      "HDD (Horizontal Directional Drilling, przewiert sterowany) to technologia układania rurociągów bez wykopu w terenie otwartym. Wykorzystujemy wiertnicę, która drąży otwór pilotażowy, rozwierca go do docelowej średnicy, a następnie wciąga rurę produktową — całość z kontrolą trasy w 3D przez sondę nawigacyjną.",
      "To metoda pierwszego wyboru, gdy trzeba przejść pod przeszkodą terenową: drogą klasy S, A lub GP, rzeką, torem kolejowym, zabytkiem, obszarem chronionym. Eliminujemy wykopy, zakłócenia ruchu, koszty odtworzenia nawierzchni i wpływ na środowisko.",
      "Realizujemy przewierty od DN50 (przyłącza gazowe, telekomunikacja) do DN1000 (magistrale wodociągowe, kanalizacja tłoczna), długości od 20 m do 1500 m w jednym odcinku. Pracujemy wiertnicami o uciągu 5–80 ton, dobieramy pod warunki gruntowe.",
    ],
    variants: [
      {
        name: "Mini HDD",
        desc: "Przewierty do DN200, długości do 200 m — przyłącza, telekomunikacja.",
        specs: "Uciąg 5–15 ton, wiertła DN100-250",
      },
      {
        name: "Midi HDD",
        desc: "DN200–DN500, długości do 700 m — sieci osiedlowe, gazowe, wodne.",
        specs: "Uciąg 15–40 ton",
      },
      {
        name: "Maxi HDD",
        desc: "DN500–DN1000, długości do 1500 m — przejścia pod rzekami.",
        specs: "Uciąg 40–80 ton, z obiegiem płuczki",
      },
      {
        name: "HDD w gruntach trudnych",
        desc: "Przewierty w skale, gruntach zwięzłych — ze specjalistycznymi świdrami.",
        specs: "Z systemem Mud Motor lub Rotary Steering",
      },
    ],
    whenToUse: [
      "Przejście pod drogami klas S, A, GP, Z (z ZRiD)",
      "Przejście pod rzeką, ciekiem wodnym, zbiornikiem",
      "Pod torem kolejowym (wymaga uzgodnień z PKP PLK)",
      "Pod obszarami Natura 2000 i parkami krajobrazowymi",
      "Pod zabytkową zabudową lub miejskim deptakiem",
      "Gdy koszt wykopu + odtworzenia przewyższa koszt HDD",
    ],
    costs: [
      {
        scope: "HDD DN90 pod drogą klasy G",
        range: "350–750 zł/mb",
        note: "Długość do 80 m, grunt miękki",
      },
      {
        scope: "HDD DN160 pod drogą krajową",
        range: "700–1400 zł/mb",
        note: "Z ZRiD, rura ochronna",
      },
      {
        scope: "HDD DN400 pod rzeką",
        range: "1800–3500 zł/mb",
        note: "Długość 200–500 m",
      },
      {
        scope: "HDD DN800 magistrala",
        range: "2800–5500 zł/mb",
        note: "Wiertnica Maxi, płuczka",
      },
    ],
    costNote:
      "Cena zależy kluczowo od warunków gruntowych i długości. W gruntach skalistych — +30–80% do stawek podstawowych.",
    process: [
      {
        title: "Badania i projekt",
        desc: "Badania geotechniczne wzdłuż trasy, projekt z profilem 3D, obliczenia sił uciągu.",
      },
      {
        title: "Uzgodnienia i pozwolenia",
        desc: "ZRiD z zarządcą drogi, uzgodnienia z właścicielami sieci w obszarze przewiertu.",
      },
      {
        title: "Otwór pilotażowy",
        desc: "Wiertnica drąży otwór DN100–DN200 z nawigacją sondą. Kontrola głębokości co 3 m.",
      },
      {
        title: "Rozwiercenie i wciąganie rury",
        desc: "Rozwiercenie do docelowej średnicy + 30%, wciągnięcie rury produktowej z płuczką bentonitową.",
      },
      {
        title: "Próby i odbiór",
        desc: "Próba szczelności, pomiar ciśnień, dokumentacja powykonawcza z trajektorią GPS.",
      },
    ],
    faqs: [
      {
        q: "Jaka jest maksymalna długość przewiertu HDD?",
        a: "Standardowo do 1000 m w jednym odcinku, w wyjątkowych projektach (np. przejścia pod rzekami) do 1500 m. Dłuższe trasy realizuje się z punktami pośrednimi lub technologią microtunnel + HDD.",
      },
      {
        q: "Czy HDD zmieści się pod moim domem?",
        a: "Dla zabudowy mieszkaniowej zwykle prowadzimy przewiert na głębokości 2.5–4 m — bezpieczna odległość od fundamentów. Minimalna głębokość przykrycia to 1.5 m nad wierzchołkiem rury. Każdy projekt analizujemy indywidualnie.",
      },
      {
        q: "Co to jest płuczka bentonitowa?",
        a: "Mieszanka wody i bentonitu (glinki) używana w trakcie wiercenia. Chłodzi świder, stabilizuje ściany otworu i wynosi urobek. Po zakończeniu prac utylizowana zgodnie z przepisami — bentonit jest naturalnym minerałem.",
      },
      {
        q: "Ile trwa przewiert HDD 100 m?",
        a: "Mobilizacja sprzętu: 1 dzień. Otwór pilotażowy: 0.5–1 dzień. Rozwiercanie + wciąganie rury: 1 dzień. Łącznie 3–4 dni robocze dla typowego projektu. Dla dłuższych trasy lub trudnych gruntów — odpowiednio dłużej.",
      },
      {
        q: "Czy HDD nadaje się do rur stalowych?",
        a: "Tak — dla rur stalowych wodnych, gazowych wysokiego ciśnienia i ciepłowniczych preizolowanych. Wymaga większego uciągu wiertnicy i rozwiercenia z większym zapasem. Często z rurą ochronną PE dla ochrony korozyjnej.",
      },
    ],
    related: ["przeciski", "kraking-rur", "wodociagi"],
  },

  {
    slug: "przeciski",
    title: "Przeciski pod drogami i torami",
    eyebrow: "Technologie bezwykopowe",
    tagline:
      "Przeciski hydrauliczne i pneumatyczne pod drogami, torami i infrastrukturą. Rury stalowe osłonowe, PE, GRP. Bez rozkopywania nawierzchni.",
    metaTitle: "Przeciski pod drogami — hydrauliczne, pneumatyczne | Cena",
    metaDescription:
      "Przeciski pod drogami, torami kolejowymi i infrastrukturą. Metoda hydrauliczna i pneumatyczna. Rury osłonowe stalowe i PE. Wycena online.",
    keywords: [
      "przecisk pod drogą",
      "przecisk hydrauliczny",
      "przecisk pneumatyczny",
      "rura osłonowa",
      "przecisk pod torami",
      "bezwykopowe przejście pod drogą",
      "pipe ramming",
      "pipe jacking",
    ],
    icon: ArrowDownToLine,
    trenchless: true,
    overview: [
      "Przeciski to bezwykopowa metoda układania rur osłonowych i produktowych pod przeszkodami terenowymi — drogami, torami kolejowymi, nasypami, kanałami. W odróżnieniu od HDD, przecisk polega na wbijaniu lub wciskaniu rury stalowej lub PE bezpośrednio w grunt, bez wiercenia otworu pilotażowego.",
      "Stosujemy dwie metody: przecisk hydrauliczny (siłowniki wciskają rurę w grunt z komory startowej) i przecisk pneumatyczny (młot udarowy wbija rurę). Wybór zależy od średnicy, długości i warunków gruntowych. Dla krótkich przejść pod drogami gminnymi to najszybsza i najtańsza metoda bezwykopowa.",
      "Realizujemy przeciski od DN100 do DN800, długości od 5 m do 80 m w jednym odcinku. Po wciągnięciu rury osłonowej wprowadzamy rurę produktową (wodociąg, kanalizację, gaz, kable) i uszczelniamy przestrzeń pierścieniową. Wymagane minimum: dwa stanowiska wykopowe — komora startowa i odbiorcza.",
    ],
    variants: [
      {
        name: "Przecisk hydrauliczny",
        desc: "Rura wciskana siłownikami. Dla średnich i dużych średnic.",
        specs: "DN200–DN800, do 60 m, siła 50–300 ton",
      },
      {
        name: "Przecisk pneumatyczny (kret)",
        desc: "Młot udarowy wbija rurę. Szybki dla małych średnic.",
        specs: "DN100–DN300, do 30 m",
      },
      {
        name: "Przecisk z rurą osłonową",
        desc: "Stalowa rura osłonowa + rura produktowa PE wewnątrz.",
        specs: "Rura osłonowa DN200–DN600",
      },
      {
        name: "Przecisk pod torami PKP",
        desc: "Z uzgodnieniami PKP PLK, nadzór kolejowy, okno czasowe.",
        specs: "Zgodnie z wytycznymi Id-3 PKP PLK",
      },
    ],
    whenToUse: [
      "Krótkie przejścia pod drogami gminnymi i powiatowymi (5–30 m)",
      "Przejścia pod torami kolejowymi (wymagane uzgodnienie PKP PLK)",
      "Przejścia pod nasypami i wałami przeciwpowodziowymi",
      "Gdy HDD nie jest opłacalny (krótka trasa, prosty profil)",
      "Instalacja rur osłonowych dla kabli energetycznych i telekomunikacyjnych",
      "Przejścia pod kanałami i rowami melioracyjnymi",
    ],
    costs: [
      {
        scope: "Przecisk DN150 pod drogą gminną",
        range: "250–550 zł/mb",
        note: "Długość do 15 m, grunt miękki",
      },
      {
        scope: "Przecisk DN300 rura osłonowa stalowa",
        range: "500–1100 zł/mb",
        note: "Z komorą startową",
      },
      {
        scope: "Przecisk DN500 pod drogą krajową",
        range: "900–1800 zł/mb",
        note: "Z ZRiD, rura osłonowa + produktowa",
      },
      {
        scope: "Przecisk pod torem PKP",
        range: "1200–2500 zł/mb",
        note: "Z uzgodnieniami PKP, nadzór kolejowy",
      },
    ],
    costNote:
      "Cena zawiera komory start/meta, rurę osłonową i zasypkę. Rura produktowa wyceniana osobno.",
    process: [
      {
        title: "Rozpoznanie i projekt",
        desc: "Badanie gruntu na trasie, projekt z profilem, uzgodnienia z zarządcą drogi/toru.",
      },
      {
        title: "Komory wykopowe",
        desc: "Wykop komory startowej i odbiorczej z szalunkami, odwodnienie jeśli wymagane.",
      },
      {
        title: "Przecisk rury osłonowej",
        desc: "Wbijanie lub wciskanie rury stalowej. Kontrola kierunku i poziomu co 1 m.",
      },
      {
        title: "Rura produktowa",
        desc: "Wprowadzenie rury PE/PVC, uszczelnienie przestrzeni pierścieniowej, manszety.",
      },
      {
        title: "Odbiór i zasypka",
        desc: "Próba szczelności, inwentaryzacja geodezyjna, zasypka komór, odtworzenie terenu.",
      },
    ],
    faqs: [
      {
        q: "Czym różni się przecisk od HDD?",
        a: "HDD to wiercenie kierunkowe z nawigacją — otwór pilotażowy, rozwiercanie, wciąganie rury. Nadaje się do długich tras (do 1500 m) i zakrzywionych profili. Przecisk to proste wbijanie rury w grunt — tańszy i szybszy dla krótkich, prostoliniowych przejść (5-80 m).",
      },
      {
        q: "Jak długo trwa przecisk pod drogą?",
        a: "Dla typowego przejścia 10-20 m: 1 dzień na komory, 0.5-1 dzień na przecisk, 0.5 dnia na rurę produktową i zasypkę. Łącznie 2-3 dni. Dla przejść pod torami PKP — dłużej ze względu na okna czasowe i nadzór.",
      },
      {
        q: "Czy przecisk uszkodzi drogę?",
        a: "Nie — rura jest wciskana pod nawierzchnią, na głębokości min. 1.2 m od spodu jezdni. Komory startowe i odbiorcze są po obu stronach drogi, poza pasem jezdni. Nie ma wpływu na ruch drogowy.",
      },
      {
        q: "Do jakiej średnicy można robić przeciski?",
        a: "Standardowo DN100-DN800. Dla większych średnic (DN1000+) stosujemy mikrotunelowanie lub HDD Maxi. Przecisk pneumatyczny (kret) — do DN300. Przecisk hydrauliczny — do DN800.",
      },
      {
        q: "Czy potrzebne są pozwolenia na przecisk?",
        a: "Dla przejścia pod drogą — zgoda zarządcy drogi (ZRiD lub uzgodnienie). Pod torami PKP — uzgodnienie z PKP PLK, projekt techniczny, nadzór kolejowy. Przyłącza do 50 m zwykle na zgłoszenie. Sieci — pozwolenie na budowę.",
      },
    ],
    related: ["hdd-przewiert-sterowany", "kanalizacja", "wodociagi"],
  },

  {
    slug: "kraking-rur",
    title: "Kraking rur — wymiana bez wykopu",
    eyebrow: "Technologie bezwykopowe",
    tagline:
      "Wymiana starzejących się sieci z jednoczesnym zwiększeniem średnicy. Statyczny i pneumatyczny kraking. Bez rozkopywania, bez przerw w dostawie.",
    metaTitle: "Kraking rur — wymiana bezwykopowa | Cena, metody",
    metaDescription:
      "Kraking statyczny i pneumatyczny — wymiana starych rur wodociągowych, kanalizacyjnych, gazowych bez wykopu. Upsize średnicy, zero odtworzenia nawierzchni.",
    keywords: [
      "kraking rur",
      "kraking statyczny",
      "kraking pneumatyczny",
      "wymiana rur bez wykopu",
      "pipe bursting",
      "bezwykopowa wymiana",
    ],
    icon: Hammer,
    trenchless: true,
    overview: [
      "Kraking (pipe bursting) to metoda bezwykopowej wymiany istniejących rurociągów. Specjalna głowica, wciągana kablem lub wbijana pneumatycznie, rozbija starą rurę (żeliwo, PCV, azbestocement, beton) i jednocześnie wciąga w jej miejsce nową rurę PE100 lub PE-RT.",
      "To najszybszy sposób modernizacji zestarzałej infrastruktury wodnej, kanalizacyjnej i gazowej w miastach — bez rozkopywania chodników, ulic czy przydomowych ogrodów. Wystarczą dwa stanowiska wykopowe (start i meta) na długości nawet 200 m.",
      "Dodatkowa zaleta: możliwość upsize'u średnicy — wymiana DN100 na DN150 lub DN200. Zwiększamy przepustowość bez dokupywania działek pod nowe sieci. Używany w programach modernizacji ZWiK i programach unijnych wod-kan.",
    ],
    variants: [
      {
        name: "Kraking statyczny",
        desc: "Głowica wciągana siłownikami hydraulicznymi. Do rur żeliwnych, PCV, betonu.",
        specs: "DN80-DN600, długości do 200 m, uciąg 50-200 ton",
      },
      {
        name: "Kraking pneumatyczny",
        desc: "Głowica wbijana udarami pneumatycznymi. Szybszy dla miękkich rur.",
        specs: "DN50-DN300, PE/PCV/żeliwo szare",
      },
      {
        name: "Kraking z upsize'em",
        desc: "Zwiększenie średnicy w trakcie wymiany — np. DN100 → DN200.",
        specs: "Upsize do 200% średnicy wyjściowej",
      },
      {
        name: "Kraking dla gazu",
        desc: "Wymiana starych gazociągów stalowych i żeliwnych — z DSW/DSR operatora.",
        specs: "Do DN300, zgodnie z PN-EN 15001",
      },
    ],
    whenToUse: [
      "Modernizacja starych sieci żeliwnych z lat 60-80",
      "Wymiana rur azbestocementowych (bez ryzyka uwalniania włókien)",
      "Zwiększenie przepustowości bez dokupywania pasa drogowego",
      "Renowacja w zabudowie miejskiej — brak miejsca na wykop",
      "Program „wod-kan” dla gmin finansowany z UE/NFOŚiGW",
      "Krótkie terminy realizacji — dni zamiast tygodni",
    ],
    costs: [
      {
        scope: "Kraking DN100 na PE100 DN100",
        range: "400–850 zł/mb",
        note: "Bez upsize'u, długość do 100 m",
      },
      {
        scope: "Kraking z upsize'em DN100 → DN160",
        range: "550–1100 zł/mb",
        note: "Nowa rura większa o 50%",
      },
      {
        scope: "Kraking DN200 na PE100 DN200",
        range: "700–1400 zł/mb",
        note: "Stanowiska co 150-200 m",
      },
      {
        scope: "Kraking DN400 magistrala",
        range: "1300–2800 zł/mb",
        note: "Uciąg 150-200 ton, skomplikowany montaż",
      },
    ],
    costNote:
      "Cena silnie zależy od stanu starej rury, warunków gruntowych i liczby kolizji z innymi sieciami.",
    process: [
      {
        title: "Inspekcja starej rury",
        desc: "Inspekcja TV wnętrza rury, lokalizacja kolizji z innymi sieciami, analiza materiału.",
      },
      {
        title: "Projekt i organizacja placu",
        desc: "Dobór metody (statyczny/pneumatyczny), lokalizacja stanowisk start/meta, plan ruchu.",
      },
      {
        title: "Zgrzewanie rury produktowej",
        desc: "Zgrzewanie doczołowe nowej rury PE100 w całość na stanowisku startowym.",
      },
      {
        title: "Operacja krakingu",
        desc: "Głowica rozbija starą rurę i wciąga nową. Kontrola ciśnień, sił uciągu, trasy.",
      },
      {
        title: "Wpięcia i próby",
        desc: "Wpięcie do sieci, próba ciśnieniowa, dezynfekcja, odbiór techniczny z eksploatatorem.",
      },
    ],
    faqs: [
      {
        q: "Czy kraking nadaje się do rur azbestocementowych?",
        a: "Tak — i jest to jedna z najbezpieczniejszych metod wymiany azbestu. Stara rura jest rozbijana w gruncie, bez kontaktu z powietrzem, więc nie uwalnia włókien. Musimy jednak zgłosić prace zgodnie z procedurą azbestową i utylizować fragmenty rur.",
      },
      {
        q: "Jak długi odcinek można wymienić w jednym krakingu?",
        a: "Standardowo 80-200 m w jednym odcinku (stanowisko startowe → stanowisko końcowe). Dla bardzo długich tras robimy krakingi etapowo z pośrednimi studniami. Maksymalnie osiągaliśmy 350 m w jednym przejściu przy uciągu 200 ton.",
      },
      {
        q: "Czy trzeba wyłączyć wodę/kanalizację na czas krakingu?",
        a: "Tak — na czas wymiany musi być by-pass lub wyłączenie sieci. Dla magistral robimy czasowe połączenia tymczasowe (bypass) żeby nie przerywać dostawy. Zwykle przerwa 6-24h, zgłaszana mieszkańcom z wyprzedzeniem.",
      },
      {
        q: "Czy można zwiększyć średnicę o ile chcemy?",
        a: "Praktycznie — do 200% średnicy wyjściowej. Z DN100 do DN200 to bardzo częste. Powyżej sprawdzamy sytuację gruntową (upsize wymaga miejsca na przemieszczenie gruntu). Dla dużych upsize'ów — poziom lub mikrotunelowanie.",
      },
      {
        q: "Jaka gwarancja na rurę PE po krakingu?",
        a: "Rura PE100 z zaświadczeniem producenta — trwałość projektowa 50 lat. Nasze wykonawstwo — 5 lat gwarancji. Dla programów wod-kan finansowanych z UE gwarancje można rozszerzyć do 7-10 lat zgodnie z umową.",
      },
    ],
    related: ["cipp-renowacja", "hdd-przewiert-sterowany", "wodociagi"],
  },

  {
    slug: "cipp-renowacja",
    title: "CIPP — renowacja sieci rękawem żywicznym",
    eyebrow: "Technologie bezwykopowe",
    tagline:
      "Utwardzany na miejscu rękaw z włókna szklanego lub filcu. Renowacja kanalizacji bez rozkopywania. 50+ lat trwałości, realizacja w 1-3 dni.",
    metaTitle: "CIPP renowacja rękawem | Kanalizacja bez wykopu",
    metaDescription:
      "CIPP — bezwykopowa renowacja kanalizacji i wodociągów rękawem żywicznym. Utwardzanie UV, parą lub wodą. DN100-DN2000, 50 lat trwałości.",
    keywords: [
      "CIPP",
      "renowacja kanalizacji",
      "rękaw żywiczny",
      "bezwykopowa renowacja",
      "Cured In Place Pipe",
      "utwardzany rękaw",
      "rewitalizacja rur",
    ],
    icon: RefreshCw,
    trenchless: true,
    overview: [
      "CIPP (Cured In Place Pipe) to bezwykopowa technologia renowacji rur wewnątrz istniejącego kanału. Elastyczny rękaw z włókna szklanego lub filcu, nasączony żywicą (epoksydową, poliestrową lub winyloestrową), jest wwożony do kanału, a następnie utwardzany światłem UV, parą lub gorącą wodą — tworzy nową, szczelną rurę wewnątrz starej.",
      "To metoda pierwszego wyboru dla sieci kanalizacyjnych z lat 60-90, które mają przecieki, korozję, odkształcenia i pęknięcia, ale same w sobie spełniają jeszcze funkcję nośną. Odtwarzamy pełną szczelność, znosimy pęknięcia, przywracamy hydraulikę — bez rozkopywania kilometrów ulic.",
      "Trwałość utwardzonego rękawa — 50+ lat. Zmniejszenie średnicy wewnętrznej — minimalne (2-10%), a gładka powierzchnia żywiczna często zwiększa przepustowość mimo mniejszej średnicy. Realizacja typowego odcinka 200-500 m to 1-3 dni robocze.",
    ],
    variants: [
      {
        name: "CIPP UV (światłem)",
        desc: "Rękaw szklany utwardzany lampami UV. Najszybszy (50-200 m/h), ekologiczny.",
        specs: "DN150-DN800, grubość 3-12 mm",
      },
      {
        name: "CIPP parowy",
        desc: "Rękaw filcowy utwardzany parą. Dla dużych średnic i skomplikowanych tras.",
        specs: "DN200-DN1500, grubość 5-20 mm",
      },
      {
        name: "CIPP wodny",
        desc: "Utwardzanie gorącą wodą. Dla bardzo dużych kanałów i kolektorów.",
        specs: "DN600-DN2500, grubość 8-30 mm",
      },
      {
        name: "CIPP punktowy (packer)",
        desc: "Rękaw do punktowej naprawy pęknięć, kolan, miejsc po inspekcji.",
        specs: "Długość 30 cm - 5 m",
      },
    ],
    whenToUse: [
      "Sieci kanalizacyjne z pęknięciami, korozją, przeciekami",
      "Kanały z infiltracją wód gruntowych (problem dla oczyszczalni)",
      "Rury o zachowanej stabilności konstrukcyjnej (>60%)",
      "Brak możliwości wyłączenia ruchu na ulicy na długi czas",
      "Obszary objęte ochroną konserwatorską (starówki)",
      "Programy renowacji miejskich sieci (ZWiK, MPWiK)",
    ],
    costs: [
      {
        scope: "CIPP DN200 kanalizacja sanitarna",
        range: "350–750 zł/mb",
        note: "Rękaw szklany UV, grubość 4-6 mm",
      },
      {
        scope: "CIPP DN400 kanalizacja deszczowa",
        range: "650–1350 zł/mb",
        note: "Rękaw filcowy parowy",
      },
      {
        scope: "CIPP DN800 kolektor",
        range: "1500–3200 zł/mb",
        note: "Utwardzanie wodne, grubość 12-20 mm",
      },
      {
        scope: "Naprawa punktowa (packer)",
        range: "1800–4500 zł/szt",
        note: "Za lokalizację pęknięcia",
      },
    ],
    costNote:
      "Do ceny dolicza się inspekcję TV przed i po renowacji, czyszczenie kanału, utylizację odpadów.",
    process: [
      {
        title: "Inspekcja i ocena",
        desc: "Inspekcja TV kanalizacji, ocena stanu, pomiar geometrii, ocena możliwości renowacji.",
      },
      {
        title: "Czyszczenie kanału",
        desc: "Czyszczenie hydrodynamiczne (WUKO), frezowanie przyłączy, usunięcie osadów i korzeni.",
      },
      {
        title: "Nasączenie rękawa",
        desc: "Nasączenie rękawa żywicą w kontrolowanych warunkach — w zakładzie lub mobilnej jednostce.",
      },
      {
        title: "Inwersja i utwardzenie",
        desc: "Wprowadzenie rękawa metodą inwersji lub wciągania, utwardzanie UV/parą/wodą.",
      },
      {
        title: "Odtworzenie przyłączy i odbiór",
        desc: "Frezowanie robotem podłączeń, inspekcja TV po renowacji, protokół, odbiór.",
      },
    ],
    faqs: [
      {
        q: "Czy CIPP zmniejsza średnicę kanału?",
        a: "Tak, nieznacznie — typowo o 2-10% (zależnie od grubości rękawa). W praktyce nie ma to wpływu na hydraulikę, bo gładka powierzchnia żywiczna ma współczynnik chropowatości 0.008 (beton 0.013, kamionka 0.015). Przepustowość często wzrasta mimo mniejszej średnicy.",
      },
      {
        q: "Ile trwa CIPP 200 m kanalizacji?",
        a: "Pełny cykl: 1 dzień na czyszczenie i inspekcję, 0.5-1 dzień na renowację (z utwardzeniem), 0.5 dnia na odtwarzanie przyłączy robotem. Łącznie 2-3 dni robocze. Ruch na ulicy zwykle nie jest zakłócany.",
      },
      {
        q: "Czy CIPP nadaje się do wody pitnej?",
        a: "Tak, dla rur wodociągowych używamy specjalnych żywic atestowanych do kontaktu z wodą pitną (PZH, higienicznie obojętne). Technologia AquaPipe lub Nordipipe — oba mają atesty PZH. Używany w całej Europie do renowacji magistral wodnych.",
      },
      {
        q: "Co jeśli rura jest zbyt zniszczona na CIPP?",
        a: "Jeśli rura ma pęknięcia poprzeczne, zapadnięcia >30% średnicy lub brak stabilności konstrukcyjnej — CIPP nie zadziała. Wtedy proponujemy kraking (wymiana bezwykopowa) lub tradycyjny wykop. Dokładną diagnozę robimy po inspekcji TV.",
      },
      {
        q: "Jaka gwarancja na rękaw CIPP?",
        a: "Trwałość projektowa rękawa żywicznego — 50 lat (zgodnie z PN-EN 13566). Nasza gwarancja robocza — 5 lat. Producenci rękawów (Insituform, Aarsleff, Saertex) udzielają własnych gwarancji do 50 lat na materiał.",
      },
    ],
    related: ["kanalizacja-sanitarna", "kraking-rur", "mikrotunelowanie"],
  },
];

services.push(
  {
    slug: "mikrotunelowanie",
    title: "Mikrotunelowanie — bezwykopowe układanie rur dużych średnic",
    eyebrow: "Technologie bezwykopowe",
    tagline:
      "Mikrotunele z tarczą TBM dla kanalizacji, wodociągów i ciepłownictwa. DN200–DN2500, długości do 500 m. Pod infrastrukturą krytyczną i gęstą zabudową.",
    metaTitle: "Mikrotunelowanie — bezwykopowo DN200–DN2500",
    metaDescription:
      "Mikrotunelowanie z TBM — bezwykopowe układanie rur dużych średnic. DN200 do DN2500, trasy do 500 m. Dla kanalizacji, wodociągów i ciepłownictwa.",
    keywords: [
      "mikrotunelowanie",
      "mikrotunel",
      "microtunneling",
      "TBM",
      "bezwykopowo duża średnica",
      "przewiert pod miastem",
    ],
    icon: Mountain,
    trenchless: true,
    overview: [
      "Mikrotunelowanie to bezwykopowa metoda układania rur dużych średnic (DN200–DN2500) za pomocą zdalnie sterowanej tarczy TBM (Tunnel Boring Machine). Tarcza drąży tunel, a jednocześnie od komory startowej wciskane są rury betonowe, żelbetowe lub stalowe — tworząc gotową infrastrukturę podziemną.",
      "Stosujemy tę metodę tam, gdzie HDD nie wystarcza: pod gęstą zabudową, pod liniami kolejowymi PKP, pod autostradami, pod obiektami zabytkowymi. Dokładność trasy ±10 mm na 100 m, kontrola na żywo z powierzchni.",
      "Mikrotunelowanie jest kluczową technologią w modernizacji dużych kolektorów kanalizacyjnych miast, magistral wodociągowych i sieci ciepłowniczych wysokiej mocy. Wysoka cena jednostkowa, ale brak wpływu na powierzchnię terenu.",
    ],
    variants: [
      {
        name: "TBM DN400–DN800",
        desc: "Średnie mikrotunele dla kanalizacji sanitarnej zbiorczej.",
        specs: "Rury żelbetowe, długości do 300 m",
      },
      {
        name: "TBM DN1000–DN1600",
        desc: "Kolektory miejskie, magistrale wodociągowe.",
        specs: "Żelbet wzmocniony, do 500 m",
      },
      {
        name: "TBM DN2000–DN2500",
        desc: "Duże kolektory, tunele komunikacyjne.",
        specs: "Segmenty żelbetowe prefabrykowane",
      },
      {
        name: "Mikrotunel w skale",
        desc: "Tarcze TBM ze specjalistycznymi zębami.",
        specs: "Dla gruntów skalistych, R1–R5",
      },
    ],
    whenToUse: [
      "Duże kolektory kanalizacyjne w miastach (DN1000+)",
      "Przejścia pod linią kolejową dużej prędkości",
      "Magistrale wodociągowe i ciepłownicze pod autostradami",
      "Obszary zabytkowe wymagające zerowej ingerencji w teren",
      "Tereny z wysokim poziomem wód gruntowych",
      "Trasa pod gęstą infrastrukturą podziemną",
    ],
    costs: [
      {
        scope: "Mikrotunel DN600 długość 100 m",
        range: "3500–6500 zł/mb",
        note: "Grunt miękki, rury żelbetowe",
      },
      {
        scope: "Mikrotunel DN1000 długość 200 m",
        range: "5500–9500 zł/mb",
        note: "Z komorami pośrednimi",
      },
      {
        scope: "Mikrotunel DN1600 pod torem kolejowym",
        range: "8500–15000 zł/mb",
        note: "Z uzgodnieniem PKP PLK",
      },
      {
        scope: "Mikrotunel DN2000+ kolektor miejski",
        range: "12000–22000 zł/mb",
        note: "Złożone projekty wieloletnie",
      },
    ],
    costNote:
      "Ceny zawierają komory start/meta, TBM, odwodnienie, pracę 24/7 dla dużych projektów.",
    process: [
      {
        title: "Badania geologiczne",
        desc: "Dogłębne badania wzdłuż trasy co 50-100 m, testy gruntu, analiza hydrogeologii.",
      },
      {
        title: "Projekt i pozwolenia",
        desc: "Projekt z pełną dokumentacją geologiczną, uzgodnienia z wszystkimi zarządcami, ZRiD/PLK.",
      },
      {
        title: "Komory startowa i końcowa",
        desc: "Wykop komór ze ściankami szczelnymi, montaż TBM w komorze startowej.",
      },
      {
        title: "Drążenie tunelu",
        desc: "TBM drąży z kontrolą pozycji GPS+inclinometr, jednocześnie wciskane rury segmentowe.",
      },
      {
        title: "Wykończenie i odbiór",
        desc: "Zakończenie w komorze mety, demontaż TBM, odbiór geodezyjny, inspekcja TV, przekazanie.",
      },
    ],
    faqs: [
      {
        q: "Czym różni się mikrotunelowanie od HDD?",
        a: "HDD stosuje się dla małych i średnich średnic (do DN1000) na długich trasach (do 1500 m) — bez komór startowych. Mikrotunelowanie — dla dużych średnic (DN200–DN2500) z ograniczonymi trasami (do 500 m), zawsze z komorami start/meta. Mikrotunel daje większą dokładność i lepiej sprawdza się w trudnych gruntach.",
      },
      {
        q: "Czy mikrotunelowanie działa w wodach gruntowych?",
        a: "Tak — to jedna z głównych zalet. TBM z ziemią nawodnioną (EPB/slurry) pracuje w stabilnym ciśnieniu i nie dopuszcza do napływu wody. W gruntach podmokłych jest często lepszym wyborem niż wykop (który wymaga odwodnienia).",
      },
      {
        q: "Jaka jest dokładność trasy mikrotunelu?",
        a: "±10 mm na 100 m w standardzie. Dla precyzyjnych projektów (np. pod torem kolejowym dużej prędkości) używamy TBM z żyrokompasem i systemem korekcji na żywo — do ±5 mm na 100 m.",
      },
      {
        q: "Ile trwa realizacja mikrotunelu 200 m?",
        a: "Komory: 2-3 tygodnie. Drążenie: 1-2 miesiące (tempo 5-15 m/dzień). Wykończenie: 2 tygodnie. Łącznie 2-4 miesiące, zależnie od średnicy i gruntu.",
      },
      {
        q: "Czy mikrotunelowanie jest bardziej opłacalne niż wykop?",
        a: "Dla dużych średnic i zabudowanego terenu — często tak. Oszczędność odtworzenia nawierzchni (asfalt, chodniki, zieleń) + brak zakłóceń ruchu + krótszy czas przekraczają różnicę w cenie jednostkowej.",
      },
    ],
    related: ["hdd-przewiert-sterowany", "kanalizacja", "cipp-renowacja"],
  },

  {
    slug: "cieplownictwo",
    title: "Sieci ciepłownicze i węzły — preizolowane, wysokoparametrowe",
    eyebrow: "Ciepłownictwo",
    tagline:
      "Budowa i modernizacja miejskich sieci ciepłowniczych. Rury preizolowane, węzły wymiennikowe, systemy monitoringu przecieków. Dla MPEC, ECO, PGNiG Termika.",
    metaTitle: "Sieci ciepłownicze preizolowane — budowa, modernizacja",
    metaDescription:
      "Budowa sieci ciepłowniczych preizolowanych i węzłów cieplnych. Rury wysokoparametrowe, system monitoringu przecieków, modernizacje MPEC. Cała Polska.",
    keywords: [
      "sieć ciepłownicza",
      "rury preizolowane",
      "węzeł cieplny",
      "ciepłownictwo",
      "MPEC budowa",
      "modernizacja sieci ciepłowniczej",
    ],
    icon: Flame,
    trenchless: false,
    overview: [
      "Wykonujemy miejskie sieci ciepłownicze w systemie preizolowanym — rury stalowe w płaszczu PE z pianką PUR — dla MPEC, ECO, PGNiG Termika oraz prywatnych producentów ciepła. Sieci wysokoparametrowe do 150°C i 16 bar.",
      "W zakresie kontraktu oferujemy: budowę sieci magistralnych i osiedlowych, modernizacje starych sieci kanałowych na preizolowane, budowę węzłów wymiennikowych (indywidualnych i grupowych) oraz instalację systemów monitoringu przecieków (drut alarmowy MMS).",
      "Współpracujemy z uznanymi dostawcami rur (Logstor, isoplus, Brugg) i węzłów (Danfoss, Comap, Uponor). Projekty realizujemy zgodnie z PN-EN 253 i wytycznymi PSEiC, z dokumentacją potrzebną do odbioru UDT (gdzie wymagany).",
    ],
    variants: [
      {
        name: "Magistrale ciepłownicze",
        desc: "DN150–DN600, podejście do elektrociepłowni i stacji redukcyjnych.",
        specs: "T do 150°C, P do 16 bar",
      },
      {
        name: "Sieci osiedlowe",
        desc: "Rozprowadzenie ciepła do węzłów wymiennikowych.",
        specs: "DN40–DN200, preizolowane",
      },
      {
        name: "Węzły wymiennikowe",
        desc: "Węzły indywidualne (pojedyncze klatki) i grupowe (dla osiedli).",
        specs: "Moc 30–5000 kW",
      },
      {
        name: "Systemy monitoringu",
        desc: "Drut alarmowy MMS z centralą — wykrywa wycieki w godziny.",
        specs: "Zgodne z PN-EN 14419",
      },
    ],
    whenToUse: [
      "Rozbudowa sieci miejskiej (nowe osiedla, galerie)",
      "Modernizacja starych sieci kanałowych na preizolowane",
      "Budowa węzłów cieplnych dla deweloperów",
      "Wymiana zużytych rur z wyciekami (50+ lat)",
      "Instalacje monitoringu dla starych sieci bez kontroli",
      "Sieci dla ciepłowni biomasowych i kogeneracji",
    ],
    costs: [
      {
        scope: "Sieć preizolowana DN65 (osiedle)",
        range: "450–850 zł/mb",
        note: "Rury podwójne, grunt miękki",
      },
      {
        scope: "Sieć magistralna DN200",
        range: "850–1800 zł/mb",
        note: "Komory, armatura, kompensatory",
      },
      {
        scope: "Węzeł indywidualny 30 kW",
        range: "18000–35000 zł",
        note: "Za komplet z pomiarem i sterowaniem",
      },
      {
        scope: "Węzeł grupowy 500 kW",
        range: "180000–320000 zł",
        note: "Dla osiedla 100+ mieszkań",
      },
    ],
    costNote:
      "Ceny dla projektów w standardowych warunkach. Dla modernizacji sieci kanałowych — wycena indywidualna.",
    process: [
      {
        title: "Audyt sieci i projekt",
        desc: "Analiza strat, pomiary termograficzne, obliczenia hydrauliczne, dobór średnic i izolacji.",
      },
      {
        title: "Uzgodnienia i pozwolenia",
        desc: "Uzgodnienia z operatorem sieci, pozwolenie na budowę, decyzje środowiskowe.",
      },
      {
        title: "Budowa sieci",
        desc: "Wykop, układanie rur z zachowaniem promieni gięcia, spawanie, montaż komór.",
      },
      {
        title: "Izolacja i monitoring",
        desc: "Mufy termokurczliwe, system drutu alarmowego MMS z centralą, kontrola szczelności.",
      },
      {
        title: "Rozruch i odbiór",
        desc: "Próba szczelności, płukanie, rozruch z ciepłem, dokumentacja UDT i odbiór eksploatatora.",
      },
    ],
    faqs: [
      {
        q: "Jaka jest trwałość rur preizolowanych?",
        a: "Projektowana — 50 lat. W praktyce rury Logstor/isoplus zainstalowane w latach 70-80 w Skandynawii wciąż pracują. Kluczowe: dobra izolacja muf i system monitoringu drutem alarmowym, który wykryje wyciek zanim spowoduje degradację pianki.",
      },
      {
        q: "Czy modernizujecie sieci kanałowe na preizolowane?",
        a: "Tak — to standard w miejskich programach modernizacyjnych. Procedura: wykop kanału, demontaż starych rur stalowych z wełną, ułożenie rur preizolowanych, mufowanie, montaż drutu alarmowego. Można łączyć z metodami bezwykopowymi w wybranych odcinkach.",
      },
      {
        q: "Czym jest system MMS (drut alarmowy)?",
        a: "Drut miedziany lub niklochromowy w piance PUR, który po zawilgoceniu wskutek wycieku zmienia rezystancję. Centrala MMS w trybie ciągłym mierzy tę rezystancję i alarmuje o miejscu wycieku — dokładność ±2-5 m na sieci o długości 2 km.",
      },
      {
        q: "Co obejmuje węzeł wymiennikowy?",
        a: "Wymiennik płytowy (ciepło z magistrali → c.o./c.w.u. budynku), pompę obiegową, zawory regulacyjne, pomiar ciepła z dostawcą, sterownik pogodowy, zestaw filtrów i odpowietrzników. Coraz częściej z modemem GSM dla zdalnego monitoringu.",
      },
      {
        q: "Ile kosztuje węzeł do mojego domu?",
        a: "Dla domu jednorodzinnego (30-50 kW): 18-35 tys. zł za komplet z montażem. Dla bloku (300-600 kW): 85-160 tys. zł. Dla osiedla (1500+ kW): 250-500 tys. zł. Wycena zależy od standardu i producenta wymiennika.",
      },
    ],
    related: ["wodociagi", "kanalizacja", "hdd-przewiert-sterowany"],
  },

  {
    slug: "retencja",
    title: "Retencja wód opadowych, zbiorniki retencyjne i p-poż",
    eyebrow: "Retencja i p-poż",
    tagline:
      "Zbiorniki retencyjne, zbiorniki p-poż, rozsączanie, separatory, odwodnienia dróg. Zgodnie z nową polityką wodną — zatrzymujemy deszczówkę tam gdzie spada.",
    metaTitle: "Zbiorniki retencyjne i p-poż — rozsączanie, separatory",
    metaDescription:
      "Zbiorniki retencyjne, zbiorniki przeciwpożarowe, skrzynki rozsączające, separatory ropopochodnych. Dla deweloperów, gmin, przemysłu. Wycena online.",
    keywords: [
      "zbiornik retencyjny",
      "zbiornik przeciwpożarowy",
      "zbiornik p-poż",
      "retencja wód opadowych",
      "rozsączanie",
      "separator ropopochodnych",
      "odwodnienie drogi",
      "zagospodarowanie deszczówki",
    ],
    icon: CloudRain,
    trenchless: false,
    overview: [
      "Projektujemy i budujemy systemy zagospodarowania wód opadowych zgodnie z polską polityką wodną (ustawa Prawo wodne, program „Moja Woda”). Retencja zamiast odprowadzania do kanalizacji, rozsączanie zamiast wypłukiwania gruntu, odbiór lokalny zamiast obciążania rzek.",
      "Realizujemy pełne rozwiązania dla deweloperów (parkingi, osiedla), gmin (place, ulice, parki), przemysłu (hale, place składowe) oraz odbioru wód z dróg klas S, A, GP. Zakres: zbiorniki zamknięte i otwarte, skrzynki rozsączające, drenaż rozsączający, separatory ropopochodnych i osadników.",
      "Dobieramy urządzenia pod charakterystykę spływu i dopuszczalne obciążenia terenu: zbiorniki polietylenowe (Graf, Wavin) dla typowych inwestycji, zbiorniki żelbetowe prefabrykowane dla przemysłu, systemy modułowe dla obszarów zabudowanych.",
    ],
    variants: [
      {
        name: "Zbiorniki retencyjne zamknięte",
        desc: "Polietylenowe lub żelbetowe, pod terenem, z przelewem do kanalizacji lub rozsączania.",
        specs: "1000–100000 L, Graf/Wavin",
      },
      {
        name: "Zbiorniki otwarte (stawy retencyjne)",
        desc: "Dla osiedli i parków — retencja z funkcją rekreacyjną i biologiczną.",
        specs: "200 m³ – 10 000 m³",
      },
      {
        name: "Skrzynki rozsączające",
        desc: "Modułowe skrzynki PP/HDPE. Gromadzą wodę i oddają do gruntu.",
        specs: "Graf EcoBloc, Wavin AquaCell",
      },
      {
        name: "Zbiorniki przeciwpożarowe (p-poż)",
        desc: "Zapas wody do celów gaśniczych dla obiektów bez sieci hydrantowej.",
        specs: "50–400 m³, żelbet lub stal",
      },
      {
        name: "Separatory ropopochodnych",
        desc: "Klasa I i II (PN-EN 858). Dla stacji paliw, warsztatów, parkingów.",
        specs: "Do 200 L/s przepływu",
      },
    ],
    whenToUse: [
      "Nowe inwestycje objęte decyzją wodnoprawną",
      "Parkingi i place przemysłowe wymagające oddzielenia ropopochodnych",
      "Osiedla z ograniczoną możliwością odprowadzenia do kanalizacji",
      "Programy „Moja Woda” — zagospodarowanie z dotacją",
      "Obiekty w obszarach Natura 2000 i parkach krajobrazowych",
      "Duże dachy (>500 m²) z obowiązkową retencją",
    ],
    costs: [
      {
        scope: "Zbiornik retencyjny 3000 L PE",
        range: "5500–9500 zł",
        note: "Z montażem, bez przyłączy",
      },
      {
        scope: "Skrzynki rozsączające 10 m³",
        range: "8500–15000 zł",
        note: "Graf EcoBloc lub odpowiednik",
      },
      {
        scope: "Separator I klasy 10 L/s",
        range: "12000–22000 zł",
        note: "Z osadnikiem, wkład koalescencyjny",
      },
      {
        scope: "Zbiornik żelbetowy 50 m³",
        range: "45000–85000 zł",
        note: "Prefabrykat, z wejściem i przelewem",
      },
    ],
    costNote:
      "Dla dużych projektów (przemysł, osiedla) wycena indywidualna na podstawie bilansu wodnego.",
    process: [
      {
        title: "Bilans wodny i dobór",
        desc: "Obliczenie spływu z powierzchni, dobór retencji/rozsączania, analiza gruntu.",
      },
      {
        title: "Projekt i operat",
        desc: "Projekt techniczny, operat wodnoprawny, decyzja środowiskowa (DUŚ), pozwolenie.",
      },
      {
        title: "Wykop i montaż",
        desc: "Wykop pod zbiornik/skrzynki, podsypka, montaż, obsypka kruszywem, studzienki.",
      },
      {
        title: "Przyłącza i podczyszczanie",
        desc: "Podłączenie do systemu odprowadzającego (rynny, wpusty), separatory, filtry.",
      },
      {
        title: "Odbiór i sprawozdanie",
        desc: "Próba szczelności, pomiary, dokumentacja powykonawcza, zgłoszenie do WIOŚ.",
      },
    ],
    faqs: [
      {
        q: "Czy muszę robić retencję na swojej działce?",
        a: "Zależy od lokalnej interpretacji. Dla nowych inwestycji z dużymi powierzchniami utwardzonymi (>500 m² dach lub >1000 m² teren) — zwykle tak. Decyzja zapada w pozwoleniu na budowę lub operacie wodnoprawnym. Zawsze sprawdzamy wymagania dla konkretnej działki.",
      },
      {
        q: "Co lepsze — retencja czy rozsączanie?",
        a: "Zależy od gruntu. Retencja (zbiornik) + kontrolowane odprowadzanie — dla gruntów nieprzepuszczalnych (glina, ił). Rozsączanie — dla gruntów przepuszczalnych (piasek, żwir). Najlepsze rozwiązanie często łączy obie: zbiornik retencyjny + przelew do skrzynek rozsączających.",
      },
      {
        q: "Ile wody zatrzyma typowy zbiornik dla domu?",
        a: "Dla dachu 150 m² przy opadzie 20 mm (typowa burza) otrzymamy 3 m³ wody. Zbiornik 3000-5000 L to standard dla domu jednorodzinnego. Dla większych dachów lub utwardzonych powierzchni — odpowiednio więcej.",
      },
      {
        q: "Kiedy trzeba mieć separator ropopochodnych?",
        a: "Przy parkingach >20 miejsc, placach postojowych dla ciężarówek, stacjach paliw, warsztatach, myjniach. Klasa I (<5 mg/L ropopochodnych) wymagana, gdy woda trafia do cieku. Klasa II (<100 mg/L) — gdy do kanalizacji sanitarnej.",
      },
      {
        q: "Czy retencja kwalifikuje się do dotacji?",
        a: "Tak — programy „Moja Woda” i „Moja Woda 2” oferują do 6000 zł dotacji dla osób prywatnych. Dla firm: NFOŚiGW, WFOŚiGW, programy RPO. Dla gmin: program MRiRW, fundusze UE. Pomagamy w przygotowaniu wniosków.",
      },
    ],
    related: ["kanalizacja-sanitarna", "wodociagi", "odwodnienie-wykopow"],
  },

  {
    slug: "odwodnienie-wykopow",
    title: "Odwodnienie wykopów — igłofiltry i pompowanie",
    eyebrow: "Roboty towarzyszące",
    tagline:
      "Igłofiltry, studnie depresyjne, pompowanie wody gruntowej. Niezbędne przy budowie kanalizacji w gruntach nawodnionych.",
    metaTitle: "Odwodnienie wykopów — igłofiltry, depresja",
    metaDescription:
      "Odwodnienie wykopów igłofiltrami i studniami depresyjnymi. Dla kanalizacji, wodociągów, fundamentów. Wycena online.",
    keywords: [
      "odwodnienie wykopów",
      "igłofiltry",
      "igłofiltracja",
      "depresja wody gruntowej",
      "pompowanie wody gruntowej",
      "wellpoints",
      "studnia depresyjna",
    ],
    icon: Construction,
    trenchless: false,
    overview: [
      "Odwodnienie wykopów to kluczowy element każdej budowy sieci kanalizacyjnej i wodociągowej w gruntach nawodnionych. Stosujemy igłofiltrację (wellpoints) — system igieł ssących rozmieszczonych wzdłuż wykopu, podłączonych do pompy próżniowej, który obniża zwierciadło wody gruntowej poniżej dna wykopu.",
      "Zapewniamy pełną obsługę odwodnienia — od projektu depresji przez montaż igieł po nadzór i demontaż. Natychmiastowa mobilizacja i konkurencyjne stawki.",
      "Realizujemy odwodnienie jedno- i dwurzędowe, liniowe i obwodowe, z depresją od 3 do 8 m poniżej terenu. Dla głębszych wykopów stosujemy studnie głębinowe (deep wells) lub systemy wielostopniowe.",
    ],
    variants: [
      {
        name: "Igłofiltracja jednostopniowa",
        desc: "Obniżenie poziomu wody gruntowej do 4-5 m. Standard dla kanalizacji.",
        specs: "Igły DN50, rozstaw 0.8–1.5 m",
      },
      {
        name: "Igłofiltracja dwustopniowa",
        desc: "Dwa poziomy igieł — depresja do 8 m.",
        specs: "Dla głębokich kolektorów i przepompowni",
      },
      {
        name: "Studnie depresyjne (deep wells)",
        desc: "Dla piasków gruboziarnistych i żwirów. Duże wydajności.",
        specs: "DN150–DN300, pompy głębinowe",
      },
      {
        name: "Odwodnienie otwarte",
        desc: "Rowy odwadniające + pompy zatapialne. Dla niskich poziomów wody.",
        specs: "Pompy 10–100 m³/h",
      },
    ],
    whenToUse: [
      "Budowa kanalizacji grawitacyjnej na głębokości >1.5 m w gruntach nawodnionych",
      "Wykopy pod przepompownie ścieków i komory",
      "Budowa fundamentów w sąsiedztwie wody gruntowej",
      "Wykopy pod zbiorniki retencyjne i p-poż",
      "Stabilizacja skarp wykopu w piaskach",
      "Roboty ziemne w dolinach rzecznych i na terenach podmokłych",
    ],
    costs: [
      {
        scope: "Igłofiltracja liniowa 50 mb",
        range: "150–350 zł/mb/miesiąc",
        note: "Igły co 1 m, pompa 1 szt.",
      },
      {
        scope: "Igłofiltracja obwodowa (przepompownia)",
        range: "8000–18000 zł/miesiąc",
        note: "20-40 igieł, 1-2 pompy",
      },
      {
        scope: "Studnia depresyjna DN200",
        range: "3500–8000 zł/szt",
        note: "Z pompą głębinową, montaż + demontaż",
      },
      {
        scope: "Mobilizacja zestawu igłofiltrów",
        range: "3000–6000 zł",
        note: "Transport, montaż, uruchomienie",
      },
    ],
    costNote:
      "Stawki za odwodnienie są miesięczne (czas trwania robót ziemnych). Cena zależy od długości frontu robót i głębokości depresji.",
    process: [
      {
        title: "Rozpoznanie hydrogeologiczne",
        desc: "Badanie poziomu wody gruntowej, przepuszczalność gruntu, analiza wpływu na sąsiednie obiekty.",
      },
      {
        title: "Projekt odwodnienia",
        desc: "Dobór metody (igły/studnie), obliczenia depresji, rozstaw igieł, wydajność pomp.",
      },
      {
        title: "Montaż i uruchomienie",
        desc: "Płukanie igieł, podłączenie do kolektora ssącego, uruchomienie pompy, kontrola poziomu.",
      },
      {
        title: "Praca ciągła",
        desc: "Pompy pracują 24/7 przez czas trwania robót. Monitoring poziomu zwierciadła wody.",
      },
      {
        title: "Demontaż",
        desc: "Wyciągnięcie igieł, demontaż kolektora, przywrócenie naturalnego poziomu wody.",
      },
    ],
    faqs: [
      {
        q: "Czym są igłofiltry?",
        a: "Igłofiltry (wellpoints) to cienkie rury ssące (DN50) z filtrem na końcu, wbijane w grunt co 0.8-1.5 m wzdłuż wykopu. Podłączone do kolektora ssącego i pompy próżniowej obniżają poziom wody gruntowej, umożliwiając prace w suchym wykopie.",
      },
      {
        q: "Na jaką głębokość obniżycie wodę?",
        a: "Jedna linia igłofiltrów obniża zwierciadło o 4-5 m. Dwa stopnie — do 8 m. Dla głębszych depresji stosujemy studnie głębinowe (deep wells). Maksymalna głębokość zależy od przepuszczalności gruntu.",
      },
      {
        q: "Ile kosztuje odwodnienie na miesiąc?",
        a: "Dla typowej budowy kanalizacji (50-100 mb wykopu): 8000-20000 zł/miesiąc. Cena zależy od długości frontu, głębokości depresji i czasu pracy pompy.",
      },
      {
        q: "Czy odwodnienie może uszkodzić sąsiedni budynek?",
        a: "Przy prawidłowym projekcie — nie. Analizujemy strefę wpływu depresji i monitorujemy osiadania. Dla budynków w bezpośrednim sąsiedztwie stosujemy bariery przeciwfiltracyjne lub ograniczone odwodnienie z kontrolą.",
      },
      {
        q: "Jak szybko możecie zacząć odwodnienie?",
        a: "Mobilizacja sprzętu trwa 1-3 dni od zlecenia. W przypadku pilnych sytuacji (np. zalany wykop) — możliwość interwencji w ciągu 24h.",
      },
    ],
    related: ["kanalizacja-sanitarna", "wodociagi", "retencja"],
  },

  {
    slug: "przepompownie-sciekow",
    title: "Przepompownie ścieków — prefabrykowane i monolityczne",
    eyebrow: "Sieci wod-kan",
    tagline:
      "Kompletne przepompownie ścieków sanitarnych i deszczowych. Prefabrykowane PE/GRP i monolityczne żelbetowe. Dobór pomp, sterowanie, monitoring SCADA.",
    metaTitle: "Przepompownie ścieków — prefabrykowane, monolityczne | Cena",
    metaDescription:
      "Budowa przepompowni ścieków sanitarnych i deszczowych. Zbiorniki prefabrykowane PE/GRP, pompy Grundfos/Flygt, sterowanie i monitoring SCADA. Wycena online.",
    keywords: [
      "przepompownia ścieków",
      "pompownia ścieków",
      "przepompownia prefabrykowana",
      "przepompownia kanalizacyjna",
      "pompy do ścieków",
      "stacja pomp ścieków",
    ],
    icon: Container,
    trenchless: false,
    overview: [
      "Przepompownie ścieków są konieczne wszędzie tam, gdzie ukształtowanie terenu nie pozwala na grawitacyjny spływ ścieków do oczyszczalni lub kolektora zbiorczego. Budujemy kompletne przepompownie — od projektu, przez dobór pomp i zbiornik, po sterowanie i monitoring zdalny.",
      "Oferujemy dwa typy: prefabrykowane (zbiornik PE lub GRP z fabrycznie zamontowanymi pompami, gotowy do posadowienia) i monolityczne żelbetowe (dla dużych przepływów i specjalnych wymagań). Pompy dobieramy pod charakterystykę ścieków — Grundfos, Flygt (Xylem), Wilo.",
      "Każda przepompownia ma układ sterowania z automatyką (progi załączania/wyłączania pomp, rotacja pracy, alarm suchobiegu i przelewu) oraz możliwość monitoringu SCADA/GSM — operator widzi stan przepompowni na żywo bez wizyt w terenie.",
    ],
    variants: [
      {
        name: "Przepompownia prefabrykowana PE",
        desc: "Zbiornik polietylenowy z pompami. Szybki montaż, niski koszt.",
        specs: "DN1000–DN2500, Q do 50 L/s",
      },
      {
        name: "Przepompownia prefabrykowana GRP",
        desc: "Zbiornik z włókna szklanego. Odporny na agresywne ścieki.",
        specs: "DN1500–DN3000, Q do 100 L/s",
      },
      {
        name: "Przepompownia monolityczna żelbetowa",
        desc: "Dla dużych przepływów i obiektów miejskich.",
        specs: "Dowolna geometria, Q do 500 L/s",
      },
      {
        name: "Przepompownia tłoczni osadów",
        desc: "Specjalistyczna — dla osadów i ścieków przemysłowych.",
        specs: "Pompy z rozdrabniaczem, maceratorem",
      },
    ],
    whenToUse: [
      "Teren płaski lub z przeciwspadkiem uniemożliwiający grawitację",
      "Kanalizacja tłoczna na długich odcinkach",
      "Odbiór ścieków z osiedli poniżej poziomu kolektora zbiorczego",
      "Obiekty oddalone od sieci grawitacyjnej (hotele, restauracje, farmy)",
      "Modernizacja istniejących przepompowni (wymiana pomp, automatyki)",
      "Tymczasowe przepompownie na czas budowy (by-pass)",
    ],
    costs: [
      {
        scope: "Przepompownia PE DN1200, 2 pompy",
        range: "35000–65000 zł",
        note: "Q do 10 L/s, komplet z automatyką",
      },
      {
        scope: "Przepompownia GRP DN2000, 2 pompy",
        range: "75000–140000 zł",
        note: "Q do 30 L/s, monitoring GSM",
      },
      {
        scope: "Przepompownia żelbetowa miejska",
        range: "150000–400000 zł",
        note: "Q do 100 L/s, SCADA, wentylacja",
      },
      {
        scope: "Modernizacja istniejącej przepompowni",
        range: "25000–80000 zł",
        note: "Wymiana pomp + automatyka + monitoring",
      },
    ],
    costNote:
      "Cena zawiera zbiornik, pompy, automatykę, montaż i rozruch. Wykop i fundamenty wyceniane osobno.",
    process: [
      {
        title: "Projekt i dobór",
        desc: "Obliczenia hydrauliczne, dobór pomp (krzywa Q-H), wybór zbiornika, projekt automatyki.",
      },
      {
        title: "Produkcja zbiornika",
        desc: "Prefabrykacja zbiornika PE/GRP z fabrycznie zamontowanymi prowadnicami i elementami.",
      },
      {
        title: "Wykop i posadowienie",
        desc: "Wykop z odwodnieniem, płyta fundamentowa, osadzenie zbiornika, obsypka.",
      },
      {
        title: "Montaż pomp i automatyki",
        desc: "Instalacja pomp na prowadnicach, szafa sterownicza, czujniki poziomu, modem GSM.",
      },
      {
        title: "Rozruch i odbiór",
        desc: "Próby pompowania, kalibracja automatyki, szkolenie obsługi, przekazanie eksploatatorowi.",
      },
    ],
    faqs: [
      {
        q: "Jaki typ przepompowni wybrać?",
        a: "Prefabrykowana PE — dla małych osiedli i obiektów indywidualnych (do 50 L/s, najtańsza). GRP — dla większych inwestycji lub agresywnych ścieków. Żelbetowa — dla miejskich systemów kanalizacyjnych z dużymi przepływami. Pomagamy dobrać typ do wymagań.",
      },
      {
        q: "Jak często trzeba serwisować przepompownię?",
        a: "Przegląd pomp — co 6-12 miesięcy. Czyszczenie zbiornika — co 12-24 miesięcy. Z monitoringiem GSM/SCADA — operator wie o awarii w ciągu minut. Oferujemy umowy serwisowe z czasem reakcji 4-24h.",
      },
      {
        q: "Czy przepompownia śmierdzi?",
        a: "Nowoczesne przepompownie prefabrykowane są szczelne i nie emitują odorów. Dla obiektów w pobliżu zabudowy stosujemy dodatkowo filtry węglowe na odpowietrzeniu. Minimalna odległość od zabudowy — zgodnie z MPZP gminy.",
      },
      {
        q: "Co jeśli padnie prąd?",
        a: "Zbiornik ma rezerwę na 2-4 godziny (pojemność retencyjna). Dla krytycznych obiektów montujemy agregat prądotwórczy z automatycznym przełączaniem (ATS). Alarm braku zasilania wysyłany natychmiast na telefon operatora.",
      },
      {
        q: "Czy potrzebne jest pozwolenie na przepompownię?",
        a: "Tak — przepompownia wymaga pozwolenia na budowę i uzgodnienia z ZWiK/eksploatatorem sieci. Dla obiektów przy zabudowie — decyzja środowiskowa. Przygotowujemy pełną dokumentację formalną.",
      },
    ],
    related: ["kanalizacja-sanitarna", "odwodnienie-wykopow", "retencja"],
  },
);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
