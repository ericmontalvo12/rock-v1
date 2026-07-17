"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EmbeddedCheckoutModal } from "@/components/EmbeddedCheckout";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CheckoutButtonProps {
  cartItems: CartItem[];
  className?: string;
  disabled?: boolean;
  promotionCodeId?: string;
  email?: string;
}

export function CheckoutButton({ cartItems, className, disabled, promotionCodeId, email }: CheckoutButtonProps) {
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <>
      <Button
        size="lg"
        className={className || "w-full"}
        onClick={() => setShowCheckout(true)}
        disabled={disabled || cartItems.length === 0}
      >
        Complete Purchase
      </Button>

      {showCheckout && (
        <EmbeddedCheckoutModal
          cartItems={cartItems}
          promotionCodeId={promotionCodeId}
          email={email}
          onClose={() => setShowCheckout(false)}
        />
      )}
    </>
  );
}
