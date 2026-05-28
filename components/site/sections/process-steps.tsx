import { ArrowRight, BadgeCheck, Camera, TriangleAlert, Truck } from "lucide-react";
import { Container } from "@/components/site/container";
import { LinkButton } from "@/components/site/link-button";

const steps = [
  {
    icon: TriangleAlert,
    step: "01",
    title: "Zgłoszenie objawów i adresu",
    desc: "Na start chcemy wiedzieć, co się dzieje, gdzie jest problem i czy temat dotyczy mieszkania, wspólnoty, lokalu, zakładu albo obiektu technicznego.",
    deliverables: ["objawy", "adres", "typ obiektu", "pilność"],
  },
  {
    icon: Truck,
    step: "02",
    title: "Dobór sprzętu i dojazd",
    desc: "Ustalamy, czy wystarczy szybkie udrażnianie, czy wchodzi WUKO, kamera, czyszczenie separatora, przepompownia albo szersza diagnostyka.",
    deliverables: ["WUKO", "spirala", "kamera", "zakres"],
  },
  {
    icon: Camera,
    step: "03",
    title: "Usługa i potwierdzenie przyczyny",
    desc: "Czyścimy, udrażniamy albo diagnozujemy przewód i od razu sprawdzamy, czy problem rzeczywiście został zamknięty, czy wymaga następnego ruchu.",
    deliverables: ["czyszczenie", "udrożnienie", "kamera", "potwierdzenie"],
  },
  {
    icon: BadgeCheck,
    step: "04",
    title: "Raport, wycena lub plan stałej obsługi",
    desc: "Po interwencji pokazujemy, co było przyczyną, ile kosztuje kolejny krok i czy warto ustawić stały serwis dla budynku albo obiektu.",
    deliverables: ["wnioski", "wycena", "zdjęcia", "plan serwisu"],
  },
];

const startChecklist = [
  "adres obiektu lub dokładna lokalizacja problemu",
  "objawy: zator, cofka, zalanie, alarm albo brak odbioru",
  "typ obiektu: mieszkanie, wspólnota, lokal, gastronomia, firma",
  "czy potrzebna jest szybka interwencja, czy rozpoznanie przyczyny",
];

const serviceModel = [
  "planowe czyszczenie kanalizacji i studni",
  "harmonogram dla separatorów i przepompowni",
  "krótka informacja po wykonanej pracy",
  "rekomendacja kolejnego kroku technicznego",
];

export function ProcessSteps() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-700">
              Jak pracujemy
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Proces współpracy przy zgłoszeniach awaryjnych i stałej obsłudze obiektów
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700">
              Zależy nam na czytelnym przebiegu współpracy od pierwszego
              kontaktu po wykonanie usługi. Dzięki temu klient od początku wie,
              jaki sprzęt będzie potrzebny, jaki będzie zakres prac i czy po
              interwencji warto zaplanować dalszy serwis albo diagnostykę.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-[28px] border border-border bg-white p-6 shadow-soft">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-700">
                  Co ustalamy od razu
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-navy-700">
                  {startChecklist.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="mt-1 text-aqua-700">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-border bg-white p-6 shadow-soft">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-700">
                  Przy stałej obsłudze obiektów
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-navy-700">
                  {serviceModel.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="mt-1 text-aqua-700">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton
                href="/zapytanie"
                className="bg-navy-900 text-white hover:bg-navy-800"
              >
                Zgłoś awarię lub serwis
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton
                href="/umowy-serwisowe"
                variant="outline"
                className="border-navy-200 bg-white text-navy-900 hover:bg-navy-50"
              >
                Zobacz umowy serwisowe
              </LinkButton>
            </div>
          </div>

          <div className="grid gap-5">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-[28px] border border-border bg-white p-6 shadow-soft"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-aqua-400">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-700">
                        Etap {step.step}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-semibold leading-tight text-navy-900">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-navy-700">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 lg:max-w-[260px] lg:justify-end">
                    {step.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="rounded-full border border-border bg-muted px-3 py-1 text-[11px] font-medium text-navy-700"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
