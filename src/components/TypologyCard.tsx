"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Quote = { text: string; source: string };
type Group = { category: string; definition: string };
type TypologyEntry = {
  key: string;
  title: string;
  subtitle: string;
  items?: string[];
  groups?: Group[];
  quotesSource?: string;
};

export default function TypologyCard({
  t,
  accentClass,
}: {
  t: TypologyEntry;
  accentClass: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<Group | null>(null);
  const [allQuotes, setAllQuotes] = useState<Record<string, Quote[]> | null>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    if (!activeGroup) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActiveGroup(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeGroup]);

  useEffect(() => {
    if (!activeGroup || allQuotes || loadError || !t.quotesSource) return;
    let cancelled = false;
    fetch(t.quotesSource)
      .then((res) => {
        if (!res.ok) throw new Error("fetch failed");
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setAllQuotes(data);
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [activeGroup, allQuotes, loadError, t.quotesSource]);

  const loading = Boolean(activeGroup) && !allQuotes && !loadError;
  const activeQuotes = activeGroup ? (allQuotes?.[activeGroup.category] ?? []) : [];

  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-2xl border border-parchment/10 bg-parchment/[0.06] backdrop-blur-sm">
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          className="flex min-h-[172px] items-start justify-between gap-3 p-6 text-left transition-colors hover:bg-parchment/[0.04]"
        >
          <div>
            <span className={`block h-1.5 w-10 rounded-full ${accentClass}`} />
            <h3 className="mt-4 font-display text-lg font-semibold text-parchment">{t.title}</h3>
            <p className="mt-1 text-xs uppercase tracking-wide text-gold-light/80">
              {t.subtitle}
            </p>
          </div>
          <svg
            className={`mt-1 h-5 w-5 shrink-0 text-gold-light transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-parchment/10 px-6 pb-6 pt-4">
              {t.groups ? (
                <ul className="space-y-1.5">
                  {t.groups.map((g) => (
                    <li key={g.category}>
                      <button
                        type="button"
                        onClick={() => setActiveGroup(g)}
                        className="group -mx-2.5 flex w-full items-center justify-between gap-2 rounded-lg p-2.5 text-left transition-colors hover:bg-maroon"
                      >
                        <span>
                          <span className="block text-sm font-semibold text-parchment group-hover:text-white">
                            {g.category}
                          </span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-parchment-dark/70 group-hover:text-white/90">
                            {g.definition}
                          </span>
                        </span>
                        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide text-gold-light group-hover:text-white">
                          İncele →
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-2.5 text-sm text-parchment-dark/85">
                  {(t.items ?? []).map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-gold-light shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {activeGroup &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
            onClick={() => setActiveGroup(null)}
          >
            <div
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-parchment p-6 sm:p-8 text-ink shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {t.title}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-maroon-dark">
                    {activeGroup.category}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">{activeGroup.definition}</p>
                </div>
                <button
                  onClick={() => setActiveGroup(null)}
                  aria-label="Kapat"
                  className="shrink-0 rounded-full border border-ink/15 p-2 text-ink-soft hover:bg-ink/5"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>

              <p className="mt-5 text-xs uppercase tracking-wide text-ink-soft/60">
                ANALİZ DOSYASI/EYLEM TÜRLERİNE GÖRE.xlsx — {activeGroup.category} sekmesindeki
                tüm dergi alıntıları ({activeQuotes.length})
              </p>

              {loading && <p className="mt-6 text-sm text-ink-soft">Alıntılar yükleniyor…</p>}
              {loadError && (
                <p className="mt-6 text-sm text-maroon">
                  Alıntılar yüklenemedi. Lütfen tekrar deneyin.
                </p>
              )}

              <div className="mt-3 space-y-4">
                {activeQuotes.map((q, qi) => (
                  <blockquote
                    key={qi}
                    className="border-l-2 border-gold/60 pl-4 text-sm leading-relaxed text-ink"
                  >
                    <p>&ldquo;{q.text}&rdquo;</p>
                    {q.source && (
                      <cite className="mt-1.5 block text-xs not-italic text-ink-soft/70">
                        — {q.source}
                      </cite>
                    )}
                  </blockquote>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
