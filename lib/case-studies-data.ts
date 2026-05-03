import type { PhotoKey } from "@/lib/photos";

export type CaseStudy = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  summary: string;
  city: string;
  voivodeship: string;
  serviceSlugs: string[];
  articleSlugs: string[];
  photoKey: PhotoKey;
  stats: { label: string; value: string }[];
  challenge: string;
  scope: string[];
  outcome: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "siec-wodociagowa-strefa-logistyczna-wroclaw",
    title: "Sieć wodociągowa dla strefy logistycznej pod Wrocławiem",
    metaTitle: "Sieć wodociągowa dla strefy logistycznej — case study",
    metaDescription:
      "Anonimowe case study budowy sieci wodociągowej dla dużej strefy logistycznej pod Wrocławiem. Zakres, ryzyka i efekt końcowy.",
    excerpt:
      "Projekt obejmował sieć wodociągową dla rozbudowy strefy logistycznej z równoległymi robotami drogowymi i napiętym harmonogramem inwestora.",
    summary:
      "W projekcie najważniejsze było zsynchronizowanie robót wodociągowych z uzbrojeniem terenu, dojazdami i harmonogramem generalnego wykonawcy.",
    city: "Wrocław",
    voivodeship: "dolnośląskie",
    serviceSlugs: ["wodociagi", "kanalizacja-deszczowa"],
    articleSlugs: ["dokumentacja-do-wyceny-sieci-zewnetrznych", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"],
    photoKey: "rurociagBudowa",
    stats: [
      { label: "Zakres", value: "sieć wodociągowa + uzbrojenie" },
      { label: "Typ inwestora", value: "logistyka / deweloper" },
      { label: "Model pracy", value: "etapowanie z innymi branżami" },
    ],
    challenge:
      "Inwestycja była prowadzona równolegle z robotami drogowymi i przygotowaniem placów manewrowych. Kluczowe było utrzymanie harmonogramu i ograniczenie konfliktów branżowych.",
    scope: [
      "Analiza dokumentacji i doprecyzowanie zakresu robót sieciowych.",
      "Koordynacja przebiegu sieci z planowanymi drogami i pozostałym uzbrojeniem terenu.",
      "Wykonanie odcinków wodociągowych oraz elementów armatury w modelu etapowym.",
    ],
    outcome: [
      "Inwestor dostał czytelny zakres robót i uporządkowaną logistykę wejścia ekip.",
      "Roboty wodociągowe zostały dopasowane do harmonogramu głównej budowy.",
      "Ryzyko zmian zakresu w trakcie realizacji zostało ograniczone dzięki pracy na dokumentacji od początku projektu.",
    ],
  },
  {
    slug: "kanalizacja-sanitarna-osiedle-mazowieckie",
    title: "Kanalizacja sanitarna dla rozbudowy osiedla na Mazowszu",
    metaTitle: "Kanalizacja sanitarna dla osiedla — case study",
    metaDescription:
      "Case study budowy kanalizacji sanitarnej dla inwestycji osiedlowej na Mazowszu. Zakres, wyzwania terenowe i efekt dla inwestora.",
    excerpt:
      "Projekt obejmował kanalizację sanitarną dla etapu osiedla mieszkaniowego z koniecznością szybkiego spięcia robót z drogami i harmonogramem budynku.",
    summary:
      "Największym wyzwaniem była synchronizacja zakresu sanitarnego z terminami budowy osiedla i uporządkowanie dokumentacji wejściowej.",
    city: "Warszawa",
    voivodeship: "mazowieckie",
    serviceSlugs: ["kanalizacja-sanitarna", "przepompownie-sciekow"],
    articleSlugs: ["kanalizacja-sanitarna-cena-co-wplywa", "dokumentacja-do-wyceny-sieci-zewnetrznych"],
    photoKey: "kregiBetonowe",
    stats: [
      { label: "Zakres", value: "kanalizacja sanitarna" },
      { label: "Typ inwestora", value: "deweloper" },
      { label: "Tryb", value: "osiedle etapowane" },
    ],
    challenge:
      "Inwestycja wymagała szybkiej reakcji i doprecyzowania zakresu, bo realizacja osiedla była już w ruchu, a sieć zewnętrzna musiała zostać wpięta bez opóźniania kolejnych branż.",
    scope: [
      "Weryfikacja dokumentacji i uporządkowanie pytań wykonawczych.",
      "Przygotowanie zakresu dla kanalizacji sanitarnej wraz z elementami towarzyszącymi.",
      "Dopasowanie harmonogramu prac do etapów budowy osiedla.",
    ],
    outcome: [
      "Zakres został dopięty bez rozjechania terminu inwestycji.",
      "Inwestor dostał lepszy obraz kosztów i ryzyk wykonawczych.",
      "Dokumentacja wejściowa została uporządkowana pod realną realizację robót terenowych.",
    ],
  },
  {
    slug: "retencja-park-handlowy-poznan",
    title: "Retencja i kanalizacja deszczowa dla parku handlowego",
    metaTitle: "Retencja i kanalizacja deszczowa — case study",
    metaDescription:
      "Case study retencji i kanalizacji deszczowej dla parku handlowego. Sprawdź, jak połączyć deszczówkę, retencję i harmonogram inwestycji.",
    excerpt:
      "Projekt wymagał spięcia kanalizacji deszczowej z retencją dla inwestycji handlowej o dużej powierzchni utwardzonej.",
    summary:
      "Kluczowe było policzenie układu retencyjnego i ułożenie zakresu tak, by inwestor mógł bezpiecznie prowadzić dalsze etapy budowy.",
    city: "Poznań",
    voivodeship: "wielkopolskie",
    serviceSlugs: ["retencja", "kanalizacja-deszczowa"],
    articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"],
    photoKey: "robotyZiemne",
    stats: [
      { label: "Zakres", value: "retencja + deszczówka" },
      { label: "Typ inwestora", value: "park handlowy" },
      { label: "Priorytet", value: "wody opadowe" },
    ],
    challenge:
      "Duża powierzchnia utwardzona i potrzeba sprawnego domknięcia formalności wymagały dobrego przygotowania zakresu retencji oraz kanalizacji deszczowej.",
    scope: [
      "Analiza układu odwodnienia i retencji pod inwestycję handlową.",
      "Przygotowanie zakresu kanalizacji deszczowej, urządzeń towarzyszących i retencji.",
      "Wsparcie inwestora w zebraniu właściwych danych do oferty i harmonogramu.",
    ],
    outcome: [
      "Retencja została potraktowana jako integralna część układu, a nie późniejszy dodatek.",
      "Zakres robót był czytelny dla inwestora i projektanta.",
      "Projekt zyskał bezpieczniejszą ścieżkę do dalszej realizacji.",
    ],
  },
  {
    slug: "przepompownia-sciekow-strefa-przemyslowa-rzeszow",
    title: "Przepompownia ścieków dla strefy przemysłowej",
    metaTitle: "Przepompownia ścieków dla strefy przemysłowej — case study",
    metaDescription:
      "Anonimowe case study przepompowni ścieków dla strefy przemysłowej. Zobacz, jak uporządkować zakres i przygotować projekt do wykonania.",
    excerpt:
      "Projekt dotyczył układu tłocznego z przepompownią dla rozwoju strefy przemysłowej, gdzie kluczowe było bezpieczeństwo eksploatacyjne i etapowanie robót.",
    summary:
      "Najwięcej wartości przyniosło uporządkowanie parametrów technicznych, automatyki i zakresu robót ziemnych wokół przepompowni.",
    city: "Rzeszów",
    voivodeship: "podkarpackie",
    serviceSlugs: ["przepompownie-sciekow", "kanalizacja-sanitarna"],
    articleSlugs: ["przepompownia-sciekow-kiedy-jest-potrzebna", "dokumentacja-do-wyceny-sieci-zewnetrznych"],
    photoKey: "przepompowniaWnetrze",
    stats: [
      { label: "Zakres", value: "przepompownia + tłocznia" },
      { label: "Typ inwestora", value: "przemysł" },
      { label: "Fokus", value: "automatyka i rozruch" },
    ],
    challenge:
      "Inwestor potrzebował rozwiązania, które nie tylko zadziała hydraulicznie, ale też będzie czytelne serwisowo i możliwe do sprawnego wdrożenia na aktywnym terenie przemysłowym.",
    scope: [
      "Doprecyzowanie założeń dla przepompowni i układu tłocznego.",
      "Uporządkowanie elementów zbiornika, automatyki i wymaganych robót ziemnych.",
      "Przygotowanie zapytania w modelu, który łatwiej porównać wykonawczo.",
    ],
    outcome: [
      "Zakres został dopracowany pod realne warunki eksploatacyjne.",
      "Inwestor dostał bardziej czytelny obraz kosztów i ryzyk.",
      "Projekt był lepiej przygotowany do dalszych decyzji wykonawczych.",
    ],
  },
  {
    slug: "odwodnienie-wykopow-kolektor-gdansk",
    title: "Odwodnienie wykopów przy budowie kolektora deszczowego",
    metaTitle: "Odwodnienie wykopów przy budowie kolektora — case study",
    metaDescription:
      "Case study odwodnienia wykopów przy budowie kolektora deszczowego. Jak uporządkować ryzyka wodne i nie zatrzymać robót.",
    excerpt:
      "Projekt dotyczył przygotowania robót odwodnieniowych dla inwestycji, w której wysoki poziom wód gruntowych mógł zatrzymać cały front prac.",
    summary:
      "Największym zadaniem było takie przygotowanie odwodnienia, żeby nie spowolnić robót sieciowych i utrzymać bezpieczeństwo terenu.",
    city: "Gdańsk",
    voivodeship: "pomorskie",
    serviceSlugs: ["odwodnienie-wykopow", "kanalizacja-deszczowa"],
    articleSlugs: ["zbiornik-retencyjny-na-dzialce-deweloperskiej", "wykonawca-sieci-zewnetrznych-jak-przygotowac-zapytanie"],
    photoKey: "robotyZiemne",
    stats: [
      { label: "Zakres", value: "odwodnienie wykopów" },
      { label: "Typ inwestycji", value: "kolektor deszczowy" },
      { label: "Ryzyko", value: "wysoki poziom wód" },
    ],
    challenge:
      "Przy wysokim poziomie wód gruntowych klasyczna organizacja robót mogła doprowadzić do przestojów, dlatego temat odwodnienia wymagał osobnego potraktowania.",
    scope: [
      "Ocena ryzyk terenowych i wpływu wód gruntowych na przebieg robót.",
      "Przygotowanie zakresu odwodnienia pod realizację kolektora.",
      "Dopasowanie odwodnienia do harmonogramu robót i kolejnych etapów inwestycji.",
    ],
    outcome: [
      "Ryzyka wodne zostały nazwane i uporządkowane jeszcze przed wejściem w głębszy etap prac.",
      "Zakres odwodnienia został lepiej powiązany z całością harmonogramu.",
      "Inwestor uniknął traktowania odwodnienia jako dodatku dopinanego w trakcie robót.",
    ],
  },
  {
    slug: "hdd-pod-droga-krajowa-katowice",
    title: "HDD pod drogą krajową dla układu wod-kan",
    metaTitle: "HDD pod drogą krajową — case study",
    metaDescription:
      "Case study przewiertu HDD pod drogą krajową dla układu wod-kan. Kiedy technologia bezwykopowa daje realną przewagę wykonawczą.",
    excerpt:
      "Projekt dotyczył przejścia pod drogą krajową, gdzie wykop generował zbyt wysokie ryzyko, koszt odtworzenia i komplikacje organizacji ruchu.",
    summary:
      "Kluczowe było uzasadnienie wyboru technologii bezwykopowej i dopasowanie jej do parametrów inwestycji.",
    city: "Katowice",
    voivodeship: "śląskie",
    serviceSlugs: ["hdd-przewiert-sterowany", "wodociagi", "przeciski"],
    articleSlugs: ["hdd-pod-droga-kiedy-sie-oplaca", "dokumentacja-do-wyceny-sieci-zewnetrznych"],
    photoKey: "hddWiertnica",
    stats: [
      { label: "Zakres", value: "HDD pod drogą" },
      { label: "Typ inwestycji", value: "wod-kan w kolizji drogowej" },
      { label: "Priorytet", value: "minimalizacja utrudnień" },
    ],
    challenge:
      "Wykop oznaczałby kosztowne odtworzenie i większe ryzyko organizacyjne. Trzeba było rzetelnie ocenić, czy HDD daje tu przewagę nie tylko technologiczną, ale też ekonomiczną.",
    scope: [
      "Analiza wariantu klasycznego i bezwykopowego.",
      "Doprecyzowanie danych potrzebnych do oceny przewiertu.",
      "Ustawienie zapytania i zakresu pod technologię HDD.",
    ],
    outcome: [
      "Wybór technologii został osadzony w realiach kosztowych i wykonawczych.",
      "Inwestor dostał bardziej przewidywalny model organizacji robót.",
      "Temat został przygotowany tak, żeby ograniczyć kolizje z ruchem i odtworzeniem nawierzchni.",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
