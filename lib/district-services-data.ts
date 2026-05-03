export type FaqItem = { q: string; a: string };

export type DistrictSection = {
  h2: string;
  body: string;
};

export type DistrictService = {
  districtSlug: string;
  serviceSlug: string;
  districtName: string;
  serviceName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  sections: DistrictSection[];
  faqs: FaqItem[];
  mainServiceSlug: string;
  mainServiceLabel: string;
  relatedLinks: { label: string; href: string }[];
  areaServed: string;
  serviceType: string;
  priceLow: number;
  priceHigh: number;
};

export const districtServices: DistrictService[] = [
  // 1. WUKO Krzyki
  {
    districtSlug: "krzyki",
    serviceSlug: "wuko",
    districtName: "Krzyki",
    serviceName: "WUKO",
    metaTitle: "WUKO Krzyki Wrocław — czyszczenie kanalizacji",
    metaDescription: "Czyszczenie kanalizacji metodą WUKO na Krzykach i w okolicach Partynic, Huby, Kleciny. Obsługujemy wspólnoty, bloki, kamienice i firmy. Dojazd do 120 min.",
    h1: "WUKO Krzyki — hydrodynamiczne czyszczenie kanalizacji",
    lead: "Obsługujemy budynki i obiekty na Krzykach, od starszej zabudowy przy Hallera i Powstańców Śląskich po nowe osiedla w okolicach Partynic i Tarnogaju. Przyjeżdżamy ze sprzętem WUKO, czyścimy piony, poziomy, studnie i wpusty. Po usłudze wiadomo, co było przyczyną i co zrobić dalej.",
    sections: [
      {
        h2: "Jakie obiekty obsługujemy na Krzykach",
        body: "Krzyki to dzielnica z mocno zróżnicowaną zabudową. Starsze bloki z lat 70. i 80. przy Hallera, Sztabowej i Powstańców Śląskich mają wieloletnie osady w pionach i poziomach — typowy teren dla WUKO z pełnym czyszczeniem odcinków zbiorczych. Kamienice w rejonie Świdnickiej i południowych ulic mają wąskie, często żeliwne piony, gdzie spirala nie zawsze sięga. Nowe osiedla deweloperskie w okolicach Partynic i Kleciny to z kolei problemy poremontowe: zaprawa, piasek i resztki materiałów budowlanych. Obsługujemy zarówno wspólnoty i spółdzielnie z harmonogramem cyklicznym, jak i pojedyncze zgłoszenia awaryjne.",
      },
      {
        h2: "Kiedy WUKO jest lepsze niż spirala na Krzykach",
        body: "Spirala mechaniczna przebija zator, ale nie czyści odcinka. W budynkach wielorodzinnych na Krzykach, gdzie w pionie mieszka kilkanaście rodzin, osad odkłada się latami — po przebicu spiralą problem wraca za kilka tygodni. WUKO pod wysokim ciśnieniem wypłukuje osad ze ścianek rury, usuwa tłuszcz, szmatki i piasek na całym odcinku. Wybieramy WUKO szczególnie przy nawracających zatorach w pionach wspólnotowych, przy długich poziomach łączących kilka klatek i przy czyszczeniu studni oraz odcinków deszczowych.",
      },
      {
        h2: "Czyszczenie prewencyjne dla wspólnot na Krzykach",
        body: "Większość wspólnot na Krzykach zgłasza nas dopiero przy awarii — wybita cofka w piwnicy, zablokowany pion, alarm od mieszkańców. To kosztuje więcej i trwa dłużej niż planowe czyszczenie. Dla budynków, gdzie zarządca chce uniknąć niespodzianek, ustawiamy harmonogram: raz na rok lub dwa lata pełne czyszczenie pionów i poziomów, po którym przekazujemy krótki raport o stanie instalacji. Stała obsługa oznacza też priorytetowy dojazd przy awarii.",
      },
      {
        h2: "Co po WUKO — dalsze kroki na Krzykach",
        body: "Po czyszczeniu WUKO sprawdzamy drożność i informujemy, czy instalacja jest w stanie dobrym, czy pojawiły się sygnały problemów głębszych. Jeśli natrafiamy na pęknięcie rury, zły spadek albo nawracające zaleganie osadu w jednym miejscu, rekomendujemy inspekcję TV. Kamera potwierdza lub wyklucza mechaniczne uszkodzenie i daje zarządcy materiał do decyzji o naprawie lub wymianie odcinka.",
      },
    ],
    faqs: [
      { q: "Czy obsługujecie Krzyki i okolice jak Partynice, Huby, Klecina?", a: "Tak. Regularnie przyjeżdżamy na Krzyki, Huby, Klecinę, Tarnogaj, Wojszyce i okolice Partynic. To jeden z naszych głównych terenów pracy we Wrocławiu." },
      { q: "Ile kosztuje WUKO dla wspólnoty mieszkaniowej na Krzykach?", a: "Orientacyjnie 600–1400 zł za czyszczenie odcinka lub studni w typowym budynku wielorodzinnym. Ostateczna cena zależy od długości odcinka, liczby studni i dostępu do instalacji." },
      { q: "Jak szybko możecie przyjechać na Krzyki przy awarii?", a: "Przy awaryjnym zgłoszeniu dojazd zajmuje zazwyczaj 60–120 minut. Oddzwaniamy w ciągu 15 minut od zgłoszenia." },
      { q: "Czy czyścicie też kanalizację deszczową i studnie na osiedlach?", a: "Tak. Wpusty, studnie, odcinki deszczowe i odwodnienia terenów zewnętrznych to standardowy zakres usługi WUKO na Krzykach." },
      { q: "Czy WUKO na Krzykach robicie też dla lokali gastronomicznych?", a: "Tak. Lokale przy Świdnickiej, Powstańców Śląskich i w galeriach na terenie Krzyków obsługujemy. Przy większych obiektach możemy ustawić harmonogram cykliczny." },
      { q: "Czy po czyszczeniu WUKO dostanę dokumentację?", a: "Tak. Faktura VAT na każde zlecenie. Przy większych obiektach raport z zakresu prac i informacja o stanie instalacji po czyszczeniu." },
    ],
    mainServiceSlug: "wuko-wroclaw",
    mainServiceLabel: "WUKO Wrocław — pełna oferta",
    relatedLinks: [
      { label: "Inspekcja TV kanalizacji Krzyki", href: "/wroclaw/krzyki/inspekcja-tv-kanalizacji" },
      { label: "Udrażnianie rur Krzyki", href: "/wroclaw/krzyki/udraznianie-rur" },
      { label: "WUKO Fabryczna", href: "/wroclaw/fabryczna/wuko" },
    ],
    areaServed: "Krzyki",
    serviceType: "Czyszczenie kanalizacji WUKO",
    priceLow: 250,
    priceHigh: 1400,
  },
  // 2. Udrażnianie Krzyki
  {
    districtSlug: "krzyki",
    serviceSlug: "udraznianie-rur",
    districtName: "Krzyki",
    serviceName: "Udrażnianie rur",
    metaTitle: "Udrażnianie rur Krzyki Wrocław — zatory i odpływy",
    metaDescription: "Udrażnianie rur i usuwanie zatorów na Krzykach. Spirala mechaniczna i WUKO dla mieszkań, wspólnot i lokali. Szybki dojazd, wycena po opisie.",
    h1: "Udrażnianie rur Krzyki — usuwanie zatorów w mieszkaniach i budynkach",
    lead: "Na Krzykach obsługujemy zatory w mieszkaniach, klatki w blokach i kamienicach, poziomy piwniczne i przyłącza. Dobieramy metodę do problemu: spirala przy prostym zatorze, WUKO gdy odcinek jest zapiaszczony lub zablokowany na dłuższym odcinku.",
    sections: [
      {
        h2: "Typowe zatory w budynkach na Krzykach",
        body: "W starszych blokach i kamienicach na Krzykach najczęstsze problemy to zablokowane piony kuchenne (tłuszcz i resztki jedzenia), zatarte odpływy łazienkowe (włosy, mydło, osad) i wybicia ścieków w piwnicach przy intensywnych opadach. W budynkach z lat 70. i 80. żeliwne piony mają wewnętrzne narośla korozyjne, które przy przeciążeniu przekształcają się w zatory trudne do usunięcia samą spiralą. W nowych osiedlach przy Partynicach i Klecinie pojawiają się głównie problemy poremontowe: zaprawa, piasek i resztki materiałów w rurach.",
      },
      {
        h2: "Spirala czy WUKO — co wybramy na Krzykach",
        body: "Spirala mechaniczna sprawdza się przy prostym zatorze organicznym w jednym miejscu: zablokowany syfon, zatarta rurka odpływowa, miejscowe zaleganie. Jest szybsza i tańsza przy ograniczonym zakresie. WUKO wybieramy przy nawracających zatorach, długich odcinkach poziomów, pionach w budynkach wielorodzinnych i wszędzie tam, gdzie problem wraca po spirali za kilka tygodni. Dobór metody ustalamy po opisie objawów, a ostatecznie weryfikujemy na miejscu.",
      },
      {
        h2: "Udrażnianie w lokalach usługowych i gastronomii na Krzykach",
        body: "Lokale przy Powstańców Śląskich, Hallera, Świdnickiej i w galeriach na Krzykach mają intensywne obciążenie kanalizacyjne. Gastronomia produkuje duże ilości tłuszczu, który przy braku separatora odkłada się w rurach i tworzy twarde korki. Dla takich obiektów proponujemy harmonogram czyszczenia zapobiegawczego, który eliminuje awarię zamiast na nią czekać.",
      },
      {
        h2: "Co zrobić gdy zator wraca — diagnoza na Krzykach",
        body: "Jeśli po udrożnieniu problem pojawia się ponownie w ciągu kilku tygodni, to sygnał, że przyczyna jest głębsza: pęknięcie rury, zły spadek, nawis korozyjny albo korzeń drzewa wnikający w przyłącze. Na Krzykach, gdzie wiele budynków stoi wśród starych drzew, problem z korzeniami jest częsty w przyłączach biegnących przez tereny zielone. Wtedy zamiast kolejnego udrożnienia zalecamy inspekcję TV — kamera w 30 minut wskazuje dokładne miejsce i przyczynę.",
      },
    ],
    faqs: [
      { q: "Czy przyjedziecie do mieszkania na Krzykach przy nagłym zatorze?", a: "Tak. Obsługujemy zgłoszenia z mieszkań na Krzykach i oddzwaniamy w ciągu 15 minut. Dojazd zajmuje 60–120 minut." },
      { q: "Ile kosztuje udrażnianie rur w mieszkaniu na Krzykach?", a: "Przy typowym zatorze w mieszkaniu koszt zaczyna się od 250 zł. Wycenę orientacyjną podajemy telefonicznie po opisie objawów." },
      { q: "Czy obsługujecie klatki schodowe i poziomy piwniczne we wspólnotach?", a: "Tak. Poziomy piwniczne, odcinki zbiorcze i studzienki przy budynkach to standardowy zakres. Robimy zarówno interwencje awaryjne, jak i planowe czyszczenie." },
      { q: "Czy udrażniacie też kanalizację deszczową przy blokach?", a: "Tak. Wpusty na parkingach, odwodnienia chodników i przepusty deszczowe przy budynkach obsługujemy metodą WUKO." },
      { q: "Co jeśli spirala nie pomaga i zator wraca?", a: "Jeśli po udrożnieniu problem wraca, kolejny krok to inspekcja TV kanalizacji. Kamera wskazuje, czy przyczyną jest uszkodzenie mechaniczne, korzeń, zły spadek albo korozja wewnętrzna." },
      { q: "Czy wystawiacie fakturę za udrażnianie na Krzykach?", a: "Tak. Faktura VAT na każde zlecenie. Przy zleceniach od zarządców lub wspólnot — protokół zakresu prac." },
    ],
    mainServiceSlug: "udraznianie-rur",
    mainServiceLabel: "Udrażnianie rur Wrocław — pełna oferta",
    relatedLinks: [
      { label: "Inspekcja TV kanalizacji Krzyki", href: "/wroclaw/krzyki/inspekcja-tv-kanalizacji" },
      { label: "WUKO Krzyki", href: "/wroclaw/krzyki/wuko" },
      { label: "Udrażnianie rur Fabryczna", href: "/wroclaw/fabryczna/udraznianie-rur" },
    ],
    areaServed: "Krzyki",
    serviceType: "Udrażnianie rur",
    priceLow: 250,
    priceHigh: 900,
  },
  // 3. Inspekcja TV Krzyki
  {
    districtSlug: "krzyki",
    serviceSlug: "inspekcja-tv-kanalizacji",
    districtName: "Krzyki",
    serviceName: "Inspekcja TV kanalizacji",
    metaTitle: "Inspekcja TV kanalizacji Krzyki Wrocław — kamera do rur",
    metaDescription: "Inspekcja TV kanalizacji na Krzykach — kamera do rur, diagnoza pęknięć, korzeni i zatorów. Materiał z nagraniem dla wspólnot i zarządców.",
    h1: "Inspekcja TV kanalizacji Krzyki — kamera i diagnoza rur",
    lead: "Wykonujemy inspekcję TV kanalizacji na Krzykach dla wspólnot, zarządców, firm i klientów indywidualnych. Kamera wchodzi do pionu, poziomu lub przyłącza i pokazuje, co jest przyczyną problemu — zanim zdecydujemy o naprawie, wymianie lub kolejnej usłudze.",
    sections: [
      {
        h2: "Kiedy inspekcja TV jest potrzebna na Krzykach",
        body: "Inspekcja TV jest pierwszym wyborem przy nawracających zatorach, które wracają mimo kolejnych udrożnień. Na Krzykach, gdzie wiele budynków stoi wśród starych lip i kasztanowców, korzenie drzew wnikające w stare przyłącza ceramiczne to jeden z najczęstszych problemów, który bez kamery wygląda identycznie jak zwykły zator. Kamera jest też niezbędna przed remontem lub wymianą odcinka oraz przy zakupie nieruchomości lub przejęciu zarządzania budynkiem.",
      },
      {
        h2: "Co kamera może znaleźć w rurach na Krzykach",
        body: "W starszych budynkach na Krzykach inspekcja TV najczęściej ujawnia: korzenie wrastające w złącza kamionkowych przyłączy, korozję wewnętrzną żeliwnych pionów tworzącą nawisy zatrzymujące papier i tłuszcz, pęknięcia rur przy fundamencie po osiadaniu budynku oraz zły spadek odcinków ułożonych przez niedbałe ekipy remontowe. W nowych osiedlach najczęstszy problem to zaprawa i piasek zostawione przez ekipy budowlane.",
      },
      {
        h2: "Inspekcja TV dla wspólnot i zarządców na Krzykach",
        body: "Dla wspólnot mieszkaniowych zarządzających budynkami na Krzykach inspekcja TV dostarcza konkretny materiał do decyzji zarządczej: nagranie z kamerą, opis stanu odcinka i rekomendacja co zrobić dalej — naprawić punkt, wymienić odcinek lub zaplanować cykliczne czyszczenie. To dokumentacja, którą można pokazać właścicielom lokali lub przedstawić wykonawcy remontu jako wytyczne techniczne.",
      },
      {
        h2: "Inspekcja TV przed naprawą i po czyszczeniu na Krzykach",
        body: "Inspekcja przed naprawą skraca czas robót i zmniejsza ich zakres — zamiast rozkuwać cały korytarz piwniczny, wchodzi się dokładnie w jedno miejsce. Inspekcja po czyszczeniu WUKO potwierdza drożność odcinka i wyłapuje, czy pod usuniętym zatorem kryło się uszkodzenie mechaniczne. Na Krzykach, gdzie wiele wspólnot ma rozbudowane poziomy piwniczne łączące kilka klatek, taka weryfikacja po serwisie jest dobrą praktyką przy droższych zleceniach.",
      },
    ],
    faqs: [
      { q: "Czy dostanę nagranie z inspekcji TV na Krzykach?", a: "Tak. Przekazujemy nagranie lub raport z najważniejszymi ustaleniami. Dla wspólnot i zarządców przygotowujemy materiał nadający się do przekazania wykonawcy lub przedstawienia na zebraniu." },
      { q: "Ile kosztuje inspekcja TV kanalizacji na Krzykach?", a: "Orientacyjnie 400–800 zł za standardowe zlecenie diagnostyczne. Ostateczna cena zależy od długości odcinka i liczby punktów wejścia kamery." },
      { q: "Czy inspekcja TV zastępuje udrażnianie, czy uzupełnia?", a: "Uzupełnia. Kamera diagnozuje, ale nie czyści. Po inspekcji wiemy, co trzeba zrobić — czy to WUKO, naprawa punktowa, czy wymiana odcinka." },
      { q: "Czy kamera dostanie się do każdego rodzaju rury?", a: "W zdecydowanej większości tak. Pracujemy na pionach, poziomach, przyłączach i odcinkach od DN50 wzwyż. Przy bardzo wąskich odcinkach informujemy o ograniczeniach przed zleceniem." },
      { q: "Czy inspekcja TV jest potrzebna przy zakupie domu lub mieszkania na Krzykach?", a: "Warto, szczególnie przy starszych budynkach. Inspekcja daje obraz stanu przyłącza i pionów zanim podpiszesz akt notarialny. Na Krzykach, gdzie są kamienice z przedwojenną instalacją, to inwestycja, która może ujawnić poważny problem." },
      { q: "Czy możecie zrobić inspekcję TV i od razu udrożnienie tego samego dnia?", a: "Tak, jeśli po inspekcji okaże się, że odcinek wymaga WUKO, możemy to zrealizować jednego dnia. Łączenie inspekcji z udrożnieniem skraca czas i koszt całego procesu." },
    ],
    mainServiceSlug: "inspekcja-tv-kanalizacji",
    mainServiceLabel: "Inspekcja TV kanalizacji Wrocław — pełna oferta",
    relatedLinks: [
      { label: "WUKO Krzyki", href: "/wroclaw/krzyki/wuko" },
      { label: "Udrażnianie rur Krzyki", href: "/wroclaw/krzyki/udraznianie-rur" },
      { label: "Inspekcja TV Fabryczna", href: "/wroclaw/fabryczna/inspekcja-tv-kanalizacji" },
    ],
    areaServed: "Krzyki",
    serviceType: "Inspekcja TV kanalizacji",
    priceLow: 400,
    priceHigh: 800,
  },
  // 4. WUKO Fabryczna
  {
    districtSlug: "fabryczna",
    serviceSlug: "wuko",
    districtName: "Fabryczna",
    serviceName: "WUKO",
    metaTitle: "WUKO Fabryczna Wrocław — czyszczenie kanalizacji dla firm",
    metaDescription: "Czyszczenie kanalizacji WUKO na Fabrycznej i Bielanach Wrocławskich. Magazyny, warsztaty, parkingi, galerie. Odwodnienia, deszczówka, kanały technologiczne.",
    h1: "WUKO Fabryczna — czyszczenie kanalizacji dla obiektów i firm",
    lead: "Fabryczna i Bielany Wrocławskie to dzielnica z dużą koncentracją obiektów usługowych, magazynowych i handlowych. Obsługujemy WUKO dla parkingów, placów manewrowych, odwodnień terenów zewnętrznych, kanałów technologicznych i kanalizacji deszczowej. Pracujemy dla zarządców obiektów, parków logistycznych, sieci handlowych i firm.",
    sections: [
      {
        h2: "Jakie obiekty obsługujemy na Fabrycznej i Bielanach",
        body: "Fabryczna to dzielnica o zupełnie innym charakterze niż mieszkaniowe Krzyki. Parki magazynowe, warsztaty, myjnie, stacje paliw, galerie handlowe (Magnolia Park, Nowa Stacja), obiekty produkcyjne w strefie Bielany Wrocławskie — każdy z tych obiektów ma intensywnie obciążoną kanalizację zewnętrzną i wewnętrzną. Charakterystyczne problemy to zapiaszczone odwodnienia placów manewrowych po zimie, zablokowane separatory ropopochodne przy warsztatach i parkingach, przeciążona kanalizacja deszczowa przy dużych powierzchniach dachowych i asfaltowych.",
      },
      {
        h2: "WUKO dla parkingów i placów manewrowych na Fabrycznej",
        body: "Parkingi i place manewrowe przy obiektach na Fabrycznej zbierają przez zimę duże ilości piachu, soli i błota. Po sezonie zimowym wpusty i studnie wymagają czyszczenia, zanim kolejne opady zepchnęłyby osady dalej w sieć. WUKO z głowicą rotacyjną czyści wpust, studnię i odcinek przewodu jednym przejazdem. Dla zarządców dużych parkingów z kilkoma lub kilkudziesięcioma wpustami robimy czyszczenie całego układu w jednym zleceniu z protokołem zakresu prac.",
      },
      {
        h2: "Czyszczenie kanalizacji deszczowej przy obiektach na Fabrycznej",
        body: "Duże obiekty handlowe i magazynowe na Fabrycznej mają rozbudowane układy odprowadzania deszczówki — rynny, zbieracze, studnie i długie odcinki podziemne. Przy braku regularnego czyszczenia te układy zapychają się liśćmi, piachem i osadami, a przy intensywnych opadach zatopienie parkingu lub wewnętrznego dziedzińca obiektu to realne ryzyko. Dla takich obiektów ustawiamy harmonogram czyszczenia deszczówki z dokumentacją zakresu prac.",
      },
      {
        h2: "Stała obsługa serwisowa dla obiektów na Fabrycznej i Bielanach",
        body: "Zarządcy obiektów na Fabrycznej i Bielanach Wrocławskich oczekują ustalonego harmonogramu, szybkiej reakcji przy awarii i dokumentacji po każdej wizycie. Oferujemy umowy serwisowe obejmujące WUKO, czyszczenie separatorów i inspekcje TV w jednym pakiecie. Jeden kontakt, jeden termin, jeden protokół.",
      },
    ],
    faqs: [
      { q: "Czy obsługujecie obiekty komercyjne i magazyny na Fabrycznej i Bielanach?", a: "Tak. Obsługujemy magazyny, obiekty handlowe, warsztaty, parkingi i zakłady produkcyjne na Fabrycznej i w strefach Bielany Wrocławskie. To jeden z naszych głównych segmentów klientów biznesowych." },
      { q: "Ile kosztuje WUKO dla parkingu lub placu manewrowego na Fabrycznej?", a: "Przy typowym parkingu z kilkoma lub kilkunastoma wpustami orientacyjnie 600–1400 zł. Dla większych układów deszczowych — wycena po opisie zakresu lub krótkim rozpoznaniu." },
      { q: "Czy czyścicie separatory ropopochodne przy warsztatach i stacjach paliw?", a: "Tak. Serwis separatorów ropopochodnych to oddzielna usługa, ale często łączymy ją z czyszczeniem WUKO przy jednej wizycie na obiekcie." },
      { q: "Czy możecie przyjechać poza godzinami pracy obiektu na Fabrycznej?", a: "Tak. Przy obiektach handlowych i magazynach możemy ustalić termin wczesnoporanny lub wieczorny, gdy czyszczenie WUKO nie może blokować ruchu." },
      { q: "Czy wystawiacie dokumentację dla zarządców obiektów po WUKO?", a: "Tak. Protokół zakresu prac, faktura VAT i krótka informacja o stanie instalacji po czyszczeniu. Przy stałej obsłudze — raport z rekomendacjami dla obsługi technicznej lub zarządcy." },
      { q: "Jak szybko możecie przyjechać na Fabryczną przy awarii?", a: "Przy awaryjnym zgłoszeniu dojazd zajmuje 60–120 minut. Oddzwaniamy w ciągu 15 minut. Przy stałych klientach z umową serwisową czas reakcji jest priorytetowy." },
    ],
    mainServiceSlug: "wuko-wroclaw",
    mainServiceLabel: "WUKO Wrocław — pełna oferta",
    relatedLinks: [
      { label: "Inspekcja TV Fabryczna", href: "/wroclaw/fabryczna/inspekcja-tv-kanalizacji" },
      { label: "Udrażnianie rur Fabryczna", href: "/wroclaw/fabryczna/udraznianie-rur" },
      { label: "WUKO Krzyki", href: "/wroclaw/krzyki/wuko" },
    ],
    areaServed: "Fabryczna",
    serviceType: "Czyszczenie kanalizacji WUKO",
    priceLow: 350,
    priceHigh: 2800,
  },
  // 5. Udrażnianie Fabryczna
  {
    districtSlug: "fabryczna",
    serviceSlug: "udraznianie-rur",
    districtName: "Fabryczna",
    serviceName: "Udrażnianie rur",
    metaTitle: "Udrażnianie rur Fabryczna Wrocław — firmy i obiekty",
    metaDescription: "Udrażnianie rur i usuwanie zatorów na Fabrycznej i Bielanach Wrocławskich. Obsługa firm, magazynów, gastronomii i obiektów handlowych.",
    h1: "Udrażnianie rur Fabryczna — zatory w obiektach komercyjnych i firmach",
    lead: "Na Fabrycznej i Bielanach Wrocławskich obsługujemy udrażnianie rur dla firm, obiektów handlowych, gastronomii, warsztatów i magazynów. Zator w obiekcie komercyjnym to ryzyko przestoju. Reagujemy szybko, dobieramy właściwą metodę i dokumentujemy zakres prac.",
    sections: [
      {
        h2: "Typowe problemy kanalizacyjne w obiektach na Fabrycznej",
        body: "W obiektach komercyjnych i przemysłowych na Fabrycznej zatory mają inny charakter niż w budynkach mieszkalnych. W kuchniach zbiorowych i obiektach gastronomicznych przy galeriach handlowych to tłuszcz gromadzący się w przewodach za separatorem lub przy braku separatora. W warsztatach i myjniach — osady z piachu, oleju i produktów chemicznych w odpływach. W magazynach i obiektach produkcyjnych — zapiaszczone odwodnienia podłogowe i studzienki zbierające odpady technologiczne. Każdy z tych scenariuszy wymaga WUKO przy pierwszym wyjeździe.",
      },
      {
        h2: "Udrażnianie w gastronomii na Fabrycznej i przy Magnolii",
        body: "Obiekty gastronomiczne przy galeriach handlowych na Fabrycznej — restauracje w Magnolii, food corty, kuchnie zbiorowe — mają jedno z najintensywniejszych obciążeń kanalizacyjnych wśród klientów w tej dzielnicy. Tłuszcz i resztki jedzenia przy braku systematycznego serwisu tworzą twarde osady, których spirala nie usunie. Dla takich obiektów ma sens harmonogram prewencyjny: czyszczenie 2–4 razy w roku eliminuje awarie zatrzymujące kuchnię w szczycie.",
      },
      {
        h2: "Udrażnianie w magazynach i obiektach logistycznych na Fabrycznej",
        body: "Hale magazynowe i obiekty logistyczne w strefach Bielany Wrocławskie mają rozbudowane odwodnienia podłogowe i studzienki technologiczne. Przy intensywnym ruchu wózków widłowych i ciągników siodłowych osady z piachu, oleju i resztek technologicznych odkładają się szybko. Udrażnianie spiralą zazwyczaj nie wystarczy — potrzebne jest WUKO z wypłukaniem odcinka pod ciśnieniem. Dla obiektów z dużą liczbą studzienek robimy kompleksowe czyszczenie całego układu w jednej wizycie.",
      },
      {
        h2: "Kiedy udrożnienie to za mało — diagnostyka na Fabrycznej",
        body: "W obiektach komercyjnych na Fabrycznej, gdzie zatory pojawiają się regularnie mimo serwisu, przyczyna leży często w projekcie instalacji: za mały spadek rury, zły dobór średnicy do obciążenia, uszkodzenie złącza przy fundamencie albo korzeń w zewnętrznym przyłączu. Przy takich przypadkach udrożnienie to tylko chwilowe rozwiązanie. Wtedy rekomendujemy inspekcję TV, która w ciągu jednej wizyty pokazuje, czy problem jest techniczny i gdzie dokładnie.",
      },
    ],
    faqs: [
      { q: "Czy przyjedziecie do obiektu komercyjnego na Fabrycznej przy nagłym zatorze?", a: "Tak. Obsługujemy awarie w obiektach firmowych, handlowych i magazynowych na Fabrycznej. Oddzwaniamy w 15 minut, dojazd 60–120 minut." },
      { q: "Ile kosztuje udrażnianie rur w obiekcie komercyjnym na Fabrycznej?", a: "Przy typowym zleceniu punktowym od 300–450 zł. Przy większym zakresie — poziomy, studzienki, odwodnienia podłogowe — wycena po opisie lub rozpoznaniu." },
      { q: "Czy obsługujecie kuchnie i gastronomię przy galeriach na Fabrycznej?", a: "Tak. Gastronomia przy Magnolii, food corty i kuchnie zbiorowe to obiekty wymagające regularnego serwisu kanalizacji i separatorów tłuszczu." },
      { q: "Czy możecie udrożnić odwodnienie podłogowe w hali magazynowej?", a: "Tak. Studzienki i odwodnienia podłogowe w halach magazynowych i produkcyjnych obsługujemy WUKO. Przy dużej liczbie punktów robimy czyszczenie całego układu w jednej wizycie." },
      { q: "Co jeśli po udrożnieniu zator wraca w ciągu tygodnia?", a: "Nawracający zator to sygnał do inspekcji TV. Kamera wskazuje, czy przyczyną jest uszkodzenie mechaniczne, zły spadek rury albo korzeń w przyłączu." },
      { q: "Czy wystawiacie dokumentację po serwisie dla zarządców obiektów?", a: "Tak. Faktura VAT, protokół zakresu prac i krótki raport po usłudze. Przy stałej obsłudze — pełna dokumentacja po każdej wizycie." },
    ],
    mainServiceSlug: "udraznianie-rur",
    mainServiceLabel: "Udrażnianie rur Wrocław — pełna oferta",
    relatedLinks: [
      { label: "Inspekcja TV Fabryczna", href: "/wroclaw/fabryczna/inspekcja-tv-kanalizacji" },
      { label: "WUKO Fabryczna", href: "/wroclaw/fabryczna/wuko" },
      { label: "Udrażnianie rur Krzyki", href: "/wroclaw/krzyki/udraznianie-rur" },
    ],
    areaServed: "Fabryczna",
    serviceType: "Udrażnianie rur",
    priceLow: 300,
    priceHigh: 1200,
  },
  // 6. Inspekcja TV Fabryczna
  {
    districtSlug: "fabryczna",
    serviceSlug: "inspekcja-tv-kanalizacji",
    districtName: "Fabryczna",
    serviceName: "Inspekcja TV kanalizacji",
    metaTitle: "Inspekcja TV kanalizacji Fabryczna Wrocław — kamera dla firm",
    metaDescription: "Inspekcja TV kanalizacji na Fabrycznej i Bielanach Wrocławskich. Kamera do rur dla obiektów komercyjnych, magazynów i firm. Nagranie i raport techniczny.",
    h1: "Inspekcja TV kanalizacji Fabryczna — diagnostyka kamerą dla firm i obiektów",
    lead: "Wykonujemy inspekcję TV kanalizacji na Fabrycznej i Bielanach Wrocławskich dla zarządców obiektów komercyjnych, firm i zakładów. Kamera wchodzi w odcinek, który sprawia problem — i daje konkretną odpowiedź, co jest przyczyną, zanim zdecydujemy o naprawie lub wymianie.",
    sections: [
      {
        h2: "Kiedy inspekcja TV jest niezbędna w obiektach na Fabrycznej",
        body: "W obiektach komercyjnych na Fabrycznej inspekcja TV ma zastosowanie w trzech głównych sytuacjach. Pierwsza to nawracający zator w instalacji, który wraca mimo regularnego czyszczenia — kamera wskazuje, czy przyczyną jest uszkodzenie mechaniczne, zły spadek lub korzeń. Druga to odbiór techniczny nowo budowanego lub remontowanego odcinka kanalizacji, szczególnie przy przyłączach i odcinkach zewnętrznych. Trzecia to przejęcie zarządzania obiektem lub due diligence przy zakupie nieruchomości komercyjnej.",
      },
      {
        h2: "Co kamera ujawnia w obiektach na Fabrycznej i Bielanach",
        body: "Typowe ustalenia inspekcji TV w obiektach komercyjnych na tym terenie obejmują: uszkodzenia złączy rur przy fundamentach po osiadaniu gruntu lub obciążeniu ruchem ciężkim, nieprawidłowy spadek odcinków ułożonych w pośpiechu przy inwestycjach, zalegające osady w odcinkach rzadko eksploatowanych oraz — w starszych obiektach — korozję wewnętrzną lub pęknięcia rur żelbetowych przy kanałach technologicznych. W obiektach z separatorami ropopochodnymi kamera pozwala też sprawdzić stan przyłącza za separatorem.",
      },
      {
        h2: "Inspekcja TV jako narzędzie zarządzania technicznego obiektem",
        body: "Dla zarządcy technicznego obiektu na Fabrycznej inspekcja TV to narzędzie planowania, nie tylko reagowania na awarie. Nagranie z kamery dokumentuje stan instalacji na dany dzień i stanowi punkt odniesienia przy kolejnych przeglądach. Jeśli przez rok pojawiają się osady na tym samym odcinku, nagranie sprzed roku i po roku pozwala ocenić tempo degradacji i zaplanować wymianę zanim dojdzie do awarii w środku sezonu.",
      },
      {
        h2: "Łączenie inspekcji TV z WUKO na Fabrycznej — jeden wyjazd",
        body: "W obiektach komercyjnych na Fabrycznej często łączymy inspekcję TV z czyszczeniem WUKO w jednej wizycie: najpierw WUKO czyści odcinek, a po czyszczeniu kamera wchodzi i potwierdza drożność oraz ewentualne uszkodzenia mechaniczne maskowane przez osad. Takie połączenie daje pełny obraz stanu instalacji i eliminuje konieczność osobnego terminu na diagnostykę.",
      },
    ],
    faqs: [
      { q: "Czy robicie inspekcję TV dla obiektów komercyjnych i magazynów na Fabrycznej?", a: "Tak. Inspekcja TV dla firm, zarządców obiektów i zakładów na Fabrycznej i Bielanach Wrocławskich to jeden z naszych standardowych zakresów. Pracujemy na pionach, poziomach, przyłączach i kanałach technologicznych." },
      { q: "Ile kosztuje inspekcja TV dla obiektu komercyjnego na Fabrycznej?", a: "Orientacyjnie 400–1000 zł w zależności od długości odcinka i liczby punktów wejścia kamery. Dla stałych klientów inspekcja TV wchodzi w pakiet serwisowy." },
      { q: "Czy dostanę nagranie i raport techniczny po inspekcji?", a: "Tak. Nagranie z kamerą i raport z opisem najważniejszych ustaleń. Przy obiektach zarządzanych przekazujemy materiał nadający się do archiwum technicznego i do rozmowy z projektantem lub wykonawcą remontu." },
      { q: "Czy można zlecić inspekcję TV jako odbiór po robotach kanalizacyjnych na Fabrycznej?", a: "Tak. Inspekcja odbiorcza po ułożeniu lub wymianie odcinka to dobra praktyka, szczególnie przy zewnętrznych przyłączach i odcinkach deszczowych. Potwierdza prawidłowy spadek, szczelność złączy i brak zanieczyszczeń po budowie." },
      { q: "Czy inspekcja TV zastąpi regularne czyszczenie WUKO?", a: "Nie — to dwie różne funkcje. Kamera diagnozuje, WUKO czyści. Optymalnie stosuje się je razem: WUKO usuwa osad, kamera sprawdza stan rury po czyszczeniu." },
      { q: "Jak szybko możecie zrealizować inspekcję TV na Fabrycznej przy pilnej potrzebie?", a: "Przy pilnym zgłoszeniu ustalamy termin przy pierwszym kontakcie. Oddzwaniamy w 15 minut i potwierdzamy dostępność sprzętu i ekipy." },
    ],
    mainServiceSlug: "inspekcja-tv-kanalizacji",
    mainServiceLabel: "Inspekcja TV kanalizacji Wrocław — pełna oferta",
    relatedLinks: [
      { label: "WUKO Fabryczna", href: "/wroclaw/fabryczna/wuko" },
      { label: "Udrażnianie rur Fabryczna", href: "/wroclaw/fabryczna/udraznianie-rur" },
      { label: "Inspekcja TV Krzyki", href: "/wroclaw/krzyki/inspekcja-tv-kanalizacji" },
    ],
    areaServed: "Fabryczna",
    serviceType: "Inspekcja TV kanalizacji",
    priceLow: 400,
    priceHigh: 1000,
  },
];

export function getDistrictService(
  districtSlug: string,
  serviceSlug: string
): DistrictService | undefined {
  return districtServices.find(
    (s) => s.districtSlug === districtSlug && s.serviceSlug === serviceSlug
  );
}
