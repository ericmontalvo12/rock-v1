"use client";

import { CartProvider } from "@/lib/cart-context";
import { EmailPopup } from "@/components/EmailPopup";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <ScrollToTop />
      {children}
      <EmailPopup />
    </CartProvider>
  );
}
