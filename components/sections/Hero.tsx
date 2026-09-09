"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current && window.innerWidth < 640) {
      const h = window.visualViewport ? window.visualViewport.height : window.innerHeight;
      sectionRef.current.style.height = `${h}px`;
    }

    const handleOrientation = () => {
      setTimeout(() => {
        if (sectionRef.current && window.innerWidth < 640) {
          const h = window.visualViewport ? window.visualViewport.height : window.innerHeight;
          sectionRef.current.style.height = `${h}px`;
        }
      }, 200);
    };

    window.addEventListener("orientationchange", handleOrientation);
    return () => window.removeEventListener("orientationchange", handleOrientation);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[480px] h-[100svh] sm:min-h-screen flex items-center pt-[100px] sm:pt-[110px] overflow-hidden"
    >
      {/* Background - Mobile */}
      <div className="absolute inset-0 top-[100px] sm:hidden">
        <Image
          src="/hero-mobile.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 639px) 100vw, 1px"
          className="object-cover object-center"
          priority
        />
      </div>
      {/* Background - Desktop */}
      <div className="absolute inset-0 top-[110px] hidden sm:block">
        <Image
          src="/hero-mountain.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 639px) 1px, 100vw"
          className="object-cover object-[center_calc(20%_-_30px)]"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/50 sm:to-black/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center lg:text-left max-w-[340px] sm:max-w-none mx-auto">
            <h1 className="font-heading text-[28px] sm:text-4xl lg:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-5 leading-[1.1]">
              Built for Men Who Read Labels
            </h1>

            <p className="text-white/80 text-[15px] sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
              Research-backed testosterone support for energy, drive, and recovery.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="/product"
                className="inline-flex items-center justify-center h-12 px-8 rounded-[5px] bg-primary text-white font-heading font-bold text-base hover:bg-primary-hover transition-colors"
              >
                SHOP NOW
              </Link>
              <Link
                href="/formula"
                className="inline-flex items-center justify-center h-12 px-8 rounded-[5px] border-2 border-white text-white font-heading font-bold text-base hover:bg-white hover:text-secondary transition-colors"
              >
                SEE THE FORMULA
              </Link>
            </div>

            <p className="text-white/60 text-xs sm:text-sm mt-4 sm:mt-5">
              Free shipping &bull; 30-day money back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
