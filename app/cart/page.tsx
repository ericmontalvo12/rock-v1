"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { CheckoutButton } from "@/components/CheckoutButton";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

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
                <Button size="lg">Shop Now</Button>
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
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8">
            Your Cart
          </h1>

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
                          className="px-3 py-2 text-text-secondary hover:text-text-primary transition-colors"
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
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-text-secondary">
                    <span>Subtotal</span>
                    <span className="text-text-primary">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-text-secondary">
                    <span>Shipping</span>
                    <span className="text-text-primary">
                      {totalPrice >= 100 ? "Free" : "$9.99"}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-border flex justify-between">
                    <span className="font-semibold text-text-primary">Total</span>
                    <span className="font-bold text-primary text-xl">
                      ${(totalPrice + (totalPrice >= 100 ? 0 : 9.99)).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Discount Code */}
                <div className="mb-6">
                  <label className="block text-sm text-text-secondary mb-2">
                    Discount Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 px-4 py-2 rounded-lg bg-background border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  </div>
                  <p className="text-xs text-text-muted mt-2">
                    Try code: LAUNCH for 20% off
                  </p>
                </div>

                <CheckoutButton cartItems={checkoutItems} />

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
