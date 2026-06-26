"use client";

import { useMemo, useState } from "react";
import type { AvelionProduct, Category } from "@/lib/avelion-products";
import { publicProducts } from "@/lib/avelion-products";
import { CategoryFilters } from "./CategoryFilters";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProduct, setSelectedProduct] = useState<AvelionProduct | null>(
    null,
  );

  const counts = useMemo(() => {
    const result: Record<string, number> = { All: publicProducts.length };
    for (const product of publicProducts) {
      result[product.category] = (result[product.category] ?? 0) + 1;
    }
    return result;
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return publicProducts;
    return publicProducts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <section id="products" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20">
        <div id="research-catalog" className="mb-12 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
              Research Catalog
            </h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}{" "}
              {activeCategory !== "All" ? `in ${activeCategory}` : "available"}
            </p>
          </div>
          <CategoryFilters
            active={activeCategory}
            onChange={setActiveCategory}
            counts={counts}
          />
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate bg-light-bg px-6 py-16 text-center">
            <p className="text-[var(--text-secondary)]">
              No products in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>
        )}
      </section>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
