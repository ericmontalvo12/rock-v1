"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { CheckoutButton } from "@/components/CheckoutButton";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems, clearCart } = useCart();
  const [promoInput, setPromoInput] = useState("");
  const [promoLoading, setPromoLoading] = useState(false);
  const [promoError, setPromoError] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; percentOff: number | null; amountOff: number | null; promotionCodeId: string } | null>(null);

  const applyPromoCode = async (code: string) => {
    setPromoLoading(true);
    setPromoError("");
    setAppliedPromo(null);
    try {
      const res = await fetch("/api/validate-promo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      if (res.ok) {
        setAppliedPromo({ code, promotionCodeId: data.promotionCodeId, percentOff: data.percentOff, amountOff: data.amountOff });
        localStorage.removeItem("promoCode");
      }
    } finally {
      setPromoLoading(false);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("promoCode");
    if (saved) {
      setPromoInput(saved);
      applyPromoCode(saved);
    }
  }, []);

  const handleApplyPromo = async () => {
    if (!promoInput.trim()) return;
    setPromoLoading(true);
    setPromoError("");
    setAppliedPromo(null);
    try {
      const res = await fetch("/api/validate-promo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: promoInput.trim().toUpperCase() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setPromoError(data.error || "Invalid code.");
      } else {
        setAppliedPromo({ code: promoInput.trim().toUpperCase(), promotionCodeId: data.promotionCodeId, percentOff: data.percentOff, amountOff: data.amountOff });
      }
    } catch {
      setPromoError("Something went wrong. Try again.");
    } finally {
      setPromoLoading(false);
    }
  };


  const discountAmount = appliedPromo
    ? appliedPromo.percentOff
      ? totalPrice * (appliedPromo.percentOff / 100)
      : (appliedPromo.amountOff ?? 0) / 100
    : 0;

  const discountedSubtotal = totalPrice - discountAmount;

  // Free shipping for 2+ bottles
  const qualifiesForFreeShipping = totalItems >= 2;

  // Map cart items to the format expected by CheckoutButton
  const checkoutItems = items.map((item) => ({
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    image: item.image.startsWith("http") ? item.image : `${typeof window !== "undefined" ? window.location.origin : ""}${item.image}`,
  }));

  if (items.length === 0) {
    return (
      <div className="w-full max-w-full overflow-x-hidden">
        <Header />
        <main className="pt-32 pb-16 sm:pb-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-surface border border-border flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-text-muted" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-text-secondary mb-8">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Link href="/product">
                <Button size="lg">Pre-Order Now</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
            Your Pre-Order
          </h1>
          <p className="text-text-muted text-sm mb-8">
            You're reserving from the first production run. Ships when manufacturing is complete.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 sm:p-6 rounded-2xl bg-surface border border-border"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-xl bg-background border border-border overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-semibold text-text-primary text-lg">
                          {item.name}
                        </h3>
                        <p className="text-primary font-bold mt-1">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-text-muted hover:text-red-500 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center border border-border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className={`px-3 py-2 transition-colors ${
                            item.quantity <= 1
                              ? "text-text-muted cursor-not-allowed"
                              : "text-text-secondary hover:text-text-primary"
                          }`}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-3 py-2 text-text-primary font-medium min-w-[40px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-2 text-text-secondary hover:text-text-primary transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-text-secondary text-sm">
                        Subtotal: <span className="text-text-primary font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="text-sm text-text-muted hover:text-red-500 transition-colors"
              >
                Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 p-6 rounded-2xl bg-surface border border-border">
                <h2 className="text-xl font-semibold text-text-primary mb-6">
                  Pre-Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-text-secondary">
                    <span>Subtotal</span>
                    <span className="text-text-primary">${totalPrice.toFixed(2)}</span>
                  </div>
                  {appliedPromo && (
                    <div className="flex justify-between text-green-500">
                      <span>Discount ({appliedPromo.code})</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-text-secondary">
                    <span>Shipping</span>
                    <span className="text-text-primary">
                      {qualifiesForFreeShipping ? "Free" : "$9.99"}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-border flex justify-between">
                    <span className="font-semibold text-text-primary">Total</span>
                    <div className="text-right">
                      {appliedPromo && (
                        <p className="text-text-muted line-through text-sm">
                          ${(totalPrice + (qualifiesForFreeShipping ? 0 : 9.99)).toFixed(2)}
                        </p>
                      )}
                      <span className="font-bold text-primary text-xl">
                        ${(discountedSubtotal + (qualifiesForFreeShipping ? 0 : 9.99)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <p className="text-sm text-text-secondary mb-2">Discount Code</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      value={promoInput}
                      onChange={(e) => { setPromoInput(e.target.value.toUpperCase()); setPromoError(""); }}
                      className="flex-1 px-3 py-2 rounded-lg bg-background border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                    />
                    <Button variant="outline" className="px-4 py-2 h-auto text-sm" onClick={handleApplyPromo} disabled={promoLoading}>
                      {promoLoading ? "..." : "Apply"}
                    </Button>
                  </div>
                  {promoError && <p className="text-red-500 text-xs mt-1">{promoError}</p>}
                  {appliedPromo && <p className="text-green-500 text-xs mt-1">✓ {appliedPromo.percentOff}% off applied!</p>}
                </div>

                <CheckoutButton cartItems={checkoutItems} promotionCodeId={appliedPromo?.promotionCodeId} />

                <p className="text-xs text-text-muted text-center mt-4">
                  Secure checkout powered by Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
