const GOLD = "#A2844D";
const CREAM = "#F7F1E8";
const GREEN = "#1B3022";

export default function PageHero({ eyebrow, title, body, accent }) {
  let heading = title;
  if (accent && title.includes(accent)) {
    const [before, after] = title.split(accent);
    heading = (
      <>
        {before}
        <em style={{ color: GOLD, fontStyle: "italic" }}>{accent}</em>
        {after}
      </>
    );
  }

  return (
    <section
      className="relative overflow-hidden border-b border-[var(--imp-stone-deep)] px-5 pb-8 pt-[calc(4.75rem+1.5rem)] sm:px-8 sm:pb-14 sm:pt-[calc(5.5rem+2.75rem)] lg:px-10 lg:pb-16 lg:pt-[calc(6rem+3rem)]"
      style={{ backgroundColor: CREAM }}
      aria-label={eyebrow || "Page header"}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/proximity/leaves.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-4 z-0 w-[140px] opacity-60 sm:w-[190px] lg:w-[240px]"
      />

      <div className="relative z-[1] mx-auto max-w-[1500px]">
        <div className="flex items-center gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2a2a2a] sm:text-[12px]">
            {eyebrow}
          </p>
          <span className="h-px w-11 sm:w-14" style={{ backgroundColor: GOLD }} />
        </div>
        <h1
          className="mt-2.5 max-w-[20ch] text-[clamp(1.55rem,6.5vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.03em] sm:mt-3 sm:max-w-[18ch] sm:leading-[1.05]"
          style={{ fontFamily: "var(--imp-display)", color: GREEN }}
        >
          {heading}
        </h1>
        {body ? (
          <p className="mt-3 max-w-[42rem] text-[13px] leading-relaxed text-[#3f3f3f] sm:mt-5 sm:text-[16px]">
            {body}
          </p>
        ) : null}
      </div>
    </section>
  );
}
