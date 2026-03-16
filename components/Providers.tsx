"use client";

import { CartProvider } from "@/lib/cart-context";
import { EmailPopup } from "@/components/EmailPopup";
import { PasswordGate } from "@/components/PasswordGate";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <PasswordGate>
      <CartProvider>
        <ScrollToTop />
        {children}
        <EmailPopup />
      </CartProvider>
    </PasswordGate>
  );
}
