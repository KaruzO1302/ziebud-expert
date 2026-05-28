import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Photo } from "@/lib/photos";

type HeroPhotoProps = {
  photo: Photo;
  priority?: boolean;
  className?: string;
  overlay?: "navy-deep" | "navy-soft" | "aqua-glow" | "bright-soft" | "none";
  sizes?: string;
};

const overlayClass: Record<NonNullable<HeroPhotoProps["overlay"]>, string> = {
  "navy-deep":
    "bg-[linear-gradient(to_bottom,rgba(10,22,40,0.35),rgba(10,22,40,0.85)_70%,rgba(10,22,40,0.95))]",
  "navy-soft":
    "bg-[linear-gradient(to_right,rgba(10,22,40,0.85),rgba(10,22,40,0.55)_50%,rgba(10,22,40,0.25))]",
  "aqua-glow":
    "bg-[radial-gradient(ellipse_70%_55%_at_10%_-10%,rgba(0,212,255,0.25),transparent_60%),linear-gradient(to_bottom,rgba(10,22,40,0.55),rgba(10,22,40,0.9))]",
  "bright-soft":
    "bg-[linear-gradient(to_right,rgba(255,255,255,0.94),rgba(255,255,255,0.82)_34%,rgba(255,255,255,0.36)_58%,rgba(255,255,255,0.05)_78%),linear-gradient(to_bottom,rgba(255,255,255,0.12),rgba(255,255,255,0.2))]",
  none: "",
};

export function HeroPhoto({
  photo,
  priority = false,
  className,
  overlay = "navy-deep",
  sizes = "100vw",
}: HeroPhotoProps) {
  return (
    <div
      aria-hidden
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        loading={priority ? "eager" : undefined}
        sizes={sizes}
        className="object-cover"
      />
      {overlay !== "none" && (
        <div className={cn("absolute inset-0", overlayClass[overlay])} />
      )}
    </div>
  );
}

export function PhotoFrame({
  photo,
  className,
  aspectRatio = "16/10",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  photo: Photo;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure
      className={cn(
        "relative w-full overflow-hidden rounded-2xl ring-1 ring-inset ring-white/10",
        className,
      )}
      style={{ aspectRatio }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
      {photo.credit && (
        <figcaption className="absolute bottom-2 right-2 rounded-full bg-black/40 px-2 py-1 text-[10px] font-medium text-white/85 backdrop-blur-sm">
          {photo.credit}
        </figcaption>
      )}
    </figure>
  );
}
