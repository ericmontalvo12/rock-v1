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
    // Check if user has already seen/dismissed the popup
    const hasSeenPopup = localStorage.getItem("hasSeenEmailPopup");
    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenEmailPopup", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Email submitted:", email);
      setIsSubmitted(true);
      localStorage.setItem("hasSeenEmailPopup", "true");
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
            className="absolute inset-0 bg-white flex items-center justify-center"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="px-8 py-10 text-center">
              {!isSubmitted ? (
                <>
                  {/* Logo */}
                  <div className="mb-6">
                    <Image
                      src="/logo.png"
                      alt="Rock Mountain Performance"
                      width={280}
                      height={60}
                      className="mx-auto h-16 w-auto"
                    />
                  </div>

                  {/* Header */}
                  <p className="text-gray-900 font-bold text-sm tracking-wide uppercase mb-2">
                    You've Unlocked
                  </p>
                  <h2 className="text-6xl sm:text-7xl font-black text-gray-900 mb-4">
                    10% OFF!
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Enter your email to claim your discount:
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-4 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2d94ff] focus:border-transparent transition-all text-center"
                    />
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-lg bg-[#2d94ff] text-white font-bold text-lg uppercase tracking-wide hover:bg-[#1a7ee6] transition-colors"
                    >
                      Claim My Discount
                    </button>
                  </form>

                  {/* Fine print */}
                  <p className="text-xs text-gray-400 mt-6 mb-4">
                    Valid on your first order
                  </p>

                  {/* No thanks link */}
                  <button
                    onClick={handleClose}
                    className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors"
                  >
                    No Thanks, I'll Pay Full Price
                  </button>
                </>
              ) : (
                /* Success State */
                <div className="py-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 mb-3">
                    You're In!
                  </h2>
                  <p className="text-gray-600">
                    Check your inbox for your 10% off code.
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
