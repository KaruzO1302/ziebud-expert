"use client";

import Link from "next/link";
import { AlertTriangle, Phone } from "lucide-react";
import { COMPANY_PHONE_DISPLAY } from "@/lib/site";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-aqua-100 bg-white/94 shadow-[0_-14px_36px_-28px_rgba(10,22,40,0.45)] backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2 p-2">
        <Link
          href={`tel:+48${COMPANY_PHONE_DISPLAY.replace(/\s/g, "")}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-aqua-500 py-3 text-sm font-semibold text-navy-950 active:bg-aqua-400"
          aria-label={`Zadzwoń: ${COMPANY_PHONE_DISPLAY}`}
        >
          <Phone className="h-4 w-4" />
          {COMPANY_PHONE_DISPLAY}
        </Link>
        <Link
          href="/zapytanie"
          className="flex items-center justify-center gap-2 rounded-xl border border-navy-200 bg-white py-3 text-sm font-semibold text-navy-900"
        >
          <AlertTriangle className="h-4 w-4 text-sun-500" />
          Zgłoś awarię
        </Link>
      </div>
    </div>
  );
}
