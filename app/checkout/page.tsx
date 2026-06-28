"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { MotionButtonWrap } from "@/components/motion/MotionButton";
import { SiteNav } from "@/components/wellness/SiteNav";
import { StoreFooter } from "@/components/wellness/StoreFooter";
import { useCart } from "@/contexts/cart-context";
import { formatPrice } from "@/lib/cart";

export default function CheckoutPage() {
  const router = useRouter();
  const {
    getResolvedItems,
    formattedSubtotal,
    purchaseSubtotal,
    itemCount,
    clearCart,
    updateQuantity,
    removeItem,
  } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const lines = getResolvedItems();

  const handleCheckout = async () => {
    if (lines.length === 0) return;

    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: lines.map(({ item, product }) => ({
            productId: product.id,
            name: product.name,
            strength: product.strength,
            price: product.price,
            quantity: item.quantity,
            mode: item.mode,
          })),
        }),
      });

      const data = (await response.json()) as {
        mode?: string;
        message?: string;
        url?: string;
        error?: string;
        requiresStripe?: boolean;
      };

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      if (data.requiresStripe) {
        setMessage(
          data.message ??
            "Payment processing is not yet configured. Your order can be reviewed once checkout is enabled.",
        );
        return;
      }

      if (
        data.mode === "placeholder" ||
        data.mode === "order" ||
        data.mode === "inquiry"
      ) {
        clearCart();
        router.push("/checkout/success");
        return;
      }

      setMessage(data.error ?? data.message ?? "Unable to complete checkout.");
    } catch {
      setMessage("Unable to complete checkout. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-full flex-col bg-surface-1">
      <SiteNav variant="store" />

      <main className="flex-1 pt-28 sm:pt-32">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
          <Reveal className="mb-12 space-y-6">
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <div className="checkout-step checkout-step-active">
                <span className="checkout-step-dot" />
                Cart
              </div>
              <div className="hidden h-px w-8 bg-[var(--border-soft)] sm:block" />
              <div className="checkout-step checkout-step-active">
                <span className="checkout-step-dot" />
                Checkout
              </div>
              <div className="hidden h-px w-8 bg-[var(--border-soft)] sm:block" />
              <div className="checkout-step">
                <span className="checkout-step-dot" />
                Confirm
              </div>
            </div>

            <div>
              <h1 className="type-section">Checkout</h1>
              <p className="type-body mt-3">
                Review your order before placing it.
              </p>
            </div>
          </Reveal>

          {itemCount === 0 ? (
            <Reveal>
              <div className="flex flex-col items-center rounded-[var(--radius-xl)] border border-[var(--border-soft)] bg-white px-8 py-20 text-center shadow-[var(--shadow-sm)]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-surface-1 text-silver">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 6h15l-1.5 9h-12L6 6Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="type-body font-medium text-navy">
                  Your cart is empty
                </p>
                <p className="type-caption mt-2 max-w-sm">
                  Browse the catalog to add products to your cart.
                </p>
                <MotionButtonWrap className="mt-8 inline-flex">
                  <Link href="/wellness-store" className="btn-primary">
                    Browse Products
                  </Link>
                </MotionButtonWrap>
              </div>
            </Reveal>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
              <Reveal>
                <div className="surface-elevated rounded-[var(--radius-xl)] p-6 sm:p-8">
                  <Eyebrow as="h2">Order Items</Eyebrow>
                  <CheckoutLines
                    lines={lines}
                    updateQuantity={updateQuantity}
                    removeItem={removeItem}
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1} className="h-fit">
                <aside className="surface-elevated rounded-[var(--radius-xl)] p-6 sm:p-8">
                  <h2 className="type-subheading">Order Summary</h2>
                  <div className="type-body mt-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Subtotal</span>
                      <span className="type-subheading !text-base tabular-nums">
                        {formattedSubtotal}
                      </span>
                    </div>
                    {purchaseSubtotal > 0 && (
                      <div className="flex items-center justify-between">
                        <span>Total</span>
                        <span className="type-price !text-base">
                          {formatPrice(purchaseSubtotal)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="compliance-panel mt-6">
                    <p className="type-compliance">
                      All Avelion Wellness products are intended for laboratory
                      research use only. Not for human consumption. Not evaluated
                      by the FDA.
                    </p>
                  </div>

                  {message && (
                    <p className="type-body mt-5 rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-surface-1 px-4 py-3">
                      {message}
                    </p>
                  )}

                  <MotionButtonWrap>
                    <button
                      type="button"
                      onClick={handleCheckout}
                      disabled={isSubmitting}
                      className="btn-primary mt-6 w-full disabled:opacity-60"
                    >
                      {isSubmitting
                        ? "Processing..."
                        : purchaseSubtotal > 0
                          ? "Proceed to Payment"
                          : "Place Order"}
                    </button>
                  </MotionButtonWrap>

                  <MotionButtonWrap>
                    <Link
                      href="/wellness-store"
                      className="btn-secondary mt-3 flex w-full justify-center"
                    >
                      Back to Store
                    </Link>
                  </MotionButtonWrap>
                </aside>
              </Reveal>
            </div>
          )}
        </div>
      </main>

      <StoreFooter />
    </div>
  );
}

function CheckoutLines({
  lines,
  updateQuantity,
  removeItem,
}: {
  lines: ReturnType<ReturnType<typeof useCart>["getResolvedItems"]>;
  updateQuantity: ReturnType<typeof useCart>["updateQuantity"];
  removeItem: ReturnType<typeof useCart>["removeItem"];
}) {
  return (
    <ul className="space-y-6">
      {lines.map(({ item, product, lineTotal }) => (
        <li
          key={`${item.productId}-${item.mode}`}
          className="flex flex-col gap-4 border-b border-[var(--border-soft)] pb-6 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="min-w-0 space-y-1">
            <p className="type-card-title">{product.name}</p>
            <p className="type-body">{product.strength}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  updateQuantity(item.productId, item.mode, item.quantity - 1)
                }
                className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-white transition-colors hover:border-[var(--border-medium)] hover:bg-surface-1"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="type-body min-w-[2rem] text-center font-medium tabular-nums">
                {item.quantity}
              </span>
              <button
                type="button"
                onClick={() =>
                  updateQuantity(item.productId, item.mode, item.quantity + 1)
                }
                className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-white transition-colors hover:border-[var(--border-medium)] hover:bg-surface-1"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <p className="type-price min-w-[4.5rem] text-right !text-base">
              {formatPrice(lineTotal)}
            </p>
            <button
              type="button"
              onClick={() => removeItem(item.productId, item.mode)}
              className="type-caption font-medium transition-colors hover:text-navy"
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
