"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IMPERIUM } from "@/lib/imperium";

export default function ImperiumNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-white">
      <nav className="mx-auto flex h-[5.25rem] max-w-[1500px] items-center justify-between gap-3 px-5 sm:h-[6rem] sm:gap-5 sm:px-6 lg:h-[6.5rem] lg:px-8 xl:px-10">
        <Link
          href="/"
          className="group flex min-w-0 shrink-0 items-center gap-3 sm:gap-4"
          aria-label={`${IMPERIUM.name} home`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/imperium-logo-dark.png?v=1"
            alt={IMPERIUM.name}
            className="h-[4.15rem] w-auto object-contain object-left transition group-hover:opacity-90 sm:h-[4.85rem] lg:h-[5.35rem]"
            draggable={false}
          />
          <span className="hidden min-w-0 flex-col sm:flex">
            <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[var(--imp-muted)] sm:text-[9px]">
              A project by
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/lilasons-logo.png"
              alt={IMPERIUM.developer}
              className="mt-1 h-10 w-auto object-contain object-left opacity-90 sm:h-11 lg:h-12"
              draggable={false}
            />
          </span>
        </Link>

        <ul className="hidden min-w-0 flex-1 items-center justify-center gap-x-5 lg:flex xl:gap-x-7 2xl:gap-x-8">
          {IMPERIUM.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors xl:text-[13px] 2xl:text-[14px] ${
                    active
                      ? "text-[var(--imp-ink)]"
                      : "text-[var(--imp-muted)] hover:text-[var(--imp-ink)]"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={`absolute -bottom-1.5 left-0 h-px bg-[var(--imp-gold)] transition-all duration-300 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
          <Link
            href="/contact"
            className="imperium-btn imperium-btn-solid !h-11 !min-h-11 !px-4 text-[11px] sm:!px-5"
          >
            Enquire
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[var(--imp-ink)] transition hover:border-black/25 lg:hidden"
          >
            <span className="relative block h-3.5 w-[18px]">
              <span
                className={`absolute left-0 top-0 block h-[1.5px] w-full rounded-full bg-current transition duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] block h-[1.5px] w-full rounded-full bg-current transition duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] block h-[1.5px] w-full rounded-full bg-current transition duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-black/[0.06] bg-white transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open ? "max-h-[min(80svh,520px)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex max-h-[min(80svh,520px)] flex-col gap-1 overflow-y-auto px-5 py-4 sm:px-6">
          {IMPERIUM.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-xl px-3 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition sm:text-[14px] ${
                    active
                      ? "bg-[var(--imp-stone)] text-[var(--imp-ink)]"
                      : "text-[var(--imp-muted)] hover:bg-[var(--imp-stone)]/70 hover:text-[var(--imp-ink)]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2">
            <Link
              href="/contact"
              className="imperium-btn imperium-btn-solid w-full !h-12"
            >
              Enquire now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
