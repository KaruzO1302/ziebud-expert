"use client";

import { useState, useMemo } from "react";
import { Phone, ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/site/container";

const DEPTHS = [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0] as const;

const SURFACES = [
  { id: "zielen", label: "Zieleń / teren nieutwardzony", cost: 0 },
  { id: "kostka-betonowa", label: "Kostka betonowa (puzzle)", cost: 65 },
  { id: "kostka-granitowa", label: "Kostka granitowa", cost: 95 },
  { id: "beton", label: "Nawierzchnia betonowa", cost: 110 },
  { id: "asfalt", label: "Nawierzchnia asfaltowa", cost: 130 },
] as const;

const DIAMETERS = [
  { id: "dn200", label: "DN200", cost: 45 },
  { id: "dn250", label: "DN250", cost: 58 },
  { id: "dn315", label: "DN315", cost: 75 },
  { id: "dn400", label: "DN400", cost: 105 },
  { id: "dn500", label: "DN500", cost: 155 },
  { id: "dn630", label: "DN630", cost: 220 },
  { id: "dn800", label: "DN800", cost: 340 },
] as const;

function calcExcavation(depth: number): number {
  if (depth <= 1.0) return 55;
  if (depth <= 1.5) return 85;
  if (depth <= 2.0) return 120;
  if (depth <= 2.5) return 170;
  if (depth <= 3.0) return 230;
  if (depth <= 3.5) return 300;
  return 380;
}

function calcShoring(depth: number): number {
  if (depth <= 1.0) return 0;
  if (depth <= 1.5) return 35;
  if (depth <= 2.0) return 55;
  if (depth <= 2.5) return 80;
  if (depth <= 3.0) return 110;
  if (depth <= 3.5) return 145;
  return 185;
}

function calcBedding(depth: number): number {
  if (depth <= 1.5) return 30;
  if (depth <= 2.5) return 42;
  return 58;
}

function calcBackfill(depth: number): number {
  if (depth <= 1.0) return 35;
  if (depth <= 1.5) return 50;
  if (depth <= 2.0) return 65;
  if (depth <= 2.5) return 85;
  if (depth <= 3.0) return 110;
  if (depth <= 3.5) return 140;
  return 175;
}

function calcManhole(depth: number): number {
  const costPerUnit = depth <= 2.0 ? 4200 : depth <= 3.0 ? 5800 : 7500;
  return Math.round(costPerUnit / 50);
}

function calcDewatering(depth: number): number {
  if (depth <= 1.5) return 0;
  if (depth <= 2.0) return 45;
  if (depth <= 2.5) return 75;
  if (depth <= 3.0) return 110;
  if (depth <= 3.5) return 150;
  return 195;
}

function calcSoilReplacement(depth: number): number {
  if (depth <= 2.0) return 0;
  if (depth <= 2.5) return 55;
  if (depth <= 3.0) return 85;
  if (depth <= 3.5) return 120;
  return 160;
}

type BreakdownItem = { label: string; cost: number; highlight?: boolean };

export function CostCalculator() {
  const [depthIdx, setDepthIdx] = useState(2);
  const [surfaceIdx, setSurfaceIdx] = useState(0);
  const [diameterIdx, setDiameterIdx] = useState(0);
  const [dewatering, setDewatering] = useState(false);
  const [soilReplace, setSoilReplace] = useState(false);

  const depth = DEPTHS[depthIdx];
  const surface = SURFACES[surfaceIdx];
  const diameter = DIAMETERS[diameterIdx];

  const breakdown = useMemo(() => {
    const items: BreakdownItem[] = [
      { label: "Wykop mechaniczny", cost: calcExcavation(depth) },
    ];
    const shoring = calcShoring(depth);
    if (shoring > 0) items.push({ label: "Szalunki ochronne", cost: shoring });
    items.push({ label: "Podsypka + obsypka", cost: calcBedding(depth) });
    items.push({ label: `Rura PVC SN8 ${diameter.label}`, cost: diameter.cost });
    items.push({ label: "Zasypka + zagęszczenie", cost: calcBackfill(depth) });
    items.push({ label: "Studnia rewizyjna DN1000 (co 50 m)", cost: calcManhole(depth) });
    if (dewatering) {
      const dw = calcDewatering(depth);
      if (dw > 0) items.push({ label: "Igłofiltry — odwodnienie", cost: dw, highlight: true });
    }
    if (soilReplace) {
      const sr = calcSoilReplacement(depth);
      if (sr > 0) items.push({ label: "Wymiana gruntu", cost: sr });
    }
    if (surface.cost > 0) {
      items.push({ label: `Odtworzenie: ${surface.label.toLowerCase()}`, cost: surface.cost });
    }
    return items;
  }, [depth, surface, diameter, dewatering, soilReplace]);

  const total = breakdown.reduce((sum, item) => sum + item.cost, 0);
  const totalMin = Math.round(total * 0.85);
  const totalMax = Math.round(total * 1.2);

  return (
    <section className="bg-navy-950 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
              Kalkulator kosztów
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[44px]">
              Ile kosztuje budowa kanalizacji?
            </h2>
            <p className="mt-4 text-lg text-navy-200">
              Przesuń suwak głębokości i zobacz cenę za metr bieżący w&nbsp;czasie rzeczywistym.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-navy-900/80 p-6 shadow-[0_0_80px_-20px_rgba(0,212,255,0.15)] backdrop-blur sm:p-8 lg:p-10">
            {/* Depth Slider */}
            <div>
              <div className="flex items-baseline justify-between">
                <label className="text-sm font-medium text-navy-100">
                  Głębokość posadowienia rury
                </label>
                <span className="font-display text-3xl font-semibold tabular-nums text-aqua-400">
                  {depth.toFixed(1)} m
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={DEPTHS.length - 1}
                step={1}
                value={depthIdx}
                onChange={(e) => setDepthIdx(Number(e.target.value))}
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-navy-700 accent-aqua-500 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-aqua-400 [&::-webkit-slider-thumb]:shadow-[0_0_20px_4px_rgba(0,212,255,0.4)]"
              />
              <div className="mt-2 flex justify-between text-[11px] tabular-nums text-navy-300">
                {DEPTHS.map((d) => (
                  <span key={d}>{d.toFixed(1)}</span>
                ))}
              </div>
            </div>

            {/* Options Grid */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {/* Diameter */}
              <div>
                <label className="text-sm font-medium text-navy-100">Średnica rury</label>
                <div className="relative mt-2">
                  <select
                    value={diameterIdx}
                    onChange={(e) => setDiameterIdx(Number(e.target.value))}
                    className="w-full appearance-none rounded-lg border border-white/10 bg-navy-800 px-4 py-3 pr-10 text-sm text-white focus:border-aqua-500 focus:outline-none focus:ring-1 focus:ring-aqua-500"
                  >
                    {DIAMETERS.map((d, i) => (
                      <option key={d.id} value={i}>
                        {d.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
                </div>
              </div>

              {/* Surface */}
              <div>
                <label className="text-sm font-medium text-navy-100">Nawierzchnia do odtworzenia</label>
                <div className="relative mt-2">
                  <select
                    value={surfaceIdx}
                    onChange={(e) => setSurfaceIdx(Number(e.target.value))}
                    className="w-full appearance-none rounded-lg border border-white/10 bg-navy-800 px-4 py-3 pr-10 text-sm text-white focus:border-aqua-500 focus:outline-none focus:ring-1 focus:ring-aqua-500"
                  >
                    {SURFACES.map((s, i) => (
                      <option key={s.id} value={i}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
                </div>
              </div>
            </div>

            {/* Toggles */}
            <div className="mt-6 flex flex-wrap gap-3">
              <ToggleChip
                label="Odwodnienie igłofiltrami"
                active={dewatering}
                onToggle={() => setDewatering(!dewatering)}
              />
              <ToggleChip
                label="Wymiana gruntu"
                active={soilReplace}
                onToggle={() => setSoilReplace(!soilReplace)}
              />
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-white/10" />

            {/* Breakdown */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-300">
                Rozbicie kosztów za 1 mb
              </h3>
              <ul className="mt-4 space-y-2.5">
                {breakdown.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className={item.highlight ? "font-medium text-aqua-300" : "text-navy-100"}>
                      {item.label}
                      {item.highlight && (
                        <span className="ml-2 rounded bg-aqua-500/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-aqua-300">
                          ZIĘBUD
                        </span>
                      )}
                    </span>
                    <span className="tabular-nums font-medium text-white">
                      {item.cost} zł
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Total */}
            <div className="mt-6 rounded-xl bg-gradient-to-br from-aqua-500/20 to-aqua-500/5 p-5 ring-1 ring-inset ring-aqua-400/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-200">
                    Szacunkowy koszt za 1 mb
                  </p>
                  <p className="mt-1 font-display text-4xl font-semibold tabular-nums text-white sm:text-5xl">
                    {totalMin}–{totalMax}{" "}
                    <span className="text-xl text-aqua-300">zł/mb</span>
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs text-navy-200">
                Cena orientacyjna netto. Dokładna wycena wymaga wizji lokalnej i znajomości warunków gruntowych.
                Ostateczna oferta uwzględni lokalizację, dostęp do placu i zakres dokumentacji.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <a
                href="tel:+48602481688"
                className="group inline-flex items-center gap-3 rounded-xl bg-aqua-500 px-6 py-4 font-display text-lg font-semibold text-navy-900 shadow-[0_10px_40px_-12px_rgba(0,212,255,0.55)] transition hover:bg-aqua-400"
              >
                <Phone className="h-5 w-5" />
                602 481 688
              </a>
              <a
                href="/zapytanie"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Wyślij zapytanie o wycenę
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Trust note */}
          <p className="mt-6 text-center text-xs text-navy-400">
            35 lat doświadczenia w inżynierii sanitarnej · Cała Polska
          </p>
        </div>
      </Container>
    </section>
  );
}

function ToggleChip({
  label,
  active,
  onToggle,
  badge,
}: {
  label: string;
  active: boolean;
  onToggle: () => void;
  badge?: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition ${
        active
          ? "border-aqua-500/50 bg-aqua-500/15 text-aqua-200"
          : "border-white/10 bg-navy-800 text-navy-200 hover:border-white/20"
      }`}
    >
      <span
        className={`flex h-4 w-4 items-center justify-center rounded border text-[10px] transition ${
          active
            ? "border-aqua-500 bg-aqua-500 text-navy-900"
            : "border-white/30 bg-transparent"
        }`}
      >
        {active && "✓"}
      </span>
      {label}
      {badge && (
        <span className="rounded bg-aqua-500/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-aqua-300">
          {badge}
        </span>
      )}
    </button>
  );
}
