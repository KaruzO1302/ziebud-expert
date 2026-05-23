export type Photo = {
  src: string;
  alt: string;
  credit?: string;
  source: "unsplash" | "adobe-stock" | "istock" | "shutterstock" | "owned";
  width?: number;
  height?: number;
};

const u = (id: string, w = 2400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=85&auto=format&fit=crop`;

const up = (id: string, w = 2400) =>
  `https://plus.unsplash.com/premium_photo-${id}?w=${w}&q=85&auto=format&fit=crop`;

export const photos = {
  // ── Hero & Homepage ───────────────────────────────────────
  heroHomepage: {
    src: u("1751054824448-749f467ffc4f"),
    alt: "Pracownik budowy wychodzący z głębokiego wykopu — realizacja sieci wod-kan",
    credit: "John Kakuk / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  heroTrenchless: {
    src: u("1767387380270-9b80ea81c275"),
    alt: "Wiertnica HDD podczas przewiertu sterowanego — bezwykopowe układanie rur",
    credit: "Valomukitse Arva-Zika / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  heroAerial: {
    src: u("1752584157693-ca0e952cba00"),
    alt: "Widok z lotu ptaka rurociągu prowadzonego przez tereny zielone",
    credit: "GWANGJIN GO / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  heroHomepageZiebud: {
    src: "/photos/ziebud-wuko-hero.jpg",
    alt: "Samochód WUKO ZIĘBUD Expert podczas serwisu kanalizacji we Wrocławiu",
    source: "owned",
  } satisfies Photo,

  // ── Zespół & ludzie ───────────────────────────────────────
  workersTeam: {
    src: u("1694521787162-5373b598945c"),
    alt: "Zespół wykonawczy z certyfikowanymi uprawnieniami na placu budowy sieci",
    credit: "Glenov Brankovic / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  workersReview: {
    src: u("1652303518379-c0ef1c9fb2b1"),
    alt: "Dwóch pracowników w kamizelkach odblaskowych omawia postęp wykopów na placu budowy",
    credit: "John Kakuk / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  teamMeeting: {
    src: u("1760963301666-582b92218a19"),
    alt: "Trzech inżynierów w kaskach ochronnych omawia projekt na budowie",
    credit: "SMKN 1 Gantar / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  teamAerial: {
    src: u("1541888946425-d81bb19240f5"),
    alt: "Siedmiu pracowników budowy widzianych z lotu ptaka na placu budowy",
    credit: "Scott Blake / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  workshopTeam: {
    src: u("1759763823587-c8bd07fca246"),
    alt: "Ekipa w kaskach i kamizelkach odblaskowych przy pracy w warsztacie",
    credit: "Jawadul Islam / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  // ── Maszyny & wykopy ──────────────────────────────────────
  excavatorPipes: {
    src: u("1565364507085-325347bae748"),
    alt: "Koparka układająca rury kanalizacyjne dużej średnicy w wykopie",
    credit: "roman pentin / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  excavatorTrench: {
    src: u("1751054579530-1481ddd4b753"),
    alt: "Koparka pracująca w głębokim wykopie pod sieć podziemną",
    credit: "John Kakuk / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  excavatorRoad: {
    src: u("1759579478942-a6992a87fb8f"),
    alt: "Koparka kopie wykop w drodze pod rurociąg — roboty kanalizacyjne",
    credit: "Anna Kharkivska / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  excavatorDeepPit: {
    src: u("1744447236078-d597ac019107"),
    alt: "Koparka w głębokim wykopie — odwodnienie i roboty ziemne",
    credit: "Dinesh Kumar / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  aerialMachines: {
    src: u("1517089258673-4b72e709a9c5"),
    alt: "Trzy maszyny budowlane widziane z lotu ptaka na placu budowy",
    credit: "Shane McLendon / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  workersDiggingStreet: {
    src: u("1772600110243-f4e1349259b6"),
    alt: "Ekipa budowlana kopie wykop pod infrastrukturę w ulicy miejskiej",
    credit: "David Klein / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  workersFoundation: {
    src: u("1776202128321-2576846d556c"),
    alt: "Pracownicy budują fundamenty z ciężkim sprzętem — realizacja infrastruktury",
    credit: "Oliver Streit / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  // ── Rury & materiały ──────────────────────────────────────
  pipesField: {
    src: u("1635145613344-3e59b1e8afd0"),
    alt: "Magazyn rur PE100 i PVC przygotowanych do montażu sieci wodociągowej",
    credit: "Christian Bass / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  largePipe: {
    src: u("1730888868977-154ac07a96f9"),
    alt: "Rura wielkośrednicowa przy drodze przygotowana do montażu w wykopie",
    credit: "Wolfgang Weiser / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  pipesIndustrial: {
    src: u("1764524331704-c7a0d17067dd"),
    alt: "Rury infrastrukturalne dużej średnicy na placu budowy — materiały do sieci wod-kan",
    credit: "noe fornells / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  pipesRed: {
    src: u("1761695939621-846420b4d901"),
    alt: "Czerwone rury karbowane z zaślepkami na budowie — materiały kanalizacyjne",
    credit: "Roman / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  pipeGround: {
    src: u("1563174759-bdaaa5256c81"),
    alt: "Rura ułożona na gruncie w strefie budowy — przygotowanie do montażu",
    credit: "SLNC / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  // ── Tunele & infrastruktura podziemna ─────────────────────
  tunnelWorker: {
    src: u("1521216706186-4d37debe7cb9"),
    alt: "Inspekcja kanału — operator z lampą wewnątrz rurociągu",
    credit: "david carballar / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  tunnelConcrete: {
    src: u("1761069234641-3a68266c4740"),
    alt: "Tunel betonowy z rurami i instalacjami w trakcie budowy",
    credit: "Bradley Andrews / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  deepShaft: {
    src: u("1760776106804-dbf2050b7404"),
    alt: "Głęboki szyb betonowy — konstrukcja infrastruktury podziemnej",
    credit: "C Cai / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  // ── Zbiorniki & obiekty ───────────────────────────────────
  circularConstruction: {
    src: u("1761025198913-a75dc7699a63"),
    alt: "Budowa okrągłego zbiornika betonowego z dźwigami — widok z lotu ptaka",
    credit: "Michael Chacon / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  // ── Rurociągi & sieci ─────────────────────────────────────
  pipelineMountain: {
    src: u("1746988043334-b8677f2ec74c"),
    alt: "Rurociąg prowadzony przez teren zalesiony — magistrala dalekosiężna",
    credit: "Sam Di Risio / Unsplash",
    source: "unsplash",
  } satisfies Photo,

  gasPipelineConstruction: {
    src: up("1661951710685-a676c4190c19"),
    alt: "Realizacja rurociągu — układanie rur przez wyspecjalizowany zespół",
    credit: "Getty Images / Unsplash+",
    source: "unsplash",
  } satisfies Photo,

  // ── Adobe Stock ───────────────────────────────────────────
  adobeWykopMiejski: {
    src: "/photos/adobe-wykop-miejski.jpeg",
    alt: "Roboty ziemne i montaż infrastruktury podziemnej w zabudowie miejskiej",
    source: "adobe-stock",
  } satisfies Photo,

  adobeMontazRurBetonowych: {
    src: "/photos/adobe-montaz-rur-betonowych.jpeg",
    alt: "Montaż wielkośrednicowych rur betonowych przy użyciu ciężkiego sprzętu",
    source: "adobe-stock",
  } satisfies Photo,

  adobePeZgrzewTrojnik: {
    src: "/photos/adobe-pe-zgrzew-trojnik.jpeg",
    alt: "Zgrzewana armatura i rury PE na budowie sieci wodociągowej",
    source: "adobe-stock",
  } satisfies Photo,

  adobeCieplownictwoPreizolowane: {
    src: "/photos/adobe-cieplownictwo-preizolowane.jpeg",
    alt: "Rury preizolowane ułożone w wykopie na budowie sieci ciepłowniczej",
    source: "adobe-stock",
  } satisfies Photo,

  adobePanoramaBudowy: {
    src: "/photos/adobe-panorama-budowy.jpeg",
    alt: "Panoramiczny plac budowy z koparkami i samochodem samowyładowczym",
    source: "adobe-stock",
  } satisfies Photo,

  adobeWukoUlica: {
    src: "/photos/adobe-wuko-ulica.jpeg",
    alt: "Samochód WUKO i ekipa serwisowa przy pracy w zabudowie miejskiej",
    source: "adobe-stock",
  } satisfies Photo,

  adobeUdraznianieManhole: {
    src: "/photos/adobe-udraznianie-manhole.jpeg",
    alt: "Serwis kanalizacji przy studzience i włazie ulicznym",
    source: "adobe-stock",
  } satisfies Photo,

  adobeKameraBus: {
    src: "/photos/adobe-kamera-bus.jpeg",
    alt: "Mobilne zaplecze do inspekcji TV kanalizacji w samochodzie serwisowym",
    source: "adobe-stock",
  } satisfies Photo,

  ziebudLokalizacjaWyciekow: {
    src: "/photos/ziebud-lokalizacja-wyciekow.jpeg",
    alt: "Lokalizacja wycieków i pomiary przy studni kanalizacyjnej w terenie utwardzonym",
    source: "owned",
  } satisfies Photo,

  ziebudNaprawaSieciWodociagowych: {
    src: "/photos/ziebud-naprawa-sieci-wodociagowych.jpg",
    alt: "Awaria przewodu wodociągowego z widocznym wyciekiem podczas naprawy sieci wodnej",
    source: "owned",
  } satisfies Photo,

  ziebudUslugiKanalizacyjne: {
    src: "/photos/ziebud-uslugi-kanalizacyjne.jpg",
    alt: "Montaż elementu kanalizacyjnego i prace ziemne przy usłudze kanalizacyjnej",
    source: "owned",
  } satisfies Photo,

  adobeKameraRig: {
    src: "/photos/adobe-kamera-rig.jpeg",
    alt: "Sprzęt do kamerowania kanalizacji i inspekcji przewodów",
    source: "adobe-stock",
  } satisfies Photo,

  adobeSeparatorSerwis: {
    src: "/photos/adobe-separator-serwis.jpeg",
    alt: "Serwis komory i separatora z użyciem węża ssącego",
    source: "adobe-stock",
  } satisfies Photo,

  adobePiwnicaSerwis: {
    src: "/photos/adobe-piwnica-serwis.jpeg",
    alt: "Ekipa techniczna przy diagnostyce instalacji kanalizacyjnej w piwnicy budynku",
    source: "adobe-stock",
  } satisfies Photo,

  ziebudAwarieKanalizacji: {
    src: "/photos/ziebud-awarie-kanalizacji.jpg",
    alt: "Awaria kanalizacji i roboty w głębokim wykopie przy zabezpieczonym odcinku sieci",
    source: "owned",
  } satisfies Photo,

  ziebudUdraznianieKuchnia: {
    src: "/photos/ziebud-udraznianie-spirala.jpeg",
    alt: "Mechaniczne udrażnianie rur spiralą w instalacji wewnętrznej pod zlewem",
    source: "owned",
  } satisfies Photo,

  ziebudAwarieWodKan: {
    src: "/photos/ziebud-awarie-wod-kan.jpg",
    alt: "Ekipa ZIĘBUD podczas awaryjnych robót wod-kan w terenie miejskim",
    source: "owned",
  } satisfies Photo,

  ziebudCzyszczenieSeparatorow: {
    src: "/photos/ziebud-czyszczenie-separatorow.jpg",
    alt: "Czyszczenie separatora i serwis instalacji z użyciem samochodu specjalistycznego",
    source: "owned",
  } satisfies Photo,

  ziebudSeparatorRopopochodny: {
    src: "/photos/ziebud-separator-ropopochodny.jpg",
    alt: "Schemat czyszczenia separatora substancji ropopochodnych krok po kroku",
    source: "owned",
  } satisfies Photo,

  ziebudKraking: {
    src: "/photos/ziebud-kraking.jpg",
    alt: "Kraking i wymiana odcinka rurociągu w wykopie terenowym",
    source: "owned",
  } satisfies Photo,

  ziebudPrzepompownie: {
    src: "/photos/ziebud-przepompownie.jpg",
    alt: "Pompy i armatura w przepompowni ścieków podczas obsługi technicznej",
    source: "owned",
  } satisfies Photo,

  ziebudVideoInspekcje: {
    src: "/photos/ziebud-video-inspekcje.jpg",
    alt: "Podgląd z inspekcji kanału pokazujący wnętrze przewodu i problem techniczny",
    source: "owned",
  } satisfies Photo,

  // ── Zdjęcia własne ────────────────────────────────────────
  robotyZiemne: {
    src: "/photos/roboty-ziemne.jpg",
    alt: "Koparki na budowie sieci zewnętrznej — roboty ziemne ZIĘBUD Expert",
    source: "owned",
  } satisfies Photo,

  kregiBetonowe: {
    src: "/photos/kregi-betonowe.jpg",
    alt: "Kręgi betonowe przygotowane do montażu kanalizacji sanitarnej na budowie",
    source: "owned",
  } satisfies Photo,

  rurociagBudowa: {
    src: "/photos/rurociag-budowa.jpg",
    alt: "Układanie rurociągu wielkośrednicowego przy użyciu dźwigów na budowie",
    source: "owned",
  } satisfies Photo,

  hddWiertnica: {
    src: "/photos/hdd-wiertnica.jpg",
    alt: "Wiertnica HDD na gąsienicach podczas przewiertu sterowanego przy budynku",
    source: "owned",
  } satisfies Photo,

  wodociagiRura: {
    src: "/photos/wodociagi-rura.jpg",
    alt: "Niebieska rura wodociągowa z zaworami kołnierzowymi zamontowana w wykopie",
    source: "owned",
  } satisfies Photo,

  przepompowniaWnetrze: {
    src: "/photos/przepompownia.jpg",
    alt: "Wnętrze przepompowni ścieków — pompy pionowe i rurociągi tłoczne",
    source: "owned",
  } satisfies Photo,

  ekipaPlany: {
    src: "/photos/ekipa-plany.webp",
    alt: "Zespół ZIĘBUD analizuje dokumentację projektową przy stole roboczym",
    source: "owned",
  } satisfies Photo,

  leszekPortret: {
    src: "/photos/leszek.webp",
    alt: "Leszek Zięba przy biurku — portret właściciela ZIĘBUD Expert",
    source: "owned",
  } satisfies Photo,

  siedzibaBiuro: {
    src: "/photos/siedziba.webp",
    alt: "Siedziba ZIĘBUD Expert — budynek firmy",
    source: "owned",
  } satisfies Photo,

  biuroWycena: {
    src: "/photos/biuro-wycena.jpg",
    alt: "Biuro ZIĘBUD Expert podczas przygotowania wyceny inwestycji",
    source: "owned",
  } satisfies Photo,

  montazZbiornikowBetonowych: {
    src: "/photos/montaz-zbiornikow-betonowych.jpg",
    alt: "Montaż prefabrykowanych elementów betonowych przy użyciu koparek na budowie dużego układu retencyjnego",
    source: "owned",
  } satisfies Photo,

  komoraKanalizacyjnaMontaz: {
    src: "/photos/komora-kanalizacyjna-montaz.jpg",
    alt: "Montaż prefabrykowanej komory kanalizacyjnej z rurą karbowaną podczas robót ziemnych",
    source: "owned",
  } satisfies Photo,

  poleRurBetonowych: {
    src: "/photos/pole-rur-betonowych.jpg",
    alt: "Rury betonowe ułożone na placu budowy dużego układu kanalizacji i retencji",
    source: "owned",
  } satisfies Photo,

  ziebudWukoSerwis: {
    src: "/photos/ziebud-wuko-serwis.webp",
    alt: "Samochody serwisowe ZIĘBUD Expert przygotowane do obsługi kanalizacji i awarii",
    source: "owned",
  } satisfies Photo,

  ziebudWukoBlok: {
    src: "/photos/ziebud-wuko-blok.webp",
    alt: "Serwis WUKO ZIĘBUD Expert przy budynku wielorodzinnym",
    source: "owned",
  } satisfies Photo,

  ziebudInspekcjaKanalu: {
    src: "/photos/ziebud-inspekcja-kanalu.jpg",
    alt: "Inspekcja wnętrza przewodu kanalizacyjnego kamerą i oświetleniem technicznym",
    source: "owned",
  } satisfies Photo,

  nagroda25Lat: {
    src: "/photos/nagroda-25lat.jpg",
    alt: "Tablica i wyróżnienie za 25 lat działalności firmy ZIĘBUD",
    source: "owned",
  } satisfies Photo,

  logoZiebud: {
    src: "/photos/logo-ziebud.jpg",
    alt: "Logo ZIĘBUD Expert",
    source: "owned",
  } satisfies Photo,

  realizacjaTeren01: {
    src: "/photos/realizacja-teren-01.jpg",
    alt: "Zdjęcie terenowe z realizacji ZIĘBUD po konwersji z HEIC",
    source: "owned",
  } satisfies Photo,

  realizacjaTeren02: {
    src: "/photos/realizacja-teren-02.jpg",
    alt: "Drugie zdjęcie terenowe z realizacji ZIĘBUD po konwersji z HEIC",
    source: "owned",
  } satisfies Photo,
} as const;

export type PhotoKey = keyof typeof photos;

export const servicePhotos: Record<string, PhotoKey> = {
  "uslugi-kanalizacyjne": "ziebudUslugiKanalizacyjne",
  "wuko-wroclaw": "adobeWukoUlica",
  "udraznianie-rur": "ziebudUdraznianieKuchnia",
  "naprawa-sieci-wodociagowych": "ziebudNaprawaSieciWodociagowych",
  "inspekcja-tv-kanalizacji": "ziebudVideoInspekcje",
  "separatory-tluszczu": "ziebudCzyszczenieSeparatorow",
  "separatory-ropopochodne": "ziebudSeparatorRopopochodny",
  "serwis-przepompowni": "ziebudPrzepompownie",
  "lokalizacja-nieszczelnosci": "ziebudLokalizacjaWyciekow",
};

export const pagePhotos: Record<string, PhotoKey> = {
  kontakt: "siedzibaBiuro",
  "o-nas": "leszekPortret",
  kalkulator: "adobePanoramaBudowy",
  wycena: "adobeWukoUlica",
  realizacje: "heroHomepageZiebud",
  blog: "ziebudInspekcjaKanalu",
  kariera: "workshopTeam",
  zapytanie: "ziebudAwarieKanalizacji",
  "dla-wspolnot-i-firm": "ziebudAwarieWodKan",
  sprzet: "adobeKameraRig",
  "umowy-serwisowe": "ziebudCzyszczenieSeparatorow",
};

export function getPhoto(key: PhotoKey): Photo {
  return photos[key];
}

export function getServicePhoto(slug: string): Photo {
  const key = servicePhotos[slug] ?? "heroHomepageZiebud";
  return photos[key];
}

export function getPagePhoto(page: string): Photo {
  const key = pagePhotos[page] ?? "heroHomepageZiebud";
  return photos[key];
}
