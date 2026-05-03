export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Usługi",
    href: "/uslugi",
    children: [
      {
        label: "Usługi kanalizacyjne",
        href: "/uslugi/uslugi-kanalizacyjne",
        description: "Kompleksowy serwis kanalizacji dla budynków i firm",
      },
      {
        label: "Pogotowie kanalizacyjne 24h",
        href: "/pogotowie-kanalizacyjne",
        description: "Szybkie zgłoszenia, awarie i dojazd we Wrocławiu",
      },
      {
        label: "WUKO Wrocław",
        href: "/uslugi/wuko-wroclaw",
        description: "Czyszczenie kanalizacji i serwis WUKO",
      },
      {
        label: "Udrażnianie rur",
        href: "/uslugi/udraznianie-rur",
        description: "Usuwanie zatorów i szybki serwis",
      },
      {
        label: "Naprawa sieci wodociągowych 24h",
        href: "/uslugi/naprawa-sieci-wodociagowych",
        description: "Awarie wodociągowe, wycieki i naprawa odcinków",
      },
      {
        label: "Inspekcja TV",
        href: "/uslugi/inspekcja-tv-kanalizacji",
        description: "Kamera do kanalizacji i diagnoza problemu",
      },
      {
        label: "Separatory tłuszczu",
        href: "/uslugi/separatory-tluszczu",
        description: "Gastronomia, retail i kuchnie zbiorowe",
      },
      {
        label: "Separatory ropopochodne",
        href: "/uslugi/separatory-ropopochodne",
        description: "Parkingi, warsztaty i obiekty techniczne",
      },
      {
        label: "Serwis przepompowni",
        href: "/uslugi/serwis-przepompowni",
        description: "Czyszczenie i obsługa przepompowni ścieków",
      },
    ],
  },
  { label: "Cennik / wycena", href: "/cennik" },
  { label: "Dla wspólnot i firm", href: "/dla-wspolnot-i-firm" },
  { label: "O firmie", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerNav = {
  uslugi: [
    { label: "Usługi kanalizacyjne", href: "/uslugi/uslugi-kanalizacyjne" },
    { label: "WUKO Wrocław", href: "/uslugi/wuko-wroclaw" },
    { label: "Udrażnianie rur", href: "/uslugi/udraznianie-rur" },
    { label: "Naprawa sieci wodociągowych 24h", href: "/uslugi/naprawa-sieci-wodociagowych" },
    { label: "Inspekcja TV kanalizacji", href: "/uslugi/inspekcja-tv-kanalizacji" },
    { label: "Separatory tłuszczu", href: "/uslugi/separatory-tluszczu" },
    { label: "Separatory ropopochodne", href: "/uslugi/separatory-ropopochodne" },
    { label: "Serwis przepompowni", href: "/uslugi/serwis-przepompowni" },
  ],
  firma: [
    { label: "O firmie", href: "/o-nas" },
    { label: "Pogotowie kanalizacyjne", href: "/pogotowie-kanalizacyjne" },
    { label: "Cennik / wycena", href: "/cennik" },
    { label: "Dla wspólnot i firm", href: "/dla-wspolnot-i-firm" },
    { label: "Umowy serwisowe", href: "/umowy-serwisowe" },
    { label: "Nasz sprzęt", href: "/sprzet" },
    { label: "Zgłoś awarię", href: "/zapytanie" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  prawne: [
    { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
    { label: "Regulamin", href: "/regulamin" },
    { label: "Cookies", href: "/cookies" },
    { label: "RODO", href: "/rodo" },
  ],
};
