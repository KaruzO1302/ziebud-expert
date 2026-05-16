import type { PhotoKey } from "@/lib/photos";

export type ArticleTable = {
  headers: string[];
  rows: string[][];
};

export type ArticleSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: ArticleTable;
  afterTableParagraphs?: string[];
  inlineCta?: ArticleCta;
};

export type ArticleCta = {
  title: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  lead: string;
  publishedAt: string;
  readTime: string;
  photoKey: PhotoKey;
  serviceSlugs: string[];
  citySlugs: string[];
  sections: ArticleSection[];
  cta: ArticleCta;
};

export const articles: Article[] = [
  {
    slug: "wuko-wroclaw-dlaczego-to-najskuteczniejsza-metoda",
    title:
      "Czyszczenie hydrodynamiczne kanalizacji Wrocław — metoda WUKO",
    category: "WUKO i czyszczenie kanalizacji",
    metaTitle:
      "Czyszczenie hydrodynamiczne kanalizacji Wrocław — metoda WUKO",
    metaDescription:
      "Czyszczenie hydrodynamiczne kanalizacji we Wrocławiu. Sprawdź, jak działa metoda WUKO, kiedy warto ją stosować i czym różni się od spirali.",
    excerpt:
      "Czyszczenie hydrodynamiczne, nazywane też metodą WUKO, to jedna z najskuteczniejszych technik usuwania zatorów, osadów i zanieczyszczeń z kanalizacji.",
    lead:
      "Czyszczenie hydrodynamiczne, zwane też czyszczeniem ciśnieniowym lub metodą WUKO, to profesjonalna technika udrażniania i czyszczenia kanalizacji za pomocą wody pod bardzo wysokim ciśnieniem. Jest to jedna z najskuteczniejszych metod stosowanych we Wrocławiu przy trudnych zatorach i przewodach wymagających dokładniejszego oczyszczenia.",
    publishedAt: "2026-04-28",
    readTime: "8 min",
    photoKey: "adobeWukoUlica",
    serviceSlugs: ["wuko-wroclaw", "uslugi-kanalizacyjne", "udraznianie-rur"],
    citySlugs: ["wroclaw"],
    sections: [
      {
        title: "Na czym polega czyszczenie hydrodynamiczne",
        paragraphs: [
          "Specjalistyczny pojazd WUKO jest wyposażony w pompę wysokociśnieniową, bęben z wężem i wymienne dysze. Woda wtłaczana pod dużym ciśnieniem rozbija osady, tłuszcz, korzenie i inne zanieczyszczenia, a następnie wypłukuje je z rury.",
          "W odróżnieniu od tradycyjnej spirali, metoda hydrodynamiczna czyści całą średnicę rury na całej jej długości, a nie tylko udrażnia wąski kanał. Dzięki temu efekt jest zwykle trwalszy i lepiej porządkuje stan przewodu.",
        ],
        inlineCta: {
          title: "Masz nawracający zator?",
          text: "Zadzwoń i opisz objawy. Podpowiemy, czy lepsza będzie spirala, WUKO czy szersza diagnostyka kanalizacji.",
          primaryLabel: "Zadzwoń: 602 481 688",
          primaryHref: "tel:+48602481688",
        },
      },
      {
        title: "Kiedy warto zastosować czyszczenie hydrodynamiczne",
        bullets: [
          "nawracające zatory, gdy problem wraca co kilka miesięcy",
          "silne tłuste osady w kanalizacji z lokali gastronomicznych",
          "korzenie drzew wchodzące do rur",
          "zapchana kanalizacja deszczowa",
          "dłuższe odcinki kanalizacji wymagające dokładniejszego czyszczenia",
          "przeglądy prewencyjne we wspólnotach i firmach",
        ],
        paragraphs: [
          "Metoda WUKO daje największą przewagę tam, gdzie sama spirala byłaby za słaba albo usunęłaby tylko fragment problemu. Dotyczy to szczególnie instalacji, w których osady odkładają się od dłuższego czasu i powodują powtarzalne awarie.",
        ],
      },
      {
        title: "Zalety czyszczenia hydrodynamicznego",
        bullets: [
          "dokładne wyczyszczenie ścianek rury",
          "dłuższy efekt i rzadsze awarie",
          "bezpieczna praca dla prawidłowo eksploatowanych przewodów",
          "brak potrzeby stosowania chemii",
          "wysoka skuteczność tam, gdzie spirala nie daje rady",
        ],
        paragraphs: [
          "To rozwiązanie szczególnie dobrze sprawdza się tam, gdzie klientowi zależy nie tylko na doraźnym udrożnieniu przewodu, ale na dokładniejszym uporządkowaniu jego stanu i ograniczeniu ryzyka szybkiego powrotu problemu.",
        ],
      },
      {
        title: "Porównanie metod czyszczenia",
        paragraphs: [
          "Obie metody mają swoje miejsce i nie warto traktować ich jak konkurencji. Spirala mechaniczna dobrze sprawdza się przy małych, lokalnych zatorach, natomiast WUKO daje większą skuteczność przy tłustych osadach, korzeniach i przewodach wymagających kompleksowego czyszczenia.",
        ],
        table: {
          headers: ["Metoda", "Zastosowanie", "Efekt czyszczenia", "Zalety"],
          rows: [
            ["Spirala mechaniczna", "małe, lokalne zatory", "udrażnia przewód", "szybka interwencja i niższy koszt"],
            [
              "Hydrodynamiczne (WUKO)",
              "tłuste osady, korzenie, dłuższe odcinki",
              "czyści ścianki na całej średnicy",
              "dłuższy efekt i kompleksowe czyszczenie",
            ],
          ],
        },
        afterTableParagraphs: [
          "Najczęściej stosujemy obie metody łącznie: spirala pomaga przy pierwszym przebiciu zatoru, a WUKO służy do dokładnego wyczyszczenia przewodu i ograniczenia ryzyka szybkiego nawrotu problemu.",
        ],
      },
      {
        title: "Dla kogo polecamy czyszczenie hydrodynamiczne we Wrocławiu",
        bullets: [
          "wspólnoty mieszkaniowe i spółdzielnie",
          "restauracje, bary, hotele i zaplecza gastronomiczne",
          "domy jednorodzinne z problemami korzeni i osadów",
          "obiekty handlowe, biurowe i zakłady produkcyjne",
          "zarządcy nieruchomości",
        ],
        paragraphs: [
          "Jeśli zator wraca co kilka miesięcy albo instalacja odbiera wodę coraz wolniej, warto rozważyć metodę WUKO zamiast kolejnych doraźnych interwencji. To często bardziej opłacalny i stabilny krok na dłuższą metę.",
        ],
        inlineCta: {
          title: "Masz problem z nawracającym zatorami?",
          text: "Zadzwoń i opisz problem. Dobierzemy najlepszą metodę czyszczenia do rodzaju obiektu i skali zabrudzenia przewodu.",
          primaryLabel: "Zadzwoń: 602 481 688",
          primaryHref: "tel:+48602481688",
          secondaryLabel: "Zgłoś zapotrzebowanie",
          secondaryHref: "/zapytanie",
        },
      },
      {
        title: "Jak przebiega czyszczenie hydrodynamiczne",
        bullets: [
          "zgłoszenie awarii lub zapotrzebowania",
          "dojazd ekipy z pojazdem WUKO",
          "diagnoza sytuacji, w razie potrzeby z kamerą TV",
          "czyszczenie ciśnieniowe i wypłukanie zanieczyszczeń",
          "odbiór prac i podsumowanie wykonanej usługi",
        ],
        paragraphs: [
          "Cały proces ma prowadzić nie tylko do przywrócenia drożności, ale też do lepszego zrozumienia, dlaczego problem powstał i czy warto ustawić serwis prewencyjny dla obiektu.",
        ],
      },
      {
        title: "Profilaktyczne czyszczenie hydrodynamiczne",
        paragraphs: [
          "Regularne czyszczenie co pewien czas, zależnie od wieku instalacji i jej obciążenia, pomaga ograniczyć ryzyko nagłych awarii, zalewania piwnic i kosztownych remontów. To szczególnie ważne dla wspólnot, gastronomii i obiektów technicznych, gdzie skutki awarii potrafią być bardzo odczuwalne.",
          "Profilaktyka zwykle kosztuje mniej niż działania prowadzone dopiero po cofce albo całkowitym zablokowaniu przewodu. Dlatego przy bardziej obciążonych instalacjach warto myśleć o czyszczeniu nie tylko awaryjnie, ale też planowo.",
        ],
      },
    ],
    cta: {
      title: "Zamów czyszczenie WUKO",
      text: "Wykonujemy czyszczenie hydrodynamiczne kanalizacji na terenie Wrocławia i okolic. Zadzwoń albo wyślij zgłoszenie, jeśli chcesz omówić usługę dla budynku, firmy lub obiektu technicznego.",
      primaryLabel: "Zadzwoń: 602 481 688",
      primaryHref: "tel:+48602481688",
      secondaryLabel: "Zgłoś zapotrzebowanie",
      secondaryHref: "/zapytanie",
    },
  },
  {
    slug: "inspekcja-kamera-tv-kanalizacji-we-wroclawiu",
    title: "Inspekcja kamerowa kanalizacji Wrocław — diagnostyka i profilaktyka awarii",
    category: "Diagnostyka i inspekcja kamerowa",
    metaTitle:
      "Inspekcja kamerowa kanalizacji Wrocław — diagnostyka i profilaktyka awarii",
    metaDescription:
      "Inspekcja kamerowa kanalizacji we Wrocławiu. Sprawdź, kiedy warto wykonać video inspekcję, co pokazuje kamera i jak diagnostyka pomaga zapobiegać awariom.",
    excerpt:
      "Inspekcja kamerowa kanalizacji pozwala zobaczyć wnętrze przewodu bez wykopów i bez rozkuwania nawierzchni. To jedna z najskuteczniejszych metod diagnostyki przy zatorach, awariach i działaniach profilaktycznych.",
    lead:
      "Inspekcja kamerowa, nazywana też video inspekcją lub inspekcją TV, to jedna z najskuteczniejszych metod diagnostyki kanalizacji. Dzięki specjalistycznej kamerze wpuszczanej do rury widzimy dokładnie, co dzieje się wewnątrz instalacji bez rozkopywania terenu i niszczenia nawierzchni.",
    publishedAt: "2026-04-28",
    readTime: "8 min",
    photoKey: "ziebudLokalizacjaWyciekow",
    serviceSlugs: [
      "inspekcja-tv-kanalizacji",
      "lokalizacja-nieszczelnosci",
      "uslugi-kanalizacyjne",
    ],
    citySlugs: ["wroclaw"],
    sections: [
      {
        title: "Kiedy warto wykonać inspekcję kamerową kanalizacji",
        bullets: [
          "przed zakupem lub sprzedażą nieruchomości",
          "przy nawracających zatorach i cofkach",
          "przed planowanym remontem łazienki lub kuchni",
          "po zalaniu piwnicy lub awarii kanalizacji",
          "podczas odbioru przyłącza od dewelopera",
          "w ramach profilaktycznych przeglądów technicznych",
        ],
        paragraphs: [
          "Kamera daje największą wartość tam, gdzie samo objawowe udrażnianie nie wystarcza. Dzięki niej można zawęzić problem do konkretnego odcinka i uniknąć prac prowadzonych na ślepo.",
          "W ZIEBUD Expert regularnie wykonujemy takie inspekcje na terenie Wrocławia w blokach, domach jednorodzinnych i obiektach komercyjnych, gdy klient chce najpierw dobrze rozpoznać problem, a dopiero potem wejść w czyszczenie albo naprawę.",
        ],
        inlineCta: {
          title: "Chcesz sprawdzić stan swojej kanalizacji?",
          text: "Zadzwoń i umów termin inspekcji. To dobry pierwszy krok przed remontem, zakupem nieruchomości albo przy powracających problemach z odpływem.",
          primaryLabel: "Zadzwoń: 602 481 688",
          primaryHref: "tel:+48602481688",
        },
      },
      {
        title: "Diagnostyka — co dokładnie pokazuje kamera",
        bullets: [
          "tłuste osady i zatory",
          "korzenie drzew wchodzące do rury",
          "pęknięcia, rysy i przesunięcia rur",
          "zapadnięcia i deformacje",
          "nieprawidłowe spadki i połączenia",
          "obce przedmioty, piasek i elementy budowlane",
          "stan uszczelek i połączeń",
        ],
        paragraphs: [
          "Kamera rejestruje obraz w wysokiej rozdzielczości, a operator na bieżąco opisuje problem. Po inspekcji łatwiej ocenić, czy wystarczy czyszczenie, czy potrzebna jest naprawa punktowa albo szersza interwencja techniczna.",
          "W zależności od zakresu klient może otrzymać materiał wideo, zdjęcia oraz opis najważniejszych ustaleń dotyczących przewodu i miejsca problemu.",
        ],
      },
      {
        title: "Profilaktyka — jak inspekcja zapobiega awariom",
        bullets: [
          "wykrywasz problemy na wczesnym etapie",
          "planujesz czyszczenie lub renowację tylko tam, gdzie to naprawdę potrzebne",
          "unikasz powtarzających się interwencji pogotowia",
          "budujesz aktualną dokumentację techniczną budynku",
          "zwiększasz bezpieczeństwo eksploatacji instalacji",
        ],
        paragraphs: [
          "Regularna video inspekcja to często jeden z tańszych sposobów na uniknięcie kosztownych awarii. Daje możliwość wcześniejszego wychwycenia uszkodzeń, osadów albo błędów wykonawczych, zanim problem stanie się nagły i drogi w usunięciu.",
          "Dla wspólnot, firm i właścicieli nieruchomości kamera jest często najszybszą drogą do uporządkowania tematu i zaplanowania kolejnych działań na podstawie obrazu, a nie przypuszczeń.",
        ],
      },
      {
        title: "Dla kogo polecamy profilaktyczne inspekcje",
        bullets: [
          "wspólnoty mieszkaniowe — przeglądy pionów i przewodów",
          "właściciele domów jednorodzinnych — kontrola przed sezonem i po problemach z korzeniami",
          "restauracje i gastronomia — kontrola odpływów, separatorów i zaplecza",
          "deweloperzy i zarządcy nieruchomości — odbiory techniczne i przeglądy",
        ],
        paragraphs: [
          "Inspekcja kamerowa jest przydatna nie tylko przy awarii, ale też jako narzędzie profilaktyczne. Dobrze sprawdza się tam, gdzie instalacja ma pracować stabilnie przez lata i nie może zaskoczyć klienta nagłą cofką albo kosztownym przestojem.",
        ],
      },
      {
        title: "Jak wygląda proces inspekcji kamerowej we Wrocławiu",
        bullets: [
          "zgłoszenie i umówienie terminu",
          "dojazd z kamerą i sprzętem",
          "wprowadzenie kamery do rury przez studzienkę, rewizję lub inny punkt dostępu",
          "rejestracja obrazu i opis na żywo",
          "przekazanie materiału i rekomendacji dalszego działania",
        ],
        paragraphs: [
          "Czas trwania usługi zależy od długości odcinka, dostępu do instalacji i tego, czy kamera jest jedyną usługą, czy elementem większej diagnostyki. Najważniejsze jest to, że klient po badaniu wie znacznie więcej niż przed przyjazdem serwisu.",
        ],
        inlineCta: {
          title: "Potrzebujesz sprawdzić stan kanalizacji?",
          text: "Zadzwoń i opisz temat. Ustalimy, czy inspekcja kamerowa będzie najlepszym pierwszym krokiem przy Twojej instalacji.",
          primaryLabel: "Zadzwoń: 602 481 688",
          primaryHref: "tel:+48602481688",
          secondaryLabel: "Zamów inspekcję TV",
          secondaryHref: "/zapytanie",
        },
      },
      {
        title: "Korzyści z regularnej diagnostyki kamerowej",
        paragraphs: [
          "Dobrze zaplanowana diagnostyka kamerowa pomaga ograniczyć ryzyko nagłych awarii i zalewania, a przy okazji pozwala lepiej zarządzać budżetem technicznym obiektu. Zamiast działać po fakcie, łatwiej zaplanować właściwe czyszczenie albo naprawę dokładnie tam, gdzie jest potrzebna.",
          "To również większy spokój dla właściciela, zarządcy albo wspólnoty, bo instalacja ma aktualnie rozpoznany stan i nie wymaga decyzji podejmowanych na ślepo.",
        ],
      },
    ],
    cta: {
      title: "Zamów inspekcję kamerową",
      text: "Specjalizujemy się w diagnostyce i profilaktyce kanalizacji. Wykonujemy inspekcje kamerowe HD i pomagamy przełożyć wynik badania na konkretny plan działania.",
      primaryLabel: "Zadzwoń: 602 481 688",
      primaryHref: "tel:+48602481688",
      secondaryLabel: "Zgłoś zapotrzebowanie na diagnostykę",
      secondaryHref: "/zapytanie",
    },
  },
  {
    slug: "czyszczenie-separatora-tluszczu-dlaczego-jest-wazne",
    title:
      "Czyszczenie separatora tłuszczu Wrocław — obowiązek i praktyczne korzyści",
    category: "Separatory i obiekty komercyjne",
    metaTitle:
      "Czyszczenie separatora tłuszczu Wrocław — obowiązek i praktyczne korzyści",
    metaDescription:
      "Czyszczenie separatora tłuszczu we Wrocławiu. Sprawdź, dlaczego regularny serwis jest ważny dla gastronomii, wspólnot i obiektów usługowych.",
    excerpt:
      "Separator tłuszczu to obowiązkowy element wielu obiektów gastronomicznych i usługowych. Jego regularny serwis pomaga ograniczyć zatory, cofki i kosztowne awarie.",
    lead:
      "Separator tłuszczu to obowiązkowe urządzenie w lokalach gastronomicznych oraz tam, gdzie powstają ścieki z tłuszczem. Jego regularne czyszczenie ma znaczenie nie tylko dla zgodności z wymaganiami eksploatacyjnymi, ale też dla drożności całej kanalizacji.",
    publishedAt: "2026-04-28",
    readTime: "7 min",
    photoKey: "ziebudCzyszczenieSeparatorow",
    serviceSlugs: ["separatory-tluszczu", "wuko-wroclaw", "uslugi-kanalizacyjne"],
    citySlugs: ["wroclaw"],
    sections: [
      {
        title: "Dlaczego regularne czyszczenie jest potrzebne",
        bullets: [
          "zapobiega zatorom i cofką ścieków",
          "ogranicza ryzyko problemów eksploatacyjnych w obiekcie",
          "pomaga utrzymać instalację w lepszym stanie",
          "zmniejsza ryzyko przeciążenia dalszych odcinków kanalizacji",
        ],
        paragraphs: [
          "W gastronomii i obiektach z zapleczem kuchennym zaniedbany separator szybko zaczyna wpływać na całą instalację. Problem przestaje być lokalny i przenosi się dalej na odpływy, przewody oraz normalną pracę lokalu.",
        ],
        inlineCta: {
          title: "Prowadzisz lokal gastronomiczny?",
          text: "Regularny serwis separatora pomaga ograniczyć zatory i utrzymać spokojną pracę zaplecza kuchennego.",
          primaryLabel: "602 481 688",
          primaryHref: "tel:+48602481688",
        },
      },
      {
        title: "Co obejmuje serwis separatora",
        bullets: [
          "pompowanie zawartości",
          "mechaniczne czyszczenie komór",
          "sprawdzenie szczelności i drożności",
          "uporządkowanie zakresu dalszej obsługi",
          "protokół serwisowy lub opis wykonanych prac",
        ],
        paragraphs: [
          "Liczy się nie tylko samo opróżnienie separatora, ale też ocena jego stanu i sprawdzenie, czy problem nie przeszedł już dalej na kanalizację za urządzeniem. To właśnie odróżnia porządny serwis od wizyty, która daje tylko chwilową poprawę.",
        ],
      },
      {
        title: "Jak często czyścić separator",
        paragraphs: [
          "Częstotliwość czyszczenia zależy od obłożenia lokalu, ilości ścieków i rodzaju działalności. W praktyce wiele restauracji i lokali gastronomicznych ustawia serwis cykliczny, bo to bezpieczniejsze niż działanie dopiero po awarii.",
          "Przy mniejszym ruchu harmonogram może być rzadszy, ale nadal warto go planować z wyprzedzeniem. Stały model obsługi dobrze sprawdza się także przy większych obiektach i lokalach sieciowych.",
        ],
      },
      {
        title: "Dlaczego temat dotyczy też wspólnot i obiektów usługowych",
        paragraphs: [
          "Temat separatorów nie dotyczy wyłącznie restauracji. Coraz częściej wraca również przy wspólnotach i obiektach usługowych, w których lokale na parterze generują ścieki wymagające bardziej uporządkowanej obsługi.",
          "Dla zarządców i administracji regularny serwis separatora oznacza mniejsze ryzyko cofek, zalewania pomieszczeń technicznych i napięć wokół utrzymania części wspólnych.",
        ],
      },
      {
        title: "Zalecenia praktyczne",
        bullets: [
          "nie wylewaj tłuszczu bezpośrednio do kanalizacji",
          "regularnie sprawdzaj poziom napełnienia separatora",
          "ustal harmonogram serwisu zamiast działać tylko awaryjnie",
          "dokumentuj wykonane czyszczenia i zakres prac",
        ],
        paragraphs: [
          "Jeżeli tłuszcz zdążył pójść dalej w instalację, samo czyszczenie separatora może nie wystarczyć. Wtedy warto połączyć usługę z WUKO albo kamerą, żeby zamknąć temat całościowo i nie wracać do tego samego problemu po krótkim czasie.",
        ],
        inlineCta: {
          title: "Potrzebujesz terminu czyszczenia separatora?",
          text: "Skontaktuj się z nami telefonicznie albo przez formularz. Ustalimy zakres i dobry termin serwisu.",
          primaryLabel: "Zadzwoń: 602 481 688",
          primaryHref: "tel:+48602481688",
          secondaryLabel: "Zgłoś zapotrzebowanie",
          secondaryHref: "/zapytanie",
        },
      },
    ],
    cta: {
      title: "Potrzebujesz wyczyścić separator?",
      text: "Skontaktuj się z nami, jeśli chcesz zamówić pojedynczy serwis albo ustawić stały harmonogram obsługi separatora tłuszczu lub ropopochodnego.",
      primaryLabel: "Zadzwoń: 602 481 688",
      primaryHref: "tel:+48602481688",
      secondaryLabel: "Zgłoś zapotrzebowanie",
      secondaryHref: "/zapytanie",
    },
  },
  {
    slug: "ile-kosztuje-udraznianie-rur-we-wroclawiu",
    title: "Ile kosztuje udrażnianie rur we Wrocławiu i od czego zależy cena?",
    category: "Udrażnianie rur i WUKO",
    metaTitle:
      "Ile kosztuje udrażnianie rur we Wrocławiu? Cena, zakres i WUKO",
    metaDescription:
      "Sprawdź, od czego zależy cena udrażniania rur we Wrocławiu: lokalizacja zatoru, metoda, WUKO, kamera i tryb awaryjny.",
    excerpt:
      "Cena udrażniania rur zależy od miejsca zatoru, rodzaju instalacji i metody pracy. Inaczej wygląda proste udrożnienie odpływu, a inaczej awaria wymagająca WUKO lub kamery.",
    lead:
      "Klienci najczęściej pytają o cenę jeszcze przed opisaniem problemu. To zrozumiałe, ale w kanalizacji koszt zależy od kilku konkretnych rzeczy: gdzie jest zator, jak długo trwa problem, czy dotyczy domu, lokalu, wspólnoty, czy potrzebne jest WUKO oraz czy warto wykonać inspekcję kamerą.",
    publishedAt: "2026-05-16",
    readTime: "7 min",
    photoKey: "ziebudUdraznianieKuchnia",
    serviceSlugs: ["udraznianie-rur", "wuko-wroclaw", "uslugi-kanalizacyjne"],
    citySlugs: ["wroclaw"],
    sections: [
      {
        title: "Co najbardziej wpływa na koszt udrażniania",
        bullets: [
          "miejsce zatoru: zlew, pion, poziom, przyłącze albo kanalizacja zewnętrzna",
          "dostęp do instalacji i możliwość pracy przez rewizję lub studzienkę",
          "rodzaj zanieczyszczenia: tłuszcz, osad, korzenie, piasek, chusteczki, materiały budowlane",
          "metoda pracy: spirala, WUKO, odsysanie, kamera TV",
          "tryb realizacji: standardowy termin albo pilna awaria",
        ],
        paragraphs: [
          "Najtańsze są zwykle proste zatory w instalacji wewnętrznej, gdy dostęp do odpływu jest łatwy, a problem nie wraca cyklicznie. Droższe są sytuacje, w których trzeba pracować na dłuższym odcinku, użyć samochodu WUKO albo najpierw zlokalizować problem kamerą.",
          "Dlatego przy pierwszym kontakcie warto powiedzieć, gdzie występuje cofka, od kiedy trwa problem i czy podobna awaria pojawiała się wcześniej. To pozwala szybciej dobrać ekipę i sprzęt.",
        ],
        inlineCta: {
          title: "Chcesz szybką wycenę telefoniczną?",
          text: "Opisz objawy i lokalizację zatoru. Powiemy, czy wystarczy spirala, czy lepiej od razu planować WUKO albo kamerę.",
          primaryLabel: "Zadzwoń: 602 481 688",
          primaryHref: "tel:+48602481688",
        },
      },
      {
        title: "Spirala czy WUKO — kiedy cena jest wyższa",
        paragraphs: [
          "Spirala mechaniczna dobrze sprawdza się przy lokalnych zatorach, szczególnie w kuchni, łazience albo krótkich odcinkach instalacji. WUKO jest droższe, ale mocniejsze: czyści przewód wodą pod wysokim ciśnieniem i daje lepszy efekt przy tłuszczu, piasku, osadach oraz dłuższych odcinkach.",
          "Jeśli zator wraca co kilka tygodni albo kilka miesięcy, samo doraźne udrażnianie może być pozorną oszczędnością. Wtedy lepiej policzyć koszt dokładnego czyszczenia i diagnostyki, bo problem często leży dalej niż przy samym odpływie.",
        ],
        table: {
          headers: ["Sytuacja", "Typowa metoda", "Komentarz"],
          rows: [
            ["Zatkany zlew lub odpływ", "spirala", "szybka interwencja przy lokalnym problemie"],
            ["Nawracający zator w pionie", "spirala + kamera", "warto sprawdzić, dlaczego problem wraca"],
            ["Tłuszcz i osady w kanalizacji", "WUKO", "lepsze czyszczenie całej średnicy przewodu"],
            ["Przyłącze lub kanalizacja zewnętrzna", "WUKO + kamera", "często potrzebna jest diagnostyka odcinka"],
          ],
        },
      },
      {
        title: "Kiedy kamera obniża ryzyko niepotrzebnych kosztów",
        paragraphs: [
          "Inspekcja TV nie zawsze jest potrzebna przy pierwszym prostym zatorze. Jest jednak bardzo przydatna, gdy awarie się powtarzają, odpływ pracuje wolno mimo czyszczenia albo zachodzi podejrzenie uszkodzenia przewodu.",
          "Kamera pozwala uniknąć pracy na ślepo. Zamiast zgadywać, czy problemem jest tłuszcz, korzenie, zapadnięcie rury albo błąd spadku, można zobaczyć wnętrze przewodu i zaplanować rozsądny zakres działań.",
        ],
      },
      {
        title: "Jak przygotować się do zgłoszenia",
        bullets: [
          "podaj adres i rodzaj obiektu",
          "opisz, które odpływy nie działają",
          "powiedz, czy woda cofa się w kilku miejscach",
          "sprawdź, czy jest dostęp do rewizji lub studzienki",
          "jeśli masz zdjęcia albo nagranie, zachowaj je do rozmowy",
        ],
        paragraphs: [
          "Im lepszy opis na starcie, tym mniej nieporozumień przy doborze sprzętu. Przy firmach, wspólnotach i lokalach usługowych warto od razu wskazać, czy awaria blokuje pracę obiektu.",
        ],
      },
    ],
    cta: {
      title: "Potrzebujesz udrożnienia rur we Wrocławiu?",
      text: "Zadzwoń i opisz problem. Dobierzemy właściwą metodę: spirala, WUKO, kamera albo szersza diagnostyka kanalizacji.",
      primaryLabel: "Zadzwoń: 602 481 688",
      primaryHref: "tel:+48602481688",
      secondaryLabel: "Zgłoś zapotrzebowanie",
      secondaryHref: "/zapytanie",
    },
  },
  {
    slug: "lokalizacja-wycieku-wody-kiedy-wezwac-fachowca",
    title: "Lokalizacja wycieku wody — kiedy wezwać fachowca?",
    category: "Lokalizacja wycieków",
    metaTitle:
      "Lokalizacja wycieku wody Wrocław — objawy, metody i diagnostyka",
    metaDescription:
      "Lokalizacja wycieku wody we Wrocławiu. Sprawdź objawy awarii, kiedy reagować i jak diagnostyka ogranicza kucie oraz koszty naprawy.",
    excerpt:
      "Wilgoć, spadek ciśnienia, mokra posadzka albo pracujący wodomierz mogą oznaczać wyciek. Szybka diagnostyka ogranicza zakres kucia i ryzyko większej szkody.",
    lead:
      "Wyciek wody nie zawsze zaczyna się od widocznej kałuży. Czasem pierwszym objawem jest wilgotna ściana, zapach stęchlizny, pracujący wodomierz albo spadek ciśnienia. Im szybciej zawęzisz miejsce awarii, tym mniejsze ryzyko kucia na ślepo i kosztownego remontu.",
    publishedAt: "2026-05-16",
    readTime: "7 min",
    photoKey: "ziebudLokalizacjaWyciekow",
    serviceSlugs: [
      "lokalizacja-nieszczelnosci",
      "naprawa-sieci-wodociagowych",
      "uslugi-kanalizacyjne",
    ],
    citySlugs: ["wroclaw"],
    sections: [
      {
        title: "Najczęstsze objawy wycieku",
        bullets: [
          "mokre plamy na ścianie, suficie lub posadzce",
          "zapach wilgoci bez oczywistego źródła",
          "spadek ciśnienia w instalacji",
          "wodomierz obraca się mimo zakręconych punktów poboru",
          "puchnące panele, odpadająca farba albo zacieki",
          "lokalne zapadanie gruntu przy instalacji zewnętrznej",
        ],
        paragraphs: [
          "Nie każdy objaw oznacza dużą awarię, ale każdy warto szybko sprawdzić. Wyciek ukryty w ścianie, pod posadzką albo w ziemi potrafi przez dłuższy czas niszczyć konstrukcję i generować coraz większe koszty.",
        ],
        inlineCta: {
          title: "Podejrzewasz wyciek?",
          text: "Zadzwoń i opisz objawy. Podpowiemy, czy zacząć od diagnostyki, odcięcia wody czy pilnej naprawy.",
          primaryLabel: "Zadzwoń: 602 481 688",
          primaryHref: "tel:+48602481688",
        },
      },
      {
        title: "Dlaczego nie warto kuć na ślepo",
        paragraphs: [
          "Kucie bez wcześniejszego rozpoznania często powiększa koszt naprawy. Jeżeli miejsce wycieku zostanie źle ocenione, trzeba otwierać kolejne fragmenty ściany, podłogi albo terenu.",
          "Diagnostyka pozwala zawęzić obszar działań. W praktyce oznacza mniej zniszczeń, szybszą naprawę i łatwiejsze przygotowanie dokumentacji dla właściciela, zarządcy albo ubezpieczyciela.",
        ],
      },
      {
        title: "Jakie metody pomagają znaleźć wyciek",
        bullets: [
          "oględziny i analiza objawów na miejscu",
          "kontrola wodomierza oraz pracy instalacji",
          "pomiar wilgotności przegród",
          "badanie akustyczne przy instalacjach wodnych",
          "kamera lub diagnostyka przewodów tam, gdzie problem dotyczy kanalizacji",
        ],
        paragraphs: [
          "Dobór metody zależy od rodzaju instalacji i objawów. Inaczej szuka się wycieku wody pod ciśnieniem, inaczej nieszczelności kanalizacji, a jeszcze inaczej problemu przy przyłączu lub sieci zewnętrznej.",
        ],
      },
      {
        title: "Kiedy zgłaszać problem natychmiast",
        bullets: [
          "gdy woda aktywnie zalewa pomieszczenie",
          "gdy wilgoć pojawia się przy instalacji elektrycznej",
          "gdy problem dotyczy pionu albo części wspólnej budynku",
          "gdy wyciek może uszkadzać konstrukcję albo lokal sąsiada",
          "gdy wodomierz wskazuje stały pobór bez używania wody",
        ],
      },
    ],
    cta: {
      title: "Umów lokalizację wycieku we Wrocławiu",
      text: "Pomagamy przy podejrzeniu wycieku wody, nieszczelności instalacji i awariach wod-kan w domach, lokalach, wspólnotach i obiektach firmowych.",
      primaryLabel: "Zadzwoń: 602 481 688",
      primaryHref: "tel:+48602481688",
      secondaryLabel: "Wyślij zgłoszenie",
      secondaryHref: "/zapytanie",
    },
  },
  {
    slug: "pogotowie-kanalizacyjne-dla-wspolnot-i-firm",
    title: "Pogotowie kanalizacyjne dla wspólnot i firm — jak ograniczyć awarie?",
    category: "Obsługa firm i wspólnot",
    metaTitle:
      "Pogotowie kanalizacyjne dla wspólnot i firm Wrocław — WUKO 24h",
    metaDescription:
      "Pogotowie kanalizacyjne dla wspólnot, zarządców i firm we Wrocławiu. Sprawdź, jak ograniczyć cofki, zatory i przestoje dzięki serwisowi WUKO.",
    excerpt:
      "Wspólnoty, restauracje, biura i obiekty usługowe potrzebują nie tylko reakcji po awarii, ale też planu serwisowego. Stała obsługa kanalizacji zmniejsza ryzyko cofek i kosztownych przestojów.",
    lead:
      "Dla wspólnot mieszkaniowych i firm awaria kanalizacji to nie tylko problem techniczny. To zalane piwnice, skargi mieszkańców, przestój lokalu, utrata obrotu i szybkie decyzje podejmowane pod presją. Dlatego najlepszy model obsługi łączy pogotowie kanalizacyjne z profilaktyką: WUKO, inspekcją kamerową i cyklicznym czyszczeniem newralgicznych odcinków.",
    publishedAt: "2026-05-16",
    readTime: "8 min",
    photoKey: "ziebudWukoBlok",
    serviceSlugs: [
      "uslugi-kanalizacyjne",
      "wuko-wroclaw",
      "inspekcja-tv-kanalizacji",
    ],
    citySlugs: ["wroclaw"],
    sections: [
      {
        title: "Dlaczego awarie w budynkach wracają",
        bullets: [
          "tłuszcz i osady odkładają się na długich poziomach kanalizacyjnych",
          "mieszkańcy wrzucają do odpływów chusteczki, ręczniki i odpady",
          "starsze przewody mają nierówności, załamania lub słabe spadki",
          "korzenie mogą wchodzić w kanalizację zewnętrzną",
          "brakuje regularnego czyszczenia pionów, poziomów i studzienek",
        ],
        paragraphs: [
          "Jednorazowe udrożnienie pomaga w danym momencie, ale nie zawsze usuwa przyczynę. Jeżeli instalacja pracuje pod dużym obciążeniem, problem może wracać w tym samym miejscu, dopóki przewód nie zostanie wyczyszczony dokładniej albo sprawdzony kamerą.",
          "W budynkach wielorodzinnych i firmach liczy się szybka reakcja, ale jeszcze bardziej liczy się przewidywalność. Zarządca powinien wiedzieć, które odcinki są ryzykowne i jak często wymagają obsługi.",
        ],
        inlineCta: {
          title: "Obsługujesz wspólnotę lub lokal?",
          text: "Możemy sprawdzić problematyczne odcinki i ustawić plan czyszczenia, zanim awaria wróci w najmniej wygodnym momencie.",
          primaryLabel: "Zadzwoń: 602 481 688",
          primaryHref: "tel:+48602481688",
        },
      },
      {
        title: "Co powinien obejmować serwis dla wspólnoty",
        bullets: [
          "awaryjne udrażnianie kanalizacji",
          "czyszczenie hydrodynamiczne WUKO",
          "inspekcję TV przy nawracających problemach",
          "czyszczenie studzienek i newralgicznych poziomów",
          "opis wykonanych prac dla administratora",
          "rekomendację dalszych działań technicznych",
        ],
        paragraphs: [
          "Najlepsze efekty daje połączenie reakcji awaryjnej z dokumentowaniem problemów. Po kilku interwencjach widać, czy awaria wynika z eksploatacji, z uszkodzenia przewodu, czy z błędu konstrukcyjnego instalacji.",
        ],
      },
      {
        title: "Firmy i gastronomia — koszt przestoju jest większy niż serwis",
        paragraphs: [
          "Restauracja, hotel, zakład usługowy albo obiekt produkcyjny nie może pozwolić sobie na długą blokadę odpływów. Nawet krótka cofka potrafi zatrzymać kuchnię, zaplecze lub sanitariaty i wygenerować straty większe niż planowy serwis.",
          "W gastronomii warto łączyć czyszczenie odpływów z obsługą separatora tłuszczu. Jeżeli separator jest przepełniony albo tłuszcz przeszedł dalej w instalację, awarie będą wracały mimo doraźnych interwencji.",
        ],
      },
      {
        title: "Jak wygląda dobry plan profilaktyki",
        table: {
          headers: ["Obiekt", "Ryzyko", "Rekomendacja"],
          rows: [
            ["Wspólnota mieszkaniowa", "cofki w piwnicach i pionach", "okresowe WUKO oraz kamera przy powtarzalnych awariach"],
            ["Restauracja", "tłuszcz i zatory odpływów", "czyszczenie odpływów plus regularny serwis separatora"],
            ["Biurowiec", "blokada sanitariatów", "przegląd newralgicznych poziomów i szybki kontakt awaryjny"],
            ["Zakład usługowy", "przestój pracy obiektu", "plan reakcji i cykliczne czyszczenie kanalizacji technologicznej"],
          ],
        },
        afterTableParagraphs: [
          "Harmonogram powinien wynikać z realnej pracy obiektu. Inaczej planuje się wspólnotę z kilkoma klatkami, inaczej lokal gastronomiczny, a inaczej budynek usługowy z dużym ruchem klientów.",
        ],
      },
      {
        title: "Kiedy warto podpisać stałą obsługę",
        bullets: [
          "awarie wracają w tym samym pionie lub odpływie",
          "obiekt nie może pozwolić sobie na przestój",
          "zarządca chce mieć jednego wykonawcę od awarii i profilaktyki",
          "potrzebne są opisy wykonanych prac i zdjęcia z interwencji",
          "instalacja jest stara albo mocno obciążona",
        ],
        paragraphs: [
          "Stała obsługa nie musi oznaczać skomplikowanej umowy. Czasem wystarczy ustalony kontakt, historia interwencji i regularne przeglądy tych odcinków, które powodują najwięcej problemów.",
        ],
      },
    ],
    cta: {
      title: "Ustaw obsługę kanalizacji dla firmy lub wspólnoty",
      text: "ZIEBUD Expert obsługuje awarie, WUKO, inspekcje kamerowe i czyszczenie kanalizacji dla wspólnot, zarządców, lokali i obiektów firmowych we Wrocławiu.",
      primaryLabel: "Zadzwoń: 602 481 688",
      primaryHref: "tel:+48602481688",
      secondaryLabel: "Wyślij zapytanie",
      secondaryHref: "/zapytanie",
    },
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
