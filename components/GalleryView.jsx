"use client";

import { useState } from "react";
import { GALLERY } from "@/lib/imperium";

const GOLD = "#A2844D";
const GREEN = "#1B3022";
const CREAM = "#F7F1E8";

export default function GalleryView() {
  const [active, setActive] = useState(0);
  const slide = GALLERY.slides[active];
  const total = GALLERY.slides.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  return (
    <section
      className="overflow-hidden px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
      style={{ backgroundColor: CREAM }}
      aria-label="Project gallery"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="relative overflow-hidden rounded-[1.25rem] bg-[var(--imp-ink)] shadow-[0_24px_50px_-28px_rgba(27,48,34,0.55)] sm:rounded-[1.5rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.src}
            alt={slide.alt}
            className="aspect-[4/3] w-full object-cover sm:aspect-[16/10] lg:aspect-[21/10]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-5 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: GOLD }}>
                  {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </p>
                <p className="mt-2 text-[16px] text-white sm:text-[18px]">{slide.caption}</p>
              </div>
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous image"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[var(--imp-ink)] transition hover:bg-white"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next image"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:brightness-110"
                  style={{ backgroundColor: GREEN }}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {GALLERY.slides.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={item.caption}
              aria-current={i === active}
              className={`relative h-20 w-[7.25rem] shrink-0 snap-start overflow-hidden rounded-xl border-2 transition sm:h-24 sm:w-36 ${
                i === active ? "opacity-100" : "opacity-70 hover:opacity-100"
              }`}
              style={{ borderColor: i === active ? GOLD : "transparent" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
