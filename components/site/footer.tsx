import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { footerNav } from "@/lib/nav";
import {
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_KRS,
  COMPANY_NIP,
  COMPANY_PHONE_DISPLAY,
  COMPANY_REGON,
  ORG_NAME,
} from "@/lib/site";
import { Logo } from "./logo";
import { Container } from "./container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-navy-800 bg-navy-900 text-navy-100">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-3 xl:grid-cols-[1.4fr_0.9fr_0.9fr_0.9fr_0.8fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-200">
              ZIĘBUD Expert obsługuje Wrocław i okolice w zakresie WUKO,
              udrażniania rur, inspekcji TV, separatorów i przepompowni.
              Pracujemy dla wspólnot, firm, gastronomii i klientów
              indywidualnych.
            </p>
            <div className="mt-6 rounded-3xl border border-navy-800 bg-navy-950/40 p-5 text-sm leading-relaxed text-navy-200">
              <p className="font-semibold text-white">{ORG_NAME}</p>
              <p>{COMPANY_ADDRESS}</p>
              <div className="mt-3 space-y-1 text-xs text-navy-300">
                <p>NIP: {COMPANY_NIP}</p>
                <p>REGON: {COMPANY_REGON}</p>
                <p>KRS: {COMPANY_KRS}</p>
              </div>
            </div>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 text-aqua-400" aria-hidden />
                <a
                  href="tel:+48602481688"
                  className="hover:text-aqua-300 transition"
                >
                  {COMPANY_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 text-aqua-400" aria-hidden />
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="hover:text-aqua-300 transition"
                >
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-aqua-400" aria-hidden />
                <span>{COMPANY_ADDRESS} · Wrocław i okolice</span>
              </li>
            </ul>
            <div className="mt-6 space-y-2 text-sm text-navy-200">
              <p>
                <span className="font-semibold text-white">Biuro:</span> Pon–Pt
                7:00–18:00
              </p>
              <p>
                <span className="font-semibold text-white">
                  Pogotowie awaryjne:
                </span>{" "}
                24 / 7 / 365
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-aqua-400/20 bg-aqua-400/5 p-5 text-sm leading-relaxed text-navy-200">
              <p className="font-semibold text-white">Powiązane serwisy ZIĘBUD</p>
              <p className="mt-2">
                Strona firmowa działa pod adresem{" "}
                <a
                  href="https://ziebud-expert.pl/" target="_blank" rel="noopener noreferrer"
                  className="font-semibold text-aqua-300 underline-offset-4 hover:underline"
                >
                  ziebud-expert.pl
                </a>
                , a dla pilnych awarii lokalnych sprawdź{" "}
                <a
                  href="https://pogotowie-kanalizacyjne-wroclaw.com/" target="_blank" rel="noopener noreferrer"
                  className="font-semibold text-aqua-300 underline-offset-4 hover:underline"
                >
                  pogotowie kanalizacyjne Wrocław
                </a>
                , a przy większych inwestycjach i sieciach zewnętrznych zobacz{" "}
                <a
                  href="https://wodociagi-kanalizacja.com/" target="_blank" rel="noopener noreferrer"
                  className="font-semibold text-aqua-300 underline-offset-4 hover:underline"
                >
                  wykonawstwo wodociągów i kanalizacji
                </a>
                .
              </p>
            </div>
          </div>

          <FooterColumn title="Usługi" items={footerNav.uslugi} />
          <FooterColumn title="Firma" items={footerNav.firma} />
          <FooterColumn title="Marki i sprzęt" items={footerNav.marki} />
          <FooterColumn title="Prawne" items={footerNav.prawne} />
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-navy-800 pt-8 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} ZIĘBUD Expert sp. z o.o. Wszystkie prawa zastrzeżone.
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>35 lat doświadczenia · Wrocław i Dolny Śląsk · od 1991</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  items: { label: string; href: string }[];
};

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="mt-5 space-y-2.5 text-sm">
        {items.map((item) => (
          <li key={item.href + item.label}>
            <Link
              href={item.href}
              className="text-navy-200 hover:text-aqua-300 transition"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
