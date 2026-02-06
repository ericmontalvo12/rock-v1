"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { href: "/home-v2", label: "Home V2" },
  { href: "/formula-v2", label: "Formula V2" },
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
        className={`announceBar bg-black border-b border-border-subtle text-center transition-all duration-300 ease-in-out overflow-hidden ${showAnnouncement ? 'h-9 flex items-center justify-center px-4' : 'h-0'}`}
      >
        {/* Desktop: static text */}
        <p className="hidden sm:block text-sm font-medium text-white whitespace-nowrap">
          Free shipping on 2+ bottles <span className="text-text-muted mx-2">•</span> Best value bundles <span className="text-text-muted mx-2">•</span> 30-day guarantee
        </p>
        {/* Mobile: scrolling marquee */}
        <div className="sm:hidden announceTrack">
          <span className="text-xs font-medium text-white whitespace-nowrap">
            Free shipping on 2+ bottles <span className="text-text-muted mx-2">•</span> Best value bundles <span className="text-text-muted mx-2">•</span> 30-day guarantee <span className="text-text-muted mx-2">•</span>
          </span>
          <span className="text-xs font-medium text-white whitespace-nowrap">
            Free shipping on 2+ bottles <span className="text-text-muted mx-2">•</span> Best value bundles <span className="text-text-muted mx-2">•</span> 30-day guarantee <span className="text-text-muted mx-2">•</span>
          </span>
          <span className="text-xs font-medium text-white whitespace-nowrap">
            Free shipping on 2+ bottles <span className="text-text-muted mx-2">•</span> Best value bundles <span className="text-text-muted mx-2">•</span> 30-day guarantee <span className="text-text-muted mx-2">•</span>
          </span>
          <span className="text-xs font-medium text-white whitespace-nowrap">
            Free shipping on 2+ bottles <span className="text-text-muted mx-2">•</span> Best value bundles <span className="text-text-muted mx-2">•</span> 30-day guarantee <span className="text-text-muted mx-2">•</span>
          </span>
        </div>
      </div>
      {/* Navbar */}
      <nav className="bg-surface/95 backdrop-blur-xl border-b border-black/[0.08] shadow-sm">
        <div className="mx-auto max-w-7xl px-3 md:px-4 lg:px-8">
          {/* Desktop Layout */}
          <div className="hidden md:flex h-[68px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-new.png"
              alt="Rock Mountain Performance"
              width={200}
              height={60}
              className="h-[68px] w-auto scale-[2.15] translate-y-[8px]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-text-primary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative">
              <Button variant="ghost" size="icon" aria-label="Cart" className="cursor-pointer text-text-primary hover:text-primary hover:bg-surface-elevated">
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
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden grid grid-cols-3 items-center h-[56px] max-h-[56px] overflow-hidden">
          {/* Left: Hamburger */}
          <div className="justify-self-start flex items-center">
            <button
              className="p-2 text-text-primary hover:text-primary transition-colors"
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

          {/* Center: Logo */}
          <div className="justify-self-center flex items-center justify-center">
            <Link href="/" className="block">
              <Image
                src="/logo-new.png"
                alt="Rock Mountain Performance"
                width={210}
                height={60}
                className="max-w-[180px] sm:max-w-[210px] max-h-[50px] w-auto h-auto object-contain scale-[2] sm:scale-[1.75] translate-y-[5px]"
                priority
              />
            </Link>
          </div>

          {/* Right: Cart */}
          <div className="justify-self-end flex items-center justify-end">
            <Link href="/cart" className="relative p-2 block">
              <ShoppingCart className="h-5 w-5 text-text-primary" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-primary text-background text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border-subtle"
          >
            <nav className="flex flex-col px-4 py-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 text-text-secondary hover:text-primary transition-colors"
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
