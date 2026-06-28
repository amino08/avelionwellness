"use client";

import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CARE } from "@/lib/constants";
import { FeatureRow } from "./FeatureRow";

function RowIconClinical() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RowIconPathway() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 12h16M12 4v16"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.35"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function RowIconExperience() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="5" y="4" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M9 19h6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

const careRows = [
  { icon: <RowIconClinical />, title: "Licensed clinical guidance" },
  { icon: <RowIconPathway />, title: "Personalized pathways" },
  { icon: <RowIconExperience />, title: "Modern patient experience" },
];

export function CareSection() {
  return (
    <section
      className="bg-surface-1 px-5 py-16 sm:px-7 sm:py-20 lg:py-24"
      aria-labelledby="care-heading"
    >
      <div className="mx-auto w-full max-w-2xl">
        <Reveal className="text-center">
          <Eyebrow>{CARE.name}</Eyebrow>
          <p id="care-heading" className="type-body-lg mx-auto max-w-xl">
            Physician-guided longevity care designed around precision,
            convenience, and elevated patient experiences.
          </p>
        </Reveal>

        <StaggerReveal className="mt-10 flex flex-col gap-2.5 sm:mt-12">
          {careRows.map((row) => (
            <StaggerItem key={row.title} className="w-full">
              <FeatureRow {...row} muted />
            </StaggerItem>
          ))}
        </StaggerReveal>

        <Reveal className="mt-10 text-center sm:mt-12">
          <a
            href={CARE.url}
            className="inline-flex items-center text-sm font-medium text-navy transition-colors hover:text-clinical"
          >
            Visit Avelion Care →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
