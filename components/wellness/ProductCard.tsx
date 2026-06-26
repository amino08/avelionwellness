"use client";

import type { AvelionProduct } from "@/lib/avelion-products";
import { ProductImage } from "./ProductImage";

interface ProductCardProps {
  product: AvelionProduct;
  onViewDetails: (product: AvelionProduct) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const showResearchBadge =
    product.badge === "Research Use Only" || product.status === "coming_soon";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-platinum bg-white shadow-[0_2px_16px_rgba(10,22,40,0.05)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-slate hover:shadow-[0_16px_48px_rgba(10,22,40,0.1)]">
      <div className="relative shrink-0 p-4 pb-0 sm:p-5 sm:pb-0">
        {product.status === "available" && (
          <span className="absolute right-6 top-6 z-20 rounded-full bg-clinical px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-white shadow-sm sm:right-7 sm:top-7">
            In Stock
          </span>
        )}
        <ProductImage product={product} size="compact" />
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
        <div className="space-y-2.5">
          <span className="inline-flex rounded-full border border-silver/50 bg-platinum/60 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-silver">
            {product.category}
          </span>
          <h3 className="text-base font-semibold leading-snug text-navy sm:text-[1.05rem]">
            {product.name}
          </h3>
          <p className="text-sm text-[var(--text-secondary)]">{product.strength}</p>
        </div>

        <div className="flex items-end justify-between gap-3">
          <p className="text-xl font-semibold tracking-tight text-clinical">
            {product.price}
          </p>
          {showResearchBadge && (
            <span className="shrink-0 rounded-full border border-silver/60 bg-platinum/50 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide text-navy/65">
              Research Use Only
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => onViewDetails(product)}
          className="btn-secondary mt-auto w-full py-2.5"
        >
          View Details
        </button>
      </div>
    </article>
  );
}
