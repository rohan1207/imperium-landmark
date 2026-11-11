import { IMPERIUM } from "@/lib/imperium";

export default function HomeHero() {
  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-[var(--imp-ink)]"
      aria-label={IMPERIUM.name}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={IMPERIUM.hero.desktop}
        alt={IMPERIUM.hero.alt}
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={IMPERIUM.hero.phone}
        alt={IMPERIUM.hero.alt}
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      />
      <h1 className="sr-only">{IMPERIUM.name}</h1>
    </section>
  );
}
