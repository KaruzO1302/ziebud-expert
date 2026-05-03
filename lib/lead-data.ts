export type LeadSource = "zapytanie" | "kontakt" | "wycena" | "awaria";

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
  attachmentUrl?: string;
  attachmentName?: string;
  rodo: boolean;
};

export const investorTypeOptions = [
  "Wspólnota / spółdzielnia",
  "Zarządca nieruchomości",
  "Firma / zakład / magazyn",
  "Gastronomia / retail",
  "Parking / warsztat / obiekt techniczny",
  "Klient indywidualny",
  "Deweloper / wykonawca",
  "Inny klient",
] as const;

export const projectStageOptions = [
  "Awaria teraz",
  "Temat pilny dziś / jutro",
  "Przegląd i diagnoza",
  "Serwis planowany",
  "Wycena stałej obsługi",
] as const;

export const projectTypeOptions = [
  "WUKO / czyszczenie kanalizacji",
  "Udrażnianie rur / usuwanie zatoru",
  "Inspekcja TV kanalizacji",
  "Lokalizacja nieszczelności",
  "Separator tłuszczu",
  "Separator ropopochodny",
  "Serwis przepompowni",
  "Kanalizacja deszczowa / wpusty / studnie",
  "Inny temat",
] as const;

export const voivodeshipOptions = [
  "dolnośląskie",
  "opolskie",
  "wielkopolskie",
  "lubuskie",
  "inne / do ustalenia",
] as const;

export const sourceLabels: Record<LeadSource, string> = {
  zapytanie: "Zgłoszenie",
  kontakt: "Kontakt",
  wycena: "Wycena",
  awaria: "Pilna awaria",
};
