import Link from "next/link";
import { SiteNav } from "@/components/wellness/SiteNav";
import { StoreFooter } from "@/components/wellness/StoreFooter";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Checkout Cancelled",
  description: "Your Avelion Wellness checkout was cancelled.",
  path: "/checkout/cancel",
});

export default function CheckoutCancelPage() {
  return (
    <div className="flex min-h-full flex-col bg-surface-1">
      <SiteNav variant="store" />
      <main className="flex-1 pt-28 sm:pt-32">
        <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
          <div className="surface-elevated animate-scale-in rounded-[var(--radius-xl)] px-8 py-16 text-center sm:px-12">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-surface-2 text-silver">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h1 className="type-section">Checkout Cancelled</h1>
            <p className="type-body mx-auto mt-5 max-w-md">
              Your checkout was cancelled. Your cart items are still
              available if you would like to continue.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/checkout" className="btn-primary inline-flex">
                Return to Checkout
              </Link>
              <Link href="/wellness-store" className="btn-secondary inline-flex">
                Back to Store
              </Link>
            </div>
          </div>
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}
