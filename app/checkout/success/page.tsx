import Link from "next/link";
import { SiteNav } from "@/components/wellness/SiteNav";
import { StoreFooter } from "@/components/wellness/StoreFooter";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Order Received",
  description:
    "Your Avelion Wellness order has been received.",
  path: "/checkout/success",
});

export default function CheckoutSuccessPage() {
  return (
    <div className="flex min-h-full flex-col bg-surface-1">
      <SiteNav variant="store" />
      <main className="flex-1 pt-28 sm:pt-32">
        <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
          <div className="surface-elevated animate-scale-in rounded-[var(--radius-xl)] px-8 py-16 text-center sm:px-12">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-clinical/10 text-clinical">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12.5L9.5 17L19 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="type-section">Order Received</h1>
            <p className="type-body mx-auto mt-5 max-w-md">
              Your order has been received. A confirmation will be sent once
              checkout processing is complete.
            </p>
            <p className="type-caption mx-auto mt-5 max-w-md">
              Laboratory research use only. Not for human consumption. Not
              evaluated by the FDA.
            </p>
            <Link href="/wellness-store" className="btn-primary mt-10 inline-flex">
              Return to Store
            </Link>
          </div>
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}
