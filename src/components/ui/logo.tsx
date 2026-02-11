import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn(
        "font-[family-name:var(--font-gugi)] text-xl leading-none tracking-wide text-white",
        className
      )}
    >
      Persevida
    </span>
  );
}
