# SEO audit — ZIEBUD Expert

Data: 2026-05-16

## Status

Repo `ziebud-expert` jest stroną firmową pod usługi wod-kan / kanalizacyjne we Wrocławiu. Projekt ma już dobrą bazę pod SEO lokalne: osobne podstrony usług, blog, dane firmy w `lib/site.ts`, sitemapę generowaną z danych i treści powiązane z usługami.

## Zrobione teraz

- Dodano 3 artykuły blogowe pod frazy lokalne:
  - `ile-kosztuje-udraznianie-rur-we-wroclawiu`
  - `lokalizacja-wycieku-wody-kiedy-wezwac-fachowca`
  - `pogotowie-kanalizacyjne-dla-wspolnot-i-firm`
- Podpięto blog i wszystkie artykuły do `app/sitemap.ts`, żeby Google widział nowe adresy.
- Artykuły mają `metaTitle`, `metaDescription`, lead, sekcje, CTA oraz linkowanie do usług przez `serviceSlugs`.
- Zaktualizowano `next` i `eslint-config-next` z `16.2.4` do `16.2.6`.
- Uruchomiono `npm audit fix`, co zmniejszyło liczbę zgłoszeń z 6 do 2 umiarkowanych wpisów zależnych od `postcss` wewnątrz Next.

## Mocne strony

- Strona ma jasny profil lokalny: Wrocław, awarie, WUKO, udrażnianie, inspekcja TV, separatory.
- Dane firmy są scentralizowane w `lib/site.ts`, co zmniejsza ryzyko rozjazdu NAP.
- Blog jest oparty o strukturalne dane w `lib/articles-data.ts`, więc łatwo dokładać kolejne wpisy bez przebudowy widoków.
- W repo są dane usług lokalnych, case studies, zdjęcia oraz legacy content, czyli mamy materiał do dalszej rozbudowy.

## Ryzyka / do poprawy

- Potwierdzić docelową domenę w `SITE_URL`: obecnie `https://pogotowie-kanalizacyjne-wroclaw.com`.
- Uzupełnić `COMPANY_SAME_AS_URLS` o Google Business Profile, Facebook, YouTube lub inne prawdziwe profile firmy.
- `npm audit` pokazuje jeszcze 2 umiarkowane wpisy przez `postcss` w zależności Next. `npm audit fix --force` proponuje zejście do `next@9.3.3`, więc tego nie robimy, bo byłby to regres i ryzyko uszkodzenia aplikacji.
- Sprawdzić pliki z dopiskiem ` 2`, bo wyglądają jak duplikaty po imporcie:
  - `app/uslugi/[slug]/page 2.tsx`
  - `app/wycena/page 2.tsx`
  - `lib/lead-data 2.ts`
- Repo `wodociagi-kanalizacja` nie zostało sklonowane lokalnie, bo GitHub poprosił o autoryzację przy klonowaniu HTTPS. Audyt tej strony wymaga dostępu do repo albo klucza/tokena.

## Kolejna paczka contentu

Najbardziej opłacalne tematy pod SEO lokalne:

- `Pogotowie kanalizacyjne Wrocław 24h — kiedy dzwonić od razu?`
- `WUKO Wrocław — czyszczenie kanalizacji dla wspólnot`
- `Inspekcja TV kanalizacji przed zakupem domu`
- `Czyszczenie separatorów tłuszczu w gastronomii — obowiązki i praktyka`
- `Udrażnianie rur w mieszkaniu — objawy, których nie ignorować`
- `Przegląd kanalizacji we wspólnocie — harmonogram i koszty`

## KPI

- Minimum 2 nowe artykuły miesięcznie.
- Minimum 1 nowa strona usługowa lub lokalna miesięcznie.
- Po wdrożeniu: wysłać sitemapę w Google Search Console.
- Po 30 dniach: sprawdzić frazy w GSC i dopisać sekcje FAQ do stron, które mają wyświetlenia bez kliknięć.
