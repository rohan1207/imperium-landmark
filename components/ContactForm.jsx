"use client";

import { useState } from "react";
import { IMPERIUM } from "@/lib/imperium";

const INTERESTS = ["Boutique office", "Showroom / retail", "Rooftop / F&B", "General enquiry"];
const GOLD = "#A2844D";

export default function ContactForm({ compact = false }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(INTERESTS[0]);
  const [note, setNote] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    const subject = encodeURIComponent(`Imperium Landmark enquiry — ${interest}`);
    const body = encodeURIComponent(
      [
        `Name: ${name.trim()}`,
        `Phone: ${phone.trim()}`,
        email.trim() ? `Email: ${email.trim()}` : null,
        `Interest: ${interest}`,
        note.trim() ? `Note: ${note.trim()}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    );
    window.location.href = `mailto:${IMPERIUM.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "mt-2 h-12 w-full rounded-full border border-black/[0.08] bg-[#fffdf9] px-5 text-[14px] outline-none transition focus:border-[var(--imp-gold)]";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--imp-gold-dark)]">
            Name
          </span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={field}
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--imp-gold-dark)]">
            Phone
          </span>
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={field}
            placeholder="Phone number"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--imp-gold-dark)]">
          Email
        </span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={field}
          placeholder="Email, if you like"
        />
      </label>

      <div>
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--imp-gold-dark)]">
          Interest
        </p>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setInterest(item)}
              className={`min-h-11 rounded-full px-4 py-2.5 text-[12px] font-semibold tracking-[0.04em] transition sm:px-4 ${
                interest === item
                  ? "bg-[var(--imp-ink)] text-[var(--imp-gold-light)]"
                  : "border border-black/[0.08] bg-white text-[var(--imp-ink)]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {!compact ? (
        <label className="block">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--imp-gold-dark)]">
            Note
          </span>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={4}
            className="mt-2 w-full rounded-2xl border border-black/[0.08] bg-[#fffdf9] px-5 py-4 text-[14px] outline-none transition focus:border-[var(--imp-gold)]"
            placeholder="Office size, showroom frontage, timeline…"
          />
        </label>
      ) : null}

      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_14px_30px_-14px_rgba(162,132,77,0.75)] transition hover:brightness-105 sm:w-auto"
        style={{
          background: `linear-gradient(165deg, #d4b06e, ${GOLD} 48%, #8a6a3a)`,
        }}
      >
        Send Enquiry
        <span aria-hidden>→</span>
      </button>
    </form>
  );
}
