export type FaqItem = { q: string; a: string };

export type DistrictService = {
  districtSlug: string;
  serviceSlug: string;
  districtName: string;
  serviceName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: [string, string, string];
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
  /** Nowe pole: 2-3 akapity kontekstu lokalnego (dzielnica × usługa) */
  localContext: string[];
  /** Opis specyfiki sieci kanalizacyjnej w dzielnicy */
  infrastructure: string;
};

type DistrictConfig = {
  slug: string;
  name: string;
  locative: string;
  character: string;
  access: string;
  examples: string;
  risk: string;
  /** Opis sieci kanalizacyjnej — wiek, typ, znane problemy MPWiK */
  infrastructure: string;
  /** Typowy realny scenariusz awarii (2-3 zdania) */
  localScenario: string;
  /** 4-6 konkretnych ulic w dzielnicy */
  streets: string;
  /** Realny czas dojazdu z bazy */
  travelTime: string;
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
  /** Konkretny szczegół techniczny: sprzęt, parametry, średnice */
  technicalDetail: string;
  /** Kiedy klient potrzebuje tej usługi — objawy */
  whenNeeded: string;
};

// ─── DZIELNICE ────────────────────────────────────────────────────────────────

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
    risk: "nawracające zatory w pionach, osady tłuszczowe w kuchniach i przeciążone poziomy piwniczne",
    infrastructure:
      "Krzyki dysponują mieszanym układem kanalizacji: starsze osiedla Borek i Gaj obsługuje kanalizacja ogólnospławna z lat 60.–70. XX w., natomiast nowsze rejony Partynic i Kleciny mają już rozdzielczą sieć sanitarną i deszczową. MPWiK sukcesywnie wymienia odcinki kolektora wzdłuż Powstańców Śląskich — podczas prac dochodzi do lokalnych wahań ciśnienia i cofek w przyłączach.",
    localScenario:
      "Najczęstszy scenariusz na Krzykach: mieszkańcy bloku z wielkiej płyty przy ul. Biegasza lub Sztabowej zgłaszają wolny odpływ ze wszystkich zlewozmywaków na piętrach 1-3. Przyczyną jest nagromadzony osad tłuszczowo-mydlany w poziomie piwnicy — typowe w budynkach z rurami żeliwnymi eksploatowanymi od 50+ lat bez profilaktycznego czyszczenia.",
    streets:
      "ul. Powstańców Śląskich, ul. Biegasza, ul. Sztabowa, ul. Karkonoska, ul. Borowska, al. Wiśniowa",
    travelTime:
      "20–35 min z bazy przy normalnym ruchu; w godzinach szczytu na Powstańców Śląskich może wydłużyć się do 45 min",
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
    risk: "zapiaszczone odwodnienia, przeciążona deszczówka, separatory przy parkingach i awarie w obiektach firmowych",
    infrastructure:
      "Fabryczna to dzielnica z przewagą kanalizacji przemysłowej i rozdzielczej — deszczówka z rozległych powierzchni utwardzonych (parkingi, place) odprowadzana jest osobnymi kolektorami, które przy intensywnych opadach ulegają przeciążeniu. Duże zakłady przy ul. Strzegomskiej i Robotniczej posiadają własne przepompownie i separatory, wymagające niezależnego serwisu. MPWiK prowadzi tu przebudowę kolektora Ślęzy.",
    localScenario:
      "Typowy scenariusz na Fabrycznej: w centrum logistycznym przy Strzegomskiej przestaje działać przepompownia — poziom ścieków w komorze rośnie, alarm na sterowniku. Operator zakładu dzwoni o 22:00, bo rano ma dostawy. Przyczyna to zablokowanie wirnika przez folię lub szmaty wrzucone przez pracowników do toalety przemysłowej.",
    streets:
      "ul. Strzegomska, ul. Robotnicza, ul. Legnicka, ul. Kosmonautów, ul. Gwiaździsta, ul. Muchoborska",
    travelTime:
      "25–40 min; trasa przez Legnicką bywa zatkorowana w godz. 7–9 i 16–18, alternatywnie przez Robotniczą",
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
    risk: "zatory w przyłączach, problemy po opadach, osad w przepompowniach i awarie na działkach bez kanalizacji miejskiej",
    infrastructure:
      "Psie Pole ma mocno zróżnicowaną infrastrukturę: centralna część (Karłowice, Sołtysowice) jest skanalizowana przez MPWiK, natomiast obrzeża — Lipa Piotrowska, Pawłowice, część Zakrzowa — wciąż korzystają ze zbiorników bezodpływowych lub przydomowych oczyszczalni biologicznych. Przyłącza wykonane samodzielnie przez inwestorów w latach 90. często mają nieodpowiednie spadki i materiał PVC niskiej jakości.",
    localScenario:
      "Typowy scenariusz na Psim Polu: właściciel domu przy ul. Przełęcznej w Liście Piotrowskiej zauważa cofanie się ścieków przez odpływ podłogowy w piwnicy po każdym deszczu. Przyłącze kanalizacyjne ma niewystarczający spadek i wpustu deszczowego brakuje — woda gruntowa wtłaczana jest do rury sanitarnej przez wadliwe uszczelnienie mufy.",
    streets:
      "ul. Krzywoustego, ul. Przełęczna, ul. Długosza (Sołtysowice), ul. Zakrzowska, ul. Lipowa (Lipa Piotrowska), ul. Pawłowicka",
    travelTime:
      "30–50 min; dojazd przez Krzywoustego lub obwodnicę — w zależności od miejsca docelowego różnica może wynosić 15 min",
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
    risk: "stare piony, tłuszcz z lokali, trudny dostęp do piwnic i potrzeba szybkiej diagnozy bez rozkuwania",
    infrastructure:
      "Śródmieście obsługiwane jest przez kanalizację ogólnospławną z przełomu XIX i XX w. — kolektory ceglane wzdłuż Świdnickiej, Świdnickiej-Podwale i nabrzeży Odry mają miejscami ponad 100 lat. MPWiK regularnie zgłasza odcinki wymagające pilnej rehabilitacji metodą bezwykopową. Przyłącza kamienic przy pl. Grunwaldzkim i Nadodrzu biegną przez piwnice, często przez kilka lokatorów, co utrudnia lokalizację zatorów.",
    localScenario:
      "Typowy scenariusz w Śródmieściu: zarządca kamienicy przy ul. Świdnickiej zgłasza smród kanalizacyjny na klatce schodowej i mokrą piwnicę. Kamera wskazuje pęknięcie starej rury żeliwnej w poziomie piwnicy — osad przez lata blokował przepływ, a ciśnienie hydrauliczne spowodowało w końcu rozszczelnienie złącza.",
    streets:
      "ul. Świdnicka, ul. Podwale, al. Słowackiego (Ołbin), ul. Sienkiewicza, ul. Worcella (Nadodrze), ul. Seweryna (Sępolno)",
    travelTime:
      "15–30 min; centrum Wrocławia — ruch intensywny w godz. 7–9 i 15–19, ale krótki dystans wyrównuje czas dojazdu",
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
    risk: "tłuszcz gastronomiczny, stare przyłącza, ograniczony dostęp i konieczność pracy bez utrudnień dla gości",
    infrastructure:
      "Stare Miasto opiera się na ceglanej kanalizacji ogólnospławnej z końca XIX w. — część kolektorów pod Rynkiem i Świdnicką pochodzi z lat 1895–1910. Grubość osadu tłuszczowego w kolektorach gastronomicznych (okolice Placu Solnego, Kuźniczej) bywa wyjątkowa — do kilku centymetrów na ściankach rury. MPWiK nie planuje tu wymiany kolektora głównego w najbliższych latach, co oznacza stałe ryzyko awarii w przyłączach.",
    localScenario:
      "Typowy scenariusz na Starym Mieście: restauracja przy Rynku zgłasza całkowite zablokowanie odpływu z kuchni w piątkowy wieczór. Przyczyną jest zestalone złoże tłuszczu w przyłączu za separatorem — separator był czyszczony, ale odcinek za urządzeniem od kilku lat nie był objęty serwisem. Konieczna jest natychmiastowa interwencja, bo godzina szczytu gastronomicznego trwa.",
    streets:
      "Rynek (okolice), ul. Świdnicka, ul. Kuźnicza, ul. Oławska, Plac Solny, ul. Kazimierza Wielkiego",
    travelTime:
      "10–25 min; centrum jest blisko bazy, ale strefa ruchu ograniczonego wymaga parkowania pojazdu poza deptak i pracy pieszo z przenośnym sprzętem",
  },
];

// ─── USŁUGI ───────────────────────────────────────────────────────────────────

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
    technicalDetail:
      "Pojazd WUKO pracuje ciśnieniem roboczym 100–200 bar przy wydatku wody do 150 l/min. Głowice rotacyjne dobieramy do średnicy rury (DN100–DN600). Wąż roboczy ma standardowo 80–120 m, co pozwala czyścić dłuższe poziomy bez przesuwania pojazdu. Do odwodnień liniowych i kratek deszczowych stosujemy głowice punktowe.",
    whenNeeded:
      "Klient potrzebuje czyszczenia ciśnieniowego, gdy odpływ jest kompletnie zablokowany lub przepływ wyraźnie zwolnił, zapach kanalizacji nawraca po każdym czyszczeniu spiralą, a inspekcja kamerą wykazała grubą warstwę osadu lub złóg tłuszczu na ściankach rury.",
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
    technicalDetail:
      "Do zatorów w pionach i odpływach używamy elektromechanicznych spirali Ø8–50 mm z wymienną głowicą tnącą lub burzącą. Spirala elektryczna penetruje odcinki do 30 m, docierając przez rewizję lub otwór w syfonie. Przy korzeniach stosujemy głowice tnące z ostrzami rotacyjnymi. WUKO wchodzi wtedy, gdy spirala nie daje rady lub zator nawraca po kilku tygodniach.",
    whenNeeded:
      "Klient potrzebuje udrożnienia, gdy woda stoi w zlewozmywaku, wannie lub odpływie prysznica, toaleta spłukuje wolno lub bulgocze, a objawy pojawiły się nagle lub narastały przez kilka dni.",
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
    technicalDetail:
      "Używamy samojezdnych kamer inspekcyjnych dla rur DN100–DN1000 oraz ręcznych push-kamer do DN50–DN150. Obraz w rozdzielczości HD nagrywamy na nośnik i dostarczamy klientowi wraz z raportem. Głowica kamery wyposażona jest w czujnik lokalizacji (sondę), dzięki czemu możemy dokładnie wskazać miejsce usterki na nawierzchni — bez odkopywania.",
    whenNeeded:
      "Inspekcja kamerą jest potrzebna, gdy zator nawraca mimo czyszczenia, przed zakupem nieruchomości, przy odbiorze nowej instalacji, gdy wyczuwalny jest zapach kanalizacji bez widocznego zatkania, lub gdy podejrzewane jest pęknięcie rury pod posadzką.",
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
    technicalDetail:
      "Ekipa pogotowania wyjeżdża z wozem wyposażonym w spiralę elektryczną, ręczną push-kamerę oraz agregat ciśnieniowy do 150 bar. Taki skład pozwala ocenić i rozwiązać większość awarii w jednym wyjeździe: najpierw udrożnienie, potem szybka weryfikacja kamerą. Przy cofkach z sieci miejskiej kontaktujemy się z dyspozytorem MPWiK i dokumentujemy zdarzenie dla ubezpieczyciela.",
    whenNeeded:
      "Pogotowia kanalizacyjnego potrzebujesz, gdy ze studzienki lub odpływu podłogowego w piwnicy wydobywają się ścieki, toaleta wyrzuca wodę podczas spłukiwania przez sąsiada, lub poziom ścieków w studzience osiągnął poziom krytyczny i grozi zalaniem pomieszczenia.",
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
    technicalDetail:
      "Separator tłuszczu czyszczony jest metodą próżniową (beczkowóz 5–10 m³) lub ręcznie przy mniejszych urządzeniach klasy G4–G7. Po wyciągnięciu tłuszczu kontrolujemy kosz osadnika, korek zamknięcia i stan uszczelnień pokrywy. Odcinek za separatorem czyszczimy ciśnieniowo — to kluczowy etap, który większość firm pomija. Wystawiamy protokół serwisowy zgodny z wymogami kontroli Sanepidu.",
    whenNeeded:
      "Separator wymaga serwisu, gdy odpływ z kuchni zwalnia mimo drożnej instalacji wewnętrznej, pojawia się intensywny zapach zepsutego tłuszczu, minął termin ostatniego przeglądu (zazwyczaj co 1–3 miesiące dla gastronomii), lub zbliża się kontrola sanepidowska.",
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
    technicalDetail:
      "Przepompownie ścieków czyszczimy beczkowozem lub ręcznie w zależności od głębokości i objętości komory. Kontrolujemy: pobór prądu pomp (diagnostyka przeciążeń), pływaki poziomów (histereza), zawory zwrotne i odcinające na tłoczni, stan kabli, uszczelnień i pokrywy włazowej. Dla awarii sterownika wykonujemy diagnozę szafy elektrycznej. Raport po serwisie zawiera pomiary i zalecenia dotyczące eksploatacji.",
    whenNeeded:
      "Serwis przepompowni jest potrzebny, gdy sygnalizuje alarm (poziom krytyczny lub awaria pompy), pompa pracuje dłużej niż zwykle bez efektywnego obniżenia poziomu ścieków, słychać metaliczny dźwięk podczas pracy, lub minął termin przeglądu gwarancyjnego albo umownego.",
  },
];

// ─── FUNKCJE GENERUJĄCE ───────────────────────────────────────────────────────

function titleFor(district: DistrictConfig, service: ServiceConfig) {
  return `${service.short} Wrocław ${district.name} — serwis 24h`;
}

function descriptionFor(district: DistrictConfig, service: ServiceConfig) {
  return `${service.name} Wrocław ${district.name}. ${service.intent}. ${district.travelTime.split(";")[0]}. ZIĘBUD Expert, tel. 602 481 688.`;
}

function h1For(district: DistrictConfig, service: ServiceConfig) {
  if (service.slug === "wuko") {
    return `Czyszczenie hydrodynamiczne ${district.locative} — WUKO 24h`;
  }
  return `${service.name} Wrocław ${district.name} — szybki serwis kanalizacji`;
}

function introFor(
  district: DistrictConfig,
  service: ServiceConfig,
): [string, string, string] {
  // Akapit 1: Lokalny scenariusz awarii w tej dzielnicy
  const p1 = `${service.name} ${district.locative} zaczyna się od rozpoznania — nie od przyjazdu z gotowym rozwiązaniem. ${district.localScenario}`;

  // Akapit 2: Metoda powiązana z technikalnym detalem usługi
  const p2 = `W praktyce ${district.locative} kluczowe są ${district.access}. ${service.technicalDetail}`;

  // Akapit 3: Połączenie kiedy klient potrzebuje tej usługi z siecią dzielnicy
  const p3 = `${service.whenNeeded} Sieć kanalizacyjna ${district.locative} ma swoją specyfikę: ${district.infrastructure.split("—")[0].trim().toLowerCase()}${district.infrastructure.includes("—") ? " — " + district.infrastructure.split("—").slice(1).join("—").trim() : ""}. Obsługujemy: ${district.streets}.`;

  return [p1, p2, p3];
}

function localContextFor(district: DistrictConfig, service: ServiceConfig): string[] {
  // 2–3 akapity ściśle powiązane z kombinacją dzielnica × usługa

  // Kombinacje specyficzne dla dzielnic:
  const combos: Record<string, Record<string, string[]>> = {
    krzyki: {
      wuko: [
        `Czyszczenie hydrodynamiczne na Krzykach najczęściej dotyczy poziomów piwnicznych w blokach z wielkiej płyty przy ul. Biegasza, Sztabowej i al. Wiśniowej. Rury żeliwne z lat 60.–70. mają chropowatą powierzchnię wewnętrzną, która intensywnie kumuluje osad tłuszczowo-mydlany. Standardowa głowica rotacyjna przy ciśnieniu 120–150 bar i wydatku 80 l/min jest w stanie usunąć nawet kilkuletni nalot bez uszkadzania starego materiału.`,
        `Na Borek i Gaj dojeżdżamy przez Powstańców Śląskich lub Karkonoską — czas dojazdu to ${districts.find(d=>d.slug==="krzyki")!.travelTime.split(";")[0]}. Przy zleceniach dla wspólnot blokowych koordynujemy dostęp z administratorem i ustawiamy pojazd na jednym z niewielu dostępnych miejsc serwisowych przy klatce.`,
        `Po czyszczeniu poziomów zalecamy zaplanowanie przeglądu kamerą po 6 miesiącach — stare rury żeliwne po WUKO są drożne, ale często ujawniają pęknięcia i infiltracje wód gruntowych, które wcześniej były maskowane przez osad.`,
      ],
      "udraznianie-rur": [
        `Udrażnianie rur na Krzykach to przede wszystkim piony w budynkach wielorodzinnych — Borek, Gaj, Huby. Zatory w pionach żeliwnych DN100 pojawiają się najczęściej zimą (tłuszcze krzepną szybciej) i w budynkach z kuchnią na każdym piętrze bez wentylacji mechanicznej. Spirala elektryczna z głowicą burzącą Ø32–50 mm dociera do zatkania przez rewizję w piwnicy lub po zdemontowaniu syfonu.`,
        `Na osiedlach przy ul. Karkonoskiej i al. Wiśniowej dominuje zabudowa z lat 90. z rurami PVC — tu udrożnienie jest łatwiejsze, ale zatory częściej wynikają z ciał obcych (chusteczki, wata) niż z tłuszczu. Przy PVC stosujemy głowice bez ostrzy, żeby nie rysować ścianek.`,
        `Jeśli zator w pionie nawraca częściej niż raz na rok, rekomendujemy inspekcję kamerą wzdłuż całego pionu — często okazuje się, że problem leży w poziomie odpływowym, nie w samym pionie.`,
      ],
      "inspekcja-tv": [
        `Inspekcja TV na Krzykach jest szczególnie wartościowa przed planowanym remontem łazienki lub kuchni w starszych kamienicach i blokach na Borku. Kamera ujawnia stan rur żeliwnych bez kucia ścian — widać, czy materiał jest do uratowania, czy wymaga wymiany przed układaniem nowych kafelek.`,
        `Przy ul. Powstańców Śląskich i Karkonoskiej realizowaliśmy inspekcje dla zarządców kamienic po nawracających cofkach z poziomu piwnicy. W kilku przypadkach kamera wskazała złe spadki w przyłączu na etapie przebudowy z lat 80. — bez badania kamerą decyzja o remoncie byłaby wróżbą.`,
        `Obraz z kamery przekazujemy na nośniku USB lub wysyłamy mailem. Raport zawiera opis odcinka, zapis metrażu i lokalizację usterki na szkicu — przydatne przy roszczeniach do zarządcy lub ubezpieczyciela.`,
      ],
      "pogotowie-kanalizacyjne": [
        `Pogotowie kanalizacyjne na Krzykach oznacza najczęściej nagłą cofkę w piwnicy bloku wielorodzinnego lub zablokowany odpływ w mieszkaniu na niskim piętrze. Na osiedlach Huby i Partynice zdarzają się też wybicia z wpustów podwórkowych po intensywnych opadach — przeciążona kanalizacja ogólnospławna nie nadąża z odprowadzaniem wody deszczowej.`,
        `Przy ul. Biegasza i Sztabowej interweniowaliśmy wielokrotnie w sytuacjach, gdy osad w poziomie piwnicy był tak zwarty, że woda zalewała piwnicę jednego z lokatorów. Taki scenariusz wymaga zarówno udrożnienia, jak i szybkiej dokumentacji szkody dla ubezpieczyciela.`,
        `Dojazd na Krzyki z bazy zajmuje ${districts.find(d=>d.slug==="krzyki")!.travelTime.split(";")[0]} — przy awarii wieczornej lub nocnej ruch jest minimalny i docieramy szybciej niż w ciągu dnia.`,
      ],
      "separatory-tluszczu": [
        `Separatory tłuszczu na Krzykach instalowane są głównie w lokalach gastronomicznych przy Powstańców Śląskich, na Hubach i w rejonie Partynic. Restauracje i bary serwujące smażone potrawy generują największe obciążenie tłuszczem — separator wymaga czyszczenia co 4–8 tygodni, w zależności od intensywności produkcji.`,
        `Przy ul. Karkonoskiej i al. Wiśniowej obsługujemy kuchnie w hotelach apartamentowych i stołówkach osiedlowych. Tu częstotliwość czyszczenia jest mniejsza (co 2–3 miesiące), ale odcinek za separatorem często nie jest objęty żadnym serwisem — to właśnie tam osad tłuszczowy kumuluje się miesiącami.`,
        `Po każdym serwisie wystawiamy protokół zgodny z wymogami Sanepidu — ważne dla lokali przechodzących kontrolę higieniczną lub starających się o certyfikaty HACCP.`,
      ],
      "serwis-przepompowni": [
        `Przepompownie ścieków na Krzykach to głównie obiekty przy nowych osiedlach Kleciny i Partynic — budowane po 2005 r. z automatyką i sygnalizacją GSM. Serwis polega na rocznym przeglądzie pomp, kontroli pływaków i czyszczeniu komory z osadu. Przy przeglądach dokumentujemy pobór prądu obu pomp — wzrost o ponad 20% wskazuje na zużycie wirnika.`,
        `Starsze przepompownie na Borku i Gaju mogą być wyposażone w pompy bez sygnalizacji zdalnej — awaria jest wykrywana dopiero, gdy poziom ścieków przekracza krawędź komory. Dla takich obiektów rekomendujemy modernizację sterownika o moduł GSM.`,
        `Dojazd na Krzyki umożliwia sprawne dotarcie do przepompowni zlokalizowanych zarówno w zabudowie osiedlowej, jak i przy obiektach usługowych wzdłuż Powstańców Śląskich.`,
      ],
    },
    fabryczna: {
      wuko: [
        `Czyszczenie hydrodynamiczne na Fabrycznej to przede wszystkim praca przy odwodnieniach placów i parkingów przy ul. Strzegomskiej, Robotniczej i Kosmonautów. Rynny i odwodnienia liniowe kumulują piasek, liście i resztki olejowe z parkingów TIR — WUKO przy 150 bar i głowicy rotacyjnej wypłukuje zanieczyszczenia bez demontażu nawierzchni.`,
        `W strefach B2B przy Muchoborskiej i Gwiaździstej czyszczimy też kanalizację sanitarną hal produkcyjnych — rury DN150–DN300, nierzadko na długich odcinkach. Wąż WUKO o długości 120 m pozwala czyścić od jednego punktu rewizyjnego do drugiego bez przestawiania pojazdu wzdłuż hal.`,
        `Przy zleceniach dla firm awizujemy przyjazd z wyprzedzeniem — ochrona musi mieć numer rejestracyjny pojazdu i nazwę firmy. Dokumenty serwisowe (protokół z czyszczenia) przekazujemy na adres e-mail działu technicznego.`,
      ],
      "udraznianie-rur": [
        `Udrażnianie rur na Fabrycznej dotyczy najczęściej kanalizacji sanitarnej w biurach i halach magazynowych — odpływy z toalet przemysłowych, kuchenek socjalnych i pryszniców pracowniczych. Zatory powodowane są głównie przez chusteczki nawilżane i resztki jedzenia wrzucane do muszli w kuchenkach socjalnych.`,
        `W obiektach przy ul. Legnicka i Strzegomskiej realizowaliśmy udrożnienia na instalacjach z PE i PP — nowszy materiał, ale przy dużym natężeniu użytkowania przez pracowników zmianowych zatory pojawiają się równie często jak w starszych budynkach.`,
        `Dla firm proponujemy umowę serwisową obejmującą dwa przeglądy rocznie — pozwala to planować czyszczenie poza godzinami pracy i unikać awarii w środku tygodnia roboczego.`,
      ],
      "inspekcja-tv": [
        `Inspekcja TV kanalizacji na Fabrycznej jest często realizowana przy odbiorze nowych hal logistycznych i biurowców w strefie Parku Biznesu. Inwestor wymaga wideo-dokumentacji instalacji przed przekazaniem obiektu — kamera rejestruje stan rur, złącz i studni rewizyjnych, a raport wchodzi do dokumentacji powykonawczej.`,
        `Przy ul. Robotniczej i Kosmonautów wykonywaliśmy inspekcje w zakładach, gdzie podejrzewano infiltrację wód gruntowych do kanalizacji — zjawisko szczególnie częste w hali ze starą posadzką betonową z lat 80. Kamera z sondą lokalizacyjną pozwoliła wskazać konkretny metraż wymagający renowacji bezwykopowej.`,
        `Inspekcja kamerą po WUKO to standard, który zalecamy dla wszystkich odwodnień hal produkcyjnych — po czyszczeniu widać wyraźnie stan ścianek, pęknięcia i miejsca z nieodpowiednim spadkiem.`,
      ],
      "pogotowie-kanalizacyjne": [
        `Pogotowie kanalizacyjne na Fabrycznej działa w trybie B2B — firmy dzwonią zazwyczaj z awarią przepompowni, zablokowanym odwodnieniem przy rampie lub cofką w toaletach zakładowych. Każda z tych sytuacji grozi przestojem operacyjnym, dlatego priorytetyzujemy takie zgłoszenia.`,
        `Przy ul. Strzegomskiej i Muchoboru interweniowaliśmy w sytuacjach, gdzie awaria separatora lub przepompowni blokowała pracę całego obiektu logistycznego. Ekipa wyjeżdża ze sprzętem do jednoczesnego udrożnienia i diagnostyki kamerą — jeden wyjazd, kompleksowa ocena.`,
        `Awizacja z ochroną nie opóźnia naszej pracy — przy pilnych zgłoszeniach prowadzimy przez telefon z dyspozytorem firmy i jednocześnie wzywamy jednostkę. Czas reakcji od zlecenia do wyjazdu: do 30 minut.`,
      ],
      "separatory-tluszczu": [
        `Separatory tłuszczu na Fabrycznej montowane są przy kantynach zakładowych, restauracjach w biurowcach i stacjach paliw przy Legnickiej. Stacje paliw mają zazwyczaj separatory substancji ropopochodnych (nie tłuszczu), ale kantyny dużych zakładów przy Strzegomskiej generują obciążenie porównywalne z małą restauracją.`,
        `Przy ul. Muchoborskiej i Kosmonautów obsługujemy separatory w centrach gastronomicznych przy biurowcach klasy A — częstotliwość czyszczenia to 6–8 tygodni dla kuchni z produkcją powyżej 200 posiłków dziennie.`,
        `Dla firm wystawiamy dokumentację serwisową w wersji elektronicznej zgodną z wymogami ISO 14001 — ważne dla zakładów posiadających certyfikaty środowiskowe.`,
      ],
      "serwis-przepompowni": [
        `Serwis przepompowni ścieków na Fabrycznej to jedno z głównych zadań tej dzielnicy — duże hale i centra logistyczne przy Strzegomskiej, Robotniczej i Kosmonautów posiadają własne przepompownie obsługujące zbyt odległy od kolektora głównego teren.`,
        `Typowy problem: przepompownia przy hal magazynowej zgłasza alarm o 3:00 w nocy — wirnik jednej pompy zablokowany folią z magazynu. Wymagana natychmiastowa interwencja, żeby nie zalać posadzki magazynowej. Dojeżdżamy ze sprzętem do czyszczenia komory i wymiany wirnika.`,
        `Dla obiektów bez sygnalizacji zdalnej proponujemy instalację modułu GSM na sterowniku — koszt modułu 200–400 zł, oszczędność na awaryjnych wyjazdach nocnych wielokrotnie większa.`,
      ],
    },
    "psie-pole": {
      wuko: [
        `Czyszczenie hydrodynamiczne na Psim Polu najczęściej dotyczy przyłączy kanalizacyjnych w domach jednorodzinnych — Zakrzów, Pawłowice, Sołtysowice. Przyłącza DN110–DN160 z PVC, wykonane często przez właścicieli lub lokalnych wykonawców w latach 90., mają zróżnicowane spadki i połączenia. WUKO przy 100–120 bar wyczyści je bez kopania trencza.`,
        `Na ul. Krzywoustego i Zakrzowskiej dominują posesje z systemem drenażu opaskowego — przy źle zaprojektowanym drenażu woda gruntowa wpływa do kanalizacji sanitarnej przez rozszczelnione złącza. Po WUKO zalecamy inspekcję kamerą, żeby sprawdzić stan złącz na całym przyłączu.`,
        `W Lipie Piotrowskiej część posesji ma szamba lub przydomowe oczyszczalnie — tu czyszczenie ciśnieniowe stosujemy na odcinkach przed oczyszczalnią lub na rurach rozdzielczych drenażu rozsączającego.`,
      ],
      "udraznianie-rur": [
        `Udrażnianie rur na Psim Polu to w dużej mierze przyłącza i piony w domach jednorodzinnych — Sołtysowice, Karłowice, Pawłowice. Zatory w PVC DN110 powstają najczęściej na kolanach i czwórniku, gdzie materiał stały (tłuszcz + papier) osiada przy zmniejszeniu prędkości przepływu.`,
        `Na nowych osiedlach przy ul. Długosza w Sołtysowicach i ul. Pawłowickiej trafiamy na instalacje z PP (szary) — materiał odporny, ale złącza klejone przy budowie domku bywają nieszczelne. Spirala elektryczna z głowicą Ø32 mm dociera do zatoru bez problemu.`,
        `Przy przyłączach biegnących przez ogród (charakterystycznych dla działek Psiego Pola) ważna jest długość spirali — używamy sprzętu z wężem do 30 m, co wystarczy dla typowego przyłącza posesjowego.`,
      ],
      "inspekcja-tv": [
        `Inspekcja TV kanalizacji na Psim Polu jest szczególnie popularna przed zakupem domu jednorodzinnego — Zakrzów, Karłowice, Pawłowice. Kamera w przyłączu i wewnętrznej instalacji potrafi ujawnić korozję, złe złącza i korzenie zanim nabywca podpisze akt notarialny.`,
        `Na ul. Lipowej (Lipa Piotrowska) i Przełęcznej realizowaliśmy inspekcje po nawracających problemach z cofaniem ścieków przez odpływ podłogowy. W obu przypadkach kamera wykazała złe spadki przyłącza — problem wymagający przeprojektowania, a nie tylko udrożnienia.`,
        `Dla posesji z przydomową oczyszczalnią inspekcja kamerą pozwala ocenić stan rur dopływowych i rewizyjnych bez konieczności rozkopywania ogrodu.`,
      ],
      "pogotowie-kanalizacyjne": [
        `Pogotowie kanalizacyjne na Psim Polu jest potrzebne najczęściej po intensywnych opadach — cofka z przeciążonego kolektora MPWiK lub infiltracja wody gruntowej do przyłącza zalewa piwnicę. W Zakrzowie i Pawłowicach zdarzają się też awarie szamb przepełnionych po zimie.`,
        `Przy ul. Krzywoustego i Zakrzowskiej interweniowaliśmy w sytuacjach, gdy drenaż opaskowy domu odprowadzał wodę do kanalizacji sanitarnej — niedopuszczalne według prawa budowlanego, ale spotykane w budynkach z lat 90. Szybka diagnoza i rozwiązanie tymczasowe (przepompowanie), a następnie projekt docelowy.`,
        `Dojazd na Psie Pole zajmuje ${districts.find(d=>d.slug==="psie-pole")!.travelTime.split(";")[0]} — przy awariach nocnych ruch jest symboliczny i docieramy bliżej dolnej granicy przedziału.`,
      ],
      "separatory-tluszczu": [
        `Separatory tłuszczu na Psim Polu montowane są głównie w lokalach gastronomicznych przy ul. Krzywoustego i w centrach handlowych Sołtysowic. W tej dzielnicy dominuje gastronomia serwująca lokalne potrawy — pizzerie, bary grillowe, smażalnie — z wysokim obciążeniem tłuszczem zwierzęcym.`,
        `Przy ul. Zakrzowskiej obsługujemy separator w stołówce przyzakładowej — produkcja ponad 300 posiłków dziennie wymaga czyszczenia co 3–4 tygodnie. Protokół serwisowy przesyłamy do działu BHP zakładu.`,
        `Dla lokali w Sołtysowicach i Karłowicach, które dopiero otwierają działalność gastronomiczną, doradzamy dobór odpowiedniej klasy separatora (G4–G10) na podstawie planowanej liczby posiłków — nieprawidłowo dobrany separator wymaga czyszczenia 2× częściej.`,
      ],
      "serwis-przepompowni": [
        `Przepompownie ścieków na Psim Polu to nieodłączny element infrastruktury osiedlowej — Zakrzów, Pawłowice i część Sołtysowic mają własne przepompownie obsługujące odległe od głównego kolektora rejony. MPWiK zarządza większością z nich, ale prywatne przepompownie przy nowych osiedlach deweloperskich wymagają serwisu właściciela lub wspólnoty.`,
        `Przy ul. Pawłowickiej serwisowaliśmy przepompownię osiedlową, której pływak górny był uszkodzony — pompa pracowała bez przerwy, co doprowadziło do przegrzania i uszkodzenia uzwojenia. Koszt naprawy silnika jest wielokrotnie wyższy niż koszt corocznego przeglądu pływaków.`,
        `Dla nowych osiedli przy ul. Długosza i Zakrzowskiej proponujemy umowę serwisową z dwoma przeglądami rocznie i interwencją 24/7 przy alarmie — ważne dla zarządców, którzy nie mają technika na stałe.`,
      ],
    },
    srodmiescie: {
      wuko: [
        `Czyszczenie hydrodynamiczne w Śródmieściu realizujemy głównie na poziomach kamienic przy pl. Grunwaldzkim, Nadodrzu i Sępolnie — rury żeliwne z przełomu XIX i XX w. z kilkucentymetrową warstwą osadu na ściankach. Przy ciśnieniu 140–160 bar i głowicy rotacyjnej usuwamy nawet wieloletnie złogi bez uszkadzania starego materiału.`,
        `Praca w Śródmieściu wymaga dyskrecji — przy kamienicach mieszkalnych i obiektach przy uczelniach Politechniki Wrocławskiej i UWr planujemy zlecenia na godziny ranne lub wieczorne. Pojazd WUKO parkuje na miejscu ustalonym wcześniej z zarządcą lub administratorem budynku.`,
        `Po WUKO w kamienicach Nadodrza i Ołbinu zawsze zalecamy inspekcję kamerą — stare rury po czyszczeniu często ujawniają infiltracje i pęknięcia. Warto wiedzieć o nich przed remontem.`,
      ],
      "udraznianie-rur": [
        `Udrażnianie rur w Śródmieściu to przede wszystkim interwencje w kamienicach — piony żeliwne DN100, poziomy ceglane i przyłącza do kolektora ogólnospławnego. Zatory na Ołbinie i przy ul. Świdnickiej wynikają najczęściej z tłuszczu z lokali usługowych na parterze, który zalewa odpływ mieszkań na wyższych piętrach.`,
        `Przy pl. Grunwaldzkim i w okolicach kampusu UWr obsługujemy mieszkania studenckie i akademiki — tu zatory powodowane są głównie przez waciki i chusteczki w toaletach. Spirala elektryczna z głowicą Ø32 mm rozwiązuje problem w ciągu 20–40 minut.`,
        `W starszych kamienicach Nadodrza piony często nie mają rewizji — wejście dla spirali robimy przez syfon umywalkowy lub zlew. Pracujemy bez kucia ścian i bez otwierania zabudowy.`,
      ],
      "inspekcja-tv": [
        `Inspekcja TV kanalizacji w Śródmieściu jest najczęściej zlecana przez zarządców kamienic i administratorów wspólnot na Ołbinie, Biskupinie i Sępolnie. Cel: diagnoza piwnic z nawracającymi problemami wilgoci i zapachu kanalizacyjnego bez kosztownego odkopywania.`,
        `Przy ul. Sienkiewicza i al. Słowackiego realizowaliśmy inspekcje dla właścicieli apartamentów — kamera potwierdziła lub wykluczyła wadliwość instalacji przed remontem łazienki. Wynik na nośniku USB + raport tekstowy z opisem odcinka.`,
        `Inspekcja kamerą w zabytkowych kamienicach przy ul. Worcella (Nadodrze) jest szczególnie ważna — prace budowlane wymagają uzgodnień konserwatorskich, a ustalenie stanu instalacji bez kucia ścian jest tu warunkiem koniecznym.`,
      ],
      "pogotowie-kanalizacyjne": [
        `Pogotowie kanalizacyjne w Śródmieściu to częste wezwania z kamienic przy ul. Świdnickiej, Podwalu i al. Słowackiego — cofki, zapachy kanalizacyjne i mokre piwnice. Stara kanalizacja ogólnospławna z przełomu XIX/XX w. jest podatna na przeciążenie przy deszczu, a pęknięcia nieregularnie pojawiają się na odcinkach nieremontowanych od dziesięcioleci.`,
        `Przy incydentach w kamienicach wynajętych przez studentów (okolice UWr) interweniujemy często w godzinach nocnych lub wczesnoporannych. Ekipa wyjeżdża z pełnym wyposażeniem: spirala, mini-kamera push, zestaw do udrożnienia pod ciśnieniem.`,
        `Dojazd w Śródmieście zajmuje ${districts.find(d=>d.slug==="srodmiescie")!.travelTime.split(";")[0]} — choć odległość jest mała, ruch przy Świdnickiej i Podwalu bywa gęsty.`,
      ],
      "separatory-tluszczu": [
        `Separatory tłuszczu w Śródmieściu obsługujemy głównie na Nadodrzu i Ołbinie — restauracje serwujące kuchnię śródziemnomorską, azjatycką i polską tradycyjną mają bardzo zróżnicowane obciążenie tłuszczem. Lokale na ul. Worcella i al. Słowackiego wymagają czyszczenia co 4–6 tygodni w sezonie.`,
        `Przy Sępolnie i Biskupinie obsługujemy separator w hotelu butikowym i centrum konferencyjnym — tu obciążenie sezonowe jest wysokie podczas konferencji, a niskie poza sezonem. Ustalamy elastyczny harmonogram serwisu zależny od obłożenia.`,
        `Po każdym serwisie przekazujemy protokół z datą, opisem prac i zaleceniami. Zarządcy kamienic przechowują protokoły na potrzeby kontroli Sanepidu i przeglądów wspólnotowych.`,
      ],
      "serwis-przepompowni": [
        `Serwis przepompowni w Śródmieściu dotyczy głównie obiektów przy uczelniach i w apartamentowcach nad Odrą — budynki bez naturalnego spływu do kolektora miejskiego wymagają własnej przepompowni. Przy ul. Seweryna na Sępolnie serwisowaliśmy przepompownię w piwnicy budynku mieszkalnego — komora w piwnicy, dostęp przez właz, wymagana praca w ograniczonej przestrzeni.`,
        `Przy pl. Grunwaldzkim i w okolicach kampusu Politechniki przepompownie są nadzorowane przez administratora budynku, ale awarie zdarzają się w weekendy. Działamy 24/7 — dyspozytor odbiera telefon o każdej porze.`,
        `Inspekcję po awarii przepompowni w kamienicy warto połączyć z przeglądem instalacji odpływowej — jeśli przepompownia jest przeciążona, często odpowiada za to niedrożny odpływ tłoczny za urządzeniem.`,
      ],
    },
    "stare-miasto": {
      wuko: [
        `Czyszczenie hydrodynamiczne na Starym Mieście wykonujemy przy użyciu kompaktowego sprzętu — wąskie ulice i brak dojazdu dla pojazdu WUKO pod sam wlot kanalizacji wymuszają pracę z wężem długości 80–100 m prowadzonym pieszo. Dla kolektora przy Rynku i Świdnickiej używamy głowicy rotacyjnej przy 160 bar — kolektor ceglany z XIX w. wymaga odpowiedniego ciśnienia, żeby usunąć wieloletni osad tłuszczowy.`,
        `Planujemy prace poza godzinami otwarcia restauracji — typowo od 22:00 do 6:00 lub wczesnym rankiem przed otwarciem. Dzięki temu nie zakłócamy obsługi gości i unikamy przetłaczania ścieków przez czynne odcinki gastronomiczne.`,
        `Po każdym czyszczeniu ciśnieniowym przy Rynku i Placu Solnym wykonujemy krótki przegląd kamerą push-cam — sprawdzamy, czy po WUKO nie pojawiły się odsłonięte pęknięcia w starym ceglano-kamionkowym kolektorze.`,
      ],
      "udraznianie-rur": [
        `Udrażnianie rur na Starym Mieście to najczęściej interwencje w restauracjach, hotelach i kamienicach przy Rynku, ul. Kuźniczej i Oławskiej. Zatory przy przewadze gastronomicznej powodowane są przez tłuszcz i resztki jedzenia — w starych żeliwnych i kamionkowych rurach tworzą się zwęża nie do udrożnienia spiralą bez wcześniejszego rozbicia złogu.`,
        `Przy ul. Świdnickiej i Kazimierza Wielkiego udrażniamy odpływy z restauracji i lokali hotelowych — praca nocna lub wczesnoporanna, żeby nie blokować działalności gastronomicznej. Spirala z głowicą tnącą Ø50 mm + WUKO po udrożnieniu to standardowy scenariusz.`,
        `W kamienicach przy Placu Solnym i Kuźniczej staramy się udrażniać bez wchodzenia na zaplecze kuchenne w czasie pracy — wejście przez rewizję na klatce schodowej lub z zewnątrz przez wpust podwórkowy.`,
      ],
      "inspekcja-tv": [
        `Inspekcja TV kanalizacji na Starym Mieście jest szczególnie wartościowa dla właścicieli lokali gastronomicznych przy Rynku i Placu Solnym planujących remont lub zmianę układu kuchni. Kamera dokumentuje stan odcinka przyłączeniowego i poziomów bez konieczności kucia posadzek — ważne przy obiektach pod nadzorem konserwatora zabytków.`,
        `Przy ul. Kuźniczej i Oławskiej realizowaliśmy inspekcje dla zarządców kamienic po zgłoszeniach o zapachu kanalizacyjnym w lokalach biurowych na wyższych piętrach — kamera wskazała wentylację kanalizacyjną z wadliwą wywiewką, która cofała gazy do mieszkań.`,
        `Raport z inspekcji na Starym Mieście wchodzi często do dokumentacji historycznej budynku — przekazujemy pliki wideo + raport tekstowy z opisem stanu każdego odcinka.`,
      ],
      "pogotowie-kanalizacyjne": [
        `Pogotowie kanalizacyjne na Starym Mieście uruchamiane jest najczęściej przez restauracje i hotele — w piątkowy wieczór, w sobotę w południe lub w sylwestra. Zablokowana kanalizacja gastronomiczna przy Rynku oznacza konieczność zamknięcia kuchni i utratę kilkudziesięciu rezerwacji — reagujemy priorytetowo.`,
        `Przy ul. Świdnickiej i Kazimierza Wielkiego interweniowaliśmy wielokrotnie w hotelach podczas dużych eventów — cofka na poziomie -1 przy pełnym obłożeniu hotelu wymaga natychmiastowej akcji. Pracujemy dyskretnie, od strony zaplecza, bez alarmu dla gości.`,
        `Dojazd na Stare Miasto zajmuje ${districts.find(d=>d.slug==="stare-miasto")!.travelTime.split(";")[0]} — blisko centrum, ale strefa ruchu ograniczonego wymaga pozostawienia pojazdu poza deptak i dalszej pracy z przenośnym sprzętem.`,
      ],
      "separatory-tluszczu": [
        `Separatory tłuszczu na Starym Mieście to temat numer jeden dla gastronomii przy Rynku, Placu Solnym i ul. Kuźniczej. Restauracje serwujące kilkaset posiłków dziennie generują obciążenie tłuszczowe wymagające czyszczenia separatora co 2–4 tygodnie. Protokół serwisowy jest tu nie tylko wymogiem Sanepidu, ale też warunkiem spełnienia standardów sieci hotelowych i franczyz gastronomicznych.`,
        `Na Starym Mieście szczególnie ważne jest czyszczenie odcinka za separatorem — w kolektorach z XIX w. osad tłuszczowy za separatorem kumuluje się latami i tworzy zwężenia trudne do usunięcia bez WUKO. Łączymy więc serwis separatora z czyszczeniem ciśnieniowym odcinka wylotowego.`,
        `Dla hoteli przy Świdnickiej i Oławskiej obsługujemy separatory według umów serwisowych z miesięczną częstotliwością — dyspozycja prac jest przekazywana działowi technicznego dyrektora hotelu z wyprzedzeniem 72 godzin.`,
      ],
      "serwis-przepompowni": [
        `Serwis przepompowni na Starym Mieście obejmuje obiekty w głębszych piwnicach kamienicy lub w podziemnych poziomach hoteli i galerii przy Rynku. Dostęp do komory wymaga często wejścia przez zabytkową piwnicę — koordynujemy to z administratorem budynku.`,
        `Przy ul. Kazimierza Wielkiego serwisowaliśmy przepompownię w piwnicy kamienicy pełniącej funkcję lokalu gastronomicznego — duże obciążenie ściekami gastronomicznymi oznaczało nagromadzenie tłuszczu w komorze i blokowanie wirnika co 3–4 miesiące. Rozwiązanie: separator tłuszczu przed przepompownią + serwis co 2 miesiące.`,
        `W hotelach przy Placu Solnym i Świdnickiej przepompownie są monitorowane przez systemy BMS budynku — przy alarmie kontaktuje się z nami dział techniczny. Utrzymujemy numer dyżurny 24/7 dla zarejestrowanych klientów hotelowych.`,
      ],
    },
  };

  const combo = combos[district.slug]?.[service.slug];
  if (combo) return combo;

  // Fallback dla ewentualnych przyszłych kombinacji — nadal lokalny
  return [
    `${service.name} ${district.locative} wykonywana jest z uwzględnieniem specyfiki lokalnej sieci: ${district.infrastructure}`,
    `${service.whenNeeded} ${district.locative} spotykamy ten problem szczególnie często w rejonie ${district.streets}.`,
    `Obsługujemy ${district.examples}. ${district.travelTime}. Kontakt 24/7: 602 481 688.`,
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
  const base: FaqItem[] = [
    {
      q: `Czy realizujecie ${service.name.toLowerCase()} ${district.locative}?`,
      a: `Tak. Obsługujemy ${district.name} oraz najbliższe osiedla: ${district.examples}. Przy zgłoszeniu od razu ustalamy dostęp, pilność i potrzebny sprzęt.`,
    },
    {
      q: `Jak szybko można umówić usługę ${district.locative}?`,
      a: `Przy pilnych zgłoszeniach ${district.travelTime.split(";")[0]}. Przy planowanych zleceniach ustalamy termin dopasowany do dostępności budynku lub firmy.`,
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

  // Pytania specyficzne dla kombinacji dzielnica × usługa
  const specific: Record<string, Record<string, FaqItem[]>> = {
    "stare-miasto": {
      "separatory-tluszczu": [
        {
          q: "Czy serwisujecie separatory w restauracjach przy Rynku i Placu Solnym?",
          a: "Tak — restauracje w centrum Wrocławia to nasz regularny klient. Pracujemy po godzinach gastronomicznych lub wczesnym rankiem, żeby nie zakłócać obsługi gości. Protokół serwisowy przekazujemy działowi technicznemu lub właścicielowi lokalu.",
        },
        {
          q: "Jak często należy czyścić separator tłuszczu w restauracji przy Rynku?",
          a: "Dla restauracji z wydajnością ponad 150 posiłków dziennie typowy cykl to 2–4 tygodnie. Przy kuchni intensywnie używającej tłuszczów zwierzęcych może być konieczne czyszczenie co 10–14 dni. Ustalamy harmonogram po pierwszym przeglądzie — wtedy widać realne tempo napełniania separatora.",
        },
      ],
      "pogotowie-kanalizacyjne": [
        {
          q: "Czy przyjedziecie do hotelu przy Rynku w środku nocy?",
          a: "Tak, jesteśmy dostępni 24/7. Dla obiektów hotelowych przy Starym Mieście priorytetyzujemy zgłoszenia, ponieważ awaria kanalizacji przy pełnym obłożeniu hotelu to sytuacja wymagająca natychmiastowej reakcji. Pracujemy dyskretnie, od strony zaplecza.",
        },
      ],
      "inspekcja-tv": [
        {
          q: "Czy inspekcja kamerą wymaga odkopywania na terenie zabytkowym Starego Miasta?",
          a: "Nie — kamera wprowadzana jest przez istniejące rewizje lub wpusty, bez jakichkolwiek prac ziemnych. Dzięki sondzie lokalizacyjnej wskazujemy dokładne miejsce usterki na powierzchni, co jest punktem wyjścia do ewentualnych uzgodnień z konserwatorem zabytków.",
        },
      ],
    },
    fabryczna: {
      "serwis-przepompowni": [
        {
          q: "Czy możecie serwisować przepompownię w hali logistycznej przy aktywnej pracy magazynu?",
          a: "Tak — przy odpowiednim planowaniu prace serwisowe można wykonać bez zatrzymywania logistyki. Awizujemy przyjazd, uzgadniamy z ochroną i działem technicznym, a prace prowadzimy w wyznaczonej strefie bez wpływu na ciągi komunikacyjne magazynu.",
        },
      ],
      wuko: [
        {
          q: "Czy WUKO można użyć do czyszczenia odwodnień parkingów TIR przy hali?",
          a: "Tak — odwodnienia liniowe i kratek deszczowych przy parkingach TIR to typowe zlecenie na Fabrycznej. Głowica punktowa WUKO przy 150 bar usuwa piasek, szlam i olej bez demontażu nawierzchni. Po czyszczeniu sprawdzamy przepływ w studni zbiorczej.",
        },
      ],
    },
    "psie-pole": {
      "inspekcja-tv": [
        {
          q: "Czy możecie sprawdzić kamerą przyłącze kanalizacyjne przed zakupem domu na Psim Polu?",
          a: "Tak — to jedna z naszych popularnych usług dla nabywców nieruchomości w Zakrzowie, Pawłowicach i Sołtysowicach. Inspekcja przyłącza przed podpisaniem aktu notarialnego może ujawnić wady, które stają się argumentem negocjacyjnym lub podstawą do rezygnacji z zakupu.",
        },
      ],
      "pogotowie-kanalizacyjne": [
        {
          q: "Co robić, gdy po deszczu woda zalewa mi piwnicę na Psim Polu?",
          a: "Zadzwoń pod 602 481 688 — wyślemy ekipę z pompą i mini-kamerą. W pierwszej kolejności przepompujemy wodę, a następnie sprawdzimy, skąd pochodzi: z cofki z kolektora MPWiK, z nieszczelnego przyłącza czy z wadliwego drenażu opaskowego. W zależności od przyczyny dobieramy dalsze działania.",
        },
      ],
    },
    krzyki: {
      wuko: [
        {
          q: "Czy WUKO jest bezpieczne dla starych rur żeliwnych w bloku z wielkiej płyty?",
          a: "Tak, pod warunkiem właściwego doboru ciśnienia. Dla rur żeliwnych DN100 stosujemy ciśnienie 100–120 bar z głowicą rotacyjną o miękkim wyrzucie — skutecznie usuwa osad bez naruszania korodowanych ścianek. Jeśli po WUKO kamera wykaże pęknięcia, informujemy o tym administratora budynku.",
        },
      ],
      "pogotowie-kanalizacyjne": [
        {
          q: "Czy obsługujecie cofki w piwnicach bloków na Borku i Gaju?",
          a: "Tak — to jeden z najczęstszych scenariuszy, z którymi wzywają nas na Krzyki. Ekipa przyjeżdża ze spiralą i mini-kamerą. Przy cofce z sieci MPWiK dokumentujemy zdarzenie zdjęciami i kontaktujemy właściciela z dyspozytorem MPWiK w celu złożenia reklamacji.",
        },
      ],
    },
    srodmiescie: {
      "inspekcja-tv": [
        {
          q: "Czy inspekcja kamerą może zastąpić kucie ścian w kamienicy na Ołbinie lub Nadodrzu?",
          a: "Tak — to właśnie jej główna zaleta przy starych kamienicach. Kamera z sondą lokalizacyjną wskazuje dokładne miejsce usterki (pęknięcie, zator, korzeń) bez niszczenia tynków czy podłóg. Wynik przekazujemy w formie wideo + raportu tekstowego.",
        },
      ],
      "separatory-tluszczu": [
        {
          q: "Czy serwisujecie separatory tłuszczu w restauracjach na Nadodrzu i przy al. Słowackiego?",
          a: "Tak — Śródmieście to jedno z naszych głównych obszarów działania dla gastronomii. Ustalamy harmonogram czyszczenia dopasowany do intensywności pracy kuchni, a protokół serwisowy przesyłamy elektronicznie.",
        },
      ],
    },
  };

  // Zbieramy pytania specyficzne dla tej kombinacji
  const extraFaqs = specific[district.slug]?.[service.slug] ?? [];

  return [...base, ...extraFaqs];
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

// ─── MAPOWANIE NA DISTRICTSERVICE[] ──────────────────────────────────────────

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
    localContext: localContextFor(district, service),
    infrastructure: district.infrastructure,
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
