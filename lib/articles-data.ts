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
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
