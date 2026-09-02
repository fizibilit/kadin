"use client";

import { useEffect, useState } from "react";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type JournalBreakdown = { journal: string; count: number; percent: number };
type ThemeData = { total: number; journals: JournalBreakdown[] };
type ConceptData = Record<string, ThemeData>;

// Her tema için küçük, tek çizgili bir ikon ve vurgu rengi — kart grubunu daha
// canlı ve taranabilir kılmak için. Renkler sabit bir sırada atanır (kategorik
// paletin fixed-order kuralı), teması eşleşmeyen bir anahtar geldiğinde de
// döngüsel olarak bir sonraki renge düşer.
const THEME_ICON: Record<string, string> = {
  Eğitim: "M2 5l7-3 7 3-7 3-7-3Zm0 0v5c0 1.5 3 3 7 3s7-1.5 7-3V5",
  Evlilik: "M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-6.2-1.6 4.4-4.8",
  "Çalışma Hayatı": "M3 6h12v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6Zm3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2",
  "Giyim ve Örtünme": "M6 3 3 5v3l2-1v8h8V7l2 1V5l-3-2-2 2H8L6 3Z",
  "Kamusal Alan": "M3 15V7l6-4 6 4v8M3 15h12M7 15v-4h4v4",
  Sağlık: "M9 3v12M3 9h12",
  "Din ve Ahlak": "M11 3a6 6 0 1 0 4.5 9.9A6 6 0 0 1 11 3Z",
};

const THEME_COLORS = [
  { text: "text-maroon", bgActive: "bg-maroon", ring: "border-maroon", bar: "bg-maroon" },
  { text: "text-teal", bgActive: "bg-teal", ring: "border-teal", bar: "bg-teal" },
  { text: "text-gold", bgActive: "bg-gold", ring: "border-gold", bar: "bg-gold" },
];

function themeColor(index: number) {
  return THEME_COLORS[index % THEME_COLORS.length];
}

// Bar genişliği mount anında %0'dan gerçek orana animasyonla büyür (bir sonraki
// paint'te state güncellenip CSS transition tetiklenir).
function AnimatedBar({
  targetPercent,
  colorClass,
  delay,
}: {
  targetPercent: number;
  colorClass: string;
  delay: number;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const id = requestAnimationFrame(() => setWidth(targetPercent));
    return () => cancelAnimationFrame(id);
  }, [targetPercent]);

  return (
    <div className="mt-1 h-2.5 w-full overflow-hidden rounded-full bg-parchment">
      <div
        className={`h-full rounded-full ${colorClass} transition-all ease-out group-hover:brightness-110`}
        style={{ width: `${width}%`, transitionDuration: "700ms", transitionDelay: `${delay}ms` }}
      />
    </div>
  );
}

export default function ConceptMap() {
  const [data, setData] = useState<ConceptData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeTheme, setActiveTheme] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/kavram-haritasi.json")
      .then((res) => {
        if (!res.ok) throw new Error("fetch failed");
        return res.json();
      })
      .then((json: ConceptData) => {
        setData(json);
        setActiveTheme((prev) => prev ?? Object.keys(json)[0] ?? null);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const themeEntries = data ? Object.entries(data) : [];
  const activeIndex = themeEntries.findIndex(([t]) => t === activeTheme);
  const active = activeTheme && data ? data[activeTheme] : null;
  const sortedJournals = active
    ? [...active.journals].sort((a, b) => b.percent - a.percent)
    : [];
  const maxPercent = active ? Math.max(...active.journals.map((j) => j.percent), 1) : 1;
  const topJournal = sortedJournals[0] ?? null;
  const color = themeColor(activeIndex);

  return (
    <section
      id="kavram-haritasi"
      className="relative overflow-hidden bg-gradient-to-b from-parchment-dark/40 via-transparent to-transparent"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-0 h-[380px] w-[380px] rounded-full bg-gold/10 blur-[100px]"
      />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Kavram Haritası"
            title="Konular dergilere göre nasıl dağılıyor?"
            description="Eğitim, evlilik, çalışma hayatı gibi konu başlıklarından birine tıkla; o konunun hangi dergide ne sıklıkta ve hangi oranda işlendiğini gör. (Anahtar kelime taramasına dayalı, otomatik bir sınıflandırmadır.)"
          />
        </Reveal>

        {loading && <p className="mt-8 text-sm text-ink-soft">Yükleniyor…</p>}
        {error && (
          <p className="mt-8 text-sm text-maroon">Veri yüklenemedi, lütfen sayfayı yenileyin.</p>
        )}

        {themeEntries.length > 0 && (
          <>
            <Reveal delay={60}>
              <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {themeEntries.map(([theme, d], i) => {
                  const c = themeColor(i);
                  const isActive = activeTheme === theme;
                  return (
                    <button
                      key={theme}
                      type="button"
                      onClick={() => setActiveTheme(theme)}
                      className={`group relative flex flex-col items-start gap-2 overflow-hidden rounded-xl border p-3.5 text-left transition-all duration-300 ${
                        isActive
                          ? `${c.ring} ${c.bgActive} text-parchment shadow-lg -translate-y-0.5`
                          : "border-gold-light/40 bg-parchment text-ink-soft hover:border-gold hover:-translate-y-0.5 hover:shadow-md"
                      }`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        className={isActive ? "text-parchment" : `${c.text} opacity-80`}
                      >
                        <path
                          d={THEME_ICON[theme] ?? "M3 9h12"}
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm font-semibold leading-tight">{theme}</span>
                      <span
                        className={`text-xs font-semibold ${
                          isActive ? "text-parchment/75" : "text-ink-soft/60"
                        }`}
                      >
                        {d.total} metin
                      </span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            {active && activeTheme && (
              <Reveal key={activeTheme} delay={0} className="mt-8">
                <div className="grid gap-5 rounded-2xl border border-gold-light/40 bg-parchment-dark/20 p-6 sm:grid-cols-[auto_1fr] sm:gap-8">
                  {/* Sol: büyük, canlanan özet sayacı */}
                  <div className="flex shrink-0 flex-row items-center gap-4 sm:flex-col sm:items-start sm:gap-1">
                    <p className={`font-display text-5xl font-semibold ${color.text}`}>
                      <CountUp value={active.total} />
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-maroon-dark">{activeTheme}</p>
                      <p className="text-xs text-ink-soft/70">metinde geçiyor</p>
                    </div>
                    {topJournal && (
                      <p className="mt-0 text-xs text-ink-soft/70 sm:mt-3">
                        En yoğun: <span className="font-semibold text-ink">{topJournal.journal}</span>
                        <span className="ml-1 text-ink-soft/50">(%{topJournal.percent})</span>
                      </p>
                    )}
                  </div>

                  {/* Sağ: dergiye göre oran barları */}
                  <div className="space-y-3 sm:border-l sm:border-gold-light/25 sm:pl-8">
                    <p className="text-xs uppercase tracking-wide text-ink-soft/60">
                      Dergiye göre oran (arşivdeki o dergiden gelen tüm metinlere kıyasla)
                    </p>
                    {sortedJournals.map((j, i) => (
                      <div key={j.journal} className="group">
                        <div className="flex items-baseline justify-between gap-2 text-sm">
                          <span className="font-semibold text-ink">{j.journal}</span>
                          <span className="shrink-0 text-xs text-ink-soft">
                            %{j.percent} · {j.count} metin
                          </span>
                        </div>
                        <AnimatedBar
                          targetPercent={Math.max((j.percent / maxPercent) * 100, 3)}
                          colorClass={color.bar}
                          delay={i * 40}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </>
        )}
      </div>
    </section>
  );
}
