import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden mt-[100px] sm:mt-[110px]">
      {/* Mobile — text above, image below */}
      <div className="sm:hidden">
        <div className="bg-secondary text-center px-4 py-8">
          <h1 className="font-heading text-[32px] font-bold tracking-tight text-white mb-3 leading-[1.05]">
            Built for Men Who Read Labels
          </h1>
          <p className="text-white/80 text-base leading-relaxed max-w-[340px] mx-auto mb-6">
            Research-backed testosterone support for energy, drive, and recovery.
          </p>
          <Link
            href="/product"
            className="inline-flex items-center justify-center h-12 px-8 rounded-[5px] bg-primary text-white font-heading font-bold text-base hover:bg-primary-hover transition-colors"
          >
            SHOP NOW
          </Link>
        </div>
        <div className="relative w-full aspect-square">
          <Image
            src="/hero-mobile.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden sm:block relative w-full" style={{ aspectRatio: "2545 / 827" }}>
        <Image
          src="/hero-mountain.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        {/* Text content — heading top, button bottom */}
        <div className="absolute inset-0 flex flex-col justify-between py-10 lg:py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <h1 className="font-heading text-5xl lg:text-7xl font-bold tracking-tight text-white mb-5 leading-[1.05]">
                Built for Men Who Read Labels
              </h1>
              <p className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-lg">
                Research-backed testosterone support for energy, drive, and recovery.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <Link
              href="/product"
              className="inline-flex items-center justify-center h-12 px-8 rounded-[5px] bg-primary text-white font-heading font-bold text-base hover:bg-primary-hover transition-colors"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
