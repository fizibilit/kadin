"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type YearPoint = { year: number; count: number };

export default function ViolenceTrend() {
  const [data, setData] = useState<YearPoint[] | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    fetch("/data/yillara-gore-dagilim.json")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((json: YearPoint[]) => setData(json))
      .catch(() => setData([]));
  }, []);

  if (!data || data.length === 0) return null;

  const max = Math.max(...data.map((d) => d.count));
  const active = hovered != null ? data.find((d) => d.year === hovered) : null;

  return (
    <section className="mx-auto max-w-5xl px-5 sm:px-8 py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Zaman İçinde"
          title="Kodlanan metinlerin yıllara göre dağılımı"
          description="Bir yıldaki kayıt sayısı, o dönemde şiddetin arttığını değil — o yıldan arşive dahil edilen dergi sayısı ve hacmini yansıtır (örn. 1913, Kadınlar Dünyası'nın günlük yayımlandığı yıldır)."
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-10 overflow-x-auto">
          <div className="flex min-w-[600px] items-end gap-2.5 sm:gap-4 border-b border-gold-light/30 pb-1 pl-1">
            {data.map((d) => {
              const heightPct = Math.max((d.count / max) * 100, 4);
              const isActive = hovered === d.year;
              return (
                <div
                  key={d.year}
                  className="flex flex-1 flex-col items-center gap-2"
                  onMouseEnter={() => setHovered(d.year)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span
                    className={`text-xs font-semibold transition-opacity ${
                      isActive ? "opacity-100 text-maroon-dark" : "opacity-0"
                    }`}
                  >
                    {d.count}
                  </span>
                  <div className="flex h-40 w-full items-end">
                    <div
                      className={`w-full rounded-t-md transition-all duration-300 ${
                        isActive ? "bg-maroon" : "bg-gold"
                      }`}
                      style={{ height: `${heightPct}%` }}
                    />
                  </div>
                  <span className="text-[11px] text-ink-soft/70">{d.year}</span>
                </div>
              );
            })}
          </div>
        </div>
        {active && (
          <p className="mt-2 text-center text-xs text-ink-soft/60 sm:hidden">
            {active.year}: {active.count} metin
          </p>
        )}
      </Reveal>
    </section>
  );
}
