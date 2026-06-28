import type { AvelionProduct } from "./avelion-products";
import { getProductById } from "./avelion-products";

export type CartItemMode = "purchase" | "inquiry";

export interface CartItem {
  productId: string;
  quantity: number;
  mode: CartItemMode;
}

export function parsePrice(price: string): number {
  const value = Number(price.replace(/[^0-9.]/g, ""));
  return Number.isFinite(value) ? value : 0;
}

export function formatPrice(amount: number): string {
  return `$${Math.round(amount)}`;
}

export function getCartLineProduct(item: CartItem): AvelionProduct | undefined {
  return getProductById(item.productId);
}

export function getCartLineTotal(item: CartItem, product: AvelionProduct): number {
  return parsePrice(product.price) * item.quantity;
}

export function canPurchaseProduct(product: AvelionProduct): boolean {
  return product.status === "available";
}

export function canAddToInquiry(product: AvelionProduct): boolean {
  return product.status !== "restricted";
}

export function getDefaultCartMode(product: AvelionProduct): CartItemMode {
  return product.status === "available" ? "purchase" : "inquiry";
}
