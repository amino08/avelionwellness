import type { ReactNode } from "react";

interface FeatureRowProps {
  icon: ReactNode;
  title: string;
  muted?: boolean;
}

export function FeatureRow({ icon, title, muted = false }: FeatureRowProps) {
  return (
    <div
      className={`flex w-full items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border-soft)] px-4 py-3.5 ${
        muted ? "bg-white/90" : "bg-white"
      }`}
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-surface-1 text-clinical"
        aria-hidden
      >
        {icon}
      </span>
      <span className="text-sm font-medium leading-snug tracking-tight text-navy">
        {title}
      </span>
    </div>
  );
}
