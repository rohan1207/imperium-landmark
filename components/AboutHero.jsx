import Link from "next/link";
import { ABOUT, IMPERIUM } from "@/lib/imperium";

const GREEN = "#0D2F24";
const GOLD = "#B5945B";

function FactIcon({ type }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: GOLD,
    strokeWidth: "1.55",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-[18px] w-[18px]",
    "aria-hidden": true,
  };

  switch (type) {
    case "typology":
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="16" rx="1" />
          <path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h6" />
        </svg>
      );
    case "offer":
      return (
        <svg {...common}>
          <path d="M4 9h16l-1.2 10.2A2 2 0 0 1 16.8 21H7.2a2 2 0 0 1-2-1.8L4 9Z" />
          <path d="M8 9V7a4 4 0 0 1 8 0v2" />
        </svg>
      );
    case "corridor":
      return (
        <svg {...common}>
          <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.2" />
        </svg>
      );
    case "status":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4.5l3 1.5" />
        </svg>
      );
    default:
      return null;
  }
}

const FACT_ICONS = ["typology", "offer", "corridor", "status"];

export default function AboutHero() {
  const title = ABOUT.title;
  const accent = "remembered";
  const [before, after] = title.split(accent);

  return (
    <section className="relative bg-[var(--imp-stone)]" aria-label="About Imperium">
      {/* Split hero */}
      <div className="grid lg:grid-cols-2">
        {/* Left — copy */}
        <div
          className="relative flex flex-col justify-center px-5 pb-10 pt-[calc(4.25rem+1.75rem)] sm:px-8 sm:pb-20 sm:pt-[calc(5rem+3rem)] lg:px-10 lg:pb-28 lg:pt-[calc(5.5rem+3.5rem)] xl:px-14"
          style={{ backgroundColor: GREEN }}
        >
          <div className="mx-auto w-full max-w-[36rem] lg:mx-0 lg:max-w-[34rem]">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 sm:w-10" style={{ backgroundColor: GOLD }} />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
                {ABOUT.eyebrow}
              </p>
            </div>

            <h1
              className="mt-3 text-[clamp(1.55rem,4.2vw,3.15rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white sm:mt-4"
              style={{ fontFamily: "var(--imp-display)" }}
            >
              {before}
              <em style={{ color: GOLD, fontStyle: "italic" }}>{accent}</em>
              {after}
            </h1>

            <div className="mt-5 space-y-4 text-[14px] leading-relaxed text-white/75 sm:text-[15px]">
              <p>{ABOUT.lead}</p>
              {ABOUT.paragraphs.slice(0, 2).map((p) => (
                <p key={p.slice(0, 28)} className="hidden sm:block">
                  {p}
                </p>
              ))}
              <p className="sm:hidden">{ABOUT.paragraphs[0]}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/amenities"
                className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--imp-ink)] shadow-[0_12px_28px_-14px_rgba(201,163,90,0.65)] transition hover:brightness-105 sm:text-[12px]"
                style={{
                  background: `linear-gradient(165deg, #d4b06e, ${GOLD} 48%, #8a6a3a)`,
                }}
              >
                Amenities & Specs
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/35 px-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white/10 sm:text-[12px]"
              >
                Enquire
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right — image */}
        <div className="relative min-h-[220px] sm:min-h-[380px] lg:min-h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMPERIUM.hero.desktop}
            alt={IMPERIUM.hero.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[rgba(13,47,36,0.25)] lg:block" />
        </div>
      </div>

      {/* Floating facts ribbon */}
      <div className="relative z-[2] mx-auto -mt-5 max-w-[1500px] px-5 sm:-mt-10 sm:px-8 lg:-mt-12 lg:px-10">
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[1rem] bg-white shadow-[0_22px_50px_-28px_rgba(13,47,36,0.45)] ring-1 ring-black/[0.04] sm:rounded-[1.35rem] lg:grid-cols-4">
          {ABOUT.facts.map((fact, i) => (
            <li
              key={fact.label}
              className="flex items-start gap-2.5 bg-[#fffdf9] px-3 py-3.5 sm:gap-3.5 sm:px-5 sm:py-5 lg:px-6 lg:py-6"
            >
              <span
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[0.6rem] sm:h-10 sm:w-10 sm:rounded-[0.7rem]"
                style={{ backgroundColor: "#F3E8D8" }}
              >
                <FactIcon type={FACT_ICONS[i]} />
              </span>
              <span className="min-w-0">
                <span
                  className="block text-[11px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: GOLD }}
                >
                  {fact.label}
                </span>
                <span className="mt-1 block text-[12px] font-semibold leading-snug text-[var(--imp-ink)] sm:text-[14px]">
                  {fact.value}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
