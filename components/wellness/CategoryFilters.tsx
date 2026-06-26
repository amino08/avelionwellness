"use client";

import { CATEGORIES, type Category } from "@/lib/avelion-products";

interface CategoryFiltersProps {
  active: Category;
  onChange: (category: Category) => void;
  counts: Record<string, number>;
}

export function CategoryFilters({
  active,
  onChange,
  counts,
}: CategoryFiltersProps) {
  return (
    <div className="w-full">
      <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CATEGORIES.map((category) => {
          const isActive = active === category;
          const count = counts[category] ?? 0;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onChange(category)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-navy text-white shadow-[0_2px_8px_rgba(10,22,40,0.15)]"
                  : "border border-silver bg-white text-[var(--text-secondary)] hover:border-navy/30 hover:text-navy"
              }`}
            >
              {category}
              <span
                className={`ml-1.5 text-xs ${
                  isActive ? "text-white/70" : "text-silver"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
