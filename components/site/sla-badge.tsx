type SlaBadgeProps = {
  variant?: "hero" | "compact";
};

export function SlaBadge({ variant = "hero" }: SlaBadgeProps) {
  if (variant === "compact") {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-200">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
        </span>
        Awaria? Oddzwaniamy w 15 min
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-amber-500/40 bg-amber-500/10 px-5 py-2.5 text-sm font-medium text-amber-200">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
      </span>
      <span>
        Awaria?{" "}
        <strong className="text-amber-100">Oddzwaniamy w 15 min</strong> ·
        dojazd 60–120 min na terenie Wrocławia
      </span>
    </div>
  );
}
