export type LeadSource = "zapytanie" | "kontakt" | "wycena";

export type LeadFormPayload = {
  source: LeadSource;
  investorType: string;
  company: string;
  contactName: string;
  email: string;
  phone: string;
  voivodeship: string;
  city: string;
  projectLocation: string;
  projectType: string;
  projectStage: string;
  plannedTerm: string;
  message: string;
  rodo: boolean;
};

export const investorTypeOptions = [
  "ZWiK / MPWiK / spółka komunalna",
  "Gmina / urząd / jednostka publiczna",
  "Generalny wykonawca",
  "Deweloper",
  "Przemysł / zakład produkcyjny",
  "Projektant / biuro projektowe",
  "Wspólnota / zarządca",
  "Klient indywidualny",
  "Inny inwestor",
] as const;

export const projectStageOptions = [
  "Koncepcja / analiza wariantów",
  "Dokumentacja gotowa do wyceny",
  "Przetarg / SWZ",
  "Budowa w toku / pilne wsparcie",
  "Modernizacja istniejącej sieci",
  "Awaria / temat pilny",
] as const;

export const projectTypeOptions = [
  "Budowa sieci wodociągowej",
  "Budowa kanalizacji sanitarnej",
  "Budowa kanalizacji deszczowej",
  "Zbiornik retencyjny / retencja",
  "Przepompownia ścieków",
  "Odwodnienie wykopów",
  "HDD / przewiert sterowany",
  "Przecisk pod drogą lub torami",
  "Kraking rur",
  "CIPP / renowacja rękawem",
  "Mikrotunelowanie",
  "Ciepłownictwo",
  "Kompleksowe sieci zewnętrzne",
] as const;

export const voivodeshipOptions = [
  "dolnośląskie",
  "kujawsko-pomorskie",
  "lubelskie",
  "lubuskie",
  "łódzkie",
  "małopolskie",
  "mazowieckie",
  "opolskie",
  "podkarpackie",
  "podlaskie",
  "pomorskie",
  "śląskie",
  "świętokrzyskie",
  "warmińsko-mazurskie",
  "wielkopolskie",
  "zachodniopomorskie",
] as const;

export const sourceLabels: Record<LeadSource, string> = {
  zapytanie: "Zapytanie ofertowe",
  kontakt: "Kontakt",
  wycena: "Wycena",
};
