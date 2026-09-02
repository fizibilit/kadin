"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type WordEntry = { word: string; count: number };

// Frekansa göre kademeli büyüklük/renk — sequential (tek hue, açık→koyu) kodlama.
// Log ölçek kullanılır çünkü "kadın" kelimesi diğerlerinden çok baskın; doğrusal
// ölçekte geri kalan kelimeler görünmez kalırdı.
const STEPS = [
  { min: 0.85, size: "text-3xl sm:text-4xl", className: "text-maroon font-semibold" },
  { min: 0.65, size: "text-2xl sm:text-3xl", className: "text-maroon-light font-semibold" },
  { min: 0.45, size: "text-xl sm:text-2xl", className: "text-maroon-light/90 font-medium" },
  { min: 0.25, size: "text-base sm:text-lg", className: "text-gold font-medium" },
  { min: 0, size: "text-sm sm:text-base", className: "text-ink-soft font-normal" },
];

export default function WordCloud() {
  const [data, setData] = useState<WordEntry[] | null>(null);

  useEffect(() => {
    fetch("/data/kelime-bulutu.json")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((json: WordEntry[]) => setData(json))
      .catch(() => setData([]));
  }, []);

  if (!data || data.length === 0) return null;

  const maxLog = Math.log(data[0].count + 1);
  const minLog = Math.log(data[data.length - 1].count + 1);
  const span = Math.max(maxLog - minLog, 0.0001);

  return (
    <section className="mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Metin Madenciliği"
          title="Arşivde en sık geçen ifadeler"
          description="1425 transkribe edilmiş metnin tamamından çıkarılan kelime sıklığı — boyut, kelimenin arşivde geçme sıklığını gösterir."
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-10 flex flex-wrap items-baseline justify-center gap-x-5 gap-y-3 rounded-2xl border border-gold-light/30 bg-parchment-dark/10 px-6 py-10 sm:px-10">
          {data.map((w) => {
            const norm = (Math.log(w.count + 1) - minLog) / span;
            const step = STEPS.find((s) => norm >= s.min) ?? STEPS[STEPS.length - 1];
            return (
              <span
                key={w.word}
                title={`${w.count} kez geçiyor`}
                className={`${step.size} ${step.className} leading-none transition-transform duration-200 hover:scale-110 cursor-default`}
              >
                {w.word}
              </span>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
