"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { chronology, chronologyArchiveCounts, project } from "@/data/project";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const totalIssues = chronology.reduce((sum, c) => sum + (c.issueCount ?? 0), 0);

export default function Chronology() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section
      id="kronoloji"
      className="relative overflow-hidden bg-maroon-dark py-20 sm:py-28 text-parchment"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-maroon-light/20 blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Kronoloji"
            title="Kadın basınının yarım asırlık haritası"
            description="1869'dan 1919'a, kadınlara seslenen süreli yayınların yayın ömrü, sayı sayısı ve içeriği — Toska ve arkadaşlarının (1992) İstanbul Kütüphanelerindeki Eski Harfli Türkçe Kadın Dergileri Bibliyografyası'na dayanır. Kapak görselleri, Kadın Eserleri Kütüphanesi'nin “Osmanlı ve Erken Cumhuriyet Kadın Dergileri: Talepler, Engeller, Mücadele” yeni harfli baskı serisindendir."
          />
        </Reveal>

        <Reveal delay={80}>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-gold-light/20 py-6 sm:max-w-xl">
            <div>
              <dt className="text-xs uppercase tracking-wide text-gold-light/70">Dergi</dt>
              <dd className="mt-1 font-display text-3xl font-semibold text-gold-light">
                <CountUp value={chronology.length} />
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-gold-light/70">Yıl aralığı</dt>
              <dd className="mt-1 font-display text-3xl font-semibold text-gold-light">
                {project.years}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-gold-light/70">Yayımlanan sayı</dt>
              <dd className="mt-1 font-display text-3xl font-semibold text-gold-light">
                <CountUp value={totalIssues} suffix="+" />
              </dd>
            </div>
          </dl>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {chronology.map((item, i) => {
            const archiveCount = chronologyArchiveCounts[item.name];
            const yearLabel = item.endYear ? `${item.year}–${item.endYear}` : `${item.year}`;
            return (
              <Reveal key={item.name} delay={(i % 3) * 90}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold-light/20 bg-parchment/[0.04] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-light/60 hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.55)]">
                  <button
                    type="button"
                    onClick={() =>
                      item.coverImage &&
                      setLightbox({ src: item.coverImage as string, alt: `${item.name} kapağı` })
                    }
                    disabled={!item.coverImage}
                    className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-maroon to-maroon-dark disabled:cursor-default"
                  >
                    {item.coverImage ? (
                      <Image
                        src={item.coverImage}
                        alt={`${item.name} kapağı`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="font-display text-6xl font-semibold text-gold-light/20">
                          {item.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/95 via-maroon-dark/10 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-maroon-dark/80 px-2.5 py-1 text-xs font-semibold text-gold-light backdrop-blur-sm">
                      {yearLabel}
                    </span>
                    {item.coverImage && (
                      <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-maroon-dark/80 text-gold-light opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                          <path
                            d="M2 9V2h7M2 2l10 10M12 5v7H5"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    )}
                  </button>

                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-display text-base font-semibold text-parchment">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 flex-1 text-xs leading-relaxed text-parchment-dark/75">
                      {item.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-parchment-dark/60">
                      {item.issueCount != null && <span>{item.issueCount} sayı</span>}
                      {item.frequency && <span>{item.frequency}</span>}
                    </div>
                    {archiveCount ? (
                      <a
                        href="#arsiv"
                        className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-gold-light transition-colors hover:text-parchment"
                      >
                        Arşivde {archiveCount} metin →
                      </a>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {lightbox &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <div className="relative max-h-[90vh] max-w-2xl">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={800}
                height={1200}
                sizes="(max-width: 640px) 90vw, 640px"
                className="max-h-[90vh] w-auto rounded-lg object-contain shadow-2xl"
                style={{ height: "auto", maxHeight: "90vh", width: "auto" }}
              />
              <button
                onClick={() => setLightbox(null)}
                aria-label="Kapat"
                className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-parchment text-ink shadow-lg hover:bg-parchment-dark"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
              <p className="mt-2 text-center text-xs text-parchment-dark/80">{lightbox.alt}</p>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
