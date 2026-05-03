import { ArrowRight, Camera, Phone, Upload } from "lucide-react";
import { Container } from "@/components/site/container";
import { LinkButton } from "@/components/site/link-button";
import Link from "next/link";

const checklist = [
  "adres obiektu lub lokalizacja problemu",
  "co się dzieje: zator, cofka, zalanie, alarm",
  "typ obiektu: mieszkanie, wspólnota, firma, gastronomia",
  "zdjęcia lub krótki film, jeśli możesz je dołączyć",
];

export function CtaPanel() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[36px] bg-navy-900 px-8 py-14 sm:px-14 sm:py-20">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_75%_-10%,rgba(0,212,255,0.24),transparent_70%)]"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-300">
                Zgłoszenie i wycena
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Zgłoś temat od razu we właściwym kierunku
              </h2>
              <p className="mt-5 text-navy-100">
                Jeśli masz awarię, powtarzający się zator albo potrzebujesz
                planowej obsługi obiektu, wyślij zgłoszenie. Ustalimy usługę,
                pilność i najkrótszą drogę do usunięcia problemu.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton
                  href="/zapytanie"
                  size="lg"
                  className="group bg-aqua-500 text-navy-900 hover:bg-aqua-400 shadow-[0_10px_40px_-12px_rgba(0,212,255,0.5)]"
                >
                  Zgłoś awarię / serwis
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </LinkButton>
                <LinkButton
                  href="tel:+48602481688"
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  Zadzwoń teraz
                </LinkButton>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/12 bg-white/7 p-6 backdrop-blur-md">
              <div className="rounded-[24px] border border-white/10 bg-navy-950/55 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-aqua-300">
                    <Upload className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-300">
                      Co przygotować na start
                    </p>
                    <p className="mt-1 text-sm text-white/78">
                      Im konkretniejszy opis, tym szybsza diagnoza i wycena.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {checklist.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-sm leading-relaxed text-white/84"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-aqua-400/20 bg-aqua-500/10 px-4 py-4 text-sm leading-relaxed text-aqua-100">
                  <div className="flex items-center gap-2 font-semibold text-aqua-200">
                    <Camera className="h-4 w-4" />
                    Obsługujemy też stałą opiekę nad obiektami
                  </div>
                  <p className="mt-2 text-aqua-100/88">
                    Wspólnoty, gastronomia, parkingi, warsztaty i obiekty z
                    separatorami lub przepompowniami mogą z nami ustawić stały
                    harmonogram serwisowy.{" "}
                    <Link
                      href="/umowy-serwisowe"
                      className="font-semibold text-aqua-200 underline decoration-aqua-300/50 underline-offset-4 transition hover:text-white"
                    >
                      Zobacz model umów serwisowych
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
