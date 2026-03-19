"use client";

import { useState, useEffect, useRef } from "react";
import { X, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// Square Web Payments SDK types
declare global {
  interface Window {
    Square?: {
      payments: (appId: string, locationId: string) => Promise<SquarePayments>;
    };
  }
}

interface SquarePayments {
  card: (options?: object) => Promise<SquareCard>;
}

interface SquareCard {
  attach: (selector: string) => Promise<void>;
  tokenize: () => Promise<{ status: string; token?: string; errors?: { message: string }[] }>;
  destroy: () => Promise<void>;
}

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image?: string;
  isSubscription?: boolean;
  subscriptionIntervalCount?: number;
}

interface CustomerInfo {
  email: string;
  firstName: string;
  lastName: string;
  addressLine1: string;
  city: string;
  state: string;
  postalCode: string;
}

interface EmbeddedCheckoutModalProps {
  cartItems: CartItem[];
  promotionCodeId?: string;
  onClose: () => void;
}

export function EmbeddedCheckoutModal({
  cartItems,
  promotionCodeId,
  onClose,
}: EmbeddedCheckoutModalProps) {
  const router = useRouter();
  const [cardReady, setCardReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const cardRef = useRef<SquareCard | null>(null);

  const [form, setForm] = useState<CustomerInfo>({
    email: "",
    firstName: "",
    lastName: "",
    addressLine1: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const isSubscription = cartItems.some((item) => item.isSubscription);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const shippingCost = isSubscription || totalItems >= 2 ? 0 : 9.99;

  useEffect(() => {
    const appId = process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID;
    const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID;

    if (!appId || !locationId) {
      setError("Payment configuration missing. Please contact support.");
      return;
    }

    const initCard = async () => {
      try {
        const payments = await window.Square!.payments(appId, locationId);
        const card = await payments.card();
        await card.attach("#square-card-container");
        cardRef.current = card;
        setCardReady(true);
      } catch {
        setError("Failed to initialize payment form. Please refresh and try again.");
      }
    };

    if (window.Square) {
      initCard();
    } else {
      const script = document.createElement("script");
      script.src = "https://web.squarecdn.com/v1/square.js";
      script.onload = initCard;
      script.onerror = () =>
        setError("Failed to load payment SDK. Please refresh.");
      document.head.appendChild(script);
    }

    return () => {
      cardRef.current?.destroy().catch(() => {});
    };
  }, []);

  const updateForm = (field: keyof CustomerInfo, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardRef.current || loading) return;

    setLoading(true);
    setError("");

    try {
      const result = await cardRef.current.tokenize();
      if (result.status !== "OK" || !result.token) {
        setError(result.errors?.[0]?.message ?? "Card tokenization failed. Please check your card details.");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/checkout-embedded", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: result.token,
          cartItems,
          customerInfo: form,
          isSubscription,
          promotionCodeId,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Payment failed. Please try again.");
        setLoading(false);
        return;
      }

      router.push("/success");
      onClose();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

  return (
    <div className="fixed inset-0 z-[200] flex">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative z-10 w-full h-full bg-white flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-gray-500" />
            <span className="font-semibold text-gray-900">Secure Checkout</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable form */}
        <div className="overflow-y-auto flex-1 p-5 flex justify-center">
          <div className="w-full max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Order Summary */}
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-700 mb-3">Order Summary</p>
              {cartItems.map((item, i) => (
                <div key={i} className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>
                    {item.name} × {item.quantity}
                    {item.isSubscription ? " (subscription)" : ""}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between text-sm text-gray-600 mt-2 pt-2 border-t border-gray-200">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between font-bold text-gray-900 mt-2">
                <span>Total</span>
                <span>${(totalPrice + shippingCost).toFixed(2)}</span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Contact</p>
              <input
                type="email"
                placeholder="Email address"
                required
                value={form.email}
                onChange={(e) => updateForm("email", e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Shipping address */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Shipping Address</p>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First name"
                    required
                    value={form.firstName}
                    onChange={(e) => updateForm("firstName", e.target.value)}
                    className={inputClass}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    required
                    value={form.lastName}
                    onChange={(e) => updateForm("lastName", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  required
                  value={form.addressLine1}
                  onChange={(e) => updateForm("addressLine1", e.target.value)}
                  className={inputClass}
                />
                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    value={form.city}
                    onChange={(e) => updateForm("city", e.target.value)}
                    className={inputClass}
                  />
                  <input
                    type="text"
                    placeholder="State"
                    required
                    maxLength={2}
                    value={form.state}
                    onChange={(e) => updateForm("state", e.target.value.toUpperCase())}
                    className={inputClass}
                  />
                  <input
                    type="text"
                    placeholder="ZIP"
                    required
                    value={form.postalCode}
                    onChange={(e) => updateForm("postalCode", e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Card */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Payment</p>
              {!cardReady && !error && (
                <div className="flex items-center justify-center py-8 text-gray-400">
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  <span className="text-sm">Loading payment form...</span>
                </div>
              )}
              <div
                id="square-card-container"
                className={`min-h-[90px] ${cardReady ? "" : "hidden"}`}
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={loading || !cardReady}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </span>
              ) : (
                `Pay $${(totalPrice + shippingCost).toFixed(2)}`
              )}
            </Button>
          </form>
          </div>
        </div>

        <div className="px-5 py-3 border-t border-gray-200 flex-shrink-0">
          <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
            <Lock className="w-3 h-3" />
            Secure checkout powered by Square
          </p>
        </div>
      </div>
    </div>
  );
}
