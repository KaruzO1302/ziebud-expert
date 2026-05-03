import Link from "next/link";
import type { ComponentProps } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonSize = "default" | "xs" | "sm" | "lg";
type ButtonVariant =
  | "default"
  | "outline"
  | "secondary"
  | "ghost"
  | "destructive"
  | "link";

type LinkButtonProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const sizeOverride: Record<ButtonSize, string> = {
  default: "h-11 px-5 text-sm",
  xs: "h-8 px-3 text-xs",
  sm: "h-9 px-4 text-sm",
  lg: "h-12 px-6 text-[15px] font-semibold",
};

export function LinkButton({
  variant = "default",
  size = "default",
  className,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      {...props}
      className={cn(
        buttonVariants({ variant }),
        sizeOverride[size],
        "gap-2 rounded-lg",
        className,
      )}
    />
  );
}
