import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { CONTACT_PAGE, IMPERIUM } from "@/lib/imperium";

const GOLD = "#B59461";
const CREAM = "#F9F6F0";
const GREEN = "#0A2A22";

export default function ContactView() {
  const accent = CONTACT_PAGE.titleAccent;
  const [before, after] = CONTACT_PAGE.title.split(accent);

  return (
    <div style={{ backgroundColor: CREAM }}>
      {/* Map hero — full screen on desktop; shorter map + copy on phone */}
      <section className="relative overflow-hidden" aria-label="Contact Us">
        <div className="relative mt-[4.25rem] h-[min(58svh,420px)] min-h-[280px] sm:mt-[5rem] sm:h-[min(62svh,520px)] lg:mt-0 lg:h-dvh lg:min-h-dvh">
          <iframe
            title="Lilasons Developers office location on Google Maps"
            src={CONTACT_PAGE.mapEmbed}
            className="absolute inset-0 z-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          {/* Light scrim — pointer-events none so map stays clickable */}
          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(105deg, rgba(10,42,34,0.42) 0%, rgba(10,42,34,0.22) 42%, rgba(10,42,34,0.06) 72%, transparent 100%)",
            }}
            aria-hidden
          />

          {/* Desktop overlay copy */}
          <div className="pointer-events-none absolute inset-0 z-[2] hidden lg:flex">
            <div className="mx-auto flex h-full w-full max-w-[1500px] flex-col justify-end px-10 pb-16 pt-[calc(5.5rem+3rem)]">
              <div className="pointer-events-none max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10" style={{ backgroundColor: GOLD }} />
                  <p
                    className="text-[12px] font-semibold uppercase tracking-[0.22em]"
                    style={{ color: GOLD }}
                  >
                    {CONTACT_PAGE.eyebrow}
                  </p>
                </div>

                <h1
                  className="mt-4 text-[clamp(2.4rem,3.8vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.03em] text-white"
                  style={{
                    fontFamily: "var(--imp-display)",
                    textShadow: "0 2px 24px rgba(0,0,0,0.45)",
                  }}
                >
                  {before}
                  <em style={{ color: GOLD, fontStyle: "italic" }}>{accent}</em>
                  {after}
                </h1>

                <p
                  className="mt-4 max-w-[34rem] text-[15px] leading-relaxed text-white/90"
                  style={{ textShadow: "0 1px 14px rgba(0,0,0,0.4)" }}
                >
                  {CONTACT_PAGE.heroBody}
                </p>

                <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
                  <a
                    href={CONTACT_PAGE.mapsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full px-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--imp-ink)] transition hover:brightness-105"
                    style={{
                      background: `linear-gradient(165deg, #d4b06e, ${GOLD} 48%, #8a6a3a)`,
                    }}
                  >
                    Open in Maps
                    <span aria-hidden>→</span>
                  </a>
                  <a
                    href="#contact-form"
                    className="inline-flex h-11 items-center gap-2 rounded-full border px-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
                    style={{
                      borderColor: "rgba(181,148,97,0.85)",
                      backgroundColor: "rgba(10,42,34,0.35)",
                    }}
                  >
                    Send enquiry
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phone copy below map — never clipped */}
        <div
          className="px-5 py-10 sm:px-8 sm:py-12 lg:hidden"
          style={{ backgroundColor: GREEN }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: GOLD }} />
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: GOLD }}
            >
              {CONTACT_PAGE.eyebrow}
            </p>
          </div>

          <h1
            className="mt-3 text-[clamp(1.85rem,7vw,2.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--imp-display)" }}
          >
            {before}
            <em style={{ color: GOLD, fontStyle: "italic" }}>{accent}</em>
            {after}
          </h1>

          <p className="mt-3 max-w-[34rem] text-[14px] leading-relaxed text-white/75">
            {CONTACT_PAGE.heroBody}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={CONTACT_PAGE.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--imp-ink)]"
              style={{
                background: `linear-gradient(165deg, #d4b06e, ${GOLD} 48%, #8a6a3a)`,
              }}
            >
              Open in Maps
              <span aria-hidden>→</span>
            </a>
            <a
              href="#contact-form"
              className="inline-flex h-11 items-center gap-2 rounded-full border px-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white"
              style={{ borderColor: "rgba(181,148,97,0.75)" }}
            >
              Send enquiry
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Details + form */}
      <section
        id="contact-form"
        className="scroll-mt-24 px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
        style={{ backgroundColor: CREAM }}
        aria-label="Enquiry form"
      >
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.92fr_1.15fr] lg:gap-12 xl:gap-16">
          {/* Left — contact details */}
          <div>
            <div className="flex items-center gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] sm:text-[12px]">
                Sales desk
              </p>
              <span className="h-px w-11" style={{ backgroundColor: GOLD }} />
            </div>

            <h2
              className="mt-3 text-[clamp(1.7rem,3.4vw,2.55rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[#1A1A1A]"
              style={{ fontFamily: "var(--imp-display)" }}
            >
              {CONTACT_PAGE.body.split("—")[0].trim()}
              <span className="block sm:inline"> — we&apos;ll call you back.</span>
            </h2>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: GOLD }}>
                  Email
                </p>
                <a
                  href={`mailto:${IMPERIUM.email}`}
                  className="mt-2 block break-all text-[16px] font-medium text-[#1A1A1A] underline-offset-4 hover:underline sm:text-[17px]"
                >
                  {IMPERIUM.email}
                </a>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: GOLD }}>
                  Phone
                </p>
                <div className="mt-2 space-y-1.5">
                  {IMPERIUM.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block text-[16px] font-medium text-[#1A1A1A] sm:text-[17px]"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={IMPERIUM.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full px-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition hover:brightness-110"
                style={{ backgroundColor: GREEN }}
              >
                WhatsApp Us
                <span aria-hidden>→</span>
              </a>
              <a
                href={CONTACT_PAGE.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border px-6 text-[12px] font-semibold uppercase tracking-[0.12em] transition hover:bg-black/[0.03]"
                style={{ borderColor: GOLD, color: GOLD }}
              >
                Get directions
                <span aria-hidden>→</span>
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.25rem] bg-white p-5 shadow-[0_14px_36px_-24px_rgba(10,42,34,0.35)] ring-1 ring-black/[0.04]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: GOLD }}>
                  Corporate office
                </p>
                <div className="mt-3 space-y-1 text-[14px] leading-relaxed text-[#3f3f3f]">
                  {IMPERIUM.corporateAddress.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.25rem] bg-white p-5 shadow-[0_14px_36px_-24px_rgba(10,42,34,0.35)] ring-1 ring-black/[0.04]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: GOLD }}>
                  Project site
                </p>
                <div className="mt-3 space-y-1 text-[14px] leading-relaxed text-[#3f3f3f]">
                  {IMPERIUM.siteAddress.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — form card */}
          <div
            id="enquiry"
            className="rounded-[1.5rem] bg-white p-5 shadow-[0_28px_60px_-30px_rgba(10,42,34,0.4)] ring-1 ring-black/[0.04] sm:rounded-[1.75rem] sm:p-7 lg:p-8"
          >
            <div className="flex items-center gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: GOLD }}>
                {CONTACT_PAGE.formTitle}
              </p>
              <span className="h-px w-10" style={{ backgroundColor: GOLD }} />
            </div>
            <p className="mt-3 text-[14px] leading-relaxed text-[#3f3f3f] sm:text-[15px]">
              {CONTACT_PAGE.formBody}
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Soft bottom band */}
      <section
        className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-10"
        style={{ backgroundColor: GREEN }}
        aria-label="Visit prompt"
      >
        <svg
          className="pointer-events-none absolute inset-x-0 top-0 h-8 w-full opacity-40"
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0 24 C260 6 480 34 720 18 C980 2 1200 28 1440 12"
            fill="none"
            stroke={GOLD}
            strokeWidth="1.1"
          />
        </svg>

        <div className="relative z-[1] mx-auto flex max-w-[1500px] flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2
              className="text-[clamp(1.5rem,3vw,2.2rem)] font-medium leading-[1.12] tracking-[-0.03em] text-white"
              style={{ fontFamily: "var(--imp-display)" }}
            >
              Prefer to visit in person?
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-white/70">
              Open the map for Lilasons Developers, or call ahead and we&apos;ll guide you in.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={CONTACT_PAGE.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full px-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--imp-ink)] transition hover:brightness-105"
              style={{
                background: `linear-gradient(165deg, #d4b06e, ${GOLD} 48%, #8a6a3a)`,
              }}
            >
              Open map
              <span aria-hidden>→</span>
            </a>
            <Link
              href="/location"
              className="inline-flex h-11 items-center gap-2 rounded-full border px-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white/5"
              style={{ borderColor: "rgba(181,148,97,0.65)" }}
            >
              Project location
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
