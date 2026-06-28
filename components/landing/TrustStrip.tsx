"use client";

import { Reveal } from "@/components/motion/Reveal";

function TrustIconShield() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrustIconLab() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10 3h4l3 10a4 4 0 01-3.9 5H11a4 4 0 01-3.9-5L10 3Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrustIconFlask() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 3h6v5l4 9H5l4-9V3Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrustIconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12.5L9.5 17L19 7"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const trustItems = [
  { label: "Physician Guided", icon: <TrustIconShield /> },
  { label: "Premium Manufacturing", icon: <TrustIconLab /> },
  { label: "Laboratory Research", icon: <TrustIconFlask /> },
  { label: "Clinical Standards", icon: <TrustIconCheck /> },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Trust indicators"
      className="border-y border-[var(--border-soft)] bg-surface-1 px-5 py-8 sm:px-7 sm:py-10"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <div className="rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-white p-4 shadow-[var(--shadow-xs)] sm:p-5">
            <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {trustItems.map((item) => (
                <li
                  key={item.label}
                  className="flex min-w-0 items-center gap-2.5 rounded-[var(--radius-sm)] px-1 py-1 sm:gap-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-surface-1 text-clinical">
                    {item.icon}
                  </span>
                  <span className="text-[0.625rem] font-medium uppercase leading-snug tracking-[0.08em] text-[var(--text-muted)] sm:text-[0.6875rem]">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
