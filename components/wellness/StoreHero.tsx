import Image from "next/image";
import Link from "next/link";

export function StoreHero() {
  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden md:min-h-[80vh] lg:min-h-[90vh]">
      <Image
        src="/images/avelion-hero.png"
        alt="Avelion premium research product hero image"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,22,40,0.15) 0%, rgba(10,22,40,0.22) 55%, rgba(10,22,40,0.35) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto -translate-y-6 px-6 py-16 md:-translate-y-8 lg:-translate-y-10">
        <div className="relative flex flex-col items-center text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-16 -inset-y-20 bg-[radial-gradient(ellipse_at_center,rgba(10,22,40,0.58)_0%,rgba(10,22,40,0.32)_42%,transparent_72%)] sm:-inset-x-24 sm:-inset-y-24"
          />

          <div className="relative z-10 flex max-w-[600px] flex-col items-center">
            <h1 className="text-3xl font-medium tracking-[0.06em] text-white sm:text-4xl lg:text-5xl">
              Avelion Wellness
            </h1>

            <p className="mt-8 max-w-[600px] text-base font-normal leading-[1.75] text-[#F8FAFC]/90 sm:text-lg sm:leading-[1.8]">
              Premium research peptides developed with uncompromising quality,
              scientific precision, and elevated standards.
            </p>

            <p className="mt-8 text-[10px] leading-relaxed tracking-wide text-white/80 sm:text-[11px]">
              For laboratory research use only. Not for human consumption.
            </p>

            <div className="mt-12 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
              <Link href="#products" className="btn-hero-primary min-w-[200px]">
                Explore Products
              </Link>
              <Link href="#research-catalog" className="btn-hero-glass min-w-[200px]">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
