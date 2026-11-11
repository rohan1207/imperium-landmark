import Link from "next/link";
import Proximity from "@/components/Proximity";
import { LOCATION_DISTANCES, LOCATION_PAGE, IMPERIUM } from "@/lib/imperium";

const GOLD = "#B59461";
const CREAM = "#F9F6F0";
const GREEN = "#0A2A22";
const WHITE = "#FFFFFF";

function DistIcon({ type }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: GREEN,
    strokeWidth: "1.65",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-[15px] w-[15px]",
    "aria-hidden": true,
  };

  switch (type) {
    case "plane":
      return (
        <svg {...common}>
          <path d="M10.5 19.5 8 21l.5-3.5L3 12.5l1.8-.4 4.7 1.7L15 4l1.7.5-3.8 9.6 4.7 1.7.4 1.8-5.5-2.1Z" />
        </svg>
      );
    case "hospital":
      return (
        <svg {...common}>
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <path d="M12 8.5v7M8.5 12h7" />
        </svg>
      );
    case "mall":
      return (
        <svg {...common}>
          <path d="M4 9h16l-1.2 10.2A2 2 0 0 1 16.8 21H7.2a2 2 0 0 1-2-1.8L4 9Z" />
          <path d="M8 9V7a4 4 0 0 1 8 0v2" />
        </svg>
      );
    case "hotel":
      return (
        <svg {...common}>
          <path d="M3 20V9a2 2 0 0 1 2-2h6v13" />
          <path d="M11 20V7h8a2 2 0 0 1 2 2v11" />
          <path d="M3 20h18M7 11h.01M7 15h.01M15 11h.01M15 15h.01" />
        </svg>
      );
    case "stadium":
      return (
        <svg {...common}>
          <path d="M4 16c2-4 4.5-6 8-6s6 2 8 6" />
          <path d="M6 16c1.5-2.5 3.2-3.5 6-3.5s4.5 1 6 3.5" />
          <path d="M8.5 9.5 12 7l3.5 2.5M12 7v5.5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function LocationView() {
  const accent = LOCATION_PAGE.titleAccent;
  const [before, after] = LOCATION_PAGE.title.split(accent);

  return (
    <div style={{ backgroundColor: CREAM }}>
      {/* Hero — copy + map */}
      <section
        className="relative overflow-hidden pt-[calc(4.75rem+0.75rem)] sm:pt-[calc(5.5rem+1rem)] lg:pt-[calc(6rem+0.75rem)]"
        aria-label="Location"
        style={{ backgroundColor: CREAM }}
      >
        <div className="relative mx-auto grid max-w-[1500px] items-center gap-5 px-5 pb-8 sm:gap-8 sm:px-8 sm:pb-12 lg:grid-cols-[0.9fr_1.2fr] lg:gap-10 lg:px-10 lg:pb-14 xl:gap-14">
          <div className="relative z-[1] max-w-xl lg:max-w-none lg:pr-2">
            <div className="flex items-center gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1A1A1A] sm:text-[12px]">
                {LOCATION_PAGE.eyebrow}
              </p>
              <span className="h-px w-11" style={{ backgroundColor: GOLD }} />
            </div>

            <h1
              className="mt-2.5 text-[clamp(1.55rem,4.2vw,3.35rem)] font-medium leading-[1.06] tracking-[-0.03em] text-[#1A1A1A] sm:mt-4"
              style={{ fontFamily: "var(--imp-display)" }}
            >
              {before}
              <em style={{ color: GOLD, fontStyle: "italic" }}>{accent}</em>
              {after}
            </h1>

            <p className="mt-3 max-w-[32rem] text-[13px] leading-[1.65] text-[#2f2f2f] sm:mt-5 sm:text-[15px] sm:leading-[1.7]">
              {LOCATION_PAGE.body}
            </p>

            <div
              className="mt-7 inline-flex max-w-full items-start gap-3 rounded-2xl border bg-white/70 px-4 py-3 text-left backdrop-blur-sm"
              style={{ borderColor: "rgba(181,148,97,0.35)" }}
            >
              <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="none" aria-hidden>
                <path
                  d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
                  stroke={GOLD}
                  strokeWidth="1.6"
                />
                <circle cx="12" cy="10" r="2.2" stroke={GOLD} strokeWidth="1.6" />
              </svg>
              <p className="text-[12px] leading-snug text-[#2a2a2a] sm:text-[13px]">
                {LOCATION_PAGE.address}
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:flex sm:flex-wrap sm:gap-3">
              <a
                href="#location-distances"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition hover:brightness-110 sm:px-6 sm:text-[12px]"
                style={{ backgroundColor: GREEN }}
              >
                Distances
                <span aria-hidden className="hidden sm:inline">→</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border px-3 text-[11px] font-semibold uppercase tracking-[0.1em] transition hover:bg-black/[0.03] sm:px-6 sm:text-[12px]"
                style={{ borderColor: GOLD, color: GOLD }}
              >
                Enquire
                <span aria-hidden className="hidden sm:inline">→</span>
              </Link>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="overflow-hidden rounded-[1.35rem] bg-white p-1.5 shadow-[0_28px_60px_-30px_rgba(10,42,34,0.45)] sm:rounded-[1.75rem] sm:p-2 lg:rounded-[2rem]">
              <div className="overflow-hidden rounded-[1.1rem] bg-[#FDF8EE] sm:rounded-[1.45rem] lg:rounded-[1.65rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={LOCATION_PAGE.heroImage}
                  alt="Illustrated location map of Imperium Landmark on Jalna Road"
                  className="max-h-[48vh] w-full object-cover object-center sm:max-h-none sm:object-contain"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave into next section */}
        <svg
          className="pointer-events-none relative z-[1] -mb-px h-10 w-full sm:h-12 lg:h-14"
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0 38 C220 62 420 12 720 36 C1020 60 1220 18 1440 40 L1440 70 L0 70 Z"
            fill={WHITE}
          />
          <path
            d="M0 38 C220 62 420 12 720 36 C1020 60 1220 18 1440 40"
            fill="none"
            stroke={GOLD}
            strokeWidth="1.1"
            opacity="0.55"
          />
        </svg>
      </section>

      {/* Distances */}
      <section
        id="location-distances"
        className="scroll-mt-24 px-5 py-9 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
        style={{ backgroundColor: WHITE }}
        aria-label="Key distances"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] sm:text-[12px]">
                  Drive times
                </p>
                <span className="h-px w-11" style={{ backgroundColor: GOLD }} />
              </div>
              <h2
                className="mt-2.5 text-[clamp(1.45rem,3.4vw,2.55rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[#1A1A1A] sm:mt-3"
                style={{ fontFamily: "var(--imp-display)" }}
              >
                {LOCATION_PAGE.corridorTitle}
              </h2>
            </div>
            <p className="max-w-md text-[13px] leading-relaxed text-[#3f3f3f] sm:text-[15px] lg:pb-1">
              {LOCATION_PAGE.corridorBody}
            </p>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5 lg:gap-3 xl:gap-4">
            {LOCATION_DISTANCES.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-2.5 rounded-[1rem] border border-black/[0.05] bg-[#FBF7F1] px-3 py-3 sm:flex-col sm:items-start sm:gap-3 sm:rounded-[1.15rem] sm:px-5 sm:py-5 lg:min-h-[9.5rem]"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#E8DCC8" }}
                >
                  <DistIcon type={item.icon} />
                </span>
                <div className="min-w-0 flex-1 sm:mt-3 sm:flex-none">
                  <p
                    className="text-[1.35rem] font-medium tabular-nums leading-none tracking-[-0.02em]"
                    style={{ fontFamily: "var(--imp-display)", color: GOLD }}
                  >
                    {item.time}
                  </p>
                  <p className="mt-2 text-[12.5px] font-medium leading-snug text-[#2a2a2a] sm:text-[13px]">
                    {item.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Connectivity / proximity */}
      <Proximity />

      {/* Closing CTA */}
      <section
        className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
        style={{ backgroundColor: GREEN }}
        aria-label="Visit Imperium"
      >
        <svg
          className="pointer-events-none absolute inset-x-0 top-0 h-10 w-full opacity-40 sm:h-12"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0 30 C240 8 420 40 720 22 C1020 4 1200 34 1440 16"
            fill="none"
            stroke={GOLD}
            strokeWidth="1.1"
          />
        </svg>

        <div className="relative z-[1] mx-auto flex max-w-[1500px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.2em] sm:text-[12px]"
                style={{ color: GOLD }}
              >
                Visit the address
              </p>
              <span className="h-px w-11" style={{ backgroundColor: GOLD }} />
            </div>
            <h2
              className="mt-3 text-[clamp(1.7rem,3.4vw,2.6rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white"
              style={{ fontFamily: "var(--imp-display)" }}
            >
              Ready to see Imperium on{" "}
              <em style={{ color: GOLD, fontStyle: "italic" }}>Jalna Road</em>?
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
              Share a few details and the Lilasons RR sales team will guide you to the site —
              or answer questions about boutique offices, showrooms and rooftop space.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href={`tel:${IMPERIUM.phones[0].replace(/\s+/g, "")}`}
              className="inline-flex h-11 items-center gap-2 rounded-full px-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--imp-ink)] transition hover:brightness-105"
              style={{
                background: `linear-gradient(165deg, #d4b06e, ${GOLD} 48%, #8a6a3a)`,
              }}
            >
              Call sales
              <span aria-hidden>→</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-full border px-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white/5"
              style={{ borderColor: "rgba(181,148,97,0.65)" }}
            >
              Send enquiry
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
