import type { LucideIcon } from "lucide-react";
import {
  ArrowDownToLine,
  Compass,
  Construction,
  Container,
  Droplets,
  RefreshCw,
  Waves,
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

export type LocalService = {
  slug: string;
  title: string;
  heroTitle?: string;
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

export const localServices: LocalService[] = [
  {
    slug: "uslugi-kanalizacyjne",
    title: "Usługi kanalizacyjne",
    heroTitle: "Usługi kanalizacyjne Wrocław",
    eyebrow: "Kompleksowa obsługa",
    tagline:
      "Usługi kanalizacyjne we Wrocławiu dla wspólnot, firm, gastronomii i klientów indywidualnych: WUKO, udrażnianie, inspekcja TV, diagnostyka i awaryjne interwencje.",
    metaTitle:
      "Usługi kanalizacyjne Wrocław — czyszczenie, inspekcja, modernizacje",
    metaDescription:
      "Kompleksowe usługi kanalizacyjne we Wrocławiu: WUKO, kamery TV, separatory, przepompownie i serwis kanalizacji dla budynków, firm oraz obiektów.",
    keywords: [
      "usługi kanalizacyjne wrocław",
      "kanalizacja wrocław",
      "serwis kanalizacji wrocław",
      "czyszczenie kanalizacji wrocław",
    ],
    icon: Construction,
    trenchless: false,
    overview: [
      "To jest szeroka usługa dla klientów, którzy wiedzą, że mają problem z kanalizacją, ale nie zawsze chcą od razu rozstrzygać, czy potrzebne będzie WUKO, mechaniczne udrażnianie, kamera czy lokalizacja konkretnego uszkodzenia. My bierzemy odpowiedzialność za dobranie właściwego zakresu prac.",
      "Obsługujemy kanalizację sanitarną, deszczową, przyłącza, studnie, wpusty, piony i poziomy w budynkach mieszkalnych, lokalach usługowych, gastronomii oraz obiektach technicznych. Dzięki temu klient nie musi szukać osobno kilku wykonawców do rozpoznania, czyszczenia i dalszej diagnostyki.",
      "Ta usługa dobrze działa zarówno przy pojedynczej awarii, jak i przy stałej obsłudze obiektu. Najpierw porządkujemy objawy i stan instalacji, a potem przechodzimy do konkretnego działania: czyszczenia, kamery, lokalizacji nieszczelności albo naprawy szerszego odcinka.",
    ],
    variants: [
      {
        name: "Usługi kanalizacyjne dla wspólnot i budynków",
        desc: "Piony, poziomy, studnie, wpusty, przykanaliki i zgłoszenia związane z cofką ścieków albo nawracającymi zatorami.",
      },
      {
        name: "Usługi kanalizacyjne dla firm i obiektów",
        desc: "Kanały technologiczne, odwodnienia, zaplecza socjalne, place i obiekty wymagające stałej obsługi serwisowej.",
      },
      {
        name: "Diagnostyka i serwis łączony",
        desc: "Model dla tematów, w których trzeba połączyć czyszczenie, kamerę, lokalizację problemu i rekomendację dalszych prac.",
      },
    ],
    whenToUse: [
      "gdy wiadomo, że problem dotyczy kanalizacji, ale nie jest jasne, jaka dokładnie usługa będzie najlepsza",
      "gdy zatory, cofki albo słaby odbiór ścieków wracają i trzeba podejść do tematu szerzej",
      "gdy wspólnota, firma albo zarządca chce mieć jednego partnera do serwisu kanalizacji",
      "gdy temat wymaga połączenia czyszczenia, kamery i dalszej diagnostyki",
    ],
    costs: [
      {
        scope: "Podstawowa interwencja kanalizacyjna",
        range: "250–700 zł",
        note: "małe zgłoszenia punktowe lub prostsze awarie",
      },
      {
        scope: "Szersza obsługa odcinka lub obiektu",
        range: "700–1800 zł",
        note: "czyszczenie, diagnostyka albo kilka punktów instalacji",
      },
      {
        scope: "Rozbudowany temat z kamerą lub większym sprzętem",
        range: "1800–4500 zł",
        note: "trudniejsze przypadki, dłuższe odcinki lub obiekty B2B",
      },
    ],
    costNote:
      "Podane widełki mają pokazać skalę typowych zleceń. Ostateczny koszt zależy od dostępu do instalacji, rodzaju problemu, długości odcinka i tego, czy potrzebne jest samo czyszczenie, czy też szersza diagnostyka.",
    process: [
      {
        title: "Przyjęcie zgłoszenia",
        desc: "Ustalamy objawy, adres, typ obiektu i to, czy temat dotyczy awarii, diagnostyki czy planowej obsługi.",
      },
      {
        title: "Rozpoznanie na miejscu",
        desc: "Sprawdzamy studnie, rewizje, dostęp i dobieramy właściwą metodę: WUKO, spiralę, kamerę albo szerszy serwis.",
      },
      {
        title: "Właściwa usługa",
        desc: "Czyścimy, udrażniamy, kamerujemy albo lokalizujemy problem tak, żeby nie robić zbędnych ruchów i nie mnożyć ekip.",
      },
      {
        title: "Wnioski i dalszy plan",
        desc: "Po usłudze mówimy jasno, czy temat jest zamknięty, czy warto przejść do kolejnego kroku technicznego.",
      },
    ],
    faqs: [
      {
        q: "Czym różnią się usługi kanalizacyjne od samego WUKO?",
        a: "WUKO jest jedną z metod pracy. Usługi kanalizacyjne to szerszy zakres: czyszczenie, udrażnianie, kamera, lokalizacja problemu i obsługa różnych typów instalacji.",
      },
      {
        q: "Czy mogę zgłosić usługę kanalizacyjną, jeśli nie wiem dokładnie, co się dzieje?",
        a: "Tak. Właśnie po to jest ta usługa. Najpierw rozpoznajemy problem, a dopiero potem dobieramy właściwy sprzęt i zakres prac.",
      },
      {
        q: "Czy obsługujecie tylko awarie, czy też stały serwis?",
        a: "Robimy oba modele. Możemy wejść jednorazowo do awarii albo ustawić stałą obsługę dla wspólnoty, firmy lub obiektu technicznego.",
      },
      {
        q: "Czy w ramach tej usługi możecie też zrobić kamerę i lokalizację nieszczelności?",
        a: "Tak. Jeżeli problem tego wymaga, łączymy czyszczenie z inspekcją TV i diagnostyką, żeby dać klientowi pełną odpowiedź.",
      },
    ],
    related: ["wuko-wroclaw", "udraznianie-rur", "inspekcja-tv-kanalizacji"],
  },
  {
    slug: "wuko-wroclaw",
    title: "WUKO Wrocław i czyszczenie kanalizacji",
    heroTitle: "WUKO Wrocław i czyszczenie kanalizacji",
    eyebrow: "Pogotowie kanalizacyjne",
    tagline:
      "Hydrodynamiczne czyszczenie kanalizacji sanitarnej, deszczowej i przyłączy we Wrocławiu oraz okolicach.",
    metaTitle: "WUKO Wrocław — czyszczenie hydrodynamiczne kanalizacji",
    metaDescription:
      "Czyszczenie kanalizacji metodą WUKO we Wrocławiu. Skuteczne usuwanie osadów, tłuszczu, piasku i zatorów na przewodach kanalizacyjnych.",
    keywords: [
      "wuko wrocław",
      "czyszczenie kanalizacji wrocław",
      "pogotowie kanalizacyjne wrocław",
      "hydrodynamiczne czyszczenie kanalizacji",
      "czyszczenie rur wrocław",
      "wuko cena wrocław",
      "czyszczenie kanalizacji deszczowej wrocław",
    ],
    icon: Construction,
    trenchless: false,
    overview: [
      "To usługa dla wspólnot, zarządców, zakładów, gastronomii i klientów indywidualnych, którzy potrzebują realnego sprzętu WUKO, a nie tylko telefonu z reklamą 24/7. Wchodzimy tam, gdzie trzeba usunąć osad, tłuszcz, piasek, korzenie albo zator po remoncie.",
      "Czyścimy odcinki pionów, poziomów, przyłączy, studni, wpustów, odcinków deszczowych i kanałów technicznych. Pracujemy tak, żeby po usłudze było wiadomo nie tylko, że udało się odetkać, ale też co było przyczyną i czy temat może wrócić.",
      "Przy większych obiektach i zleceniach cyklicznych ustawiamy plan serwisowy: częstotliwość czyszczenia, raport, zdjęcia po usłudze i rekomendacje dla zarządcy albo obsługi technicznej.",
    ],
    variants: [
      {
        name: "WUKO dla wspólnot i spółdzielni",
        desc: "Piony, poziomy, studnie, wpusty, przewody zbiorcze i nagłe zatory w budynkach wielorodzinnych.",
      },
      {
        name: "WUKO dla firm i obiektów",
        desc: "Kanały technologiczne, place manewrowe, odwodnienia, zaplecza produkcyjne i obiekty handlowe.",
      },
      {
        name: "Czyszczenie prewencyjne",
        desc: "Serwis planowany dla obiektów, w których nie czekamy na awarię, tylko pilnujemy drożności z wyprzedzeniem.",
      },
    ],
    whenToUse: [
      "gdy kanalizacja wolno schodzi albo wybija w piwnicy lub lokalu",
      "gdy wpusty i studnie po deszczu nie odbierają wody",
      "gdy po remoncie w rurach zostały osady, piasek albo zaprawa",
      "gdy wspólnota lub firma potrzebuje cyklicznego czyszczenia i raportu",
    ],
    costs: [
      { scope: "Punktowe udrożnienie lub mały zator", range: "250–450 zł", note: "typowe zgłoszenie w mieszkaniu lub lokalu" },
      { scope: "Poziom / pion / odcinek wspólnoty", range: "450–900 zł", note: "zależnie od długości i dostępu" },
      { scope: "Samochód WUKO dla wspólnoty lub firmy", range: "600–1400 zł", note: "czyszczenie większego odcinka lub studni" },
      { scope: "Rozbudowane czyszczenie obiektu", range: "1200–2800 zł", note: "place, deszczówka, osady, kilka punktów" },
    ],
    costNote:
      "Podane widełki pomagają złapać skalę zlecenia. Ostateczna cena zależy od dostępu, długości odcinka, ilości osadu i tego, czy potrzebna jest kamera lub dodatkowy sprzęt.",
    process: [
      { title: "Zgłoszenie", desc: "Ustalamy objawy, lokalizację, typ obiektu i pilność interwencji." },
      { title: "Dojazd i rozpoznanie", desc: "Na miejscu sprawdzamy studnie, dostęp i odcinek, który naprawdę wymaga czyszczenia." },
      { title: "Czyszczenie WUKO", desc: "Czyścimy przewód hydrodynamicznie i usuwamy osad, zator lub zalegający materiał." },
      { title: "Kontrola efektu", desc: "Potwierdzamy drożność i wskazujemy, czy temat wymaga kamery, naprawy albo kolejnej usługi." },
    ],
    faqs: [
      { q: "Czy obsługujecie tylko awarie?", a: "Nie. Oprócz awarii robimy też czyszczenie planowe dla wspólnot, lokali, gastronomii, magazynów i zakładów." },
      { q: "Czy WUKO nadaje się do kanalizacji deszczowej?", a: "Tak. Czyścimy też wpusty, studnie, odcinki deszczowe i układy odwodnienia terenu." },
      { q: "Czy po czyszczeniu dostanę informację, co było przyczyną?", a: "Tak. Jeżeli trzeba, dokładamy kamerę i pokazujemy, czy problemem jest tłuszcz, osad, pęknięcie, korzenie albo spadek." },
      { q: "Czy obsługujecie wspólnoty i firmy cyklicznie?", a: "Tak. Możemy ustawić harmonogram serwisowy i stałą obsługę obiektu." },
      { q: "Jak długo trwa czyszczenie WUKO?", a: "Zależy od długości odcinka i ilości osadu. Typowe zlecenie w budynku trwa 1–3 godziny. Duże obiekty z wieloma studniami to pół dnia lub cały dzień roboczy." },
      { q: "Co jeśli po WUKO zator wróci?", a: "Jeśli problem nawraca, kolejny sensowny krok to inspekcja TV. Nawracający zator często sygnalizuje uszkodzenie mechaniczne lub zły spadek rury." },
      { q: "Czy wystawiacie dokumentację po usłudze?", a: "Tak. Faktura VAT na każde zlecenie. Przy większych obiektach raport z zakresu prac i rekomendacjami." },
      { q: "Jakie dzielnice Wrocławia obsługujecie?", a: "Obsługujemy cały Wrocław: Krzyki, Śródmieście, Fabryczną, Psie Pole, Stare Miasto, Nadodrze. Dojeżdżamy też do Bielan Wrocławskich, Siechnic, Długołęki i okolicznych miejscowości." },
    ],
    related: ["udraznianie-rur", "inspekcja-tv-kanalizacji", "serwis-przepompowni"],
  },
  {
    slug: "udraznianie-rur",
    title: "Udrażnianie rur i usuwanie zatorów",
    heroTitle: "Udrażnianie rur Wrocław i usuwanie zatorów",
    eyebrow: "Szybki serwis",
    tagline:
      "Mechaniczne i hydrodynamiczne udrażnianie rur, pionów, poziomów i przyłączy dla mieszkań, wspólnot i firm.",
    metaTitle: "Udrażnianie rur Wrocław — spirala i WUKO",
    metaDescription:
      "Udrażnianie rur we Wrocławiu metodą mechaniczną i ciśnieniową. Skuteczne usuwanie zatorów dla mieszkań, wspólnot, lokali i firm.",
    keywords: [
      "udrażnianie rur wrocław",
      "usuwanie zatorów kanalizacji wrocław",
      "zatkana kanalizacja wrocław",
      "udrażnianie rur cena wrocław",
      "zatkany odpływ wrocław",
      "spirala kanalizacyjna wrocław",
    ],
    icon: RefreshCw,
    trenchless: false,
    overview: [
      "Nie każdy temat wymaga dużego samochodu WUKO. W wielu przypadkach skuteczniejsze jest precyzyjne udrażnianie punktowe: pionu, odpływu, krótkiego poziomu albo przyłącza tuż za budynkiem.",
      "Dobieramy metodę do typu zatoru. Przy tłuszczu, osadzie i drobnym materiale zwykle wystarcza czyszczenie mechaniczne albo mała hydrodynamika. Przy dłuższych odcinkach wchodzimy sprzętem cięższym.",
      "Najważniejsze jest dla nas to, żeby nie kończyć na chwilowym efekcie. Jeśli przewód jest zapadnięty albo stale zbiera zanieczyszczenia, mówimy to wprost i pokazujemy kolejny sensowny krok.",
    ],
    variants: [
      { name: "Mieszkania i lokale", desc: "Umywalki, WC, piony, poziomy i krótkie przyłącza." },
      { name: "Wspólnoty i budynki", desc: "Piony zbiorcze, poziomy piwniczne, zatory cofające ścieki do lokali." },
      { name: "Firmy i zaplecza", desc: "Odpływy technologiczne, kratki ściekowe, kanały serwisowe." },
    ],
    whenToUse: [
      "gdy ścieki wracają do lokalu lub piwnicy",
      "gdy przewód jest częściowo drożny, ale stale łapie zator",
      "gdy potrzebna jest szybka interwencja bez rozkuwania",
    ],
    costs: [
      { scope: "Proste udrożnienie punktowe", range: "180–350 zł" },
      { scope: "Pion, poziom lub krótki odcinek wspólnoty", range: "350–700 zł" },
      { scope: "Trudny zator wymagający większego sprzętu", range: "700–1400 zł" },
    ],
    costNote:
      "Na cenę wpływa dostęp do przewodu, długość odcinka i to, czy temat kończy się samym udrożnieniem, czy wymaga dodatkowej kamery i czyszczenia.",
    process: [
      { title: "Objawy i miejsce", desc: "Ustalamy, gdzie wraca ściek i czy problem dotyczy jednego odpływu, pionu czy całego poziomu." },
      { title: "Dobór metody", desc: "Wybieramy spiralę, hydrodynamikę albo połączenie obu metod." },
      { title: "Usunięcie zatoru", desc: "Pracujemy tak, żeby odblokować przewód i nie uszkodzić instalacji." },
      { title: "Ocena ryzyka powrotu", desc: "Po usłudze mówimy, czy warto od razu zrobić kamerę albo czyszczenie większego odcinka." },
    ],
    faqs: [
      { q: "Czy zawsze trzeba wzywać WUKO?", a: "Nie. Przy wielu zatorach wystarczy punktowe udrażnianie mechaniczne albo mała hydrodynamika." },
      { q: "Czy obsługujecie też klientów indywidualnych?", a: "Tak. Robimy zarówno małe zgłoszenia domowe, jak i większe tematy dla wspólnot i firm." },
      { q: "Czy po udrożnieniu można od razu stwierdzić, czy rura jest pęknięta?", a: "Najpewniejsza odpowiedź jest po kamerze. Jeśli widzimy ryzyko uszkodzenia, od razu to rekomendujemy." },
      { q: "Czy przywracacie tylko drożność, czy też czyścicie przewód?", a: "Jeśli sytuacja tego wymaga, nie kończymy na przebiciu zatoru, tylko czyścimy odcinek tak, żeby temat nie wrócił po tygodniu." },
      { q: "Ile kosztuje udrażnianie rur we Wrocławiu?", a: "Proste punktowe udrożnienie spiralą: 180–350 zł. Pion lub poziom wspólnoty: 350–700 zł. Trudniejsze zatory wymagające sprzętu ciężkiego: 700–1400 zł. Ostateczna cena po ocenie na miejscu." },
      { q: "Jaka jest różnica między spiralą a WUKO?", a: "Spirala to metoda mechaniczna — idealna do punktowych zatorów w mieszkaniu lub lokaluRury. WUKO to czyszczenie ciśnieniem wody — stosujemy je do dłuższych odcinków, nagromadzonych osadów i przewodów zbiorczych. Często łączymy obie metody." },
      { q: "Jak szybko możecie przyjechać?", a: "W obrębie Wrocławia oddzwaniamy w 15 minut i ustalamy termin. Przy pilnych awariach staramy się być na miejscu w ciągu 1–2 godzin." },
    ],
    related: ["wuko-wroclaw", "inspekcja-tv-kanalizacji", "lokalizacja-nieszczelnosci"],
  },
  {
    slug: "naprawa-sieci-wodociagowych",
    title: "Naprawa sieci wodociągowych 24h",
    heroTitle: "Naprawa sieci wodociągowych Wrocław",
    eyebrow: "Awarie wodociągowe",
    tagline:
      "Awaryjna naprawa wycieków, rozszczelnień i uszkodzeń przewodów wodociągowych dla wspólnot, firm i obiektów we Wrocławiu oraz okolicach.",
    metaTitle: "Naprawa sieci wodociągowych 24h Wrocław — awarie i wycieki",
    metaDescription:
      "Naprawa sieci wodociągowych 24h we Wrocławiu. Reagujemy na wycieki, rozszczelnienia, uszkodzenia przyłączy i awarie przewodów wodnych.",
    keywords: [
      "naprawa sieci wodociągowych wrocław",
      "awaria wodociągu wrocław",
      "wyciek wody wrocław",
      "naprawa przyłącza wodociągowego wrocław",
    ],
    icon: Droplets,
    trenchless: false,
    overview: [
      "Ta usługa jest dla sytuacji, w których problemem nie jest sama kanalizacja, tylko wyciek, rozszczelnienie albo uszkodzony przewód wodociągowy. Wchodzimy tam, gdzie trzeba szybko ograniczyć straty wody, zabezpieczyć miejsce i przejść do właściwej naprawy.",
      "Obsługujemy wspólnoty, firmy, obiekty usługowe i zgłoszenia terenowe związane z przyłączami oraz krótkimi odcinkami sieci wodnej. Najpierw zawężamy źródło problemu, a dopiero potem dobieramy zakres robót tak, żeby nie odkrywać więcej, niż trzeba.",
      "Jeżeli awaria nie jest oczywista, łączymy naprawę z diagnostyką i lokalizacją wycieku. Dzięki temu klient dostaje nie tylko interwencję, ale też logiczną decyzję, co robić dalej z odcinkiem wodociągowym.",
    ],
    variants: [
      {
        name: "Naprawa przyłączy i krótkich odcinków",
        desc: "Interwencje przy budynkach, lokalach i obiektach, gdzie trzeba szybko zamknąć wyciek albo uszkodzenie przyłącza.",
      },
      {
        name: "Awaria przewodu w terenie",
        desc: "Reakcja na rozszczelnienie lub uszkodzenie przewodu wodnego w gruncie i strefie obiektowej.",
      },
      {
        name: "Naprawa z lokalizacją wycieku",
        desc: "Model dla tematów, w których najpierw trzeba potwierdzić dokładne miejsce awarii, a dopiero potem wejść w roboty.",
      },
    ],
    whenToUse: [
      "gdy pojawia się wyciek wody z przyłącza albo przewodu wodnego",
      "gdy ciśnienie spada i obiekt podejrzewa awarię odcinka wodociągowego",
      "gdy trzeba szybko zabezpieczyć miejsce i przejść do naprawy bez chaosu",
      "gdy naprawa wymaga wcześniejszej lokalizacji wycieku albo rozszczelnienia",
    ],
    costs: [
      { scope: "Naprawa punktowa przyłącza lub krótkiego odcinka", range: "700–1800 zł", note: "zależnie od dostępu, średnicy i zakresu odkrywki" },
      { scope: "Awaria przewodu z robotą ziemną", range: "1800–4500 zł", note: "typowy temat obiektowy lub terenowy" },
      { scope: "Rozbudowana naprawa z lokalizacją i odtworzeniem", range: "4500–9500 zł", note: "trudniejsze odcinki, kilka punktów lub większa ingerencja" },
    ],
    costNote:
      "Na cenę wpływa miejsce awarii, średnica przewodu, dostęp sprzętu, zakres odkrywki i to, czy wchodzimy od razu w naprawę, czy najpierw trzeba zrobić lokalizację wycieku.",
    process: [
      { title: "Przyjęcie zgłoszenia", desc: "Zbieramy objawy, miejsce wycieku, typ obiektu i pilność interwencji." },
      { title: "Rozpoznanie awarii", desc: "Zawężamy źródło problemu, sprawdzamy warunki wejścia i dobieramy zakres naprawy." },
      { title: "Naprawa odcinka", desc: "Usuwamy nieszczelność albo uszkodzony fragment przewodu i przywracamy sprawność układu." },
      { title: "Wnioski po interwencji", desc: "Mówimy, czy temat jest zamknięty, czy warto zaplanować dalszy przegląd albo szerszą naprawę." },
    ],
    faqs: [
      { q: "Czy obsługujecie tylko duże awarie wodociągowe?", a: "Nie. Robimy zarówno mniejsze naprawy przyłączy, jak i większe interwencje terenowe oraz obiektowe." },
      { q: "Czy przed naprawą możecie zlokalizować wyciek?", a: "Tak. Jeśli miejsce awarii nie jest oczywiste, najpierw zawężamy problem, a dopiero potem wchodzimy w roboty." },
      { q: "Czy to usługa dla wspólnot i firm?", a: "Tak. To jeden z głównych typów klientów dla tej usługi, obok zgłoszeń obiektowych i lokalnych przyłączy." },
      { q: "Czy po naprawie wskazujecie dalsze ryzyka?", a: "Tak. Jeśli awaria wynika ze stanu całego odcinka albo układu, mówimy to wprost i wskazujemy kolejny sensowny krok." },
    ],
    related: ["lokalizacja-nieszczelnosci", "inspekcja-tv-kanalizacji", "wuko-wroclaw"],
  },
  {
    slug: "inspekcja-tv-kanalizacji",
    title: "Inspekcja TV kanalizacji",
    heroTitle: "Inspekcja TV kanalizacji Wrocław",
    eyebrow: "Diagnostyka",
    tagline:
      "Kamera do kanalizacji, diagnoza przyczyny problemu, zapis wideo i materiał do decyzji technicznej dla Wrocławia i okolic.",
    metaTitle: "Inspekcja TV kanalizacji Wrocław — kamera do rur",
    metaDescription:
      "Inspekcja TV kanalizacji i kamera do rur we Wrocławiu. Diagnoza pęknięć, załamań, korzeni, tłuszczu i miejsc nawrotu zatorów.",
    keywords: [
      "inspekcja tv kanalizacji wrocław",
      "kamera do rur wrocław",
      "monitoring kanalizacji wrocław",
      "kamera kanalizacyjna wrocław",
      "inspekcja kamerą kanalizacji wrocław",
      "diagnoza kanalizacji wrocław",
    ],
    icon: Compass,
    trenchless: false,
    overview: [
      "Kamera jest potrzebna wszędzie tam, gdzie nie wystarcza odpowiedź: 'na razie drożne'. Pokazujemy, czy rura jest zapadnięta, rozszczelniona, załamana, zarasta korzeniami albo zbiera tłuszcz przez zły spadek.",
      "Inspekcja TV przydaje się po awarii, przed zakupem nieruchomości, po remoncie albo przed zleceniem większej naprawy. Dzięki temu inwestor albo zarządca nie działa na ślepo.",
      "Jeżeli trzeba, łączymy kamerę z czyszczeniem albo lokalizacją problemu od góry. To daje podstawę do realnej decyzji: czyszczenie cykliczne, naprawa punktowa, wymiana odcinka albo renowacja.",
    ],
    variants: [
      { name: "Diagnoza po awarii", desc: "Szukamy przyczyny nawrotu zatorów albo cofki ścieków." },
      { name: "Przegląd dla wspólnoty lub firmy", desc: "Kamera jako element oceny stanu instalacji i planu prac." },
      { name: "Kontrola po wykonanej usłudze", desc: "Potwierdzamy stan przewodu po czyszczeniu lub naprawie." },
    ],
    whenToUse: [
      "gdy zator wraca mimo wcześniejszego udrażniania",
      "gdy trzeba ustalić miejsce uszkodzenia przed rozkuwaniem",
      "gdy wspólnota lub firma chce mieć materiał do decyzji technicznej",
    ],
    costs: [
      { scope: "Krótka inspekcja punktowa", range: "300–600 zł" },
      { scope: "Inspekcja odcinka wspólnoty lub firmy", range: "600–1200 zł" },
      { scope: "Rozbudowana diagnostyka z lokalizacją", range: "1200–2500 zł" },
    ],
    costNote:
      "Koszt zależy od długości przewodu, dostępów i tego, czy robimy tylko obraz, czy też lokalizację oraz materiał do dalszego raportu.",
    process: [
      { title: "Ustalenie celu badania", desc: "Sprawdzamy, czy szukamy zatoru, pęknięcia, spadku czy miejsca nieszczelności." },
      { title: "Przygotowanie przewodu", desc: "Jeśli trzeba, najpierw czyścimy przewód, żeby kamera pokazała realny stan." },
      { title: "Przejazd kamerą", desc: "Nagrywamy odcinek i zaznaczamy kluczowe miejsca wymagające decyzji." },
      { title: "Wnioski", desc: "Mówimy wprost, czy wystarczy serwis, czy temat wymaga naprawy albo wymiany odcinka." },
    ],
    faqs: [
      { q: "Czy kamera pokaże pęknięcie rury?", a: "Tak, jeśli przewód jest dostępny i odpowiednio przygotowany. Kamera pokaże też załamania, korzenie, osad i nieszczelności." },
      { q: "Czy przed kamerą trzeba czyścić kanalizację?", a: "Często tak. Bez czyszczenia obraz bywa nieczytelny i nie pokazuje prawdziwego stanu przewodu." },
      { q: "Czy dostanę materiał po inspekcji?", a: "Tak. W zależności od zakresu przekazujemy zapis lub opis najważniejszych ustaleń." },
      { q: "Czy robicie kamerę dla wspólnot i lokali komercyjnych?", a: "Tak. To jeden z najczęstszych powodów wezwania przed większą naprawą." },
      { q: "Ile kosztuje inspekcja TV kanalizacji we Wrocławiu?", a: "Krótka inspekcja punktowa od 300 zł. Odcinek w budynku wielorodzinnym lub firmie: 600–1200 zł. Rozbudowana diagnostyka z lokalizacją: 1200–2500 zł. Wycena po ustaleniu zakresu." },
      { q: "Czy dostanę nagranie z inspekcji?", a: "Tak. Zapis wideo z przejazdu kamery oraz opis kluczowych ustaleń. Materiał może służyć jako dokumentacja dla ubezpieczyciela, inwestora lub zarządcy." },
      { q: "Kiedy inspekcja TV jest konieczna?", a: "Przede wszystkim gdy zator nawraca mimo wcześniejszego udrażniania, przed zakupem nieruchomości, po zalaniu lub awarii wodociągowej, oraz przy planowaniu remontu kanalizacji." },
      { q: "Czy kamera dostanie się do każdego przewodu?", a: "Nie zawsze. Kamera wymaga dostępu przez studnię lub rewizję. Przy bardzo małych średnicach lub silnie zablokowanych odcinkach może być konieczne wcześniejsze czyszczenie." },
    ],
    related: ["wuko-wroclaw", "udraznianie-rur", "lokalizacja-nieszczelnosci"],
  },
  {
    slug: "separatory-tluszczu",
    title: "Czyszczenie separatorów tłuszczu",
    heroTitle: "Czyszczenie separatorów tłuszczu Wrocław",
    eyebrow: "Gastronomia i retail",
    tagline:
      "Czyszczenie separatorów tłuszczu, odbiór osadów i serwis dla restauracji, kuchni zbiorowych, hoteli i obiektów handlowych.",
    metaTitle: "Czyszczenie separatorów tłuszczu Wrocław",
    metaDescription:
      "Czyszczenie separatorów tłuszczu we Wrocławiu dla gastronomii, hoteli, cateringu i obiektów handlowych.",
    keywords: [
      "czyszczenie separatorów tłuszczu wrocław",
      "separator tłuszczu serwis wrocław",
      "wuko gastronomia wrocław",
    ],
    icon: Container,
    trenchless: false,
    overview: [
      "Separatory tłuszczu nie wybaczają zaniedbań. Kiedy obiekt czeka zbyt długo, temat wraca w postaci cofki, zapachu albo problemu przy kontroli. Dlatego ustawiamy tę usługę bardziej jak serwis obiektu niż jednorazowy przyjazd.",
      "Obsługujemy restauracje, kuchnie zbiorowe, catering, galerie handlowe i zaplecza gastronomiczne. Czyścimy separator, usuwamy osady i pomagamy ustawić prosty rytm kolejnych wizyt.",
      "Jeżeli przy okazji wychodzi problem z odcinkiem kanalizacji za separatorem, dokładamy czyszczenie albo kamerę i zamykamy temat całościowo.",
    ],
    variants: [
      { name: "Restauracje i lokale", desc: "Stałe serwisy dla pojedynczych lokali i małych kuchni." },
      { name: "Sieci i obiekty większe", desc: "Galerie, food courty, hotele i większe zaplecza gastronomiczne." },
      { name: "Pakiety cykliczne", desc: "Plan obsługi pod obiekt, bez czekania na problem i zapach." },
    ],
    whenToUse: [
      "gdy separator wymaga regularnego czyszczenia zgodnie z eksploatacją",
      "gdy w lokalu pojawia się zapach albo cofka",
      "gdy zarządca lub właściciel chce ustawić plan serwisowy",
    ],
    costs: [
      { scope: "Mały separator w lokalu", range: "450–1100 zł" },
      { scope: "Średni obiekt gastronomiczny", range: "900–1800 zł" },
      { scope: "Większy obiekt lub kilka separatorów", range: "1800–3500 zł" },
    ],
    process: [
      { title: "Ustalenie obiektu", desc: "Sprawdzamy wielkość separatora, dostęp i częstotliwość potrzebnych wizyt." },
      { title: "Czyszczenie i odbiór osadów", desc: "Usuwamy zawartość separatora i porządkujemy temat eksploatacyjnie." },
      { title: "Ocena odpływu", desc: "Weryfikujemy, czy problem nie siedzi dalej w kanalizacji." },
      { title: "Plan kolejnej wizyty", desc: "Jeśli obiekt tego potrzebuje, ustawiamy kolejny termin serwisu." },
    ],
    faqs: [
      { q: "Czy obsługujecie pojedyncze restauracje?", a: "Tak. Pracujemy zarówno dla jednego lokalu, jak i dla większych obiektów czy sieci." },
      { q: "Czy możecie połączyć separator z czyszczeniem kanalizacji?", a: "Tak. To częsty scenariusz, kiedy tłuszcz zalega już nie tylko w separatorze, ale i dalej w przewodzie." },
      { q: "Czy da się ustawić regularne wizyty?", a: "Tak. To najlepszy model dla gastronomii i obiektów o stałej pracy kuchni." },
      { q: "Czy serwis separatora jest tylko dla gastronomii?", a: "Najczęściej tak, ale obsługujemy też inne obiekty, w których tłuszcz trafia do instalacji." },
    ],
    related: ["wuko-wroclaw", "udraznianie-rur", "inspekcja-tv-kanalizacji"],
  },
  {
    slug: "separatory-ropopochodne",
    title: "Czyszczenie separatorów ropopochodnych",
    heroTitle: "Czyszczenie separatorów ropopochodnych Wrocław",
    eyebrow: "Obiekty techniczne",
    tagline:
      "Serwis separatorów ropopochodnych dla parkingów, warsztatów, stacji paliw i obiektów przemysłowych.",
    metaTitle: "Czyszczenie separatorów ropopochodnych Wrocław",
    metaDescription:
      "Czyszczenie separatorów ropopochodnych we Wrocławiu dla stacji paliw, warsztatów, parkingów i obiektów przemysłowych.",
    keywords: [
      "separator ropopochodny wrocław",
      "czyszczenie separatorów ropopochodnych",
      "serwis separatorów parkingowych wrocław",
    ],
    icon: ArrowDownToLine,
    trenchless: false,
    overview: [
      "To usługa dla obiektów, w których separator jest elementem odpowiedzialności technicznej i środowiskowej. W praktyce chodzi o to, żeby separator nie był zapomnianą skrzynką pod ziemią, tylko realnie utrzymanym elementem instalacji.",
      "Obsługujemy parkingi, myjnie, warsztaty, stacje paliw, zaplecza logistyczne i obiekty przemysłowe. Czyszczenie łączymy z oceną stanu odpływu i układu deszczowego.",
      "Jeżeli problem nie kończy się na samym separatorze, przechodzimy dalej: studnie, wpusty, przykanaliki i odcinki, które wymagają czyszczenia albo kamery.",
    ],
    variants: [
      { name: "Parkingi i obiekty handlowe", desc: "Separatory przy odwodnieniach placów i dróg wewnętrznych." },
      { name: "Warsztaty i zaplecza techniczne", desc: "Układy narażone na osady, błoto i substancje ropopochodne." },
      { name: "Stacje paliw i obiekty przemysłowe", desc: "Serwis pod obiekty o większej odpowiedzialności operacyjnej." },
    ],
    whenToUse: [
      "gdy separator wymaga czyszczenia zgodnie z eksploatacją obiektu",
      "gdy układ odwodnienia działa słabo po deszczu",
      "gdy zarządca potrzebuje porządku technicznego i serwisowego",
    ],
    costs: [
      { scope: "Mały separator ropopochodny", range: "600–1400 zł" },
      { scope: "Średni obiekt lub parking", range: "1400–2600 zł" },
      { scope: "Większy układ obiektowy", range: "2600–4500 zł" },
    ],
    process: [
      { title: "Rozpoznanie układu", desc: "Sprawdzamy dostęp, wielkość separatora i sposób pracy obiektu." },
      { title: "Czyszczenie", desc: "Usuwamy zawartość separatora i porządkujemy układ technologicznie." },
      { title: "Kontrola odpływu", desc: "Weryfikujemy, czy temat nie wymaga dodatkowego czyszczenia studni lub rur." },
      { title: "Rekomendacje", desc: "Ustalamy, czy potrzebny jest harmonogram serwisowy albo szerszy przegląd." },
    ],
    faqs: [
      { q: "Czy obsługujecie stacje paliw i większe obiekty?", a: "Tak. Ta usługa jest przygotowana właśnie pod obiekty techniczne i biznesowe." },
      { q: "Czy możecie połączyć separator z czyszczeniem wpustów i deszczówki?", a: "Tak. To częsty pakiet przy parkingach, magazynach i obiektach handlowych." },
      { q: "Czy pracujecie tylko jednorazowo?", a: "Nie. Możemy ustawić serwis cykliczny dostosowany do obciążenia obiektu." },
      { q: "Czy po czyszczeniu oceniacie też stan odpływu?", a: "Tak. Jeśli separator jest czysty, a woda dalej nie schodzi, szukamy problemu dalej w układzie." },
    ],
    related: ["wuko-wroclaw", "inspekcja-tv-kanalizacji", "lokalizacja-nieszczelnosci"],
  },
  {
    slug: "serwis-przepompowni",
    title: "Serwis przepompowni ścieków",
    heroTitle: "Serwis przepompowni ścieków Wrocław",
    eyebrow: "Obsługa obiektowa",
    tagline:
      "Czyszczenie, przeglądy i interwencje przy przepompowniach ścieków dla wspólnot, zakładów i zarządców obiektów.",
    metaTitle: "Serwis przepompowni ścieków Wrocław",
    metaDescription:
      "Serwis przepompowni ścieków we Wrocławiu. Czyszczenie, przeglądy, alarmy, interwencje i bieżąca obsługa obiektów.",
    keywords: [
      "serwis przepompowni ścieków wrocław",
      "czyszczenie przepompowni wrocław",
      "awaria przepompowni ścieków wrocław",
    ],
    icon: Droplets,
    trenchless: false,
    overview: [
      "Przepompownia zwykle daje znać o sobie dopiero wtedy, kiedy już jest źle. Dlatego ta usługa jest bardziej o regularnej obsłudze niż o gaszeniu pożaru po fakcie.",
      "Czyścimy komory, pomagamy przy zatorach, sprawdzamy warunki pracy układu i reagujemy, gdy temat blokuje normalne działanie obiektu. Dla zarządcy liczy się nie tylko usunięcie problemu, ale też krótka, zrozumiała informacja, co dalej.",
      "Najczęściej obsługujemy wspólnoty, zakłady, obiekty usługowe i lokale z własnymi przepompowniami lub układami pośrednimi.",
    ],
    variants: [
      { name: "Interwencje po alarmie", desc: "Reakcja na zapchanie, przepełnienie albo niesprawny odbiór ścieków." },
      { name: "Czyszczenie komór", desc: "Usuwanie osadów i materiału zalegającego w przepompowni." },
      { name: "Obsługa planowana", desc: "Przeglądy i czyszczenie cykliczne dla obiektów, które chcą uniknąć awarii." },
    ],
    whenToUse: [
      "gdy przepompownia alarmuje albo nie odbiera ścieków",
      "gdy komora wymaga czyszczenia i przeglądu",
      "gdy obiekt chce przejść z trybu awaryjnego na planowaną obsługę",
    ],
    costs: [
      { scope: "Interwencja i podstawowe czyszczenie", range: "700–1500 zł" },
      { scope: "Rozbudowane czyszczenie komory", range: "1500–3200 zł" },
      { scope: "Obsługa większego obiektu", range: "3200–6000 zł" },
    ],
    process: [
      { title: "Alarm lub zgłoszenie", desc: "Ustalamy objawy, obiekt i możliwość bezpiecznego wejścia w temat." },
      { title: "Przegląd i czyszczenie", desc: "Sprawdzamy komorę, osady i stan pracy układu." },
      { title: "Usunięcie przyczyny", desc: "Czyścimy, przywracamy drożność i wskazujemy ryzyka dalszej pracy." },
      { title: "Plan obsługi", desc: "Jeżeli obiekt tego potrzebuje, ustawiamy prosty model serwisowy na przyszłość." },
    ],
    faqs: [
      { q: "Czy obsługujecie małe przepompownie przy budynkach?", a: "Tak. To częste zgłoszenia przy wspólnotach, lokalach i małych obiektach usługowych." },
      { q: "Czy robicie też czyszczenie komory, a nie tylko rur?", a: "Tak. Serwis przepompowni to zwykle połączenie pracy w komorze i na przewodach." },
      { q: "Czy możecie ustawić cykliczny przegląd?", a: "Tak. To najlepszy model, jeśli obiekt ma już historię problemów." },
      { q: "Czy serwis przepompowni łączy się z kamerą albo WUKO?", a: "Bardzo często tak. W praktyce te usługi zwykle wspierają się nawzajem." },
    ],
    related: ["wuko-wroclaw", "inspekcja-tv-kanalizacji", "lokalizacja-nieszczelnosci"],
  },
  {
    slug: "lokalizacja-nieszczelnosci",
    title: "Lokalizacja nieszczelności i problemów w kanalizacji",
    heroTitle: "Lokalizacja nieszczelności kanalizacji Wrocław",
    eyebrow: "Precyzyjna diagnostyka",
    tagline:
      "Szukamy miejsc uszkodzeń, nawrotów zatorów i ukrytych problemów w przewodach kanalizacyjnych przed kosztownym rozkuciem.",
    metaTitle: "Lokalizacja nieszczelności kanalizacji Wrocław",
    metaDescription:
      "Lokalizacja nieszczelności i uszkodzeń kanalizacji we Wrocławiu. Kamera, diagnostyka i decyzja co naprawiać, a czego nie ruszać.",
    keywords: [
      "lokalizacja nieszczelności kanalizacji wrocław",
      "szukanie uszkodzenia rury wrocław",
      "diagnostyka kanalizacji wrocław",
    ],
    icon: Waves,
    trenchless: false,
    overview: [
      "Ta usługa jest potrzebna tam, gdzie nikt nie chce kuć na ślepo: przy zawilgoceniach, nawracających zatorach, zapadnięciach terenu albo problemach wracających mimo kilku interwencji.",
      "Łączymy doświadczenie serwisowe z inspekcją i oceną całego odcinka. Chodzi o to, żeby znaleźć miejsce ryzyka i dać Ci konkretną odpowiedź: czy naprawa ma być punktowa, czy problem leży gdzie indziej.",
      "Dla wspólnot i firm to często najtańszy krok przed większą naprawą, bo pozwala nie rozkopywać lub nie rozkuwać tam, gdzie nie trzeba.",
    ],
    variants: [
      { name: "Nawracające zatory", desc: "Szukamy przyczyny problemu, który wraca mimo wcześniejszego czyszczenia." },
      { name: "Zawilgocenia i przecieki", desc: "Pomagamy wskazać odcinek, który realnie wymaga ingerencji." },
      { name: "Diagnostyka przed naprawą", desc: "Materiał do decyzji technicznej dla wspólnoty, firmy albo inwestora." },
    ],
    whenToUse: [
      "gdy problem wraca i nie wiadomo, czy winne jest samo czyszczenie czy stan rury",
      "gdy trzeba zawęzić miejsce naprawy",
      "gdy obiekt nie chce rozkuwać lub rozkopywać na ślepo",
    ],
    costs: [
      { scope: "Podstawowa lokalizacja problemu", range: "400–800 zł" },
      { scope: "Diagnostyka z kamerą i opisem", range: "800–1600 zł" },
      { scope: "Trudniejszy obiekt lub kilka odcinków", range: "1600–3000 zł" },
    ],
    process: [
      { title: "Objawy i historia awarii", desc: "Zbieramy informacje o tym, co już było robione i gdzie problem wraca." },
      { title: "Diagnostyka", desc: "Wchodzimy kamerą albo inną sensowną metodą rozpoznania odcinka." },
      { title: "Wskazanie punktu ryzyka", desc: "Zawężamy miejsce problemu albo wykluczamy odcinki, których nie trzeba ruszać." },
      { title: "Rekomendacja naprawy", desc: "Mówimy, czy wystarczy serwis, czy trzeba naprawy punktowej lub wymiany odcinka." },
    ],
    faqs: [
      { q: "Czy lokalizacja nieszczelności zawsze wymaga kamery?", a: "Najczęściej tak, bo daje najszybszą i najbardziej wiarygodną odpowiedź." },
      { q: "Czy ta usługa ma sens po kilku nieudanych interwencjach?", a: "Tak. Właśnie wtedy najczęściej pozwala przestać działać po omacku." },
      { q: "Czy po lokalizacji robicie też czyszczenie lub naprawę?", a: "Tak. Jeśli da się domknąć temat serwisowo, robimy to. Jeśli potrzebna jest większa naprawa, wskazujemy właściwy kierunek." },
      { q: "Czy to usługa tylko dla dużych obiektów?", a: "Nie. Ma sens zarówno dla wspólnot i firm, jak i dla prywatnych zgłoszeń, jeśli problem wraca." },
    ],
    related: ["inspekcja-tv-kanalizacji", "udraznianie-rur", "wuko-wroclaw"],
  },
];

export function getLocalService(slug: string): LocalService | undefined {
  return localServices.find((service) => service.slug === slug);
}
