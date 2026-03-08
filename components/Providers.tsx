"use client";

import { CartProvider } from "@/lib/cart-context";
import { EmailPopup } from "@/components/EmailPopup";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <EmailPopup />
    </CartProvider>
  );
}
