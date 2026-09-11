import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden mt-[100px] sm:mt-[110px]">
      <h1 className="sr-only">Built for Men Who Read Labels — Research-backed testosterone support</h1>

      {/* Mobile */}
      <div className="sm:hidden relative w-full aspect-square">
        <Image
          src="/hero-mobile.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        {/* Text content — heading top, button bottom */}
        <div className="absolute inset-0 flex flex-col justify-between px-4 py-8">
          <div className="text-center max-w-[340px] mx-auto">
            <p className="font-heading text-[32px] font-bold tracking-tight text-white mb-3 leading-[1.05]">
              Built for Men Who Read Labels
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              Research-backed testosterone support for energy, drive, and recovery.
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/product"
              className="inline-flex items-center justify-center h-12 px-8 rounded-[5px] bg-primary text-white font-heading font-bold text-base hover:bg-primary-hover transition-colors"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop — text baked into image, whole hero links to product */}
      <Link href="/product" className="hidden sm:block relative w-full" style={{ aspectRatio: "2172 / 724" }}>
        <Image
          src="/hero-mountain.jpg"
          alt="Peak Performance — Built for Men Who Read Labels. Shop Now."
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </Link>
    </section>
  );
}
