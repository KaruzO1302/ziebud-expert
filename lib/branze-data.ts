export type IndustryServiceLink = {
  tytul: string;
  opis: string;
  link: string;
};

export type IndustryKpi = {
  wartosc: string;
  etykieta: string;
};

export type IndustryFaq = {
  q: string;
  a: string;
};

export type IndustryPage = {
  slug: string;
  branza_name: string;
  h1: string;
  meta_title: string;
  meta_description: string;
  image: {
    src: string;
    alt: string;
  };
  intro: [string, string];
  problemy: string[];
  uslugi: IndustryServiceLink[];
  liczby: IndustryKpi[];
  faq: IndustryFaq[];
  cta_telefon: string;
  cta_text: string;
  serviceType: string;
};

const phone = "+48 602 481 688";

export const branzePages: IndustryPage[] = [
  {
    slug: "gastronomia",
    branza_name: "Gastronomia",
    h1: "Pogotowie kanalizacyjne dla restauracji i gastronomii Wrocław",
    meta_title: "Kanalizacja dla gastronomii Wrocław | ZIĘBUD Expert",
    meta_description:
      "Serwis separatorów tłuszczu, WUKO i pogotowie kanalizacyjne dla restauracji we Wrocławiu. HACCP, sanepid, szybka reakcja.",
    image: {
      src: "/images/task05/b2b-gastronomia.webp",
      alt: "Serwis separatorów tłuszczu dla gastronomii Wrocław — ZIĘBUD Expert, montaż i czyszczenie",
    },
    intro: [
      "Restauracja nie może czekać do poniedziałku, kiedy w kuchni wybija odpływ albo separator tłuszczu zaczyna cofać zapach. W gastronomii kanalizacja jest częścią operacji: wpływa na sanepid, HACCP, ciągłość pracy kuchni i komfort gości.",
      "We Wrocławiu obsługujemy lokale uliczne, food courty, kuchnie hotelowe i zaplecza cateringowe. Pracujemy tak, żeby szybko odciąć ryzyko awarii, a przy stałej obsłudze ustawiamy harmonogram czyszczenia separatora i odpływów pod realne obciążenie lokalu.",
    ],
    problemy: [
      "zapełniony lub źle eksploatowany separator tłuszczu",
      "tłuszczowe korki w odpływach kuchennych i pionach",
      "awarie w weekend, kiedy lokal ma największy obrót",
      "zapachy z kanalizacji na sali lub zapleczu",
      "potrzeba dokumentacji serwisowej pod HACCP i kontrolę sanepidu",
    ],
    uslugi: [
      { tytul: "Separatory tłuszczu", opis: "Czyszczenie, kontrola osadu i zalecenia eksploatacyjne dla kuchni.", link: "/uslugi/separatory-tluszczu" },
      { tytul: "Montaż separatorów", opis: "Dobór i montaż separatora do przepływu oraz typu lokalu.", link: "/uslugi/montaz-separatorow" },
      { tytul: "Udrażnianie rur", opis: "Szybkie usuwanie zatorów w kuchni, zmywalni i zapleczu.", link: "/uslugi/udraznianie-rur" },
      { tytul: "WUKO Wrocław", opis: "Hydrodynamiczne czyszczenie dłuższych odcinków za separatorem.", link: "/uslugi/wuko-wroclaw" },
    ],
    liczby: [
      { wartosc: "30-60 min", etykieta: "cel reakcji przy pilnych zgłoszeniach" },
      { wartosc: "24/7", etykieta: "obsługa awarii poza godzinami lokalu" },
      { wartosc: "VAT + opis", etykieta: "dokumentacja po wykonanym serwisie" },
    ],
    faq: [
      { q: "Czy możecie przyjechać do restauracji w weekend?", a: "Tak. Przy gastronomii weekendowe awarie traktujemy priorytetowo, bo blokują sprzedaż i pracę kuchni." },
      { q: "Czy serwis separatora tłuszczu pomaga przy kontroli sanepidu?", a: "Pomaga utrzymać porządek eksploatacyjny i dokumentację. Po usłudze przekazujemy informację o zakresie prac." },
      { q: "Jak często czyścić separator w restauracji?", a: "To zależy od obciążenia kuchni, ale lokale z dużym ruchem zwykle wymagają stałego harmonogramu, a nie reakcji dopiero po zapachu lub cofce." },
      { q: "Czy możecie połączyć separator z WUKO?", a: "Tak. Często czyścimy separator i odcinek za urządzeniem podczas jednej wizyty." },
      { q: "Czy da się pracować bez zamykania lokalu?", a: "W wielu przypadkach tak. Ustalamy okno serwisowe rano, po zamknięciu albo między zmianami." },
    ],
    cta_telefon: phone,
    cta_text: "Zadzwoń — wycena w 15 min",
    serviceType: "Serwis kanalizacji dla gastronomii",
  },
  {
    slug: "hotel",
    branza_name: "Hotel",
    h1: "Pogotowie kanalizacyjne dla hoteli Wrocław",
    meta_title: "Kanalizacja dla hoteli Wrocław | Serwis 24h",
    meta_description:
      "Dyskretny serwis kanalizacji dla hoteli we Wrocławiu. Prace nocne, WUKO, inspekcja TV, separatory i awarie bez utrudnień dla gości.",
    image: {
      src: "/images/task05/b2b-hotel.webp",
      alt: "Pogotowie kanalizacyjne dla hoteli Wrocław — serwis 24h, dyskretny dojazd ZIĘBUD Expert",
    },
    intro: [
      "Hotel potrzebuje serwisu, którego gość najlepiej w ogóle nie zauważy. Awarie odpływów, zapach z pionu albo przeciążona kanalizacja kuchni hotelowej muszą być rozwiązane dyskretnie, szybko i z szacunkiem do pracy recepcji.",
      "Dla hoteli we Wrocławiu planujemy dojazd, trasę wejścia, okno serwisowe i komunikację z technicznym. Gdy trzeba, pracujemy nocą lub wcześnie rano, żeby nie blokować śniadań, eventów i ruchu gości.",
    ],
    problemy: [
      "niedrożne piony łazienkowe w pokojach i apartamentach",
      "zapach z kanalizacji przy recepcji, SPA lub restauracji",
      "zatory w kuchni hotelowej i separatorze tłuszczu",
      "potrzeba dyskretnej pracy bez hałasu w godzinach ciszy",
      "awarie krytyczne przy pełnym obłożeniu hotelu",
    ],
    uslugi: [
      { tytul: "Pogotowie kanalizacyjne", opis: "Pilny przyjazd przy cofce, zapachu lub wybiciu ścieków.", link: "/pogotowie-kanalizacyjne" },
      { tytul: "Inspekcja TV kanalizacji", opis: "Diagnoza pionów, poziomów i problemów powracających w pokojach.", link: "/uslugi/inspekcja-tv-kanalizacji" },
      { tytul: "Separatory tłuszczu", opis: "Serwis kuchni hotelowych i zaplecza gastronomicznego.", link: "/uslugi/separatory-tluszczu" },
      { tytul: "Umowy serwisowe", opis: "Stała obsługa techniczna dla obiektów działających 24/7.", link: "/umowy-serwisowe" },
    ],
    liczby: [
      { wartosc: "24/7", etykieta: "serwis dla obiektów z ruchem całodobowym" },
      { wartosc: "noc/rano", etykieta: "możliwe okna serwisowe poza szczytem" },
      { wartosc: "1 kontakt", etykieta: "dla recepcji, technicznego i zarządcy" },
    ],
    faq: [
      { q: "Czy pracujecie nocą w hotelach?", a: "Tak, jeśli to najlepsze okno serwisowe dla obiektu i gości." },
      { q: "Czy goście muszą wiedzieć o pracach?", a: "Zwykle nie. Ustalamy dojście techniczne i zakres tak, żeby ograniczyć widoczność prac." },
      { q: "Czy obsługujecie kuchnię hotelową?", a: "Tak. Czyścimy separatory tłuszczu, odpływy kuchenne i odcinki za separatorem." },
      { q: "Czy można zamówić stałą obsługę?", a: "Tak. Dla hoteli sens mają harmonogramy przeglądów i priorytetowe reakcje awaryjne." },
      { q: "Czy dajecie raport dla działu technicznego?", a: "Tak, po większych pracach przekazujemy opis zakresu i rekomendacje." },
    ],
    cta_telefon: phone,
    cta_text: "Zadzwoń — dyskretny serwis hotelu",
    serviceType: "Serwis kanalizacji dla hoteli",
  },
  {
    slug: "deweloper",
    branza_name: "Deweloper",
    h1: "Kanalizacja dla deweloperów Wrocław — odbiory i inspekcja TV",
    meta_title: "Kanalizacja dla deweloperów Wrocław | Odbiory",
    meta_description:
      "Inspekcja TV, próby szczelności, WUKO i odbiory kanalizacji dla deweloperów we Wrocławiu. Raporty przed przekazaniem budynku.",
    image: {
      src: "/images/task05/b2b-deweloper.webp",
      alt: "Kanalizacja dla deweloperów Wrocław — inspekcja TV, odbiory, próby szczelności",
    },
    intro: [
      "Na inwestycji deweloperskiej kanalizacja musi być gotowa nie tylko technicznie, ale też dowodowo. Przed odbiorem liczą się nagrania z inspekcji TV, próby szczelności, czyste przyłącza i brak niespodzianek po wejściu pierwszych mieszkańców.",
      "Pracujemy dla kierowników budów, generalnych wykonawców i inwestorów. Wchodzimy na etap przedodbiorowy, po robotach ziemnych albo po zgłoszeniu problemu z odpływem, a wynik przekładamy na czytelną decyzję: czyścić, poprawiać, dokumentować.",
    ],
    problemy: [
      "piasek, zaprawa i odpady budowlane w nowych przyłączach",
      "brak nagrania z inspekcji TV przed odbiorem",
      "wątpliwości co do spadków i szczelności odcinków",
      "zatory po pierwszych uruchomieniach instalacji",
      "potrzeba raportu dla inwestora lub zarządcy przejmującego budynek",
    ],
    uslugi: [
      { tytul: "Inspekcja TV kanalizacji", opis: "Nagranie i diagnoza odcinków przed odbiorem lub przekazaniem.", link: "/uslugi/inspekcja-tv-kanalizacji" },
      { tytul: "WUKO Wrocław", opis: "Czyszczenie przyłączy i poziomów po etapie budowy.", link: "/uslugi/wuko-wroclaw" },
      { tytul: "Regulacja studzienek", opis: "Prace przy zwieńczeniach i studniach po robotach drogowych.", link: "/uslugi/regulacja-studzienek-i-wlazow" },
      { tytul: "Montaż przepompowni", opis: "Dobór i uruchomienie przepompowni dla inwestycji.", link: "/uslugi/montaz-przepompowni-sciekow" },
    ],
    liczby: [
      { wartosc: "przed odbiorem", etykieta: "najlepszy moment na inspekcję TV" },
      { wartosc: "1 raport", etykieta: "dla budowy, inwestora i zarządcy" },
      { wartosc: "WUKO + kamera", etykieta: "czyszczenie i kontrola w jednym procesie" },
    ],
    faq: [
      { q: "Czy wykonujecie inspekcję TV przed odbiorem budynku?", a: "Tak. To jeden z najczęstszych zakresów dla deweloperów i generalnych wykonawców." },
      { q: "Czy czyścicie nowe przyłącza po budowie?", a: "Tak. Usuwamy piasek, zaprawę i odpady, które często zostają po robotach." },
      { q: "Czy raport nadaje się dla zarządcy?", a: "Tak. Materiał z kamery i opis ustaleń można przekazać zarządcy przejmującemu obiekt." },
      { q: "Czy możecie wejść na inwestycję z harmonogramem?", a: "Tak. Ustalamy termin pod front robót i dostęp do studni lub pionów." },
      { q: "Czy robicie też przepompownie?", a: "Tak. Obsługujemy montaż i serwis przepompowni ścieków dla inwestycji." },
    ],
    cta_telefon: phone,
    cta_text: "Zadzwoń — odbiór bez zgadywania",
    serviceType: "Serwis kanalizacji dla deweloperów",
  },
  {
    slug: "magazyn",
    branza_name: "Magazyn i logistyka",
    h1: "Udrażnianie odwodnień magazynów i hal logistycznych Wrocław",
    meta_title: "Kanalizacja dla magazynów Wrocław | WUKO i separatory",
    meta_description:
      "Serwis kanalizacji dla magazynów, hal i logistyki we Wrocławiu. Odwodnienia placów, TIR, separatory, WUKO, dokumentacja.",
    image: {
      src: "/images/task05/b2b-magazyn.webp",
      alt: "Udrażnianie odwodnień magazynów i hal logistycznych Wrocław — ZIĘBUD Expert",
    },
    intro: [
      "Magazyn i hala logistyczna mają kanalizację pracującą pod ciężkim ruchem. Place manewrowe, rampy, kratki odwodnieniowe i separatory zbierają piasek, sól, osad z kół oraz wodę z dużych powierzchni utwardzonych.",
      "Serwis planujemy pod ruch TIR, bramy, ochronę i okna operacyjne. Dla obiektów B2B ważne są gabaryty, wjazdy serwisowe, protokół po pracach i brak zatrzymania załadunku.",
    ],
    problemy: [
      "zapiaszczone odwodnienia liniowe i kratki przy rampach",
      "studnie deszczowe przepełnione osadem po zimie",
      "separatory ropopochodne przy parkingach i placach",
      "utrudniony dostęp przez ruch TIR i logistykę zmianową",
      "zalewanie placów manewrowych przy intensywnych opadach",
    ],
    uslugi: [
      { tytul: "WUKO Wrocław", opis: "Czyszczenie wpustów, studni i kanalizacji deszczowej.", link: "/uslugi/wuko-wroclaw" },
      { tytul: "Separatory ropopochodne", opis: "Serwis urządzeń przy parkingach i placach manewrowych.", link: "/uslugi/separatory-ropopochodne" },
      { tytul: "Inspekcja TV", opis: "Kontrola odcinków pod placami i przy rampach.", link: "/uslugi/inspekcja-tv-kanalizacji" },
      { tytul: "Umowy serwisowe", opis: "Planowy serwis przed sezonem opadów i po zimie.", link: "/umowy-serwisowe" },
    ],
    liczby: [
      { wartosc: "TIR", etykieta: "uwzględniamy gabaryty i ruch placu" },
      { wartosc: "sezonowo", etykieta: "czyszczenie po zimie i przed ulewami" },
      { wartosc: "protokół", etykieta: "dla zarządcy technicznego obiektu" },
    ],
    faq: [
      { q: "Czy możecie pracować przy działającym magazynie?", a: "Tak. Ustalamy wjazd, zabezpieczenie miejsca i kolejność prac z ochroną lub technicznym." },
      { q: "Czy czyścicie odwodnienia liniowe przy rampach?", a: "Tak. To typowy zakres dla hal i magazynów." },
      { q: "Czy obsługujecie separatory na parkingach TIR?", a: "Tak. Czyścimy i kontrolujemy separatory ropopochodne oraz odcinki za nimi." },
      { q: "Kiedy najlepiej robić serwis?", a: "Najczęściej po zimie i przed okresem intensywnych opadów." },
      { q: "Czy dostaniemy dokumentację?", a: "Tak. Po pracach przekazujemy informację o zakresie i zalecenia dla utrzymania obiektu." },
    ],
    cta_telefon: phone,
    cta_text: "Zadzwoń — serwis bez przestoju logistyki",
    serviceType: "Serwis kanalizacji dla magazynów",
  },
  {
    slug: "stacja-paliw",
    branza_name: "Stacja paliw",
    h1: "Serwis separatorów ropopochodnych na stacjach paliw Wrocław",
    meta_title: "Separatory stacje paliw Wrocław | ZIĘBUD Expert",
    meta_description:
      "Serwis separatorów ropopochodnych, WUKO i dokumentacja dla stacji paliw we Wrocławiu. Przeglądy, RDOŚ, odwodnienia.",
    image: {
      src: "/images/task05/b2b-stacja-paliw.webp",
      alt: "Serwis separatorów ropopochodnych na stacjach paliw Wrocław — ZIĘBUD Expert",
    },
    intro: [
      "Stacja paliw pracuje pod szczególnym ryzykiem środowiskowym. Separator ropopochodny, odwodnienia placu, kratki przy dystrybutorach i kanalizacja deszczowa muszą być pod kontrolą, bo awaria dotyka nie tylko sprzedaży, ale też wymogów formalnych.",
      "Obsługujemy serwis separatorów, czyszczenie WUKO, kontrolę osadów i reakcje po zalaniach. W rozmowie uwzględniamy wymagania dokumentacyjne, RDOŚ, przeglądy ustawowe i bezpieczeństwo pracy na czynnym obiekcie.",
    ],
    problemy: [
      "przepełniony separator ropopochodny",
      "osady i paliwowe zanieczyszczenia w odwodnieniach",
      "zalewanie placu przy dystrybutorach po opadach",
      "wymagania dokumentacyjne i przeglądy środowiskowe",
      "praca na czynnym obiekcie z ruchem klientów",
    ],
    uslugi: [
      { tytul: "Separatory ropopochodne", opis: "Czyszczenie, kontrola i dokumentacja separatora.", link: "/uslugi/separatory-ropopochodne" },
      { tytul: "WUKO Wrocław", opis: "Czyszczenie odwodnień, studni i kanałów deszczowych.", link: "/uslugi/wuko-wroclaw" },
      { tytul: "Inspekcja TV", opis: "Weryfikacja stanu odpływu za separatorem.", link: "/uslugi/inspekcja-tv-kanalizacji" },
      { tytul: "Umowy serwisowe", opis: "Planowe przeglądy dla obiektów z wymaganiami formalnymi.", link: "/umowy-serwisowe" },
    ],
    liczby: [
      { wartosc: "RDOŚ", etykieta: "myślimy o wymaganiach środowiskowych" },
      { wartosc: "24/7", etykieta: "reakcja przy awarii na czynnym obiekcie" },
      { wartosc: "separator", etykieta: "najważniejszy punkt kontroli placu" },
    ],
    faq: [
      { q: "Czy obsługujecie separatory ropopochodne?", a: "Tak. To podstawowy zakres przy stacjach paliw i parkingach." },
      { q: "Czy pomagacie z dokumentacją po serwisie?", a: "Tak. Po pracach przekazujemy opis zakresu, który można przechować w dokumentacji obiektu." },
      { q: "Czy można wykonać prace przy czynnej stacji?", a: "Tak, po ustaleniu zabezpieczenia miejsca i okna serwisowego." },
      { q: "Czy czyścicie odwodnienia przy dystrybutorach?", a: "Tak. Czyścimy kratki, wpusty, studnie i odcinki kanalizacji deszczowej." },
      { q: "Czy robicie cykliczne przeglądy?", a: "Tak. Dla stacji paliw zalecamy planowy harmonogram." },
    ],
    cta_telefon: phone,
    cta_text: "Zadzwoń — ustalimy zakres separatora",
    serviceType: "Serwis separatorów dla stacji paliw",
  },
  {
    slug: "myjnia",
    branza_name: "Myjnia samochodowa",
    h1: "Udrażnianie odwodnień myjni samochodowych Wrocław",
    meta_title: "Kanalizacja dla myjni Wrocław | Separatory i WUKO",
    meta_description:
      "Serwis kanalizacji myjni samochodowych we Wrocławiu. Separatory ropopochodne, kratki odwadniające, chemia, osady i WUKO.",
    image: {
      src: "/images/task05/b2b-myjnia.webp",
      alt: "Udrażnianie odwodnień myjni samochodowych Wrocław — separatory, kratki, kanały",
    },
    intro: [
      "Myjnia zbiera piasek, błoto, chemię i zanieczyszczenia ropopochodne w tempie, którego nie widać w zwykłym budynku. Kraty odwadniające, osadniki i separator muszą pracować stale, bo niedrożność szybko zatrzymuje stanowisko.",
      "Dla myjni we Wrocławiu łączymy czyszczenie odwodnień z kontrolą separatora i odpływów. Ustalamy okno tak, żeby ograniczyć przestój, szczególnie przy myjniach samoobsługowych działających długo w ciągu dnia.",
    ],
    problemy: [
      "piasek i błoto w kratach odwadniających",
      "separator ropopochodny obciążony chemią i osadami",
      "wolny odpływ na stanowiskach mycia",
      "zapach z osadników i studzienek",
      "potrzeba pracy poza szczytem ruchu klientów",
    ],
    uslugi: [
      { tytul: "Separatory ropopochodne", opis: "Czyszczenie i kontrola separatora przy myjni.", link: "/uslugi/separatory-ropopochodne" },
      { tytul: "WUKO Wrocław", opis: "Płukanie kanałów, odpływów i odcinków za kratami.", link: "/uslugi/wuko-wroclaw" },
      { tytul: "Udrażnianie rur", opis: "Usuwanie punktowych zatorów na stanowiskach.", link: "/uslugi/udraznianie-rur" },
      { tytul: "Inspekcja TV", opis: "Diagnostyka przy powracających zatorach i złym spływie.", link: "/uslugi/inspekcja-tv-kanalizacji" },
    ],
    liczby: [
      { wartosc: "kraty", etykieta: "najczęstszy punkt odkładania osadu" },
      { wartosc: "separator", etykieta: "kontrola zanieczyszczeń ropopochodnych" },
      { wartosc: "poza szczytem", etykieta: "możliwe okna serwisowe" },
    ],
    faq: [
      { q: "Czy czyścicie kratki odwadniające na myjni?", a: "Tak. Czyścimy kraty, osadniki, studnie i odcinki odpływowe." },
      { q: "Czy obsługujecie separatory ropopochodne?", a: "Tak. Przy myjniach to kluczowy element serwisu." },
      { q: "Czy środki chemiczne są problemem dla kanalizacji?", a: "Mogą przyspieszać odkładanie osadów, dlatego ważne są regularne czyszczenia." },
      { q: "Czy można ograniczyć przestój myjni?", a: "Tak. Ustalamy prace poza największym ruchem klientów." },
      { q: "Czy robicie stałą obsługę?", a: "Tak. Dla myjni rekomendujemy harmonogram, szczególnie przed sezonem zimowym i po nim." },
    ],
    cta_telefon: phone,
    cta_text: "Zadzwoń — odblokuj stanowiska myjni",
    serviceType: "Serwis kanalizacji dla myjni",
  },
  {
    slug: "szpital",
    branza_name: "Szpital i przychodnia",
    h1: "Kanalizacja dla szpitali i przychodni Wrocław",
    meta_title: "Kanalizacja dla szpitali Wrocław | Serwis krytyczny",
    meta_description:
      "Serwis kanalizacji dla szpitali i przychodni we Wrocławiu. Awarie krytyczne, prace nocne, NFZ, sterylność i dokumentacja.",
    image: {
      src: "/images/task05/b2b-szpital.webp",
      alt: "Kanalizacja dla szpitali i przychodni Wrocław — serwis sanitarny ZIĘBUD Expert",
    },
    intro: [
      "W placówce medycznej awaria kanalizacji jest zdarzeniem krytycznym. Liczy się bezpieczeństwo pacjentów, sterylność stref, ciągłość pracy oddziałów i szybka komunikacja z administracją oraz technicznym.",
      "Przy szpitalach i przychodniach we Wrocławiu działamy z większą dyscypliną organizacyjną: wejścia uzgadniamy, prace planujemy często nocą, a po usłudze zostawiamy jasny opis zakresu dla dokumentacji obiektu lub rozliczeń.",
    ],
    problemy: [
      "awarie odpływów w strefach pacjentów i zaplecza medycznego",
      "konieczność pracy nocą lub poza ruchem poradni",
      "wymóg zachowania sterylności i separacji stref",
      "niedrożne piony w starszych budynkach medycznych",
      "ryzyko przestoju oddziału lub gabinetów NFZ",
    ],
    uslugi: [
      { tytul: "Pogotowie kanalizacyjne", opis: "Reakcja przy awarii w placówce medycznej.", link: "/pogotowie-kanalizacyjne" },
      { tytul: "Udrażnianie rur", opis: "Usuwanie zatorów w pionach, odpływach i zapleczach.", link: "/uslugi/udraznianie-rur" },
      { tytul: "Inspekcja TV", opis: "Diagnoza bez rozkuwania w aktywnym obiekcie.", link: "/uslugi/inspekcja-tv-kanalizacji" },
      { tytul: "Umowy serwisowe", opis: "Stałe przeglądy i priorytet dla infrastruktury krytycznej.", link: "/umowy-serwisowe" },
    ],
    liczby: [
      { wartosc: "krytyczne", etykieta: "traktujemy awarie medyczne priorytetowo" },
      { wartosc: "noc", etykieta: "częste okno prac dla placówek" },
      { wartosc: "opis prac", etykieta: "dla administracji i technicznego" },
    ],
    faq: [
      { q: "Czy możecie pracować w nocy?", a: "Tak. W placówkach medycznych to często najlepsze okno dla bezpieczeństwa i organizacji." },
      { q: "Czy obsługujecie przychodnie NFZ?", a: "Tak. Pracujemy dla przychodni, gabinetów, laboratoriów i większych placówek." },
      { q: "Czy można uniknąć rozkuwania?", a: "Często pierwszym krokiem jest inspekcja TV, która ogranicza niepotrzebne prace inwazyjne." },
      { q: "Czy macie dokumentację po usłudze?", a: "Tak. Przekazujemy opis zakresu i fakturę VAT." },
      { q: "Czy realizujecie stałe przeglądy?", a: "Tak. Dla placówek medycznych rekomendujemy planową obsługę zamiast samej reakcji awaryjnej." },
    ],
    cta_telefon: phone,
    cta_text: "Zadzwoń — awarie krytyczne traktujemy priorytetowo",
    serviceType: "Serwis kanalizacji dla placówek medycznych",
  },
  {
    slug: "szkola",
    branza_name: "Szkoła i placówka edukacyjna",
    h1: "Pogotowie kanalizacyjne dla szkół i przedszkoli Wrocław",
    meta_title: "Kanalizacja dla szkół Wrocław | Wakacje i ferie",
    meta_description:
      "Serwis kanalizacji dla szkół, przedszkoli i żłobków we Wrocławiu. Prace w wakacje, ferie, bezpieczeństwo dzieci, dyrektor i administracja.",
    image: {
      src: "/images/task05/b2b-szkola.webp",
      alt: "Pogotowie kanalizacyjne dla szkół i przedszkoli Wrocław — ZIĘBUD Expert",
    },
    intro: [
      "W szkole kanalizacja musi działać przewidywalnie, bo awaria toalety lub pionu uderza od razu w bezpieczeństwo dzieci i organizację zajęć. Decyzję podejmuje zwykle dyrektor, administracja albo zarządca techniczny, więc potrzebna jest jasna wycena i termin.",
      "Najlepsze okna prac to wakacje, ferie, weekendy lub godziny po lekcjach. Obsługujemy awarie bieżące i planowe czyszczenia przed rozpoczęciem roku szkolnego, żeby ograniczyć niespodzianki w trakcie zajęć.",
    ],
    problemy: [
      "zatkane toalety i piony po intensywnym użytkowaniu",
      "prace możliwe głównie w ferie, wakacje lub po lekcjach",
      "bezpieczeństwo dzieci i zabezpieczenie miejsca prac",
      "stare instalacje w budynkach szkolnych",
      "potrzeba szybkiej decyzji dyrektora lub administracji",
    ],
    uslugi: [
      { tytul: "Udrażnianie rur", opis: "Szybkie usuwanie zatorów w toaletach i pionach.", link: "/uslugi/udraznianie-rur" },
      { tytul: "WUKO Wrocław", opis: "Czyszczenie poziomów i kanalizacji zewnętrznej szkoły.", link: "/uslugi/wuko-wroclaw" },
      { tytul: "Inspekcja TV", opis: "Diagnoza starych odcinków przed remontem.", link: "/uslugi/inspekcja-tv-kanalizacji" },
      { tytul: "Umowy serwisowe", opis: "Planowe czyszczenia przed rokiem szkolnym.", link: "/umowy-serwisowe" },
    ],
    liczby: [
      { wartosc: "wakacje", etykieta: "najlepszy czas na większy serwis" },
      { wartosc: "ferie", etykieta: "okno dla prac bez dzieci w budynku" },
      { wartosc: "bezpieczeństwo", etykieta: "zabezpieczamy miejsce prac" },
    ],
    faq: [
      { q: "Czy możecie wykonać prace w wakacje?", a: "Tak. Dla szkół to najwygodniejszy moment na większe czyszczenia i diagnostykę." },
      { q: "Czy obsługujecie przedszkola i żłobki?", a: "Tak. Ustalamy zakres tak, żeby zabezpieczyć miejsce i ograniczyć ryzyko dla dzieci." },
      { q: "Czy dyrektor dostanie jasną wycenę?", a: "Tak. Po opisie objawów podajemy orientację, a po rozpoznaniu konkretny zakres." },
      { q: "Czy możecie pracować po lekcjach?", a: "Tak. Przy mniejszych zleceniach często umawiamy godziny popołudniowe." },
      { q: "Czy warto robić inspekcję TV starej kanalizacji?", a: "Tak, szczególnie przed remontem toalet lub większą modernizacją budynku." },
    ],
    cta_telefon: phone,
    cta_text: "Zadzwoń — zaplanuj serwis szkoły",
    serviceType: "Serwis kanalizacji dla szkół",
  },
  {
    slug: "centrum-handlowe",
    branza_name: "Centrum handlowe",
    h1: "Serwis kanalizacji centrów handlowych Wrocław 24/7",
    meta_title: "Kanalizacja centra handlowe Wrocław | 24/7",
    meta_description:
      "Serwis kanalizacji dla centrów handlowych we Wrocławiu. Najemcy, food court, separatory, WUKO, krótkie okna serwisowe 24/7.",
    image: {
      src: "/images/task05/b2b-centrum-handlowe.webp",
      alt: "Serwis kanalizacji centrów handlowych Wrocław — pogotowie 24/7 ZIĘBUD Expert",
    },
    intro: [
      "Centrum handlowe nie ma komfortu długiego przestoju. Kanalizacja pracuje dla food courtu, najemców, toalet, parkingu i zaplecza technicznego, a okna serwisowe są krótkie i często wypadają nocą.",
      "Dla galerii i parków handlowych we Wrocławiu łączymy szybkie interwencje z planowym czyszczeniem. Najważniejsze są koordynacja z technicznym, ochrona najemców przed przestojem i dokumentacja po pracy.",
    ],
    problemy: [
      "zatory w food courcie i lokalach gastronomicznych",
      "krótkie nocne okna serwisowe",
      "awarie toalet publicznych przy dużym ruchu klientów",
      "separatory tłuszczu i odwodnienia parkingów",
      "koordynacja z technicznym, ochroną i najemcami",
    ],
    uslugi: [
      { tytul: "Pogotowie kanalizacyjne", opis: "Reakcja na awarie w godzinach pracy lub nocą.", link: "/pogotowie-kanalizacyjne" },
      { tytul: "Separatory tłuszczu", opis: "Serwis food courtu i najemców gastronomicznych.", link: "/uslugi/separatory-tluszczu" },
      { tytul: "WUKO Wrocław", opis: "Czyszczenie parkingów, wpustów i kanalizacji deszczowej.", link: "/uslugi/wuko-wroclaw" },
      { tytul: "Umowy serwisowe", opis: "Stały harmonogram dla obiektu wielonajemcowego.", link: "/umowy-serwisowe" },
    ],
    liczby: [
      { wartosc: "24/7", etykieta: "obiekt wymaga gotowości poza godzinami biura" },
      { wartosc: "noc", etykieta: "najczęstsze okno serwisowe galerii" },
      { wartosc: "najemcy", etykieta: "minimalizujemy wpływ prac na sprzedaż" },
    ],
    faq: [
      { q: "Czy pracujecie w nocy w centrum handlowym?", a: "Tak. Dostosowujemy się do okien serwisowych galerii." },
      { q: "Czy obsługujecie food court?", a: "Tak. Czyścimy separatory, odpływy kuchenne i odcinki za lokalami." },
      { q: "Czy możecie pracować przy działającym obiekcie?", a: "Tak, po zabezpieczeniu miejsca i uzgodnieniu z technicznym." },
      { q: "Czy robicie parkingi i deszczówkę?", a: "Tak. WUKO dla wpustów, studni i odwodnień parkingów to częsty zakres." },
      { q: "Czy możliwa jest umowa serwisowa?", a: "Tak. Dla centrów handlowych to najlepszy model utrzymania kanalizacji." },
    ],
    cta_telefon: phone,
    cta_text: "Zadzwoń — serwis dla obiektu 24/7",
    serviceType: "Serwis kanalizacji dla centrów handlowych",
  },
  {
    slug: "biurowiec-wspolnota",
    branza_name: "Biurowiec i wspólnota",
    h1: "Pogotowie kanalizacyjne dla biurowców i wspólnot Wrocław",
    meta_title: "Kanalizacja biurowce i wspólnoty Wrocław",
    meta_description:
      "Serwis kanalizacji dla biurowców, zarządców i wspólnot we Wrocławiu. Awarie pionowe, koszty rozłożone, WUKO, inspekcja TV.",
    image: {
      src: "/images/task05/b2b-biurowiec-wspolnota.webp",
      alt: "Pogotowie kanalizacyjne dla biurowców i wspólnot mieszkaniowych Wrocław",
    },
    intro: [
      "W biurowcu i wspólnocie kanalizacja to temat zarządczy: trzeba szybko opanować awarię, jasno opisać koszt i wytłumaczyć mieszkańcom lub najemcom, co zostało zrobione. Najtrudniejsze są awarie pionowe i powracające zatory na poziomach.",
      "Obsługujemy zarządców, administracje i technicznych. Pomagamy rozdzielić interwencję awaryjną od planowego czyszczenia, a przy większych tematach dajemy materiał do decyzji zarządu wspólnoty.",
    ],
    problemy: [
      "awarie pionowe dotykające kilku lokali naraz",
      "spory o koszty i zakres między lokalem a częścią wspólną",
      "nawracające zatory w poziomach piwnicznych",
      "potrzeba dokumentacji dla zarządcy i wspólnoty",
      "serwis w budynku z najemcami lub mieszkańcami",
    ],
    uslugi: [
      { tytul: "Udrażnianie rur", opis: "Szybka interwencja w pionach i odpływach.", link: "/uslugi/udraznianie-rur" },
      { tytul: "WUKO Wrocław", opis: "Czyszczenie poziomów, studni i kanalizacji zewnętrznej.", link: "/uslugi/wuko-wroclaw" },
      { tytul: "Inspekcja TV", opis: "Nagranie do decyzji zarządcy lub wspólnoty.", link: "/uslugi/inspekcja-tv-kanalizacji" },
      { tytul: "Dla wspólnot i firm", opis: "Model obsługi zarządców i obiektów.", link: "/dla-wspolnot-i-firm" },
    ],
    liczby: [
      { wartosc: "zarządca", etykieta: "jeden kontakt i jasny opis zakresu" },
      { wartosc: "piony", etykieta: "awarie wspólne wymagają szybkiej reakcji" },
      { wartosc: "raport", etykieta: "materiał do rozmowy z mieszkańcami" },
    ],
    faq: [
      { q: "Czy wystawiacie fakturę na wspólnotę?", a: "Tak. Pracujemy z zarządcami i wspólnotami, faktura VAT jest standardem." },
      { q: "Czy możecie opisać, czy problem jest w lokalu czy części wspólnej?", a: "Po rozpoznaniu i ewentualnej kamerze możemy wskazać najbardziej prawdopodobne miejsce problemu." },
      { q: "Czy robicie planowe czyszczenia pionów?", a: "Tak. Harmonogram zmniejsza ryzyko awarii i sporów kosztowych." },
      { q: "Czy obsługujecie biurowce poza godzinami pracy?", a: "Tak. Ustalamy okna serwisowe z administracją obiektu." },
      { q: "Czy dostaniemy raport po inspekcji TV?", a: "Tak. Nagranie i opis ustaleń można przekazać zarządowi lub wykonawcy." },
    ],
    cta_telefon: phone,
    cta_text: "Zadzwoń — obsługa zarządcy i wspólnoty",
    serviceType: "Serwis kanalizacji dla biurowców i wspólnot",
  },
  {
    slug: "fabryka",
    branza_name: "Fabryka i produkcja",
    h1: "Kanalizacja przemysłowa dla fabryk Wrocław",
    meta_title: "Kanalizacja przemysłowa Wrocław | Fabryki",
    meta_description:
      "Serwis kanalizacji przemysłowej dla fabryk we Wrocławiu. Ciągłość produkcji, separatory specjalistyczne, odwodnienia, WUKO i inspekcja.",
    image: {
      src: "/images/task05/b2b-fabryka.webp",
      alt: "Kanalizacja przemysłowa dla fabryk Wrocław — odwodnienia, separatory, inspekcja",
    },
    intro: [
      "W fabryce awaria kanalizacji może zatrzymać produkcję, logistykę albo strefę technologiczną. Tu nie wystarczy przepchać rurę: trzeba rozumieć ciągłość procesu, dostęp do stref, separatory specjalistyczne i ryzyko wtórnych przestojów.",
      "Dla zakładów produkcyjnych we Wrocławiu planujemy serwis pod zmianowość, BHP i technologię obiektu. Łączymy WUKO, inspekcję TV, kontrolę odwodnień i separatorów tak, żeby decyzja była oparta na stanie instalacji.",
    ],
    problemy: [
      "ryzyko przestoju produkcji przez zator lub zalanie",
      "kanalizacja przemysłowa z osadami technologicznymi",
      "separatory specjalistyczne i układy podczyszczania",
      "odwodnienia posadzek, placów i stref załadunku",
      "prace w reżimie BHP i zmianowym",
    ],
    uslugi: [
      { tytul: "WUKO Wrocław", opis: "Czyszczenie kanałów przemysłowych i odwodnień.", link: "/uslugi/wuko-wroclaw" },
      { tytul: "Inspekcja TV", opis: "Diagnoza odcinków pod halą i przy fundamentach.", link: "/uslugi/inspekcja-tv-kanalizacji" },
      { tytul: "Separatory ropopochodne", opis: "Serwis separatorów i odcinków technologicznych.", link: "/uslugi/separatory-ropopochodne" },
      { tytul: "Frezowanie kanalizacji", opis: "Usuwanie twardych osadów i przeszkód w rurach.", link: "/uslugi/frezowanie-kanalizacji" },
    ],
    liczby: [
      { wartosc: "produkcja", etykieta: "serwis planujemy pod ciągłość pracy" },
      { wartosc: "BHP", etykieta: "wejście zgodnie z zasadami zakładu" },
      { wartosc: "kamera + WUKO", etykieta: "diagnoza i czyszczenie w jednym procesie" },
    ],
    faq: [
      { q: "Czy obsługujecie kanalizację przemysłową?", a: "Tak. Zakres ustalamy po typie obiektu, zanieczyszczeń i dostępach technicznych." },
      { q: "Czy możecie pracować na zmianach nocnych?", a: "Tak. Dla produkcji często planujemy serwis poza głównym ruchem zakładu." },
      { q: "Czy robicie separatory specjalistyczne?", a: "Obsługujemy separatory ropopochodne i układy wymagające kontroli oraz czyszczenia." },
      { q: "Czy kamera działa pod halą?", a: "Jeśli jest dostęp do odcinka, inspekcja TV pozwala ograniczyć zgadywanie i niepotrzebne odkrywki." },
      { q: "Czy dostaniemy dokumentację dla działu utrzymania ruchu?", a: "Tak. Po pracach przekazujemy opis zakresu i zalecenia techniczne." },
    ],
    cta_telefon: phone,
    cta_text: "Zadzwoń — ochroń ciągłość produkcji",
    serviceType: "Serwis kanalizacji przemysłowej",
  },
];

export function getBranzaPage(slug: string) {
  return branzePages.find((page) => page.slug === slug);
}
