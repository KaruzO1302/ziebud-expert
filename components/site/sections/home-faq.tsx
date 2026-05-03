import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/site/container";
import { LinkButton } from "@/components/site/link-button";
import { homeFaqs } from "@/lib/home-faqs";
import {
  ArrowRight,
  CircleHelp,
  Phone,
  ShieldCheck,
  Waves,
  Wrench,
} from "lucide-react";

const faqThemes = [
  "WUKO i udrażnianie rur",
  "kamera TV i diagnostyka",
  "separatory i przepompownie",
  "obsługa wspólnot i firm",
];

export function HomeFaq() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute left-0 top-10 h-64 w-64 rounded-full bg-aqua-100/50 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-navy-100/55 blur-3xl"
      />
      <Container className="relative">
        <div className="grid gap-10 xl:grid-cols-[360px_minmax(0,1fr)] xl:items-start">
          <div className="xl:sticky xl:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
              FAQ i szybki kontakt
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Najczęstsze pytania
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-700">
              Zebraliśmy najczęstsze pytania o WUKO, udrażnianie rur, kamerę TV,
              separatory i przepompownie. Jeśli wolisz od razu przejść do
              konkretu, zadzwoń albo wyślij zgłoszenie.
            </p>

            <div className="mt-8 rounded-[32px] border border-aqua-100 bg-[linear-gradient(145deg,rgba(4,194,255,0.08),rgba(255,255,255,0.98))] p-6 shadow-[0_24px_60px_-32px_rgba(10,22,40,0.18)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-700">
                    Pytania techniczne
                  </p>
                  <p className="mt-2 text-lg font-semibold text-navy-900">
                    Najpierw odpowiedzi, potem szybkie przejście do właściwej
                    usługi lub zgłoszenia.
                  </p>
                </div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-aqua-300 shadow-lg">
                  <CircleHelp className="h-5 w-5" />
                </span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                <InfoTile
                  icon={Waves}
                  title="20 najczęstszych pytań"
                  text="Koszty, metody czyszczenia, kamera TV, separatory i obsługa obiektów."
                />
                <InfoTile
                  icon={ShieldCheck}
                  title="Wrocław i okolice"
                  text="Wspólnoty, firmy, gastronomia, domy jednorodzinne i obiekty techniczne."
                />
              </div>

              <div className="mt-5 rounded-[24px] border border-white/70 bg-white/88 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-aqua-50 text-aqua-700 ring-1 ring-aqua-100">
                    <Wrench className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">
                      O czym najczęściej rozmawiamy z klientami
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-navy-700">
                      {faqThemes.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row xl:flex-col">
                <LinkButton
                  href="tel:+48602481688"
                  className="bg-navy-900 text-white hover:bg-navy-800"
                >
                  <Phone className="h-4 w-4" />
                  602 481 688
                </LinkButton>
                <LinkButton
                  href="/zapytanie"
                  variant="outline"
                  className="border-navy-200 bg-white text-navy-900 hover:bg-navy-50"
                >
                  Zgłoś awarię
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
              </div>
            </div>
          </div>

          <div>
            <Accordion className="grid gap-3 2xl:grid-cols-2">
              {homeFaqs.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${i}-${faq.q}`}
                  className="rounded-[24px] border border-border bg-white px-5 shadow-[0_10px_30px_-22px_rgba(10,22,40,0.18)] transition data-[state=open]:border-aqua-200 data-[state=open]:shadow-[0_18px_45px_-28px_rgba(4,194,255,0.22)]"
                >
                  <AccordionTrigger className="py-4 text-left font-display text-[15px] font-semibold text-navy-900 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-relaxed text-navy-700">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}

function InfoTile({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof ShieldCheck;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[22px] border border-white/70 bg-white/85 p-4 shadow-sm backdrop-blur">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-aqua-50 text-aqua-700 ring-1 ring-aqua-100">
          <Icon className="h-4.5 w-4.5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-navy-900">{title}</p>
          <p className="mt-1 text-sm leading-relaxed text-navy-700">{text}</p>
        </div>
      </div>
    </div>
  );
}
