"use client";

import { useEffect, useState } from "react";
import SiteSearch from "./SiteSearch";

const links = [
  { href: "#ozet", label: "Özet" },
  { href: "#kazanim", label: "Kazanımlar" },
  { href: "#yenilik", label: "Yenilikçi Yön" },
  { href: "#tipoloji", label: "Tipoloji" },
  { href: "#yontem", label: "Yöntem" },
  { href: "#is-plani", label: "İş Planı" },
  { href: "#ekip", label: "Ekip" },
  { href: "#kaynaklar", label: "Kaynaklar" },
  { href: "#kronoloji", label: "Kronoloji" },
  { href: "#kavram-haritasi", label: "Kavram Haritası" },
  { href: "#arsiv", label: "Arşiv" },
  { href: "#ciktilar", label: "Çıktılar" },
  { href: "#etki", label: "Etki" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-parchment/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-gold-light)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 py-3">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold text-gold font-display text-sm">
            OB
          </span>
          <span className="font-display text-sm sm:text-base font-semibold text-maroon-dark leading-tight">
            Osmanlı Basınında
            <br className="hidden sm:block" /> Kadına Yönelik Şiddet
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6 text-sm text-ink-soft">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-maroon transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <SiteSearch />
          <a
            href="/en"
            className="rounded-full border border-ink/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink-soft hover:bg-ink/5 transition-colors"
          >
            EN
          </a>
          <a
            href="#iletisim"
            className="inline-flex items-center rounded-full bg-maroon px-4 py-2 text-xs font-semibold uppercase tracking-wider text-parchment hover:bg-maroon-dark transition-colors"
          >
            İletişim
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <SiteSearch />
          <a
            href="/en"
            className="flex h-9 items-center justify-center rounded-full border border-ink/15 px-2.5 text-xs font-semibold text-ink-soft"
          >
            EN
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink"
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
        <nav className="lg:hidden border-t border-gold-light/40 bg-parchment px-5 py-4 flex flex-col gap-3.5 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-ink-soft hover:text-maroon transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#iletisim"
            onClick={() => setOpen(false)}
            className="mt-1 inline-flex w-fit items-center rounded-full bg-maroon px-4 py-2 text-xs font-semibold uppercase tracking-wider text-parchment"
          >
            İletişim
          </a>
        </nav>
      )}
    </header>
  );
}
