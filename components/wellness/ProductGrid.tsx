"use client";

import { useMemo, useState } from "react";
import type { AvelionProduct, Category } from "@/lib/avelion-products";
import { publicProducts } from "@/lib/avelion-products";
import { getCuratedProductOrder } from "@/lib/product-order";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion/Reveal";
import { CategoryFilters } from "./CategoryFilters";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProduct, setSelectedProduct] = useState<AvelionProduct | null>(
    null,
  );

  const curatedProducts = useMemo(
    () => getCuratedProductOrder(publicProducts),
    [],
  );

  const counts = useMemo(() => {
    const result: Record<string, number> = { All: curatedProducts.length };
    for (const product of curatedProducts) {
      result[product.category] = (result[product.category] ?? 0) + 1;
    }
    return result;
  }, [curatedProducts]);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return curatedProducts;
    return curatedProducts.filter((p) => p.category === activeCategory);
  }, [activeCategory, curatedProducts]);

  return (
    <>
      <section
        id="products"
        className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 sm:py-24"
      >
        <div id="research-catalog" className="mb-14 space-y-8">
          <Reveal className="max-w-2xl">
            <Eyebrow>Laboratory Research</Eyebrow>
            <h2 className="type-section">Research Catalog</h2>
            <p className="type-body mt-4">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}{" "}
              {activeCategory !== "All" ? `in ${activeCategory}` : "available"}
              {" · "}Laboratory research use only
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <CategoryFilters
              active={activeCategory}
              onChange={setActiveCategory}
              counts={counts}
            />
          </Reveal>
        </div>

        {filtered.length === 0 ? (
          <Reveal>
            <div className="flex flex-col items-center rounded-[var(--radius-xl)] border border-dashed border-[var(--border-medium)] bg-white px-6 py-20 text-center">
              <p className="type-body font-medium text-navy">
                No products in this category
              </p>
              <p className="type-caption mt-2">
                Try selecting a different category filter.
              </p>
            </div>
          </Reveal>
        ) : (
          <StaggerReveal className="grid grid-cols-2 gap-4 sm:gap-6">
            {filtered.map((product) => (
              <StaggerItem key={product.id} className="min-w-0">
                <ProductCard
                  product={product}
                  onViewDetails={setSelectedProduct}
                />
              </StaggerItem>
            ))}
          </StaggerReveal>
        )}
      </section>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
