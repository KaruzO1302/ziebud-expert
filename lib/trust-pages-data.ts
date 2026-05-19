import type { LucideIcon } from "lucide-react";
import { Droplets, Factory, Settings2 } from "lucide-react";

export type BrandItem = {
  name: string;
  url: string;
  summary: string;
  fit: string;
};

export type TrustPage = {
  slug: "marki-separatorow" | "marki-przepompowni" | "marki-oczyszczalni";
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  image: {
    src: string;
    alt: string;
  };
  icon: LucideIcon;
  brands: BrandItem[];
  scopeTitle: string;
  scope: string[];
  related: { label: string; href: string }[];
};

export const trustPages: TrustPage[] = [
  {
    slug: "marki-separatorow",
    title:
      "Serwis separatorów we Wrocławiu — PIPELIFE, KESSEL, ECOL-UNICON, AWADUKT, Wavin | ZIEBUD Expert",
    description:
      "Czyszczenie, montaż i serwis separatorów tłuszczu oraz ropopochodnych we Wrocławiu. Obsługujemy marki PIPELIFE, KESSEL, ECOL-UNICON, AWADUKT i Wavin.",
    eyebrow: "Marki separatorów",
    h1: "Serwis separatorów we Wrocławiu — obsługujemy najważniejsze marki dostępne na polskim rynku",
    lead:
      "Serwisujemy, czyścimy, dobieramy i montujemy separatory tłuszczu, skrobi oraz substancji ropopochodnych. Pracujemy ostrożnie: bez obietnic na wyrost, z dokumentacją po usłudze i doborem zakresu do konkretnego obiektu.",
    image: {
      src: "/images/task03/hero-marki-separatorow.webp",
      alt: "Separator tłuszczu w hali gastronomicznej — przegląd marek stosowanych przez ZIEBUD Expert",
    },
    icon: Factory,
    brands: [
      {
        name: "PIPELIFE",
        url: "https://www.pipelife.pl/",
        summary:
          "Systemy infrastrukturalne i kanalizacyjne, często spotykane przy odwodnieniach, przyłączach i układach podziemnych.",
        fit: "Dobre dopasowanie przy parkingach, terenach zewnętrznych i instalacjach łączonych z kanalizacją deszczową.",
      },
      {
        name: "KESSEL",
        url: "https://www.kessel.pl/",
        summary:
          "Rozwiązania odwodnieniowe i separacyjne dla gastronomii, obiektów technicznych oraz instalacji budynkowych.",
        fit: "Często wybierane przy lokalach gastronomicznych, kuchniach zbiorowych i obiektach wymagających dokumentacji serwisowej.",
      },
      {
        name: "ECOL-UNICON",
        url: "https://www.ecol-unicon.com/",
        summary:
          "Producent rozwiązań dla gospodarki wodno-ściekowej, separatorów, zbiorników i układów retencyjnych.",
        fit: "Sprawdza się przy parkingach, stacjach paliw, zakładach i inwestycjach z większym zakresem ziemnym.",
      },
      {
        name: "AWADUKT",
        url: "https://awadukt.pl/",
        summary:
          "Marka kojarzona z urządzeniami dla kanalizacji i ochrony środowiska, w tym z obsługą ścieków technologicznych.",
        fit: "Dobór zależy od typu ścieków, przepustowości i wymagań dokumentacyjnych konkretnego obiektu.",
      },
      {
        name: "Wavin",
        url: "https://www.wavin.com/pl-pl",
        summary:
          "Systemy instalacyjne, kanalizacyjne i odwodnieniowe wykorzystywane w budownictwie oraz infrastrukturze.",
        fit: "Przydatne przy układach, gdzie separator jest częścią większej instalacji odwodnienia lub kanalizacji.",
      },
    ],
    scopeTitle: "Co robimy przy separatorach",
    scope: [
      "dobór separatora do rodzaju obiektu, przepustowości i typu ścieków",
      "montaż separatorów tłuszczu, skrobi i substancji ropopochodnych",
      "czyszczenie, przeglądy okresowe i dokumentacja serwisowa",
      "pobór próbek, kontrola osadu i rekomendacje dalszej eksploatacji",
    ],
    related: [
      { label: "Montaż separatorów", href: "/uslugi/montaz-separatorow" },
      { label: "Separatory tłuszczu", href: "/uslugi/separatory-tluszczu" },
      {
        label: "Separatory ropopochodne",
        href: "/uslugi/separatory-ropopochodne",
      },
      { label: "Umowy serwisowe", href: "/umowy-serwisowe" },
    ],
  },
  {
    slug: "marki-przepompowni",
    title:
      "Serwis i montaż przepompowni Wrocław — KESSEL, Grundfos, Wilo, Sulzer, Xylem | ZIEBUD Expert",
    description:
      "Serwis i montaż przepompowni ścieków we Wrocławiu. Obsługujemy rozwiązania KESSEL, Grundfos, Wilo, Sulzer i Xylem. Tel: 602 481 688.",
    eyebrow: "Marki przepompowni",
    h1: "Serwis i montaż przepompowni we Wrocławiu — KESSEL, Grundfos, Wilo, Sulzer i Xylem",
    lead:
      "Dobieramy, montujemy i serwisujemy przepompownie sanitarne, deszczowe i drenażowe. Nie deklarujemy parametrów bez rozpoznania: wydajność, automatyka i serwis zależą od wysokości podnoszenia, ilości ścieków, armatury i warunków terenowych.",
    image: {
      src: "/images/task03/hero-marki-przepompowni.webp",
      alt: "Przepompownia z pompą zatapialną w studni betonowej — instalacje wykonywane przez ZIEBUD",
    },
    icon: Settings2,
    brands: [
      {
        name: "KESSEL",
        url: "https://www.kessel.pl/",
        summary:
          "Rozwiązania do odwodnienia budynków, pompowni i zabezpieczenia instalacji przed cofką.",
        fit: "Dobre przy obiektach budynkowych, garażach, piwnicach i mniejszych układach technicznych.",
      },
      {
        name: "Grundfos",
        url: "https://www.grundfos.com/pl",
        summary:
          "Pompy i układy pompowe stosowane w instalacjach wodno-kanalizacyjnych, technicznych i przemysłowych.",
        fit: "Częsty wybór przy przepompowniach ścieków, układach obiektowych i serwisie pomp.",
      },
      {
        name: "Wilo",
        url: "https://wilo.com/pl/pl/",
        summary:
          "Pompy do budynków, przemysłu i infrastruktury, w tym rozwiązania dla ścieków oraz odwodnienia.",
        fit: "Sprawdza się przy budynkach wielorodzinnych, obiektach technicznych i przepompowniach kompaktowych.",
      },
      {
        name: "Sulzer",
        url: "https://www.sulzer.com/",
        summary:
          "Producent pomp i technologii przepływowych dla przemysłu, infrastruktury i gospodarki ściekowej.",
        fit: "Marka spotykana przy większych instalacjach, gdzie liczy się dobór pompy do trudniejszych warunków pracy.",
      },
      {
        name: "Xylem",
        url: "https://www.xylem.com/pl-pl/",
        summary:
          "Grupa technologii wodnych obejmująca rozwiązania pompowe i systemy dla gospodarki wodno-ściekowej.",
        fit: "Dobry kierunek przy sieciowych przepompowniach, pompach zatapialnych i układach z automatyką.",
      },
    ],
    scopeTitle: "Co robimy przy przepompowniach",
    scope: [
      "dobór komory, pomp, armatury, sterowania i układu tłocznego",
      "montaż przepompowni sanitarnych, deszczowych i drenażowych",
      "czyszczenie komory, pomp, pływaków, łańcuchów i zaworów",
      "przeglądy automatyki, poboru prądu i elementów bezpieczeństwa",
    ],
    related: [
      {
        label: "Montaż przepompowni",
        href: "/uslugi/montaz-przepompowni-sciekow",
      },
      {
        label: "Serwis przepompowni",
        href: "/uslugi/serwis-przepompowni",
      },
      {
        label: "Przepompownie ścieków",
        href: "/uslugi/przepompownie-sciekow",
      },
      { label: "Umowy serwisowe", href: "/umowy-serwisowe" },
    ],
  },
  {
    slug: "marki-oczyszczalni",
    title:
      "Przydomowe oczyszczalnie Wrocław — BIOTOP, EkoSAM, BioDisc, Sotralentz, ROTH | ZIEBUD Expert",
    description:
      "Dobór, montaż i serwis przydomowych oczyszczalni ścieków we Wrocławiu. Marki BIOTOP, EkoSAM, BioDisc, Sotralentz i ROTH.",
    eyebrow: "Marki oczyszczalni",
    h1: "Sprzedaż, montaż i serwis przydomowych oczyszczalni ścieków — marki, które obsługujemy",
    lead:
      "Pomagamy dobrać oczyszczalnię do gruntu, poziomu wód, liczby użytkowników i sposobu eksploatacji. Przy markach oczyszczalni nie zgadujemy: po wizji lokalnej mówimy, czy sens ma drenaż, biologiczna oczyszczalnia, studnia chłonna czy inny układ.",
    image: {
      src: "/images/task03/hero-marki-oczyszczalni.webp",
      alt: "Przydomowa oczyszczalnia ścieków zainstalowana w ogrodzie domu jednorodzinnego",
    },
    icon: Droplets,
    brands: [
      {
        name: "BIOTOP",
        url: "https://www.biotop.pl/",
        summary:
          "Rozwiązania dla przydomowej gospodarki ściekowej i zagospodarowania wody w obiektach prywatnych.",
        fit: "Dobór zależy od gruntu, użytkowników i możliwości zrzutu oczyszczonych ścieków.",
      },
      {
        name: "EkoSAM",
        url: "https://ekosam.pl/",
        summary:
          "Polskie rozwiązania dla oczyszczania ścieków i obsługi przydomowych instalacji.",
        fit: "Przydatne przy domach jednorodzinnych, działkach i mniejszych obiektach poza kanalizacją.",
      },
      {
        name: "BioDisc",
        url: "https://www.kingspan.com/pl/pl/produkty/systemy-oczyszczania-sciekow/",
        summary:
          "Rozwiązania biologicznego oczyszczania ścieków kojarzone z kompaktowymi układami dla budynków.",
        fit: "Warto rozważyć tam, gdzie liczy się wysoka skuteczność oczyszczania i przewidywalny serwis.",
      },
      {
        name: "Sotralentz",
        url: "https://www.sotralentz.com/",
        summary:
          "Marka znana z rozwiązań zbiornikowych i przydomowych systemów ściekowych spotykanych w wielu instalacjach.",
        fit: "Często obsługiwana przy modernizacjach, przeglądach i ocenie starszych układów przydomowych.",
      },
      {
        name: "ROTH",
        url: "https://www.roth-polska.com/",
        summary:
          "Producent systemów dla budownictwa, instalacji i gospodarki wodno-ściekowej.",
        fit: "Dobór zależy od warunków działki, przepustowości i wymaganej obsługi eksploatacyjnej.",
      },
    ],
    scopeTitle: "Co robimy przy oczyszczalniach",
    scope: [
      "dobór oczyszczalni do gruntu, wód gruntowych i liczby użytkowników",
      "montaż, rozruch, przekazanie do użytkowania i instruktaż",
      "przeglądy okresowe, kontrola osadu, sterowania i drożności",
      "serwis pomp, dmuchaw, dyfuzorów, drenażu i elementów eksploatacyjnych",
    ],
    related: [
      {
        label: "Przydomowe oczyszczalnie",
        href: "/uslugi/przydomowe-oczyszczalnie-sciekow",
      },
      { label: "Odwodnienia budynków", href: "/uslugi/odwodnienia-budynkow" },
      {
        label: "Montaż przepompowni",
        href: "/uslugi/montaz-przepompowni-sciekow",
      },
      { label: "Umowy serwisowe", href: "/umowy-serwisowe" },
    ],
  },
];

export function getTrustPage(slug: TrustPage["slug"]) {
  return trustPages.find((page) => page.slug === slug);
}
