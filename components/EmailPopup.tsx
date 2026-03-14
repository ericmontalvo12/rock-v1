"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Show popup after a short delay on every visit
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Email submitted:", email);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100]"
        >
          {/* Fullscreen Modal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #ffffff 0%, #f4f6f8 100%)",
            }}
          >
            {/* Subtle brand glow behind content */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: "600px",
                height: "600px",
                background: "radial-gradient(circle, rgba(9, 129, 227, 0.08) 0%, rgba(9, 129, 227, 0) 70%)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-[#0b1320]/30 hover:text-[#0b1320]/60 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="relative px-8 text-center w-full max-w-lg mx-auto">
              {!isSubmitted ? (
                <>
                  {/* Logo */}
                  <div className="mb-6">
                    <Image
                      src="/logo.png"
                      alt="Rock Mountain Performance"
                      width={210}
                      height={210}
                      className="mx-auto w-[210px] h-[210px] object-contain"
                    />
                  </div>

                  {/* Header */}
                  <h2 className="text-[36px] sm:text-[42px] font-bold text-[#0b1320] mb-3 leading-[1.1] tracking-tight">
                    Get 20% Off Your First Order
                  </h2>
                  <p className="text-[17px] text-[#0b1320]/60 mb-8 leading-relaxed max-w-md mx-auto">
                    Join the launch list to get your 20% code instantly — plus early access when we go live.
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3 max-w-sm mx-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full h-[56px] px-5 rounded-lg border border-[#0b1320]/20 bg-white text-[#0b1320] placeholder-[#0b1320]/35 focus:outline-none focus:ring-2 focus:ring-[#0981e3]/25 focus:border-[#0981e3] transition-all text-[17px]"
                    />
                    <button
                      type="submit"
                      className="w-full h-[56px] rounded-lg bg-[#0981e3] text-white font-semibold text-[17px] hover:bg-[#0770c9] transition-colors"
                    >
                      Claim My 20% Code
                    </button>
                  </form>

                  {/* Decline link */}
                  <button
                    onClick={handleClose}
                    className="mt-6 text-[14px] text-[#0b1320]/60 hover:text-[#0b1320]/80 transition-colors"
                  >
                    No thanks
                  </button>
                </>
              ) : (
                /* Success State */
                <div className="py-4">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#0981e3]/10 mb-5">
                    <svg className="w-12 h-12 text-[#0981e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-[32px] font-bold text-[#0b1320] mb-2">
                    You're on the list
                  </h2>
                  <p className="text-[17px] text-[#0b1320]/60">
                    Check your inbox for your 20% off code.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
