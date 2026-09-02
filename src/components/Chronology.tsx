"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { chronology, chronologyArchiveCounts } from "@/data/project";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

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
    <section id="kronoloji" className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Kronoloji"
          title="Kadın basınının yarım asırlık haritası"
          description="1869'dan 1919'a, kadınlara seslenen süreli yayınların yayın ömrü, sayı sayısı ve içeriği — Toska ve arkadaşlarının (1992) İstanbul Kütüphanelerindeki Eski Harfli Türkçe Kadın Dergileri Bibliyografyası'na dayanır. Kapak görselleri, Kadın Eserleri Kütüphanesi'nin “Osmanlı ve Erken Cumhuriyet Kadın Dergileri: Talepler, Engeller, Mücadele” yeni harfli baskı serisindendir."
        />
      </Reveal>

      <div className="relative mt-14 ml-3 sm:ml-6">
        <div
          aria-hidden
          className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-gold via-gold-light to-gold"
        />

        <div className="space-y-10">
          {chronology.map((item, i) => {
            const archiveCount = chronologyArchiveCounts[item.name];
            const yearLabel = item.endYear ? `${item.year}–${item.endYear}` : `${item.year}`;
            return (
              <Reveal key={item.name} delay={i * 70}>
                <div className="relative pl-8 sm:pl-10">
                  <span
                    aria-hidden
                    className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-gold bg-parchment"
                  />
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    {item.coverImage && (
                      <button
                        type="button"
                        onClick={() =>
                          setLightbox({ src: item.coverImage as string, alt: `${item.name} kapağı` })
                        }
                        className="group shrink-0 self-start overflow-hidden rounded-lg border border-gold-light/50 shadow-sm transition-shadow hover:shadow-md"
                      >
                        <Image
                          src={item.coverImage}
                          alt={`${item.name} kapağı`}
                          width={96}
                          height={128}
                          className="h-32 w-24 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </button>
                    )}

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="font-display text-lg font-semibold text-gold">
                          {yearLabel}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-maroon-dark">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                        {item.description}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-soft/70">
                        {item.issueCount != null && <span>{item.issueCount} sayı</span>}
                        {item.frequency && <span>{item.frequency}</span>}
                        {item.editor && <span>{item.editor}</span>}
                      </div>
                      {archiveCount ? (
                        <a
                          href="#arsiv"
                          className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-maroon hover:underline"
                        >
                          Dijital arşivde {archiveCount} metin kodlanmış →
                        </a>
                      ) : null}
                    </div>
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
