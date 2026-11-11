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
      className="overflow-hidden px-5 py-8 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
      style={{ backgroundColor: CREAM }}
      aria-label="Project gallery"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="relative overflow-hidden rounded-[1rem] bg-[var(--imp-ink)] shadow-[0_24px_50px_-28px_rgba(27,48,34,0.55)] sm:rounded-[1.5rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.src}
            alt={slide.alt}
            className="aspect-[5/4] w-full object-cover sm:aspect-[16/10] lg:aspect-[21/10]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-3.5 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-[11px]" style={{ color: GOLD }}>
                  {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </p>
                <p className="mt-1 truncate text-[14px] text-white sm:mt-2 sm:text-[18px]">{slide.caption}</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous image"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[var(--imp-ink)] transition hover:bg-white sm:h-11 sm:w-11"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next image"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:brightness-110 sm:h-11 sm:w-11"
                  style={{ backgroundColor: GREEN }}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3.5 flex snap-x snap-mandatory gap-2.5 overflow-x-auto scroll-pl-1 pb-1 sm:mt-5 sm:gap-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {GALLERY.slides.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={item.caption}
              aria-current={i === active}
              className={`relative h-16 w-[5.75rem] shrink-0 snap-start overflow-hidden rounded-lg border-2 transition sm:h-24 sm:w-36 sm:rounded-xl ${
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
