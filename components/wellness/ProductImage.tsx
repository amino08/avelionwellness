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
  dual?: boolean;
  clean?: boolean;
  className?: string;
}

const IMAGE_SIZES: Record<
  ProductImageSize,
  { width: number; height: number; maxHeight: string; maxWidth: string }
> = {
  compact: {
    width: 180,
    height: 248,
    maxHeight: "max-h-[9.5rem] sm:max-h-[10.5rem]",
    maxWidth: "max-w-full",
  },
  default: {
    width: 280,
    height: 392,
    maxHeight: "max-h-[19.5rem]",
    maxWidth: "max-w-[88%]",
  },
  large: {
    width: 364,
    height: 476,
    maxHeight: "max-h-[26rem]",
    maxWidth: "max-w-[85%]",
  },
};

const STAGE_HEIGHTS: Record<ProductImageSize, string> = {
  compact: "h-[17rem] sm:h-[18.5rem]",
  default: "h-72 sm:h-80",
  large: "h-[22rem] sm:h-[28rem]",
};

export function ProductImage({
  product,
  size = "default",
  showStage = true,
  dual = false,
  clean = false,
  className = "",
}: ProductImageProps) {
  const src = getProductImageSrc(product.format);
  const alt = `${product.name} ${product.strength} — Avelion Wellness research product`;
  const dims = IMAGE_SIZES[size];
  const shadowClass = clean ? "" : "product-image-shadow";

  const image = dual ? (
    <div className="relative flex w-full items-end justify-center gap-2 transition-transform duration-500 ease-out group-hover:scale-[1.02] sm:gap-3">
      {!clean && <div className="product-float-shadow" aria-hidden />}
      <Image
        src={PRODUCT_IMAGE_PATHS.vial}
        alt={product.format === "vial" ? alt : `${product.name} — peptide vial`}
        width={dims.width}
        height={dims.height}
        className={`relative z-10 max-h-[11rem] max-w-[46%] w-auto object-contain object-bottom sm:max-h-[12rem] ${shadowClass}`}
      />
      <Image
        src={PRODUCT_IMAGE_PATHS.oral}
        alt={product.format === "oral" ? alt : `${product.name} — oral bottle`}
        width={dims.width}
        height={dims.height}
        className={`relative z-10 max-h-[11rem] max-w-[46%] w-auto object-contain object-bottom sm:max-h-[12rem] ${shadowClass}`}
      />
    </div>
  ) : (
    <div
      className={`relative flex w-full items-center justify-center ${clean ? "" : "transition-transform duration-500 ease-out group-hover:scale-[1.02]"}`}
    >
      {!clean && <div className="product-float-shadow" aria-hidden />}
      <Image
        src={src}
        alt={alt}
        width={dims.width}
        height={dims.height}
        className={`relative z-10 ${dims.maxHeight} ${dims.maxWidth} w-auto object-contain object-center ${shadowClass}`}
        priority={size === "large"}
      />
    </div>
  );

  if (!showStage) {
    return (
      <div className={`flex w-full items-center justify-center ${className}`}>
        {image}
      </div>
    );
  }

  const stageClass = clean
    ? "border border-[var(--border-soft)] bg-white"
    : "product-stage group";

  return (
    <div className={`${stageClass} ${STAGE_HEIGHTS[size]} ${className}`}>
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-8 sm:px-6 sm:py-10">
        {image}
      </div>
    </div>
  );
}
