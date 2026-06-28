"use client";

import { useCart } from "@/contexts/cart-context";

export function CartNavButton() {
  const { itemCount, openDrawer } = useCart();

  return (
    <button
      type="button"
      onClick={openDrawer}
      className="type-nav relative flex h-10 items-center gap-2 rounded-full px-3 text-[var(--text-muted)] transition-all duration-200 hover:bg-surface-1 hover:text-navy"
      aria-label={`Open cart, ${itemCount} items`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
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
        <circle cx="9" cy="20" r="1.5" fill="currentColor" />
        <circle cx="18" cy="20" r="1.5" fill="currentColor" />
      </svg>
      <span className="hidden sm:inline">Cart</span>
      {itemCount > 0 && (
        <span className="shadow-clinical-badge absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-clinical px-1 text-[10px] font-semibold text-white">
          {itemCount}
        </span>
      )}
    </button>
  );
}
