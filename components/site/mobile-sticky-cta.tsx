"use client";

import Link from "next/link";
import { AlertTriangle, Phone } from "lucide-react";
import { COMPANY_PHONE_DISPLAY } from "@/lib/site";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800 bg-slate-950/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2 p-2">
        <Link
          href={`tel:+48${COMPANY_PHONE_DISPLAY.replace(/\s/g, "")}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 py-3 text-sm font-semibold text-slate-950 active:bg-amber-400"
          aria-label={`Zadzwoń: ${COMPANY_PHONE_DISPLAY}`}
        >
          <Phone className="h-4 w-4" />
          {COMPANY_PHONE_DISPLAY}
        </Link>
        <Link
          href="/zapytanie"
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 py-3 text-sm font-semibold text-slate-100"
        >
          <AlertTriangle className="h-4 w-4 text-red-400" />
          Zgłoś awarię
        </Link>
      </div>
    </div>
  );
}
