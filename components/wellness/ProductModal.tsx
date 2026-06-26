"use client";

import { useEffect } from "react";
import type { AvelionProduct } from "@/lib/avelion-products";
import { ProductImage } from "./ProductImage";

interface ProductModalProps {
  product: AvelionProduct | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
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

  if (!product) return null;

  const ctaLabel =
    product.status === "available" ? "Request Access" : "Coming Soon";
  const ctaEnabled = product.status === "available";

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close product details"
      />

      <div className="relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-platinum bg-white text-[var(--text-muted)] shadow-sm transition-all hover:border-silver hover:bg-light-bg hover:text-navy"
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

        <div className="grid gap-0 sm:grid-cols-5">
          <div className="p-4 sm:col-span-2 sm:p-5 sm:pr-0">
            <ProductImage
              product={product}
              size="large"
              className="rounded-2xl sm:rounded-l-2xl sm:rounded-r-none"
            />
          </div>

          <div className="flex flex-col gap-5 p-6 sm:col-span-3 sm:p-8 sm:pr-10">
            <div className="space-y-3 pr-10">
              <span className="inline-flex rounded-full border border-silver/60 bg-platinum/50 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-silver">
                {product.category}
              </span>
              <h2
                id="product-modal-title"
                className="text-2xl font-semibold leading-tight text-navy sm:text-3xl"
              >
                {product.name}
              </h2>
              <p className="text-base text-[var(--text-secondary)]">
                {product.strength}
              </p>
              <p className="text-2xl font-semibold text-clinical">
                {product.price}
              </p>
              {product.badge === "Research Use Only" && (
                <span className="inline-flex rounded-full border border-silver bg-platinum/40 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-navy/70">
                  Research Use Only
                </span>
              )}
            </div>

            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {product.description}
            </p>

            <div className="rounded-xl border border-platinum bg-light-bg p-4">
              <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                Laboratory research product only. Not for human consumption. For
                scientific research purposes only. Not evaluated by the FDA.
              </p>
            </div>

            <button
              type="button"
              disabled={!ctaEnabled}
              className={`w-full rounded-xl py-3 text-sm font-medium transition-all duration-200 ${
                ctaEnabled
                  ? "btn-primary"
                  : "cursor-default border border-platinum bg-light-bg text-[var(--text-muted)]"
              }`}
            >
              {ctaLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
