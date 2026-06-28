import type { AvelionProduct } from "./avelion-products";

function stableHash(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

/**
 * Deterministic curated order: round-robin across categories while
 * alternating vial / oral formats where possible.
 */
export function getCuratedProductOrder(
  products: readonly AvelionProduct[],
): AvelionProduct[] {
  if (products.length <= 1) return [...products];

  const categoryOrder = Array.from(
    new Set(products.map((product) => product.category)),
  ).sort((a, b) => stableHash(a) - stableHash(b));

  const buckets = new Map<
    string,
    { vial: AvelionProduct[]; oral: AvelionProduct[] }
  >();

  for (const product of products) {
    const bucket = buckets.get(product.category) ?? { vial: [], oral: [] };
    if (product.format === "oral") {
      bucket.oral.push(product);
    } else {
      bucket.vial.push(product);
    }
    buckets.set(product.category, bucket);
  }

  for (const bucket of buckets.values()) {
    bucket.vial.sort((a, b) => stableHash(a.id) - stableHash(b.id));
    bucket.oral.sort((a, b) => stableHash(a.id) - stableHash(b.id));
  }

  const ordered: AvelionProduct[] = [];
  let formatToggle: "vial" | "oral" = "vial";
  let madeProgress = true;

  while (ordered.length < products.length && madeProgress) {
    madeProgress = false;

    for (const category of categoryOrder) {
      const bucket = buckets.get(category);
      if (!bucket) continue;

      const primary = formatToggle === "vial" ? bucket.vial : bucket.oral;
      const fallback = formatToggle === "vial" ? bucket.oral : bucket.vial;

      if (primary.length > 0) {
        ordered.push(primary.shift()!);
        madeProgress = true;
      } else if (fallback.length > 0) {
        ordered.push(fallback.shift()!);
        madeProgress = true;
      }
    }

    formatToggle = formatToggle === "vial" ? "oral" : "vial";
  }

  return ordered;
}
