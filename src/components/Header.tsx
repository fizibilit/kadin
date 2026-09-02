"use client";

import { useEffect, useRef, useState } from "react";
import SiteSearch from "./SiteSearch";

const navGroups = [
  {
    label: "Proje",
    items: [
      { href: "#ozet", label: "Özet" },
      { href: "#kazanim", label: "Kazanımlar" },
      { href: "#yenilik", label: "Yenilikçi Yön" },
      { href: "#yontem", label: "Yöntem" },
      { href: "#is-plani", label: "İş Planı" },
    ],
  },
  {
    label: "Araştırma",
    items: [
      { href: "#tipoloji", label: "Tipoloji" },
      { href: "#kronoloji", label: "Kronoloji" },
      { href: "#kavram-haritasi", label: "Kavram Haritası" },
      { href: "#arsiv", label: "Arşiv" },
      { href: "#kaynaklar", label: "Kaynaklar" },
    ],
  },
  {
    label: "Ekip & Çıktılar",
    items: [
      { href: "#ekip", label: "Ekip" },
      { href: "#ciktilar", label: "Çıktılar" },
      { href: "#etki", label: "Etki" },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!openGroup) return;
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenGroup(null);
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenGroup(null);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [openGroup]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-parchment/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-gold-light)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 py-3">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold text-gold font-display text-sm">
            OB
          </span>
          <span className="hidden sm:block font-display text-sm sm:text-base font-semibold text-maroon-dark leading-tight">
            Osmanlı Basınında
            <br /> Kadına Yönelik Şiddet
          </span>
          <span className="sm:hidden font-display text-sm font-semibold text-maroon-dark leading-tight">
            Osmanlı Basınında Şiddet
          </span>
        </a>

        <nav ref={navRef} className="hidden lg:flex items-center gap-1 text-sm text-ink-soft">
          {navGroups.map((g) => (
            <div key={g.label} className="relative">
              <button
                type="button"
                onClick={() => setOpenGroup((v) => (v === g.label ? null : g.label))}
                aria-expanded={openGroup === g.label}
                className={`flex items-center gap-1 rounded-full px-3 py-1.5 transition-colors hover:bg-maroon/10 hover:text-maroon ${
                  openGroup === g.label ? "bg-maroon/10 text-maroon" : ""
                }`}
              >
                {g.label}
                <svg
                  className={`h-3 w-3 transition-transform duration-200 ${
                    openGroup === g.label ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M1.5 1.5L6 6L10.5 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {openGroup === g.label && (
                <div className="absolute left-0 top-full mt-2 w-52 overflow-hidden rounded-xl border border-gold-light/40 bg-parchment py-1.5 shadow-xl">
                  {g.items.map((it) => (
                    <a
                      key={it.href}
                      href={it.href}
                      onClick={() => setOpenGroup(null)}
                      className="block px-4 py-2 text-sm text-ink-soft transition-colors hover:bg-maroon/10 hover:text-maroon"
                    >
                      {it.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <SiteSearch />
          <a
            href="/en"
            className="rounded-full border border-ink/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink-soft transition-colors hover:border-maroon/40 hover:bg-maroon/10 hover:text-maroon"
          >
            EN
          </a>
          <a
            href="#iletisim"
            className="inline-flex items-center rounded-full bg-maroon px-4 py-2 text-xs font-semibold uppercase tracking-wider text-parchment transition-colors hover:bg-maroon-dark"
          >
            İletişim
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <SiteSearch />
          <a
            href="/en"
            className="flex h-9 items-center justify-center rounded-full border border-ink/15 px-2.5 text-xs font-semibold text-ink-soft transition-colors hover:border-maroon/40 hover:bg-maroon/10 hover:text-maroon"
          >
            EN
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-maroon/40 hover:bg-maroon/10 hover:text-maroon"
            aria-label="Menü"
          >
            <span className="sr-only">Menü</span>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M0 1H18" stroke="currentColor" strokeWidth="1.5" />
              <path d="M0 7H18" stroke="currentColor" strokeWidth="1.5" />
              <path d="M0 13H18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-gold-light/40 bg-parchment px-5 py-4 text-sm">
          {navGroups.map((g) => (
            <div key={g.label} className="mb-4 last:mb-0">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gold">
                {g.label}
              </p>
              <div className="mt-1.5 flex flex-col">
                {g.items.map((it) => (
                  <a
                    key={it.href}
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className="-mx-2 rounded-lg px-2 py-1.5 text-ink-soft transition-colors hover:bg-maroon/10 hover:text-maroon"
                  >
                    {it.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <a
            href="#iletisim"
            onClick={() => setOpen(false)}
            className="mt-1 inline-flex w-fit items-center rounded-full bg-maroon px-4 py-2 text-xs font-semibold uppercase tracking-wider text-parchment transition-colors hover:bg-maroon-dark"
          >
            İletişim
          </a>
        </nav>
      )}
    </header>
  );
}
