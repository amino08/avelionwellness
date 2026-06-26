import Image from "next/image";
import type { AvelionProduct, ProductFormat } from "@/lib/avelion-products";

export const PRODUCT_IMAGE_PATHS = {
  vial: "/images/products/avelion-peptide-vial.png",
  oral: "/images/products/avelion-oral-bottle.png",
} as const;

export function getProductImageSrc(format: ProductFormat): string {
  return format === "oral" ? PRODUCT_IMAGE_PATHS.oral : PRODUCT_IMAGE_PATHS.vial;
}

type ProductImageSize = "compact" | "default" | "large";

interface ProductImageProps {
  product: Pick<AvelionProduct, "name" | "strength" | "format">;
  size?: ProductImageSize;
  showStage?: boolean;
  className?: string;
}

const IMAGE_SIZES: Record<
  ProductImageSize,
  { width: number; height: number; maxHeight: string; maxWidth: string }
> = {
  compact: {
    width: 224,
    height: 308,
    maxHeight: "max-h-[13.25rem]",
    maxWidth: "max-w-[95%]",
  },
  default: {
    width: 280,
    height: 392,
    maxHeight: "max-h-[19.5rem]",
    maxWidth: "max-w-[95%]",
  },
  large: {
    width: 364,
    height: 476,
    maxHeight: "max-h-[25rem]",
    maxWidth: "max-w-[92%]",
  },
};

const STAGE_HEIGHTS: Record<ProductImageSize, string> = {
  compact: "h-64 sm:h-[17.5rem]",
  default: "h-72 sm:h-80",
  large: "h-96 sm:h-[28rem]",
};

export function ProductImage({
  product,
  size = "default",
  showStage = true,
  className = "",
}: ProductImageProps) {
  const src = getProductImageSrc(product.format);
  const alt = `${product.name} ${product.strength} — Avelion Wellness research product`;
  const dims = IMAGE_SIZES[size];

  const image = (
    <div className="relative flex items-end justify-center">
      <div
        aria-hidden
        className="absolute bottom-1 left-1/2 h-4 w-[72%] -translate-x-1/2 rounded-full bg-[rgba(10,22,40,0.05)] blur-lg"
      />
      <Image
        src={src}
        alt={alt}
        width={dims.width}
        height={dims.height}
        className={`relative z-10 ${dims.maxHeight} ${dims.maxWidth} w-auto object-contain object-center`}
        priority={size === "large"}
      />
    </div>
  );

  if (!showStage) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        {image}
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-platinum bg-[#F8FAFC] ${STAGE_HEIGHTS[size]} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-[#EEF2F6]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.55)_42%,transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_85%,rgba(203,213,225,0.18)_0%,transparent_58%)]" />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-3 py-7 sm:px-4 sm:py-8">
        {image}
      </div>
    </div>
  );
}
