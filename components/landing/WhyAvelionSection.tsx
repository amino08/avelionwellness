"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion/Reveal";

const pillars = [
  {
    title: "Physician-Guided Care",
    description: "Clinical leadership across every patient interaction.",
  },
  {
    title: "Scientific Precision",
    description: "Rigorous standards from formulation to fulfillment.",
  },
  {
    title: "Premium Standards",
    description: "Elevated quality in presentation, process, and trust.",
  },
];

export function WhyAvelionSection() {
  return (
    <section
      className="bg-white px-5 py-16 sm:px-7 sm:py-20 lg:py-24"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why Avelion</Eyebrow>
          <h2 id="why-heading" className="type-section">
            One standard. Two experiences.
          </h2>
          <p className="type-body-lg mx-auto mt-5 max-w-xl">
            Avelion connects clinical care and research wellness through one
            elevated standard of quality, presentation, and trust.
          </p>
        </Reveal>

        <StaggerReveal className="mt-12 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title} className="h-full w-full">
              <article className="h-full rounded-[var(--radius-md)] border border-[var(--border-soft)] bg-surface-1 px-5 py-5 text-center">
                <h3 className="font-serif text-lg font-medium leading-snug tracking-tight text-navy">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {pillar.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
