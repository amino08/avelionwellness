"use client";

import { CartProvider } from "@/contexts/cart-context";
import { CartDrawer } from "@/components/wellness/CartDrawer";
import { CareConcierge } from "@/components/wellness/CareConcierge";
import type { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
      <CareConcierge />
    </CartProvider>
  );
}
