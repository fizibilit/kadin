import { chronology, chronologyArchiveCounts } from "@/data/project";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Chronology() {
  return (
    <section id="kronoloji" className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Kronoloji"
          title="Kadın basınının yarım asırlık haritası"
          description="1869'dan 1919'a, kadınlara seslenen süreli yayınların yayın ömrü, sayı sayısı ve içeriği — Toska ve arkadaşlarının (1992) İstanbul Kütüphanelerindeki Eski Harfli Türkçe Kadın Dergileri Bibliyografyası'na dayanır."
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
