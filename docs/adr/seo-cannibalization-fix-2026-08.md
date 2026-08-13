# Naprawa kanibalizacji słów kluczowych — sierpień 2026

## Kontekst i problem do rozwiązania
Audyt 13.08.2026 (5 subagentów, zweryfikowany ręcznie cytatami z kodu)
znalazł 4 konflikty kanibalizacyjne na pogotowie-kanalizacyjne-wroclaw.com
(repo `ziebud-expert`). Najpoważniejszy: strona główna i `/pogotowie-
kanalizacyjne` biły się o frazę oznaczoną w `PROJEKT.md` jako **cel TOP3**
(wtedy #7 w Google).

## Rozważane opcje
- **Scalić homepage z `/pogotowie-kanalizacyjne` w jedną stronę** —
  odrzucone: traci się homepage jako punkt wejścia dla ruchu markowego/
  bezpośredniego, więcej roboty migracyjnej.
- **Homepage markowa/szeroka, `/pogotowie-kanalizacyjne` = wyłączny
  właściciel frazy transakcyjnej (wybrana)** — ten sam wzorzec co
  zastosowany tego samego dnia na nurtex.pl. Szybsze, mniejsze ryzyko,
  zgodne z resztą portfolio.

## Co naprawione

### 1. Homepage vs `/pogotowie-kanalizacyjne`
- `app/page.tsx`: title/description/OG/Twitter — z "Pogotowie kanalizacyjne
  Wrocław 24/7" na **"Kanalizacja i wodociągi Wrocław — WUKO, przeglądy,
  serwis | ZIĘBUD Expert"** (szerszy, markowy, pokrywa cały zakres usług)
- `components/site/sections/hero.tsx`: H1 z "Pogotowie kanalizacyjne
  Wrocław 24/7. Cofki i awarie bez czekania" na **"Kanalizacja i wodociągi
  Wrocław. Pogotowie, WUKO i przeglądy — od 1991 roku"**
- `/pogotowie-kanalizacyjne/page.tsx` — bez zmian, zostaje wyłącznym
  właścicielem frazy "pogotowie kanalizacyjne Wrocław 24h"
- Homepage już linkowała do `/pogotowie-kanalizacyjne` w sekcji "Typowe
  awarie" — link zostaje, wzmacnia hub→spoke

### 2. `wuko-wroclaw` vs `czyszczenie-kanalizacji-wroclaw`
Obie miały `keywords[0]: "czyszczenie kanalizacji wrocław"`. `wuko-wroclaw`
przesunięty na markę WUKO (zgodnie ze slugiem): title/heroTitle/metaTitle
teraz prowadzą frazą "WUKO Wrocław", `keywords[0]` = "wuko wrocław".
`czyszczenie-kanalizacji-wroclaw` bez zmian — zostaje właścicielem
generycznej frazy.

### 3. Dublet blogowy — separatory tłuszczu
Dwa artykuły o niemal identycznej treści (ten sam kąt: "dlaczego regularne
czyszczenie jest ważne"). Starszy, krótszy (7 min, 28.04) usunięty z
`lib/articles-data.ts`, 301 redirect w `next.config.ts` do nowszego,
obszerniejszego (9 min, 28.05, slug `czyszczenie-separatorow-tluszczu-
wroclaw`) — konsolidacja mocy linkowej zamiast utrzymywania duplikatu.

### 4. `udraznianie-rur` vs `usuwanie-zatorow-kanalizacyjnych-wroclaw`
Współdzielone słowo kluczowe "zatkana kanalizacja wrocław" i niemal
identyczne "usuwanie zatorów kanalizacji/kanalizacyjnych wrocław".
`udraznianie-rur` przesunięty na kąt techniki/planowej usługi (spirala,
WUKO, cena) — usunięte z keywords frazy związane z "zator/zatkana".
`usuwanie-zatorow-kanalizacyjnych-wroclaw` zostaje właścicielem kąta
awaryjnego (cofka, zator). Dodatkowo: pole `related` strony
`udraznianie-rur` nie linkowało do `usuwanie-zatorow-kanalizacyjnych-
wroclaw` mimo oczywistego pokrewieństwa — dodane.

## Weryfikacja
- `npm run build` — czysty, exit 0
- Wszystkie 4 zmiany potwierdzone grepem po commicie (title/H1/keywords/
  related/liczba artykułów 9→8)
- Brak innych wewnętrznych linków do usuniętego artykułu (sprawdzone grep
  w całym repo poza samym redirectem)

## Nie zrobione w tym przebiegu (świadomie odłożone)
Dane z Ahrefs/GSC (które URL faktycznie rankuje w każdym konflikcie) —
brak w repo, do sprawdzenia przez Leszka przed ew. dalszą korektą.

*Gotowe do wdrożenia — commit lokalny zrobiony, push/deploy do
potwierdzenia przez Leszka.*
