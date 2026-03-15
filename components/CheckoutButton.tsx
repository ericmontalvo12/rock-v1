"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

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
  promoCode?: string;
  onPromoError?: (msg: string) => void;
}

export function CheckoutButton({ cartItems, className, disabled, promoCode, onPromoError }: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems, promoCode }),
      });

      const data = await response.json();

      if (!response.ok) {
        const msg = data.error || "Failed to create checkout session";
        if (promoCode && data.error?.toLowerCase().includes("discount") && onPromoError) {
          onPromoError(msg);
          setIsLoading(false);
          return;
        }
        throw new Error(msg);
      }

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong";
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Button
        size="lg"
        className={className || "w-full"}
        onClick={handleCheckout}
        disabled={isLoading || disabled || cartItems.length === 0}
      >
        {isLoading ? "Redirecting to Checkout..." : "Complete Pre-Order"}
      </Button>
      {error && (
        <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
      )}
    </div>
  );
}
