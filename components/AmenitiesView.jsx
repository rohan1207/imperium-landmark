import Link from "next/link";
import { AMENITIES } from "@/lib/imperium";

const GOLD = "#B59461";
const CREAM = "#F9F6F0";
const GREEN = "#0A2A22";
const WHITE = "#FFFFFF";

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="8.25" stroke={GOLD} strokeWidth="1.4" />
      <path
        d="M6.2 10.2 8.7 12.6 13.6 7.6"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AmenityBlock({ group, index }) {
  const imageLeft = index % 2 === 0;
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="relative px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1500px] items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className={`relative ${imageLeft ? "lg:order-1" : "lg:order-2"}`}>
          <div className="relative overflow-hidden rounded-[1.5rem] shadow-[0_24px_50px_-28px_rgba(10,42,34,0.45)] sm:rounded-[1.75rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={group.image}
              alt={group.title}
              className="aspect-[16/11] w-full object-cover"
            />
            <span
              className="absolute left-3 top-3 flex h-11 w-11 items-center justify-center rounded-full text-[12px] font-semibold tracking-[0.08em] text-[var(--imp-ink)] shadow-md sm:left-4 sm:top-4 sm:h-12 sm:w-12 sm:text-[13px]"
              style={{
                background: `linear-gradient(165deg, #d4b06e, ${GOLD} 48%, #8a6a3a)`,
              }}
            >
              {num}
            </span>
          </div>
        </div>

        <div className={`${imageLeft ? "lg:order-2" : "lg:order-1"}`}>
          <h2
            className="text-[clamp(1.55rem,3vw,2.25rem)] font-medium uppercase leading-[1.1] tracking-[-0.02em]"
            style={{ fontFamily: "var(--imp-display)", color: GREEN }}
          >
            {group.title}
          </h2>
          <ul className="mt-6 space-y-3.5 sm:mt-7 sm:space-y-4">
            {group.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14px] text-[#3a3a3a] sm:text-[15px]">
                <span className="mt-1 shrink-0">
                  <CheckIcon />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function AmenitiesView() {
  const [before, after] = AMENITIES.title.split(AMENITIES.titleAccent);

  return (
    <div style={{ backgroundColor: CREAM }}>
      {/* Hero — matches mockup: cream copy + wave-masked lobby */}
      <section
        className="relative overflow-hidden pt-[calc(4.25rem+0.5rem)] sm:pt-[calc(5rem+0.75rem)] lg:pt-[calc(5.5rem+0.5rem)]"
        aria-label="Amenities & Specs"
        style={{ backgroundColor: CREAM }}
      >
        {/* Desktop hero — cream copy left, wave-masked lobby right */}
        <div className="relative hidden h-[min(82vh,760px)] lg:block">
          {/* Full-bleed wave-masked image on the right */}
          <div className="absolute inset-y-0 right-0 w-[64%] xl:w-[66%]">
            <svg
              className="h-full w-full"
              viewBox="0 0 1000 800"
              preserveAspectRatio="xMidYMid slice"
              role="img"
              aria-label="Imperium Landmark lobby and amenities"
            >
              <defs>
                <linearGradient id="amenities-hero-fade" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="4%" stopColor="white" stopOpacity="0.65" />
                  <stop offset="10%" stopColor="white" stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="1" />
                </linearGradient>
                <mask id="amenities-hero-mask">
                  {/* Gentle organic S-curve — matches mockup, not a pill */}
                  <path
                    fill="url(#amenities-hero-fade)"
                    d="M78 0 C52 90 28 170 48 260 C72 360 110 420 88 520 C62 640 24 710 42 800 L1000 800 L1000 0 Z"
                  />
                </mask>
              </defs>
              <image
                href={AMENITIES.heroImage}
                width="1000"
                height="800"
                preserveAspectRatio="xMaxYMid slice"
                mask="url(#amenities-hero-mask)"
              />
            </svg>
          </div>

          {/* Copy — left column */}
          <div className="relative z-[2] flex h-full max-w-[1500px] items-center px-10 xl:px-14">
            <div className="relative w-[min(38%,28rem)] -translate-y-6 xl:w-[min(36%,30rem)]">
              <div className="flex items-center gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1A1A1A] xl:text-[12px]">
                  {AMENITIES.eyebrow}
                </p>
                <span className="h-px w-11" style={{ backgroundColor: GOLD }} />
              </div>

              <h1
                className="mt-4 text-[clamp(2.4rem,3.7vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.03em] text-[#1A1A1A]"
                style={{ fontFamily: "var(--imp-display)" }}
              >
                {before}
                <em style={{ color: GOLD, fontStyle: "italic" }}>{AMENITIES.titleAccent}</em>
                {after}
              </h1>

              <p className="mt-5 max-w-[22.5rem] text-[14px] leading-[1.7] text-[#2a2a2a] xl:max-w-[24rem] xl:text-[15px]">
                {AMENITIES.body}
              </p>

              <span
                className="mt-6 block h-px w-12"
                style={{ backgroundColor: GOLD }}
                aria-hidden
              />
            </div>
          </div>

          {/* Bottom white wave + gold contour lines */}
          <svg
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[120px] w-full xl:h-[150px]"
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M0 95 C200 130 340 55 520 82 C720 112 820 35 1020 62 C1200 86 1320 28 1440 55 L1440 150 L0 150 Z"
              fill={WHITE}
            />
            <path
              d="M0 95 C200 130 340 55 520 82 C720 112 820 35 1020 62 C1200 86 1320 28 1440 55"
              fill="none"
              stroke={GOLD}
              strokeWidth="1.25"
              opacity="0.8"
            />
            <path
              d="M0 110 C220 138 360 68 540 92 C740 120 860 45 1060 70 C1240 92 1340 40 1440 64"
              fill="none"
              stroke={GOLD}
              strokeWidth="1"
              opacity="0.32"
            />
            <path
              d="M20 122 C150 142 250 118 340 130"
              fill="none"
              stroke={GOLD}
              strokeWidth="0.95"
              opacity="0.55"
            />
            <path
              d="M1140 68 C1270 42 1360 72 1435 58"
              fill="none"
              stroke={GOLD}
              strokeWidth="0.95"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Mobile / small tablet hero */}
        <div className="relative lg:hidden">
          <div className="px-5 pb-6 pt-4 sm:px-8 sm:pb-8 sm:pt-6">
            <div className="flex items-center gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] sm:text-[12px]">
                {AMENITIES.eyebrow}
              </p>
              <span className="h-px w-10" style={{ backgroundColor: GOLD }} />
            </div>

            <h1
              className="mt-3 text-[clamp(1.85rem,7vw,2.6rem)] font-medium leading-[1.08] tracking-[-0.03em] text-[#1A1A1A]"
              style={{ fontFamily: "var(--imp-display)" }}
            >
              {before}
              <em style={{ color: GOLD, fontStyle: "italic" }}>{AMENITIES.titleAccent}</em>
              {after}
            </h1>

            <p className="mt-4 max-w-[34rem] text-[14px] leading-relaxed text-[#2f2f2f] sm:text-[15px]">
              {AMENITIES.body}
            </p>

            <span
              className="mt-5 block h-px w-11"
              style={{ backgroundColor: GOLD }}
              aria-hidden
            />
          </div>

          <div className="relative px-0">
            <div
              className="overflow-hidden"
              style={{
                clipPath:
                  "polygon(0 4%, 100% 0, 100% 88%, 78% 100%, 22% 96%, 0 100%)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={AMENITIES.heroImage}
                alt="Imperium Landmark lobby and amenities"
                className="aspect-[16/11] w-full object-cover sm:aspect-[16/10]"
              />
            </div>
          </div>

          <svg
            className="pointer-events-none relative z-[1] -mt-10 h-14 w-full sm:-mt-12 sm:h-16"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M0 36 C220 68 420 12 720 40 C1020 68 1220 18 1440 42 L1440 80 L0 80 Z"
              fill={WHITE}
            />
            <path
              d="M0 36 C220 68 420 12 720 40 C1020 68 1220 18 1440 42"
              fill="none"
              stroke={GOLD}
              strokeWidth="1.1"
              opacity="0.55"
            />
          </svg>
        </div>
      </section>

      {/* Content starts on white then cream via blocks */}
      <div style={{ backgroundColor: WHITE }}>
        {AMENITIES.groups.map((group, i) => (
          <div
            key={group.id}
            className="relative"
            style={{ backgroundColor: i === 0 ? WHITE : CREAM }}
          >
            <AmenityBlock group={group} index={i} />
            {i < AMENITIES.groups.length - 1 ? (
              <svg
                className="pointer-events-none relative z-[1] -mt-2 h-8 w-full opacity-40 sm:h-10"
                viewBox="0 0 1440 40"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M0 22 C200 6 400 34 720 18 C1040 2 1240 30 1440 16"
                  fill="none"
                  stroke={GOLD}
                  strokeWidth="1.1"
                />
              </svg>
            ) : null}
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div
        className="flex flex-wrap items-center justify-center gap-3 px-5 py-12 sm:gap-4 sm:px-8 sm:py-14 lg:py-16"
        style={{ backgroundColor: CREAM }}
      >
        <Link
          href="/gallery"
          className="inline-flex h-11 items-center gap-2 rounded-full px-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition hover:brightness-110"
          style={{ backgroundColor: GREEN }}
        >
          View Gallery
          <span aria-hidden>→</span>
        </Link>
        <Link
          href="/plans"
          className="inline-flex h-11 items-center gap-2 rounded-full border px-6 text-[12px] font-semibold uppercase tracking-[0.12em] transition hover:bg-black/[0.03]"
          style={{ borderColor: GOLD, color: GOLD }}
        >
          Download Plans
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
