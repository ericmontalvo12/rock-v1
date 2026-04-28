"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";

export function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem("promoCode", "WELCOME20");
      setIsSubmitted(true);
      try {
        await fetch("https://services.leadconnectorhq.com/hooks/EakYnXEQy1hvVFmdShYB/webhook-trigger/wFhzPl8SglWPsW3BeDsh", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
      } catch (err) {
        console.error("Failed to send to HighLevel:", err);
      }
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("WELCOME20");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          style={{ background: "rgba(0,0,0,0.70)" }}
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[740px] rounded-2xl overflow-hidden shadow-2xl flex"
          >
            {/* Left: Dark product panel — desktop only */}
            <div
              className="hidden sm:flex sm:w-[42%] flex-col items-center justify-between py-8 px-6 relative overflow-hidden flex-shrink-0"
              style={{ background: "linear-gradient(160deg, #0d1117 0%, #0f1923 100%)" }}
            >
              {/* Blue glow behind bottle */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: "340px",
                  height: "340px",
                  background: "radial-gradient(circle, rgba(45,148,255,0.15) 0%, transparent 70%)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              {/* Logo */}
              <div className="relative z-10 w-full flex items-center justify-center h-12 overflow-visible">
                <Image
                  src="/logo-new.png"
                  alt="Rock Mountain Performance"
                  width={200}
                  height={60}
                  className="h-[30px] w-auto scale-[2.1] translate-y-[5px]"
                />
              </div>

              {/* Bottle */}
              <div className="relative z-10 flex-1 flex items-center justify-center py-4">
                <Image
                  src="/bottle-new.png"
                  alt="Peak Performance"
                  width={160}
                  height={260}
                  className="w-[145px] h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Trust badge */}
              <div className="relative z-10 flex items-center gap-2 bg-white/[0.07] border border-white/10 rounded-full px-4 py-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2d94ff] flex-shrink-0" />
                <span className="text-white/70 text-xs font-medium whitespace-nowrap">30-Day Money Back</span>
              </div>
            </div>

            {/* Right: Form panel */}
            <div className="flex-1 bg-white flex flex-col justify-center px-7 sm:px-8 py-8 sm:py-10 relative">
              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {!isSubmitted ? (
                <>
                  {/* Mobile logo */}
                  <div className="sm:hidden mb-6 flex justify-center h-10 overflow-visible">
                    <Image
                      src="/logo-new.png"
                      alt="Rock Mountain Performance"
                      width={200}
                      height={60}
                      className="h-[26px] w-auto scale-[2.1] translate-y-[4px]"
                    />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                    <span className="text-xs text-gray-400 ml-1.5 self-center">5.0 · Early Reviews</span>
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#2d94ff] mb-2">
                    Limited Pre-Order Offer
                  </p>
                  <h2 className="text-[26px] sm:text-[30px] font-bold text-gray-900 leading-tight mb-3">
                    Get 20% Off<br />Your First Order
                  </h2>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    Pre-orders are now open. Enter your email to claim your code and be among the first to try Peak Performance.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2d94ff]/20 focus:border-[#2d94ff] transition-all text-sm"
                    />
                    <button
                      type="submit"
                      className="w-full h-12 rounded-xl bg-[#2d94ff] text-white font-semibold text-sm hover:bg-[#1a7ee6] transition-colors"
                    >
                      Claim My 20% Code →
                    </button>
                  </form>

                  <button
                    onClick={handleClose}
                    className="mt-4 text-xs text-gray-400 hover:text-gray-500 transition-colors w-full text-center"
                  >
                    No thanks, I'll pay full price
                  </button>
                </>
              ) : (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#2d94ff]/10 mb-5">
                    <svg className="w-7 h-7 text-[#2d94ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Here&apos;s your code!</h2>
                  <p className="text-sm text-gray-500 mb-6">
                    Apply it at checkout for 20% off your first order.
                  </p>
                  <button
                    onClick={handleCopy}
                    className="w-full flex items-center justify-between px-5 py-4 rounded-xl border-2 border-dashed border-[#2d94ff] bg-[#2d94ff]/5 hover:bg-[#2d94ff]/10 transition-colors group mb-4"
                  >
                    <span className="text-2xl font-bold text-[#2d94ff] tracking-widest">WELCOME20</span>
                    <span className="text-sm text-[#2d94ff]/70 group-hover:text-[#2d94ff] transition-colors ml-3">
                      {copied ? "Copied!" : "Copy"}
                    </span>
                  </button>
                  <button
                    onClick={handleClose}
                    className="w-full h-12 rounded-xl bg-[#2d94ff] text-white font-semibold text-sm hover:bg-[#1a7ee6] transition-colors"
                  >
                    Shop Now
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
