import Link from "next/link";
import { IMPERIUM } from "@/lib/imperium";

const GREEN = "#0A1510";
const GOLD = "#C9A35A";
const GOLD_SOFT = "#D4AF6A";

const SOCIAL = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/" },
];

function SocialIcon({ id }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-4 w-4",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (id) {
    case "instagram":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="16.8" cy="7.2" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path d="M14 8h2.5V5.5H14c-2.2 0-3.5 1.4-3.5 3.5v1.5H8.5V13H10.5v7.5h3V13H16l.5-2.5h-3V9.2c0-.7.3-1.2 1.5-1.2Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 11v6M8 8.2v.01M12 17v-3.5c0-1.2.8-2 2-2s2 .8 2 2V17" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <rect x="3.5" y="7" width="17" height="10" rx="2.5" />
          <path d="m11 10.2 4 1.8-4 1.8v-3.6Z" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
}

function TrustBadge({ className = "" }) {
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 96 96" className="absolute inset-0 h-full w-full">
        <circle cx="48" cy="48" r="45.5" fill="none" stroke={GOLD} strokeWidth="1.2" />
        <circle cx="48" cy="48" r="40" fill="none" stroke={GOLD} strokeWidth="0.7" opacity="0.55" />
        <path d="M20 52c4-14 12-22 28-22s24 8 28 22" fill="none" stroke={GOLD} strokeWidth="1.1" />
        <path
          d="M24 48c1.5-2 3-3.2 5-3.2M67 44.8c2 0 3.5 1.2 5 3.2M28 58c2.5 1.5 6 2.5 10 2.5h20c4 0 7.5-1 10-2.5"
          fill="none"
          stroke={GOLD}
          strokeWidth="1"
        />
        <path d="M30 42c2-4 5-6 8-6M58 36c3 0 6 2 8 6" fill="none" stroke={GOLD} strokeWidth="1" />
      </svg>
      <p
        className="relative z-[1] max-w-[3.1rem] text-center text-[7px] font-semibold uppercase leading-[1.2] tracking-[0.04em] sm:max-w-[3.4rem] sm:text-[8.5px]"
        style={{ color: GOLD }}
      >
        30+ Years of Building Trust
      </p>
    </div>
  );
}

export default function ImperiumFooter() {
  const primaryPhone = IMPERIUM.phones[0];
  const addressLine = `${IMPERIUM.road}, ${IMPERIUM.city}`;
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: GREEN }}
      aria-label="Site footer"
    >
      <svg
        className="pointer-events-none absolute bottom-10 right-0 z-0 hidden w-[280px] opacity-[0.18] sm:block lg:bottom-12 lg:right-4 lg:w-[360px]"
        viewBox="0 0 360 220"
        fill="none"
        aria-hidden
      >
        <path
          d="M40 200 V110 L70 85 L95 110 V200 M95 200 V95 L130 60 L160 95 V200 M160 200 V120 H190 V85 L230 45 L270 85 V120 H300 V200"
          stroke={GOLD}
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path d="M20 200 H340" stroke={GOLD} strokeWidth="1.1" opacity="0.7" />
      </svg>

      <div className="relative z-[1] mx-auto max-w-[1500px] px-5 pt-9 sm:px-8 sm:pt-14 lg:px-10 lg:pt-16">
        {/* ——— Phone layout ——— */}
        <div className="lg:hidden">
          <div className="flex items-start justify-between gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/imperium-logo.png?v=7"
              alt={IMPERIUM.name}
              className="h-[4.25rem] w-auto object-contain object-left"
              draggable={false}
            />
            <TrustBadge className="h-[3.75rem] w-[3.75rem]" />
          </div>

          <div className="mt-3 flex items-center gap-2">
            <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/45">
              A project by
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/lilasons-logo.png"
              alt={IMPERIUM.developer}
              className="h-7 w-auto object-contain object-left"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(72%) sepia(28%) saturate(650%) hue-rotate(5deg)",
              }}
              draggable={false}
            />
          </div>

          <div className="mt-4 flex items-center gap-2.5">
            {SOCIAL.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:bg-white/5"
                style={{ borderColor: `${GOLD}99`, color: GOLD }}
              >
                <SocialIcon id={item.id} />
              </a>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-2 gap-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: GOLD }}>
                Quick Links
              </p>
              <ul className="mt-2.5">
                {IMPERIUM.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-1.5 text-[13px] text-white/80 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: GOLD }}>
                Contact
              </p>
              <ul className="mt-2.5 space-y-2">
                <li>
                  <a
                    href={`tel:${primaryPhone.replace(/\s/g, "")}`}
                    className="block text-[13px] text-white/85"
                  >
                    {primaryPhone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${IMPERIUM.email}`}
                    className="block break-all text-[11px] leading-snug text-white/80"
                  >
                    {IMPERIUM.email}
                  </a>
                </li>
                <li className="text-[11px] leading-snug text-white/65">{addressLine}</li>
              </ul>
              <Link
                href="/contact"
                className="mt-4 inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--imp-ink)]"
                style={{
                  background: `linear-gradient(165deg, ${GOLD_SOFT}, ${GOLD} 48%, #8a6a3a)`,
                }}
              >
                Enquire
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ——— Desktop layout ——— */}
        <div className="hidden lg:grid lg:grid-cols-[1.35fr_auto_0.85fr_auto_1.05fr] lg:items-start lg:gap-0">
          <div className="lg:pr-10">
            <div className="flex items-start gap-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/imperium-logo.png?v=7"
                alt={IMPERIUM.name}
                className="h-[6.5rem] w-auto object-contain object-left"
                draggable={false}
              />
              <TrustBadge className="h-[5.1rem] w-[5.1rem]" />
            </div>
            <p className="mt-5 max-w-[28rem] text-[14px] leading-relaxed text-white/75">
              Boutique offices and premium retail on Jalna Road — a sculptural commercial
              address for brands that intend to be seen in Chhatrapati Sambhajinagar.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/45">
                A project by
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/lilasons-logo.png"
                alt={IMPERIUM.developer}
                className="h-9 w-auto object-contain object-left"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(72%) sepia(28%) saturate(650%) hue-rotate(5deg)",
                }}
                draggable={false}
              />
            </div>
            <div className="mt-6 h-px w-full max-w-[14rem]" style={{ backgroundColor: `${GOLD}55` }} />
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border transition hover:bg-white/5"
                  style={{ borderColor: `${GOLD}99`, color: GOLD }}
                >
                  <SocialIcon id={item.id} />
                </a>
              ))}
            </div>
          </div>

          <div aria-hidden className="w-px self-stretch" style={{ backgroundColor: `${GOLD}40` }} />

          <div className="lg:px-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em]" style={{ color: GOLD }}>
              Quick Links
            </p>
            <ul className="mt-4 space-y-0.5">
              {IMPERIUM.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 text-[14px] text-white/80 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div aria-hidden className="w-px self-stretch" style={{ backgroundColor: `${GOLD}40` }} />

          <div className="lg:pl-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em]" style={{ color: GOLD }}>
              Get In Touch
            </p>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  href={`tel:${primaryPhone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-[14px] text-white/85 transition hover:text-white"
                >
                  <span className="mt-0.5" style={{ color: GOLD }} aria-hidden>
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <path d="M6.5 4.5h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A14.5 14.5 0 0 1 4.5 6.5a2 2 0 0 1 2-2Z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{primaryPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${IMPERIUM.email}`}
                  className="flex items-start gap-3 text-[14px] text-white/85 transition hover:text-white"
                >
                  <span className="mt-0.5" style={{ color: GOLD }} aria-hidden>
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
                      <path d="m4.5 7 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="break-all">{IMPERIUM.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[14px] text-white/85">
                <span className="mt-0.5" style={{ color: GOLD }} aria-hidden>
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.2" />
                  </svg>
                </span>
                <span>
                  {addressLine} – 431001
                </span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-7 inline-flex h-11 items-center gap-2 rounded-full px-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--imp-ink)] shadow-[0_12px_28px_-14px_rgba(201,163,90,0.7)] transition hover:brightness-105"
              style={{
                background: `linear-gradient(165deg, ${GOLD_SOFT}, ${GOLD} 48%, #8a6a3a)`,
              }}
            >
              Enquire Now
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <svg className="mt-8 w-full opacity-50 sm:mt-14" viewBox="0 0 1200 28" fill="none" aria-hidden>
          <path
            d="M0 16 C80 4 140 24 220 12 C300 0 360 22 440 10 C520 -2 580 20 660 8 C740 -4 800 22 880 12 C960 2 1040 22 1120 10 C1160 4 1185 14 1200 12"
            stroke={GOLD}
            strokeWidth="1.1"
          />
        </svg>

        <div className="flex flex-col gap-2 border-t border-white/10 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-6">
          <p className="text-[11px] text-white/50 sm:text-[12px]">
            © {year} {IMPERIUM.name}
          </p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-white/50 sm:text-[12px]">
            <Link href="/contact" className="transition hover:text-white/80">
              Privacy
            </Link>
            <span aria-hidden className="text-white/25">
              |
            </span>
            <Link href="/contact" className="transition hover:text-white/80">
              Terms
            </Link>
            <span aria-hidden className="text-white/25">
              |
            </span>
            <Link href="/contact" className="transition hover:text-white/80">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
