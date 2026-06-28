"use client";

import Link from "next/link";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SITE } from "@/lib/constants";
import { FeatureRow } from "./FeatureRow";

function RowIconVial() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 3h6v4l-2 14H11L9 7V3Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RowIconOral() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="7" y="4" width="10" height="16" rx="2" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M10 9h4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

function RowIconLab() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10 3h4l3 10a4 4 0 01-3.9 5H11a4 4 0 01-3.9-5L10 3Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const wellnessRows = [
  { icon: <RowIconVial />, title: "Research peptide catalog" },
  { icon: <RowIconOral />, title: "Oral research products" },
  { icon: <RowIconLab />, title: "Research use only" },
];

export function WellnessSection() {
  return (
    <section
      className="bg-surface-1 px-5 py-16 sm:px-7 sm:py-20 lg:py-24"
      aria-labelledby="wellness-heading"
    >
      <div className="mx-auto w-full max-w-2xl">
        <Reveal className="text-center">
          <Eyebrow>{SITE.name}</Eyebrow>
          <h2 id="wellness-heading" className="type-section">
            Premium research products
          </h2>
          <p className="type-body-lg mx-auto mt-5 max-w-xl">
            A curated research catalog presented with clarity, scientific
            precision, and elevated ecommerce standards.
          </p>
        </Reveal>

        <StaggerReveal className="mt-10 flex flex-col gap-2.5 sm:mt-12">
          {wellnessRows.map((row) => (
            <StaggerItem key={row.title} className="w-full">
              <FeatureRow {...row} muted />
            </StaggerItem>
          ))}
        </StaggerReveal>

        <Reveal className="mt-10 text-center sm:mt-12">
          <Link
            href="/wellness-store"
            className="inline-flex items-center text-sm font-medium text-navy transition-colors hover:text-clinical"
          >
            Browse Catalog →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
