"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  Phone,
  X,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { getServicePhoto } from "@/lib/photos";
import { getLocalService } from "@/lib/local-services-data";
import { primaryNav } from "@/lib/nav";
import { Logo } from "./logo";
import { Container } from "./container";
import { LinkButton } from "./link-button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-[background,box-shadow,border-color]",
        scrolled
          ? "border-b border-border/80 bg-white/85 backdrop-blur-md shadow-[0_1px_0_rgba(10,22,40,0.04)]"
          : "border-b border-transparent bg-white",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 md:h-20">
        <Logo />

        <nav
          aria-label="Główna nawigacja"
          className="hidden items-center gap-1 xl:flex"
        >
          {primaryNav.map((item) => (
            <NavLink key={item.href + item.label} item={item} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Link
            href="tel:+48602481688"
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-navy-800 hover:text-aqua-600 transition"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="tabular-nums">602 481 688</span>
          </Link>
          <LinkButton
            href="/zapytanie"
            size="sm"
            className="bg-navy-900 text-white hover:bg-navy-800"
          >
            Zgłoś awarię / wyceń serwis
          </LinkButton>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            aria-label="Otwórz menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-navy-900 xl:hidden"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Nawigacja po pogotowie-kanalizacyjne-wroclaw.com
            </SheetDescription>
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <Logo />
                <button
                  type="button"
                  aria-label="Zamknij menu"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy-900"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-6 flex-1 overflow-y-auto">
                <ul className="flex flex-col gap-1">
                  {primaryNav.map((item) => (
                    <li key={item.href + item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between rounded-md px-3 py-3 text-base font-medium text-navy-900 hover:bg-muted"
                      >
                        {item.label}
                      </Link>
                      {item.children?.length ? (
                        <ul className="ml-3 border-l border-border pl-4">
                          {item.children.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="block rounded-xl px-3 py-3 hover:bg-muted"
                              >
                                <div className="text-sm font-semibold text-navy-900">
                                  {sub.label}
                                </div>
                                {sub.description ? (
                                  <div className="mt-1 text-xs leading-relaxed text-navy-600">
                                    {sub.description}
                                  </div>
                                ) : null}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex flex-col gap-3 border-t border-border pt-5">
                <Link
                  href="tel:+48602481688"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-medium text-navy-900"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  602 481 688
                </Link>
                <LinkButton
                  href="/zapytanie"
                  onClick={() => setMobileOpen(false)}
                  className="w-full bg-navy-900 text-white hover:bg-navy-800"
                >
                  Zgłoś awarię / wyceń serwis
                </LinkButton>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}

function NavLink({ item }: { item: (typeof primaryNav)[number] }) {
  const hasChildren = !!item.children?.length;
  const serviceItems =
    item.children?.map((sub) => {
      const slug = sub.href.split("/").filter(Boolean).pop() ?? "";
      const service = getLocalService(slug);

      return {
        ...sub,
        slug,
        photo: getServicePhoto(slug),
        icon: service?.icon,
        tagline: service?.tagline ?? sub.description ?? "",
        teaser: service?.overview[0] ?? sub.description ?? "",
        highlights:
          service?.variants.slice(0, 2).map((variant) => variant.name) ?? [],
      };
    }) ?? [];
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(serviceItems[0]?.href ?? "");
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className="rounded-md px-3 py-2 text-sm font-medium text-navy-800 hover:text-aqua-600 hover:bg-navy-50/60 transition"
      >
        {item.label}
      </Link>
    );
  }

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const closeMenu = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setOpen(false), 180);
  };

  const closeMenuNow = () => {
    clearCloseTimer();
    setOpen(false);
  };

  const activeItem =
    serviceItems.find((serviceItem) => serviceItem.href === activeHref) ??
    serviceItems[0];

  return (
    <div
      ref={containerRef}
      className="relative -mb-5 pb-5"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      onFocus={openMenu}
      onBlur={(event) => {
        const nextTarget = event.relatedTarget;
        if (
          nextTarget instanceof Node &&
          containerRef.current?.contains(nextTarget)
        ) {
          return;
        }
        closeMenu();
      }}
    >
      <Link
        href={item.href}
        aria-expanded={open}
        className={cn(
          "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition",
          open
            ? "bg-navy-50/80 text-aqua-700"
            : "text-navy-800 hover:bg-navy-50/60 hover:text-aqua-600",
        )}
      >
        {item.label}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition", open && "rotate-180")}
          aria-hidden
        />
      </Link>
      <div
        className={cn(
          "absolute left-1/2 top-full w-[min(92vw,960px)] -translate-x-1/2 pt-2 transition duration-200",
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-1 opacity-0",
        )}
      >
        <div className="relative overflow-hidden rounded-[30px] border border-border/80 bg-white/95 p-3 shadow-[0_28px_70px_-30px_rgba(10,22,40,0.38)] backdrop-blur">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_60%_80%_at_20%_0%,rgba(0,212,255,0.18),transparent_70%)]"
          />
          <div className="relative grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
            {activeItem && (
              <Link
                href={activeItem.href}
                onClick={closeMenuNow}
                className="group relative min-h-[360px] overflow-hidden rounded-[24px] bg-navy-950"
              >
                <Image
                  src={activeItem.photo.src}
                  alt={activeItem.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 30rem, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,18,34,0.2),rgba(6,18,34,0.82)_55%,rgba(6,18,34,0.96))]" />
                <div className="relative flex h-full flex-col justify-end p-7 text-white">
                  <span className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-200">
                    Zakres usługi
                  </span>
                  <h3 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight">
                    {activeItem.label}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-white/85">
                    {activeItem.tagline}
                  </p>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/68">
                    {activeItem.teaser}
                  </p>
                  {activeItem.highlights.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {activeItem.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/85"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-aqua-200">
                    Zobacz stronę usługi
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            )}

            <div className="flex flex-col gap-3">
              <div className="rounded-[24px] border border-border/70 bg-muted/50 p-3">
                <p className="px-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua-700">
                  Usługi główne
                </p>
                <ul className="mt-2 grid gap-2">
                  {serviceItems.map((sub) => {
                    const Icon = sub.icon;
                    const isActive = sub.href === activeHref;

                    return (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          onMouseEnter={() => setActiveHref(sub.href)}
                          onFocus={() => {
                            openMenu();
                            setActiveHref(sub.href);
                          }}
                          onClick={closeMenuNow}
                          className={cn(
                            "group/service flex items-center gap-4 rounded-[20px] border p-3 transition",
                            isActive
                              ? "border-navy-900 bg-navy-900 text-white shadow-[0_18px_30px_-22px_rgba(10,22,40,0.75)]"
                              : "border-white/80 bg-white hover:border-aqua-300 hover:bg-aqua-50/60",
                          )}
                        >
                          <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-inset ring-black/5">
                            <Image
                              src={sub.photo.src}
                              alt={sub.photo.alt}
                              fill
                              sizes="80px"
                              className="object-cover transition duration-500 group-hover/service:scale-105"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              {Icon ? (
                                <Icon
                                  className={cn(
                                    "h-4 w-4 shrink-0",
                                    isActive ? "text-aqua-300" : "text-aqua-600",
                                  )}
                                  aria-hidden
                                />
                              ) : null}
                              <p
                                className={cn(
                                  "truncate text-sm font-semibold",
                                  isActive ? "text-white" : "text-navy-900",
                                )}
                              >
                                {sub.label}
                              </p>
                            </div>
                            <p
                              className={cn(
                                "mt-1 line-clamp-2 text-xs leading-relaxed",
                                isActive ? "text-white/72" : "text-navy-600",
                              )}
                            >
                              {sub.description}
                            </p>
                          </div>
                          <ArrowRight
                            className={cn(
                              "h-4 w-4 shrink-0 transition",
                              isActive
                                ? "text-aqua-300"
                                : "text-navy-400 group-hover/service:text-aqua-600 group-hover/service:translate-x-0.5",
                            )}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="rounded-[24px] border border-aqua-200/70 bg-[linear-gradient(135deg,rgba(0,212,255,0.08),rgba(255,255,255,0.95))] p-5">
                <p className="text-sm font-semibold text-navy-900">
                  Awaria, zator albo obiekt do stałej obsługi?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy-700">
                  Zostaw adres, objawy i typ obiektu. Pokierujemy Cię od razu do
                  właściwej usługi, wyceny albo planu serwisowego.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <LinkButton
                    href="/uslugi"
                    variant="outline"
                    size="sm"
                    className="border-navy-200 bg-white/80 text-navy-900 hover:bg-white"
                  >
                    Wszystkie usługi
                  </LinkButton>
                  <LinkButton
                    href="/zapytanie"
                    size="sm"
                    className="bg-navy-900 text-white hover:bg-navy-800"
                  >
                    Zgłoś temat
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
