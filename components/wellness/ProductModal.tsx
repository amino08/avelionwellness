"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { AvelionProduct } from "@/lib/avelion-products";
import { useCart } from "@/contexts/cart-context";
import { fadeIn, scaleIn, motionTransition } from "@/lib/motion";
import { MotionButtonWrap } from "@/components/motion/MotionButton";
import { ProductImage } from "./ProductImage";

interface ProductModalProps {
  product: AvelionProduct | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const { addItem } = useCart();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!product) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [product, onClose]);

  const handleAddToCart = () => {
    if (!product) return;
    addItem(product);
    onClose();
  };

  return (
    <AnimatePresence>
      {product && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-navy/50 backdrop-blur-md"
            onClick={onClose}
            aria-label="Close product details"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            exit={prefersReducedMotion ? undefined : "hidden"}
            variants={fadeIn}
            transition={motionTransition}
          />

          <motion.div
            className="relative z-10 max-h-[94vh] w-full max-w-4xl overflow-hidden rounded-t-[var(--radius-xl)] bg-white shadow-[var(--shadow-xl)] sm:rounded-[var(--radius-xl)]"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            exit={prefersReducedMotion ? undefined : "hidden"}
            variants={scaleIn}
            transition={motionTransition}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/90 text-[var(--text-muted)] shadow-sm backdrop-blur-sm transition-all hover:border-[var(--border-medium)] hover:text-navy"
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

            <div className="grid max-h-[94vh] overflow-y-auto sm:grid-cols-2">
              <div className="bg-surface-1 p-6 sm:p-8">
                <ProductImage
                  product={product}
                  size="large"
                  className="rounded-[var(--radius-lg)]"
                />
              </div>

              <div className="flex flex-col gap-6 p-6 sm:p-8 sm:pr-10">
                <div className="space-y-3 pr-10">
                  <span className="badge-muted">{product.category}</span>
                  <h2 id="product-modal-title" className="type-section">
                    {product.name}
                  </h2>
                  <p className="type-body">{product.strength}</p>
                  <p className="type-price-lg">{product.price}</p>
                  {product.badge === "Research Use Only" && (
                    <span className="badge-inline">Research Use Only</span>
                  )}
                </div>

                <p className="type-body">{product.description}</p>

                <div className="compliance-panel">
                  <p className="type-compliance">
                    Laboratory research product only. Not for human consumption.
                    For scientific research purposes only. Not evaluated by the
                    FDA.
                  </p>
                </div>

                <div className="mt-auto flex flex-col gap-3 border-t border-[var(--border-soft)] pt-6">
                  <MotionButtonWrap>
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="btn-primary w-full"
                    >
                      Add to Cart
                    </button>
                  </MotionButtonWrap>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
