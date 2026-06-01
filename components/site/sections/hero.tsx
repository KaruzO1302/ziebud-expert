import Image from "next/image";
import { ArrowRight, Camera, Phone } from "lucide-react";
import { Container } from "@/components/site/container";
import { LinkButton } from "@/components/site/link-button";
import { HeroPhoto } from "@/components/site/hero-photo";
import { SlaBadge } from "@/components/site/sla-badge";
import { photos } from "@/lib/photos";

const proofPhotos = [
  {
    photo: photos.realAwariaKanalizacji,
    label: "Zalana piwnica",
  },
  {
    photo: photos.realInspekcjaTvVan,
    label: "Kamera TV",
  },
  {
    photo: photos.realPrzepompownieSerwis,
    label: "Serwis studni",
  },
];

const proofPoints = ["WUKO", "kamera TV", "studnie i separatory"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-50 text-navy-900">
      <HeroPhoto
        photo={photos.heroHomepageZiebud}
        priority
        overlay="bright-soft"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_42%_36%_at_74%_18%,rgba(0,212,255,0.1),transparent_72%),linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.2))]"
      />
      <Container className="relative py-16 sm:py-20 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-aqua-200 bg-white/85 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-800 shadow-soft">
              ZIĘBUD Expert · Wrocław i okolice
            </span>
            <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.03] tracking-tight text-navy-950 sm:text-5xl lg:text-[60px]">
              WUKO Wrocław 24/7.
              <span className="block text-aqua-700">
                Kanalizacja, cofki i awarie bez czekania
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-700">
              Zalana piwnica, cofka z WC, zapchany pion, pełny separator albo
              awaria przepompowni? Przyjeżdża ekipa ZIĘBUD Expert z WUKO,
              kamerą TV i sprzętem do pracy na budynkach, firmach i obiektach
              technicznych.
            </p>

            <div className="mt-6">
              <SlaBadge variant="hero" />
            </div>

            <div className="mt-9 hidden flex-col gap-3 sm:flex-row md:flex">
              <LinkButton
                href="tel:+48602481688"
                size="lg"
                className="group bg-aqua-500 text-navy-950 hover:bg-aqua-400 shadow-[0_16px_40px_-18px_rgba(0,126,153,0.65)]"
              >
                <Phone className="h-4 w-4" />
                Zadzwoń: 602 481 688
              </LinkButton>
              <LinkButton
                href="/zapytanie"
                size="lg"
                variant="outline"
                className="border-navy-200 bg-white/85 text-navy-900 hover:bg-white"
              >
                Zgłoś awarię
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </LinkButton>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-[34px] border border-white bg-white/88 p-6 shadow-[0_28px_80px_-42px_rgba(10,22,40,0.42)] backdrop-blur-md">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_65%_90%_at_50%_0%,rgba(0,212,255,0.18),transparent_75%)]"
              />
              <div className="relative rounded-[28px] border border-navy-100 bg-white p-4 sm:p-5">
                <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="relative min-h-[270px] overflow-hidden rounded-[24px] bg-navy-100 sm:min-h-[320px]">
                    <Image
                      src={proofPhotos[0].photo.src}
                      alt={proofPhotos[0].photo.alt}
                      fill
                      sizes="(min-width: 1024px) 24rem, 100vw"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/78 to-transparent p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-aqua-200">
                        {proofPhotos[0].label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        Realne zgłoszenia, realny sprzęt, realna praca w terenie
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {proofPhotos.slice(1).map((item) => (
                      <div
                        key={item.label}
                        className="relative min-h-[120px] overflow-hidden rounded-[24px] bg-navy-100"
                      >
                        <Image
                          src={item.photo.src}
                          alt={item.photo.alt}
                          fill
                          sizes="(min-width: 1024px) 16rem, 100vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/75 to-transparent p-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
                            {item.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {proofPoints.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-aqua-100 bg-aqua-50/70 px-4 py-3 text-sm font-semibold text-navy-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-4">
                  <Camera className="mt-0.5 h-5 w-5 shrink-0 text-aqua-700" />
                  <p className="text-sm leading-relaxed text-navy-700">
                    Najpierw rozpoznajemy objaw, potem dobieramy sprzęt i zakres
                    prac. Klient dostaje prostą informację: co robimy teraz, co
                    warto sprawdzić później i jaki jest koszt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 hidden flex-wrap items-center gap-x-6 gap-y-2 border-t border-navy-100 pt-6 text-xs font-medium uppercase tracking-wider text-navy-500 lg:flex">
          <span>Krzyki</span>
          <span className="text-aqua-500">·</span>
          <span>Fabryczna</span>
          <span className="text-aqua-500">·</span>
          <span>Śródmieście</span>
          <span className="text-aqua-500">·</span>
          <span>Psie Pole</span>
          <span className="text-aqua-500">·</span>
          <span>Stare Miasto</span>
          <span className="text-aqua-500">·</span>
          <span>Nadodrze</span>
        </div>
      </Container>
    </section>
  );
}
