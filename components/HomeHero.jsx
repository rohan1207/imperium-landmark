import Link from "next/link";
import { IMPERIUM } from "@/lib/imperium";

const GOLD = "#B59461";

export default function HomeHero() {
  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-[var(--imp-ink)]"
      aria-label={IMPERIUM.name}
    >
      {/* Desktop skyline */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${IMPERIUM.hero.desktop}?v=4`}
        alt={IMPERIUM.hero.alt}
        className="absolute inset-0 hidden h-full w-full object-cover object-[72%_center] md:block lg:object-[70%_center]"
      />
      {/* Phone skyline */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${IMPERIUM.hero.phone}?v=4`}
        alt={IMPERIUM.hero.alt}
        className="absolute inset-0 h-full w-full object-cover object-[68%_center] md:hidden"
      />

      {/* Soft readabilty wash over empty sky only */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent md:from-black/35 md:via-black/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/35 to-transparent md:h-28"
        aria-hidden
      />

      {/* Copy sits in empty sky — left on desktop, upper on phone */}
      <div className="relative z-[1] mx-auto flex min-h-[100svh] max-w-[1500px] items-start px-5 pb-12 pt-[calc(4.25rem+2.75rem)] sm:px-8 sm:pt-[calc(5rem+3rem)] md:items-center md:pt-[calc(5rem+1.5rem)] lg:px-10 lg:pt-[calc(5.5rem+1rem)]">
        <div className="w-full max-w-[22rem] sm:max-w-[26rem] md:max-w-[28rem] lg:max-w-[32rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/imperium-logo.png"
            alt={IMPERIUM.name}
            className="h-auto w-[min(100%,15.5rem)] object-contain object-left drop-shadow-[0_8px_28px_rgba(0,0,0,0.45)] sm:w-[min(100%,17.5rem)] md:w-[min(100%,19rem)]"
            draggable={false}
          />

          <p
            className="mt-5 max-w-[20rem] text-[13px] leading-relaxed text-white/90 sm:mt-6 sm:max-w-[22rem] sm:text-[14px] md:text-[15px]"
            style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}
          >
            Boutique offices &amp; premium retail on Jalna Road.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--imp-ink)] shadow-[0_12px_28px_-14px_rgba(0,0,0,0.45)] transition hover:brightness-105 sm:px-6 sm:text-[12px]"
              style={{
                background: `linear-gradient(165deg, #d4b06e, ${GOLD} 48%, #8a6a3a)`,
              }}
            >
              Enquire
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/gallery"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/55 bg-black/20 px-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition hover:bg-white/10 sm:px-6 sm:text-[12px]"
            >
              View gallery
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>

      <h1 className="sr-only">{IMPERIUM.name}</h1>
    </section>
  );
}
