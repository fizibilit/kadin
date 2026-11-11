"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Journal } from "@/data/journals";

// Dergi listesi: geniş ekranda sol sütunda dikey, dar ekranda yatay kaydırmalı.
// Seçili dergi, liste içinde görünür alana kaydırılır.
export default function JournalSidebar({
  journals,
  activeSlug,
}: {
  journals: Journal[];
  activeSlug: string;
}) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const el = list?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!list || !el) return;
    const horizontal = list.scrollWidth > list.clientWidth && list.scrollHeight <= list.clientHeight + 4;
    if (horizontal) {
      list.scrollTo({ left: el.offsetLeft - 16, behavior: "auto" });
    } else {
      list.scrollTo({ top: el.offsetTop - list.clientHeight / 2 + el.clientHeight / 2, behavior: "auto" });
    }
  }, [activeSlug]);

  return (
    <nav aria-label="Dergiler" className="min-w-0 lg:sticky lg:top-24 lg:self-start">
      <ul
        ref={listRef}
        className="relative flex gap-2 overflow-x-auto pb-2 lg:max-h-[calc(100vh-8rem)] lg:flex-col lg:gap-1 lg:overflow-y-auto lg:overflow-x-hidden lg:pb-0 lg:pr-2"
      >
        {journals.map((j) => {
          const active = j.slug === activeSlug;
          return (
            <li key={j.slug} className="shrink-0 lg:shrink">
              <Link
                href={`/dergiler/${j.slug}`}
                aria-current={active ? "page" : undefined}
                className={`flex items-baseline gap-2 rounded-lg border px-3 py-2 text-sm transition-colors lg:border-transparent ${
                  active
                    ? "border-maroon bg-maroon text-parchment"
                    : "border-gold-light/40 text-ink-soft hover:border-maroon/40 hover:bg-maroon/10 hover:text-maroon"
                }`}
              >
                <span
                  className={`w-10 shrink-0 text-xs font-semibold ${
                    active ? "text-gold-light" : "text-gold"
                  }`}
                >
                  {j.year}
                </span>
                <span className="whitespace-nowrap font-medium lg:whitespace-normal">{j.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
