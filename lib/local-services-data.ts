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
  {
    slug: "bezwykopowe-naprawy-kanalizacji",
    title: "Bezwykopowe naprawy kanalizacji",
    heroTitle:
      "Bezwykopowa naprawa kanalizacji we Wrocławiu — pakery, rękawy CIPP, renowacja studni",
    eyebrow: "Naprawy bez wykopu",
    tagline:
      "Awaria nie musi oznaczać rozkucia drogi. Naprawiamy kanalizację bez wykopu: pakerami, rękawami CIPP i renowacją studni rewizyjnych.",
    metaTitle:
      "Bezwykopowe naprawy kanalizacji Wrocław | Pakery, rękawy CIPP | ZIEBUD Expert",
    metaDescription:
      "Bezwykopowa naprawa kanalizacji we Wrocławiu. Pakery, rękawy CIPP DN 80–600, renowacja studni rewizyjnych. Tańsza i szybsza od wykopu. Tel: 602 481 688.",
    keywords: [
      "bezwykopowe naprawy kanalizacji wrocław",
      "renowacja kanalizacji wrocław",
      "pakerowanie rur wrocław",
      "rękawy cipp wrocław",
      "naprawa kanalizacji bez wykopu",
    ],
    icon: Construction,
    trenchless: true,
    overview: [
      "Awaria kanalizacji nie musi oznaczać rozkucia drogi, parkingu czy chodnika. ZIEBUD Expert wykonuje bezwykopowe naprawy kanalizacji we Wrocławiu i okolicach metodami, które są tańsze, szybsze i mniej uciążliwe od tradycyjnego wykopu.",
      "Metody bezwykopowe sprawdzają się szczególnie tam, gdzie pod ziemią biegnie gęsta sieć przewodów, w drogach o wysokim natężeniu ruchu, na parkingach obiektów i w centrach miast. Dobieramy technologię po inspekcji TV, żeby naprawić dokładnie ten odcinek, który tego wymaga.",
      "Wykonujemy pakerowanie punktowe, naprawy liniowe rękawami CIPP oraz renowację studni rewizyjnych. Po naprawie potwierdzamy efekt kamerą i przekazujemy materiał, który może zostać w dokumentacji wspólnoty, firmy albo zarządcy drogi.",
    ],
    variants: [
      {
        name: "Pakerowanie punktowe",
        desc: "Naprawa miejscowych pęknięć, nieszczelności i ubytków bez odkopywania całego odcinka.",
        specs: "najczęściej DN 150+",
      },
      {
        name: "Rękawy CIPP",
        desc: "Renowacja liniowa przyłączy i kanałów głównych rękawem nasączonym żywicą, utwardzanym po instalacji.",
        specs: "DN 80–600",
      },
      {
        name: "Renowacja studni rewizyjnych",
        desc: "Naprawa korozji, ubytków, nieszczelnych połączeń kręgów, spoczników i kinet.",
      },
      {
        name: "Naprawy dla obiektów i dróg",
        desc: "Prace w pasie drogowym, na parkingach, przy wspólnotach, firmach i obiektach komercyjnych.",
      },
    ],
    whenToUse: [
      "gdy pęknięcie lub załamanie rury znajduje się pod drogą, parkingiem albo chodnikiem",
      "gdy nieszczelność występuje na połączeniach rur w obrębie posesji wspólnoty lub firmy",
      "gdy po usunięciu korzeni trzeba szczelnie zamknąć ubytki w rurze",
      "gdy przyłącze ma zostać odnowione bez zatrzymywania pracy budynku",
      "gdy studnia rewizyjna ma ubytki, korozję albo dynamiczny wyciek wody gruntowej",
    ],
    costs: [
      {
        scope: "Inspekcja TV i kwalifikacja naprawy",
        range: "400–900 zł",
        note: "diagnoza, lokalizacja usterki i dobór metody",
      },
      {
        scope: "Pakerowanie punktowe",
        range: "1200–3500 zł",
        note: "zależnie od średnicy, dostępu i liczby uszkodzeń",
      },
      {
        scope: "Rękaw CIPP lub naprawa liniowa",
        range: "3500–12000 zł",
        note: "wycena po długości, średnicy i warunkach technicznych",
      },
      {
        scope: "Renowacja studni rewizyjnej",
        range: "1800–6500 zł",
        note: "zależnie od głębokości, ubytków i przecieków",
      },
    ],
    costNote:
      "Metoda bezwykopowa bywa znacząco tańsza od wykopu, szczególnie gdy trzeba byłoby odtwarzać asfalt, kostkę, parking albo chodnik. Dokładną wycenę robimy po inspekcji TV.",
    process: [
      {
        title: "Inspekcja TV",
        desc: "Diagnozujemy przyczynę i zakres awarii, mierzymy odcinek oraz sprawdzamy, czy naprawa bezwykopowa ma sens techniczny.",
      },
      {
        title: "Dobór technologii",
        desc: "Wybieramy paker, rękaw CIPP, renowację studni albo kombinację metod i przedstawiamy wycenę.",
      },
      {
        title: "Naprawa bez wykopu",
        desc: "Realizujemy prace z minimalnym wpływem na drogę, parking, piwnicę lub działający obiekt.",
      },
      {
        title: "Kontrola i protokół",
        desc: "Po naprawie wykonujemy inspekcję TV, przekazujemy materiał cyfrowy, protokół prac i fakturę VAT.",
      },
    ],
    faqs: [
      {
        q: "Kiedy bezwykopowa naprawa kanalizacji jest lepsza od wykopu?",
        a: "Gdy uszkodzenie jest możliwe do naprawy od środka, a wykop oznaczałby rozbieranie drogi, parkingu, chodnika albo pracę w trudnym otoczeniu obiektu.",
      },
      {
        q: "Czy przed naprawą bezwykopową potrzebna jest kamera?",
        a: "Tak. Inspekcja TV potwierdza miejsce, długość i typ uszkodzenia. Bez kamery nie da się odpowiedzialnie dobrać pakera, rękawa albo zakresu renowacji.",
      },
      {
        q: "Czy pakerowanie nadaje się do każdej rury?",
        a: "Nie do każdej. Sprawdza się przy punktowych usterkach, gdy ogólny stan odcinka jest dobry. Przy większym zużyciu rozważamy rękaw CIPP albo inną metodę.",
      },
      {
        q: "Czy po naprawie dostanę nagranie z kanalizacji?",
        a: "Tak. Po wykonaniu naprawy robimy kontrolną inspekcję TV i przekazujemy materiał, który pokazuje efekt prac.",
      },
      {
        q: "Czy wykonujecie bezwykopowe naprawy dla wspólnot i firm?",
        a: "Tak. To jeden z najczęstszych scenariuszy: wspólnoty, parkingi, obiekty komercyjne, zakłady i zarządcy terenów utwardzonych.",
      },
    ],
    related: ["inspekcja-tv-kanalizacji", "frezowanie-kanalizacji", "lokalizacja-nieszczelnosci"],
  },
  {
    slug: "frezowanie-kanalizacji",
    title: "Frezowanie kanalizacji",
    heroTitle:
      "Frezowanie kanalizacji we Wrocławiu — robot frezujący do twardych przeszkód",
    eyebrow: "Robot frezujący",
    tagline:
      "Korzenie, beton, stwardniały tłuszcz i twarde osady. Tam, gdzie WUKO i spirala nie dają rady, wjeżdża robot frezujący.",
    metaTitle:
      "Frezowanie kanalizacji Wrocław | Robot frezujący DN 90–150 | ZIEBUD Expert",
    metaDescription:
      "Frezowanie kanalizacji we Wrocławiu — robot frezujący usuwa korzenie, beton, twarde osady. DN 90–150 mm. Faktura VAT, 24/7. Tel: 602 481 688.",
    keywords: [
      "frezowanie kanalizacji wrocław",
      "robot frezujący kanalizacja",
      "usuwanie korzeni z kanalizacji wrocław",
      "frezowanie rur kanalizacyjnych",
      "beton w kanalizacji usuwanie",
    ],
    icon: RefreshCw,
    trenchless: true,
    overview: [
      "Czasem WUKO i spirala to za mało. Kiedy w kanalizacji utknęły korzenie, beton, kamień albo stwardniały tłuszcz, jedyną skuteczną metodą jest frezowanie.",
      "ZIEBUD Expert wykonuje frezowanie kanalizacji we Wrocławiu i okolicach robotem frezującym z kamerą i sterowaniem przez operatora. Pracujemy precyzyjnie, tylko w miejscu przeszkody, bez niepotrzebnego uszkadzania rury od wewnątrz.",
      "Często łączymy frezowanie z inspekcją TV i WUKO: kamera potwierdza przyczynę, robot usuwa twardą przeszkodę, a hydrodynamiczne czyszczenie domywa przewód po pracy.",
    ],
    variants: [
      {
        name: "Korzenie w kanalizacji",
        desc: "Wycinanie korzeni drzew i krzewów wrastających w złącza, pęknięcia i stare przyłącza.",
      },
      {
        name: "Beton, zaprawa i progi",
        desc: "Usuwanie złogów zaprawy betonowej, progów po remoncie i twardych błędów montażowych.",
      },
      {
        name: "Twarde tłuszcze i osady",
        desc: "Frezowanie skamielin, osadów mineralnych i stwardniałych tłuszczów w gastronomii oraz kuchniach zbiorowych.",
      },
      {
        name: "Otwieranie przykanalików",
        desc: "Udostępnienie zaślepionych lub zarośniętych przykanalików przed dalszą renowacją.",
        specs: "DN 90–150",
      },
    ],
    whenToUse: [
      "gdy kamera pokazuje korzenie, beton, kamień albo przeszkodę mechaniczną",
      "gdy WUKO usuwa wodę i miękki osad, ale twardy zator zostaje w przewodzie",
      "gdy po remoncie w rurze zostały zaprawa, gruz albo próg betonowy",
      "gdy trzeba przygotować rurę do bezwykopowej naprawy lub rękawa",
    ],
    costs: [
      {
        scope: "Diagnoza kamerą przed frezowaniem",
        range: "400–800 zł",
        note: "potwierdzenie przeszkody i punktu pracy",
      },
      {
        scope: "Frezowanie punktowe",
        range: "900–2200 zł",
        note: "korzeń, próg, osad lub pojedyncza przeszkoda",
      },
      {
        scope: "Frezowanie z WUKO i kontrolą TV",
        range: "1800–4200 zł",
        note: "typowy pakiet dla trudnych zatorów",
      },
      {
        scope: "Rozbudowana praca operatorska",
        range: "4200–8500 zł",
        note: "kilka przeszkód albo trudniejszy dostęp",
      },
    ],
    costNote:
      "Cena zależy od średnicy rury, dostępu, typu przeszkody i czasu pracy operatora. Przy twardych zatorach dokładną wycenę potwierdza kamera.",
    process: [
      {
        title: "Kamera i kwalifikacja",
        desc: "Sprawdzamy, czy problemem jest przeszkoda twarda, którą da się bezpiecznie frezować.",
      },
      {
        title: "Praca robota",
        desc: "Operator prowadzi robot frezujący z podglądem i usuwa tylko element blokujący przepływ.",
      },
      {
        title: "Usunięcie materiału",
        desc: "Wyfrezowane elementy usuwamy pompą ssącą lub domywamy układ metodą WUKO.",
      },
      {
        title: "Kontrola efektu",
        desc: "Po pracy wykonujemy inspekcję TV i pokazujemy drożność oraz stan odcinka.",
      },
    ],
    faqs: [
      {
        q: "Czym frezowanie różni się od WUKO?",
        a: "WUKO wypłukuje miękkie osady i zatory wodą pod ciśnieniem. Frezowanie usuwa twarde przeszkody: korzenie, beton, zaprawę, kamień albo skamieniałe tłuszcze.",
      },
      {
        q: "Czy robot frezujący może uszkodzić rurę?",
        a: "Praca odbywa się pod kontrolą operatora i kamery. Najpierw oceniamy stan rury, a potem frezujemy tylko przeszkodę, nie cały przewód.",
      },
      {
        q: "Czy frezowanie wykonuje się od razu po inspekcji TV?",
        a: "Często tak. Jeśli kamera potwierdzi przeszkodę i mamy dostęp techniczny, można połączyć diagnozę, frezowanie i kontrolne WUKO w jednej wizycie.",
      },
      {
        q: "Jakie średnice rur obsługujecie przy frezowaniu?",
        a: "Typowo pracujemy w zakresie DN 90–150, zależnie od dostępu, geometrii przewodu i typu przeszkody.",
      },
    ],
    related: ["wuko-wroclaw", "inspekcja-tv-kanalizacji", "udraznianie-rur"],
  },
  {
    slug: "regulacja-studzienek-i-wlazow",
    title: "Regulacja studzienek i włazów kanalizacyjnych",
    heroTitle:
      "Regulacja i wymiana studzienek oraz włazów kanalizacyjnych we Wrocławiu",
    eyebrow: "Studzienki i włazy",
    tagline:
      "Wyrównanie do poziomu jezdni nawet z dokładnością do 1 mm. Naprawa jednej studzienki zwykle trwa 1–2 godziny.",
    metaTitle:
      "Regulacja studzienek i włazów kanalizacyjnych Wrocław | Naprawa w 1–2 h | ZIEBUD Expert",
    metaDescription:
      "Regulacja i wymiana studzienek oraz włazów kanalizacyjnych we Wrocławiu. Szybkowiążące masy, naprawa 1 studzienki w 1–2 h. Tel: 602 481 688.",
    keywords: [
      "regulacja studzienek wrocław",
      "wymiana włazów kanalizacyjnych wrocław",
      "naprawa studzienki kanalizacyjnej",
      "zapadnięta studzienka wrocław",
      "regulacja włazów kanalizacyjnych",
    ],
    icon: ArrowDownToLine,
    trenchless: false,
    overview: [
      "ZIEBUD Expert wykonuje regulację i wymianę studzienek oraz włazów kanalizacyjnych we Wrocławiu i okolicach. Pracujemy na drogach, parkingach, chodnikach, terenach wspólnot i obiektach firmowych.",
      "Stosujemy szybkowiążące, elastyczne masy wyrównawczo-naprawcze na bazie cementów oraz pneumatyczne szalunki, dzięki czemu naprawa jednej studzienki trwa zwykle od 1 do 2 godzin.",
      "Celem jest równa, trwała i szczelna regulacja zwieńczenia: bez stukających włazów, zapadnięć, niszczenia żeliwa i ponownej naprawy po pierwszym sezonie zimowym.",
    ],
    variants: [
      {
        name: "Zapadnięte włazy",
        desc: "Podniesienie włazu do poziomu nawierzchni drogi, parkingu lub chodnika.",
      },
      {
        name: "Wystające i hałasujące włazy",
        desc: "Korekta rzędnej oraz stabilizacja elementów, które powodują uderzenia kół i hałas.",
      },
      {
        name: "Wymiana zwieńczeń",
        desc: "Prace przy pękniętych, skorodowanych albo niedopasowanych elementach zwieńczenia studni.",
      },
      {
        name: "Naprawy po robotach drogowych",
        desc: "Dopasowanie studzienek do nowej rzędnej nawierzchni po pracach asfaltowych lub brukarskich.",
      },
    ],
    whenToUse: [
      "gdy właz zapadł się w pasie drogowym, na parkingu albo chodniku",
      "gdy właz wystaje, hałasuje i powoduje uderzenia kół",
      "gdy elementy zwieńczenia są pęknięte, skorodowane lub źle spasowane",
      "gdy po pracach drogowych zmienił się poziom nawierzchni",
    ],
    costs: [
      {
        scope: "Regulacja pojedynczej studzienki",
        range: "900–1800 zł",
        note: "typowa naprawa z materiałem szybkowiążącym",
      },
      {
        scope: "Wymiana lub naprawa zwieńczenia",
        range: "1500–3200 zł",
        note: "zależnie od stanu elementów i nawierzchni",
      },
      {
        scope: "Pakiet kilku studzienek",
        range: "3200–9000 zł",
        note: "parking, droga wewnętrzna, teren wspólnoty lub obiektu",
      },
    ],
    costNote:
      "Na cenę wpływa rodzaj nawierzchni, stan komina włazowego, liczba studzienek, dostęp i to, czy trzeba odtwarzać asfalt, beton czy kostkę.",
    process: [
      {
        title: "Demontaż włazu",
        desc: "Zdejmujemy pokrywę lub właz; przy asfalcie i betonie używamy piły, młota albo osprzętu pneumatycznego.",
      },
      {
        title: "Kontrola konstrukcji",
        desc: "Rozbieramy górną część, oczyszczamy elementy i uzupełniamy ubytki zaprawami szybkowiążącymi.",
      },
      {
        title: "Poziomowanie",
        desc: "Ustawiamy komin włazowy i zwieńczenie w jednej rzędnej z nawierzchnią, ograniczając liczbę spoin.",
      },
      {
        title: "Uszczelnienie i odtworzenie",
        desc: "Uszczelniamy elementy masą odporną na mróz, sole, paliwa i temperatury, a potem odtwarzamy nawierzchnię.",
      },
    ],
    faqs: [
      {
        q: "Ile trwa regulacja jednej studzienki?",
        a: "Typowa naprawa jednej studzienki trwa zwykle od 1 do 2 godzin, zależnie od nawierzchni i stanu zwieńczenia.",
      },
      {
        q: "Czy po regulacji można od razu dopuścić ruch?",
        a: "Używamy materiałów szybkowiążących, ale czas dopuszczenia ruchu zależy od konkretnej masy, temperatury i obciążenia. Informujemy o tym po wykonaniu prac.",
      },
      {
        q: "Czy regulujecie studzienki na parkingach wspólnot?",
        a: "Tak. Obsługujemy wspólnoty, spółdzielnie, zarządców dróg wewnętrznych, parkingi firmowe i tereny utwardzone.",
      },
      {
        q: "Czy wymieniacie też uszkodzone włazy?",
        a: "Tak. Jeżeli właz lub elementy zwieńczenia są zniszczone albo niedopasowane, możemy wykonać wymianę w ramach zlecenia.",
      },
    ],
    related: ["bezwykopowe-naprawy-kanalizacji", "inspekcja-tv-kanalizacji", "lokalizacja-nieszczelnosci"],
  },
  {
    slug: "przydomowe-oczyszczalnie-sciekow",
    title: "Przydomowe oczyszczalnie ścieków",
    heroTitle:
      "Przydomowe oczyszczalnie ścieków we Wrocławiu — sprzedaż, montaż i serwis",
    eyebrow: "Oczyszczalnie ścieków",
    tagline:
      "Doradzimy, dobierzemy, zamontujemy i serwisujemy oczyszczalnię dopasowaną do działki, liczby mieszkańców i warunków gruntowych.",
    metaTitle:
      "Przydomowe oczyszczalnie ścieków Wrocław — sprzedaż, montaż, serwis | ZIEBUD Expert",
    metaDescription:
      "Przydomowe oczyszczalnie ścieków we Wrocławiu i okolicach. Sprzedaż, montaż, serwis i przeglądy. Dobór do warunków gruntowych. Tel: 602 481 688.",
    keywords: [
      "przydomowe oczyszczalnie ścieków wrocław",
      "montaż oczyszczalni ścieków wrocław",
      "serwis oczyszczalni ścieków",
      "biologiczna oczyszczalnia ścieków wrocław",
      "oczyszczalnia przydomowa dolny śląsk",
    ],
    icon: Droplets,
    trenchless: false,
    overview: [
      "ZIEBUD Expert sprzedaje, montuje i serwisuje przydomowe oraz przyzakładowe oczyszczalnie ścieków we Wrocławiu i okolicach.",
      "Pracujemy zarówno z klientami indywidualnymi, jak i z firmami, gospodarstwami agroturystycznymi oraz obiektami przy drogach. Dobieramy rozwiązanie do typu gruntu, poziomu wód gruntowych, liczby użytkowników i obciążenia hydraulicznego.",
      "Po montażu zostajemy przy instalacji serwisowo: robimy przeglądy, czyszczenie zbiorników, regulację natlenienia, kontrolę osadu i wymianę elementów eksploatacyjnych.",
    ],
    variants: [
      {
        name: "Sprzedaż i dobór",
        desc: "Dobieramy oczyszczalnię do warunków działki, liczby mieszkańców i przewidywanego obciążenia.",
      },
      {
        name: "Montaż kompletnej instalacji",
        desc: "Prace ziemne, posadowienie zbiornika, podłączenia, drenaż, rozruch i przekazanie do użytkowania.",
      },
      {
        name: "Serwis i przeglądy",
        desc: "Kontrola osadu, czyszczenie, regulacja natlenienia, sprawdzenie sterowania, alarmów i drożności.",
      },
      {
        name: "Naprawy eksploatacyjne",
        desc: "Pompy, dmuchawy, dyfuzory, drenaże, zatory, kolmatacja gruntu i rozszczelnienia instalacji.",
      },
    ],
    whenToUse: [
      "gdy działka nie ma dostępu do kanalizacji sanitarnej",
      "gdy szambo generuje za wysokie koszty wywozu",
      "gdy istniejąca oczyszczalnia alarmuje, śmierdzi albo traci wydajność",
      "gdy potrzebny jest roczny przegląd i potwierdzenie stanu instalacji",
    ],
    costs: [
      {
        scope: "Przegląd lub serwis okresowy",
        range: "400–900 zł",
        note: "kontrola, czyszczenie i podstawowa regulacja",
      },
      {
        scope: "Naprawa eksploatacyjna",
        range: "900–3500 zł",
        note: "pompy, dmuchawy, dyfuzory, zatory lub drobne rozszczelnienia",
      },
      {
        scope: "Montaż przydomowej oczyszczalni",
        range: "12000–35000 zł",
        note: "zależnie od typu oczyszczalni, gruntu i zakresu ziemnego",
      },
      {
        scope: "Rozwiązanie przyzakładowe",
        range: "od 35000 zł",
        note: "wycena indywidualna po obciążeniu i warunkach terenu",
      },
    ],
    costNote:
      "Montaż oczyszczalni zawsze wymaga dopasowania do działki, gruntu, poziomu wód i wymagań użytkowników. Podane widełki są orientacyjne.",
    process: [
      {
        title: "Dobór rozwiązania",
        desc: "Analizujemy działkę, grunt, liczbę użytkowników i sposób użytkowania obiektu.",
      },
      {
        title: "Montaż lub serwis",
        desc: "Wykonujemy instalację od prac ziemnych po rozruch albo serwisujemy istniejący układ.",
      },
      {
        title: "Kontrola pracy",
        desc: "Sprawdzamy odpływ, osad, drenaż, sterowanie, alarmy, dyfuzory i drożność przewodów.",
      },
      {
        title: "Plan przeglądów",
        desc: "Ustalamy harmonogram obsługi, żeby oczyszczalnia działała bezawaryjnie i zgodnie z wymaganiami.",
      },
    ],
    faqs: [
      {
        q: "Czy przydomowa oczyszczalnia wymaga przeglądu co roku?",
        a: "Tak, roczny przegląd jest dobrą praktyką i pozwala wykryć osad, problemy z natlenieniem, sterowaniem albo drożnością drenażu zanim pojawi się awaria.",
      },
      {
        q: "Czy dobieracie oczyszczalnię do warunków gruntowych?",
        a: "Tak. Typ gruntu i poziom wód gruntowych są kluczowe. Bez tego dobór oczyszczalni może skończyć się problemami z rozsączaniem.",
      },
      {
        q: "Czy serwisujecie oczyszczalnie montowane przez inne firmy?",
        a: "Tak. Możemy wykonać przegląd, czyszczenie, regulację i naprawę eksploatacyjną także przy instalacjach wykonanych przez innego wykonawcę.",
      },
      {
        q: "Co najczęściej psuje się w oczyszczalni?",
        a: "Najczęściej widzimy zużyte pompy, dmuchawy, dyfuzory, zapchane drenaże, nadmiar osadu, kolmatację gruntu i rozszczelnienia elementów instalacji.",
      },
      {
        q: "Czy klienci po montażu mają serwis gwarancyjny?",
        a: "Tak. Klienci, którzy kupili i zamontowali oczyszczalnię u nas, korzystają z serwisu gwarancyjnego zgodnie z warunkami producenta i zakresem usługi montażowej.",
      },
    ],
    related: ["serwis-przepompowni", "naprawa-sieci-wodociagowych", "lokalizacja-nieszczelnosci"],
  },
  {
    slug: "odwodnienia-budynkow",
    title: "Odwodnienia budynków",
    heroTitle:
      "Odwodnienia budynków, garaży i posesji we Wrocławiu — drenaż opaskowy i liniowy",
    eyebrow: "Drenaże i odwodnienia",
    tagline:
      "Zalewane piwnice, namokłe fundamenty, niedrożny system rynnowy. Diagnozujemy, dobieramy metodę i wykonujemy odwodnienie, które naprawdę działa.",
    metaTitle:
      "Odwodnienia budynków Wrocław | Drenaż opaskowy i liniowy | ZIEBUD Expert",
    metaDescription:
      "Odwadnianie budynków, garaży, parkingów, posesji. Drenaż opaskowy i liniowy, renowacja drenaży poniemieckich. Wrocław i okolice. Tel: 602 481 688.",
    keywords: [
      "odwodnienia budynków wrocław",
      "drenaż opaskowy wrocław",
      "drenaż liniowy wrocław",
      "zalewana piwnica wrocław",
      "odprowadzanie wody z rynien wrocław",
    ],
    icon: Waves,
    trenchless: false,
    overview: [
      "Jeżeli masz powracający problem z zalewanymi piwnicami, namokłymi fundamentami, podtopionym garażem albo parkingiem po opadach — ZIEBUD Expert rozwiąże to systemowo.",
      "Specjalizujemy się w odwadnianiu budynków, garaży, parkingów, posesji oraz w odprowadzaniu wody z rynien w przypadku niedrożności systemu. Pracujemy również przy poszukiwaniu i renowacji starych drenaży, w tym instalacji poniemieckich i pokomunistycznych.",
      "Najpierw diagnozujemy, czy problem wynika z wód gruntowych, wód opadowych, ukształtowania terenu czy błędnego odprowadzenia deszczówki. Dopiero potem dobieramy drenaż opaskowy, liniowy, studnię chłonną albo kombinację rozwiązań.",
    ],
    variants: [
      {
        name: "Drenaż opaskowy",
        desc: "Rury drenarskie wokół budynku odbierające nadmiar wody z gruntu i odprowadzające ją do właściwego punktu zrzutu.",
      },
      {
        name: "Drenaż liniowy",
        desc: "Korytka i ruszty zbierające wodę z powierzchni parkingu, garażu, podjazdu lub drogi wewnętrznej.",
      },
      {
        name: "Renowacja starych drenaży",
        desc: "Poszukiwanie, czyszczenie i odtwarzanie starych instalacji drenażowych, również poniemieckich i pokomunistycznych.",
      },
      {
        name: "Odwodnienia terenów utwardzonych",
        desc: "Drenaże i odwodnienia placów, parkingów, dróg wewnętrznych, garaży oraz terenów przy budynkach.",
      },
    ],
    whenToUse: [
      "gdy piwnica lub garaż zalewa się po opadach",
      "gdy fundamenty i ściany przy gruncie są stale zawilgocone",
      "gdy rynny nie odprowadzają wody skutecznie i zalewają teren przy budynku",
      "gdy teren ma nieprzepuszczalny grunt albo wysoki poziom wód gruntowych",
      "gdy parking, podjazd lub droga wewnętrzna tworzy zastoiska wody",
    ],
    costs: [
      {
        scope: "Wizja lokalna i koncepcja odwodnienia",
        range: "400–900 zł",
        note: "ocena przyczyny, warianty i zakres prac",
      },
      {
        scope: "Drenaż liniowy punktowy",
        range: "2500–8000 zł",
        note: "garaż, podjazd, krótki odcinek przy budynku",
      },
      {
        scope: "Drenaż opaskowy budynku",
        range: "12000–45000 zł",
        note: "zależnie od długości, głębokości i warunków gruntu",
      },
      {
        scope: "Odwodnienie parkingu lub placu",
        range: "od 18000 zł",
        note: "wycena indywidualna po terenie i punkcie odbioru wody",
      },
    ],
    costNote:
      "Odwodnienie zależy od gruntu, spadków, długości wykopów, odbiornika wody i kolizji z istniejącą infrastrukturą. Dlatego podajemy warianty po rozpoznaniu terenu.",
    process: [
      {
        title: "Wizja lokalna",
        desc: "Sprawdzamy teren, poziom wód, ukształtowanie, zabudowę i obecny sposób odprowadzania deszczówki.",
      },
      {
        title: "Diagnoza przyczyny",
        desc: "Ustalamy, czy problem robią wody gruntowe, opadowe, niedrożny odpływ, stary drenaż czy kilka czynników naraz.",
      },
      {
        title: "Warianty i wycena",
        desc: "Przedstawiamy kilka wariantów z różną opłacalnością, zakresem robót, materiałami i terminem.",
      },
      {
        title: "Realizacja i protokół",
        desc: "Wykonujemy prace ziemne, montaż, próby działania, przekazanie z protokołem i fakturą VAT.",
      },
    ],
    faqs: [
      {
        q: "Kiedy potrzebny jest drenaż opaskowy?",
        a: "Gdy fundamenty lub piwnice są zawilgocone przez wysoki poziom wód gruntowych albo grunt słabo przepuszcza wodę. Drenaż opaskowy odbiera wodę wokół budynku.",
      },
      {
        q: "Czym drenaż liniowy różni się od opaskowego?",
        a: "Drenaż liniowy zbiera wodę z powierzchni, na przykład z parkingu, garażu albo podjazdu. Drenaż opaskowy pracuje w gruncie przy fundamentach.",
      },
      {
        q: "Czy odprowadzacie wodę z rynien?",
        a: "Tak. Robimy odprowadzenie wody z rynien, studnie chłonne, wpięcia do kanalizacji deszczowej i korekty niedrożnych układów.",
      },
      {
        q: "Czy zajmujecie się starymi drenażami?",
        a: "Tak. Szukamy, czyścimy i renowujemy stare drenaże, także instalacje poniemieckie i pokomunistyczne.",
      },
      {
        q: "Czy odwodnienie zawsze wymaga dużych wykopów?",
        a: "Nie zawsze. Zakres zależy od przyczyny problemu. Czasem wystarczy korekta odpływu, punktowe odwodnienie liniowe albo udrożnienie istniejącego drenażu.",
      },
    ],
    related: ["przydomowe-oczyszczalnie-sciekow", "montaz-przepompowni-sciekow", "inspekcja-tv-kanalizacji"],
  },
  {
    slug: "montaz-separatorow",
    title: "Montaż separatorów tłuszczu i ropopochodnych",
    heroTitle:
      "Sprzedaż i montaż separatorów tłuszczu i ropopochodnych we Wrocławiu",
    eyebrow: "Separatory od projektu",
    tagline:
      "Dobierzemy separator do Twojego obiektu, dostarczymy, zamontujemy, uruchomimy i obejmiemy serwisem. Pełna obsługa od projektu do faktury.",
    metaTitle:
      "Montaż separatorów tłuszczu i ropopochodnych Wrocław | KESSEL, ACO, DELFIN | ZIEBUD Expert",
    metaDescription:
      "Sprzedaż i montaż separatorów tłuszczu, skrobi i substancji ropopochodnych we Wrocławiu. Marki: KESSEL, ACO, DELFIN, HAURATON, ECOL-UNICON. Tel: 602 481 688.",
    keywords: [
      "montaż separatorów wrocław",
      "separator tłuszczu montaż wrocław",
      "separator ropopochodny montaż wrocław",
      "separatory kessel aco delfin wrocław",
      "sprzedaż separatorów wrocław",
    ],
    icon: Container,
    trenchless: false,
    overview: [
      "ZIEBUD Expert dostarcza, montuje i serwisuje separatory tłuszczu, skrobi i substancji ropopochodnych w obiektach we Wrocławiu i na Dolnym Śląsku.",
      "Pracujemy z gastronomią, stacjami paliw, myjniami, warsztatami, parkingami i obiektami przemysłowymi. Współpracujemy z renomowanymi producentami, między innymi KESSEL, ACO, DELFIN, HAURATON i ECOL-UNICON.",
      "Pełna usługa obejmuje dobór, dostawę, transport, prace ziemne, posadowienie separatora, wpięcie w instalację, rozruch próbny i przekazanie do użytkowania. Po montażu możemy przejąć regularny serwis i dokumentację.",
    ],
    variants: [
      {
        name: "Separatory tłuszczu",
        desc: "Restauracje, hotele, bary, kuchnie zbiorowe, stołówki, szpitale i obiekty gastronomiczne.",
      },
      {
        name: "Separatory ropopochodne",
        desc: "Stacje paliw, parkingi, warsztaty, myjnie samochodowe, garaże i płyty techniczne.",
      },
      {
        name: "Separatory skrobi i neutralizatory",
        desc: "Zakłady spożywcze, przetwórstwo ziemniaków, laboratoria i obiekty z nietypowymi ściekami.",
      },
      {
        name: "Serwis po montażu",
        desc: "Czyszczenie, przeglądy, wymiana materiałów filtracyjnych, pobór próbek i dokumentacja dla obiektu.",
      },
    ],
    whenToUse: [
      "gdy otwierasz lokal gastronomiczny albo modernizujesz kuchnię",
      "gdy obiekt ma parking, myjnię, warsztat lub stację paliw",
      "gdy kontrola wymaga uporządkowania gospodarki ściekowej",
      "gdy separator trzeba dobrać do przepustowości i typu ścieków",
      "gdy chcesz połączyć montaż z późniejszą umową serwisową",
    ],
    costs: [
      {
        scope: "Dobór i wycena separatora",
        range: "0–900 zł",
        note: "często wliczane w realizację po akceptacji oferty",
      },
      {
        scope: "Montaż małego separatora tłuszczu",
        range: "3500–12000 zł",
        note: "lokal gastronomiczny lub mały obiekt",
      },
      {
        scope: "Separator ropopochodny z posadowieniem",
        range: "12000–45000 zł",
        note: "parking, warsztat, myjnia lub stacja paliw",
      },
      {
        scope: "Rozbudowany układ z osadnikiem lub by-passem",
        range: "od 45000 zł",
        note: "wycena indywidualna po projekcie i warunkach terenu",
      },
    ],
    costNote:
      "Cena zależy od typu separatora, przepustowości, głębokości posadowienia, zakresu prac ziemnych, producenta i wymagań dokumentacyjnych.",
    process: [
      {
        title: "Doradztwo i dobór",
        desc: "Dobieramy separator do rodzaju obiektu, przepustowości, typu ścieków i wymogów środowiskowych.",
      },
      {
        title: "Dostawa i montaż",
        desc: "Organizujemy urządzenie, transport, prace ziemne, posadowienie i wpięcie separatora w instalację.",
      },
      {
        title: "Rozruch i przekazanie",
        desc: "Wykonujemy rozruch próbny, przywracamy teren do stanu pierwotnego i przekazujemy instalację do użytkowania.",
      },
      {
        title: "Serwis pogwarancyjny",
        desc: "Ustawiamy czyszczenie, przeglądy, dokumentację, pobór próbek i wymiany materiałów filtracyjnych.",
      },
    ],
    faqs: [
      {
        q: "Jakie separatory montujecie?",
        a: "Montujemy separatory tłuszczu, ropopochodne, skrobi oraz neutralizatory kwasowe. Dobieramy je do rodzaju obiektu i ścieków.",
      },
      {
        q: "Czy separator jest wymagany przepisami?",
        a: "W wielu obiektach tak, szczególnie w gastronomii, stacjach paliw, warsztatach, myjniach i parkingach. Separator chroni kanalizację i środowisko przed zanieczyszczeniami.",
      },
      {
        q: "Czy po montażu możecie serwisować separator?",
        a: "Tak. Po montażu możemy objąć separator umową serwisową: czyszczenie, przeglądy, materiały filtracyjne, próbki i dokumentacja.",
      },
      {
        q: "Z jakimi markami separatorów pracujecie?",
        a: "Pracujemy między innymi z markami KESSEL, ACO, DELFIN, HAURATON, ECOL-UNICON, PURATOR, PASSAVANT i innymi producentami.",
      },
      {
        q: "Czy montaż separatora wymaga prac ziemnych?",
        a: "Często tak. Zakres zależy od typu urządzenia, głębokości posadowienia, miejsca montażu i sposobu wpięcia w instalację.",
      },
    ],
    related: ["separatory-tluszczu", "separatory-ropopochodne", "serwis-przepompowni"],
  },
  {
    slug: "montaz-przepompowni-sciekow",
    title: "Montaż przepompowni ścieków",
    heroTitle:
      "Sprzedaż i montaż przepompowni ścieków we Wrocławiu — sanitarne i deszczowe",
    eyebrow: "Przepompownie od doboru",
    tagline:
      "Dobierzemy przepompownię do warunków, zamontujemy, uruchomimy i obejmiemy serwisem. Sanitarne, deszczowe, drenażowe — komplet usług w jednej firmie.",
    metaTitle:
      "Montaż przepompowni ścieków Wrocław | Sprzedaż i serwis | ZIEBUD Expert",
    metaDescription:
      "Sprzedaż i montaż przepompowni ścieków sanitarnych i deszczowych we Wrocławiu. Dobór, dostawa, instalacja, rozruch i serwis. Tel: 602 481 688.",
    keywords: [
      "montaż przepompowni ścieków wrocław",
      "przepompownie sanitarne wrocław",
      "przepompownie deszczowe wrocław",
      "sprzedaż przepompowni wrocław",
      "serwis przepompowni ścieków wrocław",
    ],
    icon: Compass,
    trenchless: false,
    overview: [
      "Dostarczamy, montujemy i serwisujemy przepompownie ścieków komunalnych, wód opadowych i drenażowych we Wrocławiu oraz na Dolnym Śląsku.",
      "Pracujemy z prywatnymi inwestorami, gospodarstwami rolnymi, firmami, deweloperami i samorządami. Oferujemy przepompownie sanitarne i deszczowe, które są dobrane do warunków technicznych konkretnego obiektu.",
      "Przepompownia jest potrzebna tam, gdzie obiekt nie może być podłączony grawitacyjnie do sieci: przez rozproszoną zabudowę, ukształtowanie terenu, różnicę poziomów albo konieczność transportu wód opadowych z niżej położonego miejsca.",
    ],
    variants: [
      {
        name: "Przepompownie sanitarne",
        desc: "Transport ścieków bytowych z budynków, osiedli, firm i obiektów, gdzie grawitacja nie wystarcza.",
      },
      {
        name: "Przepompownie deszczowe",
        desc: "Odprowadzenie wód opadowych z terenów niżej położonych, parkingów, placów i układów retencyjnych.",
      },
      {
        name: "Przepompownie drenażowe",
        desc: "Wsparcie systemów odwodnienia, drenażu i ochrony budynków przed wodą gruntową lub opadową.",
      },
      {
        name: "Rozruch i serwis",
        desc: "Automatyka, szafa sterownicza, próby szczelności, próby ciśnieniowe, szkolenie i późniejsza obsługa.",
      },
    ],
    whenToUse: [
      "gdy nie da się odprowadzić ścieków grawitacyjnie do kolektora",
      "gdy obiekt leży niżej niż sieć kanalizacyjna",
      "gdy trzeba transportować ścieki lub deszczówkę na większą odległość",
      "gdy inwestycja wymaga kanalizacji ciśnieniowej lub grawitacyjno-ciśnieniowej",
      "gdy istniejąca przepompownia jest za mała albo awaryjna",
    ],
    costs: [
      {
        scope: "Dobór techniczny i wycena",
        range: "0–1200 zł",
        note: "często rozliczane w realizacji po akceptacji oferty",
      },
      {
        scope: "Mała przepompownia przydomowa",
        range: "8000–22000 zł",
        note: "komora, pompa, podstawowe sterowanie i montaż",
      },
      {
        scope: "Przepompownia dla firmy lub obiektu",
        range: "22000–75000 zł",
        note: "większa komora, automatyka, armatura i próby",
      },
      {
        scope: "Przepompownia sieciowa lub deweloperska",
        range: "od 75000 zł",
        note: "wycena indywidualna po dokumentacji i warunkach terenu",
      },
    ],
    costNote:
      "Koszt zależy od wielkości komory, liczby pomp, sterowania, głębokości posadowienia, rurociągu tłocznego, armatury i zakresu prac ziemnych.",
    process: [
      {
        title: "Dobór przepompowni",
        desc: "Analizujemy poziomy, odległości, rodzaj ścieków, wydajność pomp, komorę, sterowanie i wymagania eksploatacyjne.",
      },
      {
        title: "Montaż w terenie",
        desc: "Wykonujemy transport, prace ziemne, posadowienie komory, wpięcie w kanalizację i montaż rurociągów tłocznych.",
      },
      {
        title: "Automatyka i próby",
        desc: "Montujemy sterowanie, zasuwy, zawory zwrotne, wykonujemy próby szczelności, ciśnienia i rozruch.",
      },
      {
        title: "Szkolenie i serwis",
        desc: "Przekazujemy przepompownię użytkownikowi, szkolimy obsługę i możemy objąć układ długoterminowym serwisem.",
      },
    ],
    faqs: [
      {
        q: "Kiedy potrzebna jest przepompownia ścieków?",
        a: "Gdy ścieków nie da się odprowadzić grawitacyjnie do sieci, na przykład przez różnicę poziomów, odległość od kolektora albo ukształtowanie terenu.",
      },
      {
        q: "Czy montujecie przepompownie sanitarne i deszczowe?",
        a: "Tak. Montujemy przepompownie ścieków sanitarnych, wód opadowych i układów drenażowych.",
      },
      {
        q: "Czy dobieracie pompy i automatykę?",
        a: "Tak. Dobieramy komorę, pompy, rurociąg tłoczny, zasuwy, zawory, szafę sterowniczą, pływaki lub sondę hydrostatyczną.",
      },
      {
        q: "Czy po montażu robicie serwis przepompowni?",
        a: "Tak. Możemy prowadzić czyszczenie zbiornika, kontrolę pomp, pływaków, armatury, automatyki i dokumentację okresową.",
      },
      {
        q: "Czy montujecie przepompownie dla deweloperów i gmin?",
        a: "Tak. Obsługujemy małe układy przydomowe, obiekty firmowe, deweloperskie i większe systemy dla samorządów.",
      },
    ],
    related: ["serwis-przepompowni", "przydomowe-oczyszczalnie-sciekow", "odwodnienia-budynkow"],
  },
];

export function getLocalService(slug: string): LocalService | undefined {
  return localServices.find((service) => service.slug === slug);
}
