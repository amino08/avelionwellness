"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { AvelionProduct } from "@/lib/avelion-products";
import { useCart } from "@/contexts/cart-context";
import { cardHover, motionTransitionFast } from "@/lib/motion";
import { MotionButtonWrap } from "@/components/motion/MotionButton";
import { ProductImage } from "./ProductImage";

interface ProductCardProps {
  product: AvelionProduct;
  onViewDetails: (product: AvelionProduct) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const { addItem } = useCart();
  const prefersReducedMotion = useReducedMotion();

  const showResearchBadge = product.badge === "Research Use Only";

  const handleAddToCart = () => {
    addItem(product);
  };

  const motionProps = prefersReducedMotion
    ? {}
    : {
        whileHover: cardHover,
        transition: motionTransitionFast,
      };

  return (
    <motion.article
      {...motionProps}
      className="group flex h-auto flex-col overflow-visible rounded-[28px] border border-[var(--border-soft)] bg-white p-3 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] sm:p-4 md:flex-row md:items-stretch md:gap-5"
    >
      <div className="flex min-h-[180px] shrink-0 items-center justify-center rounded-[22px] border border-[var(--border-soft)] bg-white p-3 sm:min-h-[200px] sm:p-4 md:w-[40%] md:min-w-[200px] lg:min-w-[240px]">
        <ProductImage product={product} size="compact" showStage={false} clean />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 p-1 pt-4 md:gap-5 md:p-2 md:pt-2 lg:p-4">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge-muted">{product.category}</span>
            {product.status === "available" && (
              <span className="badge-stock">
                <span className="badge-stock-dot" />
                In Stock
              </span>
            )}
          </div>
          <h3 className="type-card-title">{product.name}</h3>
          <p className="type-body">{product.strength}</p>
          <p className="type-body line-clamp-2">{product.description}</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-soft)] pt-3">
          <p className="type-price">{product.price}</p>
          {showResearchBadge && (
            <span className="badge-inline shrink-0">Research Use Only</span>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <MotionButtonWrap>
            <button
              type="button"
              onClick={handleAddToCart}
              className="btn-primary w-full !min-h-[44px] !py-2.5"
            >
              Add to Cart
            </button>
          </MotionButtonWrap>
          <MotionButtonWrap>
            <button
              type="button"
              onClick={() => onViewDetails(product)}
              className="btn-secondary w-full !min-h-[44px] !py-2.5"
            >
              View Details
            </button>
          </MotionButtonWrap>
        </div>
      </div>
    </motion.article>
  );
}
