"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/formula", label: "Inside The Formula" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setShowAnnouncement(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Bar */}
      <div
        className={`text-white text-center text-xs sm:text-sm font-medium transition-all duration-300 ease-in-out overflow-hidden ${showAnnouncement ? 'h-[30px] py-1.5 px-4' : 'h-0 py-0'}`}
        style={{ backgroundColor: 'rgb(45, 148, 255)' }}
      >
        Use code LAUNCH for 20% off your first order
      </div>
      <div className="border-b border-white/10 bg-black backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[80px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Rock Mountain Performance"
              width={200}
              height={60}
              className="h-[70px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/cart" className="relative">
              <Button variant="ghost" size="icon" aria-label="Cart" className="cursor-pointer text-white hover:text-white/70 hover:bg-white/10">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-background text-xs font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            <Link href="/product">
              <Button size="sm">Shop Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-white/70"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border-subtle bg-background"
          >
            <nav className="flex flex-col px-4 py-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 text-text-secondary hover:text-text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border-subtle">
                <Link href="/product" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Shop Now</Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
