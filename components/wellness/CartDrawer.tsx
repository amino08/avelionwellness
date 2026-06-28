"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCart } from "@/contexts/cart-context";
import { formatPrice } from "@/lib/cart";
import { fadeIn, motionTransition, slideInRight } from "@/lib/motion";
import { MotionButtonWrap } from "@/components/motion/MotionButton";

export function CartDrawer() {
  const {
    isDrawerOpen,
    closeDrawer,
    getResolvedItems,
    updateQuantity,
    removeItem,
    formattedSubtotal,
    itemCount,
  } = useCart();

  const lines = getResolvedItems();
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50">
          <motion.button
            type="button"
            className="absolute inset-0 bg-navy/45 backdrop-blur-md"
            onClick={closeDrawer}
            aria-label="Close cart"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            exit={prefersReducedMotion ? undefined : "hidden"}
            variants={fadeIn}
            transition={motionTransition}
          />

          <motion.aside
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-[var(--shadow-xl)]"
            aria-label="Shopping cart"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            exit={prefersReducedMotion ? undefined : "hidden"}
            variants={slideInRight}
            transition={motionTransition}
          >
            <div className="flex items-center justify-between border-b border-[var(--border-soft)] px-6 py-6">
              <div>
                <h2 className="type-subheading">Cart</h2>
                <p className="type-caption mt-1">
                  {itemCount} item{itemCount !== 1 ? "s" : ""}
                </p>
              </div>
              <button
                type="button"
                onClick={closeDrawer}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-soft)] text-[var(--text-muted)] transition-all hover:border-[var(--border-medium)] hover:bg-surface-1 hover:text-navy"
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 1L13 13M13 1L1 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {lines.length === 0 ? (
                <div className="flex flex-col items-center rounded-[var(--radius-lg)] border border-dashed border-[var(--border-medium)] bg-surface-1 px-6 py-16 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-surface-2 text-silver">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 6h15l-1.5 9h-12L6 6Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 6 5 3H2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p className="type-body font-medium text-navy">
                    Your cart is empty
                  </p>
                  <p className="type-caption mt-2 max-w-[240px]">
                    Browse the catalog to add products to your cart.
                  </p>
                </div>
              ) : (
                <ul className="space-y-4">
                  {lines.map(({ item, product, lineTotal }) => (
                    <li
                      key={`${item.productId}-${item.mode}`}
                      className="surface-elevated rounded-[var(--radius-md)] p-5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1 space-y-1">
                          <p className="type-card-title">{product.name}</p>
                          <p className="type-caption">{product.strength}</p>
                          {product.badge === "Research Use Only" && (
                            <span className="badge-inline mt-2">
                              Research Use Only
                            </span>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.productId, item.mode)}
                          className="type-caption shrink-0 font-medium transition-colors hover:text-navy"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.mode,
                                item.quantity - 1,
                              )
                            }
                            className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-white text-navy transition-colors hover:border-[var(--border-medium)] hover:bg-surface-1"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="type-body min-w-[2rem] text-center font-medium tabular-nums text-navy">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.mode,
                                item.quantity + 1,
                              )
                            }
                            className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border-soft)] bg-white text-navy transition-colors hover:border-[var(--border-medium)] hover:bg-surface-1"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <p className="type-price !text-base">
                          {formatPrice(lineTotal)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-[var(--border-soft)] px-6 py-6">
              <div className="mb-5">
                <div className="type-body flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="type-subheading !text-base tabular-nums">
                    {formattedSubtotal}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <MotionButtonWrap>
                  <Link
                    href="/checkout"
                    onClick={closeDrawer}
                    className={`btn-primary w-full text-center ${lines.length === 0 ? "pointer-events-none opacity-50" : ""}`}
                    aria-disabled={lines.length === 0}
                  >
                    Checkout
                  </Link>
                </MotionButtonWrap>
                <MotionButtonWrap>
                  <button
                    type="button"
                    onClick={closeDrawer}
                    className="btn-secondary w-full"
                  >
                    Continue Browsing
                  </button>
                </MotionButtonWrap>
              </div>

              <p className="type-caption-sm mt-5">
                Laboratory research use only. Not for human consumption.
              </p>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
