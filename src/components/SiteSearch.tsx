"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

type SectionEntry = { id: string; title: string; text: string };

function buildIndex(): SectionEntry[] {
  const sections = Array.from(document.querySelectorAll("main > section[id]"));
  return sections.map((el) => {
    const heading = el.querySelector("h2, h3");
    const title = heading?.textContent?.trim() || el.id;
    return { id: el.id, title, text: (el.textContent || "").replace(/\s+/g, " ").trim() };
  });
}

function snippet(text: string, query: string, span = 90) {
  const q = query.toLocaleLowerCase("tr");
  const idx = text.toLocaleLowerCase("tr").indexOf(q);
  if (idx === -1) return text.slice(0, span * 2) + "…";
  const start = Math.max(0, idx - span / 2);
  const end = Math.min(text.length, idx + query.length + span / 2);
  return (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");
}

export default function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<SectionEntry[] | null>(null);
  const [prevOpen, setPrevOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Modal açıldığında index'i (render sırasında, effect'siz) oluştur.
  if (open && !prevOpen) {
    setPrevOpen(true);
    setIndex(buildIndex());
  } else if (!open && prevOpen) {
    setPrevOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Ctrl/Cmd+K ile aç
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const results = useMemo(() => {
    if (!index || query.trim().length < 2) return [];
    const q = query.trim().toLocaleLowerCase("tr");
    return index
      .filter((s) => s.text.toLocaleLowerCase("tr").includes(q))
      .slice(0, 12);
  }, [index, query]);

  function goTo(id: string) {
    setOpen(false);
    setQuery("");
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Sitede ara"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition-colors hover:bg-ink/5"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 11L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-start justify-center bg-ink/70 p-4 pt-[10vh] backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <div
              className="w-full max-w-xl overflow-hidden rounded-2xl bg-parchment shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 border-b border-gold-light/40 px-4 py-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-ink-soft">
                  <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M11 11L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Sitede ara — örn. tipoloji, arşiv, ekip…"
                  className="w-full bg-transparent text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none"
                />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Kapat"
                  className="shrink-0 rounded-full p-1 text-ink-soft hover:bg-ink/5"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>

              <div className="max-h-[50vh] overflow-y-auto">
                {query.trim().length >= 2 && results.length === 0 && (
                  <p className="p-5 text-center text-sm text-ink-soft">Sonuç bulunamadı.</p>
                )}
                {query.trim().length < 2 && (
                  <p className="p-5 text-center text-xs text-ink-soft/70">
                    Aramak için en az 2 karakter yazın · Ctrl/Cmd+K ile açılır
                  </p>
                )}
                {results.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => goTo(r.id)}
                    className="block w-full border-b border-gold-light/20 px-4 py-3 text-left transition-colors last:border-b-0 hover:bg-gold-light/10"
                  >
                    <p className="text-sm font-semibold text-maroon-dark">{r.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">
                      {snippet(r.text, query)}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
