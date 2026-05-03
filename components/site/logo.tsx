import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function Logo({ className, variant = "dark" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="pogotowie-kanalizacyjne-wroclaw.com — strona główna"
      className={cn(
        "group inline-flex items-center gap-2.5",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
          "bg-navy-900 shadow-[0_0_0_1px_rgba(0,212,255,0.25)]",
          "transition group-hover:shadow-[0_0_0_1px_rgba(0,212,255,0.5)]",
          variant === "light" && "bg-white",
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3c4 5 6 8.5 6 12a6 6 0 1 1-12 0c0-3.5 2-7 6-12z"
            fill="var(--color-aqua-500)"
          />
          <path
            d="M9.5 14.5c0 1.5 1 2.5 2.5 2.5"
            stroke="var(--color-navy-900)"
            strokeWidth="1.4"
            strokeLinecap="round"
            className="opacity-60"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[15px] font-semibold tracking-tight",
            variant === "dark" ? "text-navy-900" : "text-white",
          )}
        >
          ZIĘBUD<span className="text-aqua-500">·</span>Expert
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-medium uppercase tracking-[0.18em]",
            variant === "dark"
              ? "text-navy-600/80"
              : "text-white/70",
          )}
        >
          Wrocław · WUKO · kanalizacja
        </span>
      </span>
    </Link>
  );
}
