"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { clearCart } = useCart();

  // Clear the cart after successful purchase
  useEffect(() => {
    if (sessionId) {
      clearCart();
    }
  }, [sessionId, clearCart]);

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Order Confirmed!
            </h1>

            <p className="text-text-secondary mb-2">
              Thank you for your purchase. Your order has been successfully placed.
            </p>

            {sessionId && (
              <p className="text-text-muted text-sm mb-8">
                Order reference: <code className="bg-surface px-2 py-1 rounded">{sessionId.slice(0, 20)}...</code>
              </p>
            )}

            <div className="bg-surface border border-border rounded-2xl p-6 mb-8 text-left">
              <h2 className="font-semibold text-text-primary mb-4">What happens next?</h2>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <span>You'll receive an order confirmation email shortly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <span>Your order will be processed and shipped within 1 business day.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <span>You'll receive tracking information via email once shipped.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <span>Delivery typically takes 4-7 business days.</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg">Return Home</Button>
              </Link>
              <Link href="/product">
                <Button size="lg" variant="outline">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
