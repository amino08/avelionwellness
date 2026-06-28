"use client";

import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { AvelionProduct } from "@/lib/avelion-products";
import {
  type CartItem,
  type CartItemMode,
  canAddToInquiry,
  canPurchaseProduct,
  formatPrice,
  getCartLineProduct,
  getCartLineTotal,
  parsePrice,
} from "@/lib/cart";

const STORAGE_KEY = "avelion-wellness-cart";

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  formattedSubtotal: string;
  purchaseSubtotal: number;
  inquiryCount: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  addItem: (
    product: AvelionProduct,
    mode?: CartItemMode,
    quantity?: number,
  ) => boolean;
  removeItem: (productId: string, mode: CartItemMode) => void;
  updateQuantity: (
    productId: string,
    mode: CartItemMode,
    quantity: number,
  ) => void;
  clearCart: () => void;
  getResolvedItems: () => Array<{
    item: CartItem;
    product: AvelionProduct;
    lineTotal: number;
  }>;
}

const CartContext = createContext<CartContextValue | null>(null);

function loadStoredItems(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setItems(loadStoredItems());
      setHydrated(true);
    });
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = useCallback(
    (product: AvelionProduct, mode?: CartItemMode, quantity = 1): boolean => {
      const resolvedMode =
        mode ?? (product.status === "available" ? "purchase" : "inquiry");

      if (resolvedMode === "purchase" && !canPurchaseProduct(product)) {
        return false;
      }

      if (!canAddToInquiry(product)) {
        return false;
      }

      setItems((current) => {
        const existing = current.find(
          (entry) =>
            entry.productId === product.id && entry.mode === resolvedMode,
        );

        if (existing) {
          return current.map((entry) =>
            entry.productId === product.id && entry.mode === resolvedMode
              ? { ...entry, quantity: entry.quantity + quantity }
              : entry,
          );
        }

        return [
          ...current,
          { productId: product.id, quantity, mode: resolvedMode },
        ];
      });

      setIsDrawerOpen(true);
      return true;
    },
    [],
  );

  const removeItem = useCallback((productId: string, mode: CartItemMode) => {
    setItems((current) =>
      current.filter(
        (entry) => !(entry.productId === productId && entry.mode === mode),
      ),
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, mode: CartItemMode, quantity: number) => {
      if (quantity < 1) {
        removeItem(productId, mode);
        return;
      }

      setItems((current) =>
        current.map((entry) =>
          entry.productId === productId && entry.mode === mode
            ? { ...entry, quantity }
            : entry,
        ),
      );
    },
    [removeItem],
  );

  const clearCart = useCallback(() => setItems([]), []);

  const getResolvedItems = useCallback(() => {
    return items.flatMap((item) => {
      const product = getCartLineProduct(item);
      if (!product) return [];
      return [
        {
          item,
          product,
          lineTotal: getCartLineTotal(item, product),
        },
      ];
    });
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const resolved = items.flatMap((item) => {
      const product = getCartLineProduct(item);
      if (!product) return [];
      return [{ item, product, lineTotal: getCartLineTotal(item, product) }];
    });

    const subtotal = resolved.reduce((sum, line) => sum + line.lineTotal, 0);
    const purchaseSubtotal = resolved
      .filter((line) => line.item.mode === "purchase")
      .reduce((sum, line) => sum + line.lineTotal, 0);
    const itemCount = resolved.reduce((sum, line) => sum + line.item.quantity, 0);
    const inquiryCount = resolved
      .filter((line) => line.item.mode === "inquiry")
      .reduce((sum, line) => sum + line.item.quantity, 0);

    return {
      items,
      itemCount,
      subtotal,
      formattedSubtotal: formatPrice(subtotal),
      purchaseSubtotal,
      inquiryCount,
      isDrawerOpen,
      openDrawer: () => setIsDrawerOpen(true),
      closeDrawer: () => setIsDrawerOpen(false),
      toggleDrawer: () => setIsDrawerOpen((open) => !open),
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      getResolvedItems,
    };
  }, [items, isDrawerOpen, addItem, removeItem, updateQuantity, clearCart, getResolvedItems]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}

export { parsePrice, formatPrice };
