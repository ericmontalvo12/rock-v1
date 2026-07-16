"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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
      localStorage.setItem("promoCode", "WELCOME15");
      localStorage.setItem("customerEmail", email);
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
    navigator.clipboard.writeText("WELCOME15");
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
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
        >
          {/* Close */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100 z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md px-8 text-center"
          >
            {!isSubmitted ? (
              <>
                {/* Logo */}
                <div className="mb-10 flex justify-center h-16 overflow-visible">
                  <Image
                    src="/logo-new.png"
                    alt="Rock Mountain Performance"
                    width={200}
                    height={60}
                    className="h-[64px] w-auto scale-[2.2] translate-y-[10px]"
                  />
                </div>

                <p className="text-[11px] font-bold uppercase tracking-widest text-[#2d94ff] mb-3">
                  Limited Time Offer
                </p>
                <h2 className="text-[32px] font-bold text-gray-900 leading-tight mb-3">
                  Get 15% Off<br />Your First Order
                </h2>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                  Peak Performance is in stock now. Enter your email to claim your code and get your first bottle.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full h-14 px-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2d94ff]/20 focus:border-[#2d94ff] transition-all text-base"
                  />
                  <button
                    type="submit"
                    className="w-full h-14 rounded-xl bg-[#2d94ff] text-white font-semibold text-base hover:bg-[#1a7ee6] transition-colors"
                  >
                    Claim My 15% Code →
                  </button>
                </form>

                <button
                  onClick={handleClose}
                  className="mt-5 text-sm text-gray-400 hover:text-gray-500 transition-colors w-full text-center"
                >
                  No thanks, I&apos;ll pay full price
                </button>
              </>
            ) : (
              <>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2d94ff]/10 mb-5">
                  <svg className="w-8 h-8 text-[#2d94ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Here&apos;s your code!</h2>
                <p className="text-sm text-gray-500 mb-6">
                  Apply it at checkout for 15% off your first order.
                </p>
                <button
                  onClick={handleCopy}
                  className="w-full flex items-center justify-between px-5 py-4 rounded-xl border-2 border-dashed border-[#2d94ff] bg-[#2d94ff]/5 hover:bg-[#2d94ff]/10 transition-colors group mb-4"
                >
                  <span className="text-2xl font-bold text-[#2d94ff] tracking-widest">WELCOME15</span>
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
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
