import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(29,95,191,0.04),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(232,237,242,0.5),transparent_50%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center sm:py-36 lg:items-start lg:text-left">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-silver">
          Avelion
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-6xl">
          Avelion Care
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl">
          Physician-guided care with elevated standards, modern technology,
          and a premium clinical experience.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button type="button" className="btn-primary">
            Get Started
          </button>
          <Link href="/wellness-store" className="btn-secondary">
            Explore Wellness
          </Link>
        </div>
      </div>
    </section>
  );
}
