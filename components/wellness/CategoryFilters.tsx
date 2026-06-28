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
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((category) => {
          const isActive = active === category;
          const count = counts[category] ?? 0;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onChange(category)}
              className={`type-nav shrink-0 rounded-full px-4 py-2.5 transition-all duration-200 ease-out ${
                isActive
                  ? "bg-navy text-white shadow-navy-chip ring-2 ring-clinical/20"
                  : "border border-[var(--border-soft)] bg-white text-[var(--text-secondary)] shadow-[var(--shadow-xs)] hover:border-[var(--border-medium)] hover:text-navy hover:shadow-[var(--shadow-sm)]"
              }`}
            >
              {category}
              <span
                className={`type-caption ml-2 tabular-nums ${
                  isActive ? "!text-white/65" : "!text-silver"
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
