import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden mt-[100px] sm:mt-[110px]">
      {/* Mobile image — 1:1 aspect ratio like Bucked Up */}
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
        {/* Text content */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center max-w-[340px]">
            <h1 className="font-heading text-[32px] font-bold tracking-tight text-white mb-3 leading-[1.05]">
              Built for Men Who Read Labels
            </h1>
            <p className="text-white/80 text-base mb-6 leading-relaxed">
              Research-backed testosterone support for energy, drive, and recovery.
            </p>
            <div className="flex flex-col gap-3">
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
            <p className="text-white/60 text-xs mt-4">
              Free shipping &bull; 30-day money back guarantee
            </p>
          </div>
        </div>
      </div>

      {/* Desktop image — fully visible, no cropping */}
      <div className="hidden sm:block relative w-full">
        <Image
          src="/hero-mountain.jpg"
          alt=""
          aria-hidden="true"
          width={5504}
          height={3072}
          sizes="100vw"
          className="w-full h-auto block"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        {/* Text content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <h1 className="font-heading text-5xl lg:text-7xl font-bold tracking-tight text-white mb-5 leading-[1.05]">
                Built for Men Who Read Labels
              </h1>
              <p className="text-white/80 text-lg lg:text-xl mb-8 leading-relaxed max-w-lg">
                Research-backed testosterone support for energy, drive, and recovery.
              </p>
              <div className="flex flex-row gap-4">
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
              <p className="text-white/60 text-sm mt-5">
                Free shipping &bull; 30-day money back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
