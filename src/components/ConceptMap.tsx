"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type JournalBreakdown = { journal: string; count: number; percent: number };
type ThemeData = { total: number; journals: JournalBreakdown[] };
type ConceptData = Record<string, ThemeData>;

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
  const active = activeTheme && data ? data[activeTheme] : null;
  const maxPercent = active ? Math.max(...active.journals.map((j) => j.percent), 1) : 1;

  return (
    <section id="kavram-haritasi" className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-28">
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
            <div className="mt-8 flex flex-wrap gap-2.5">
              {themeEntries.map(([theme, d]) => (
                <button
                  key={theme}
                  type="button"
                  onClick={() => setActiveTheme(theme)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    activeTheme === theme
                      ? "border-maroon bg-maroon text-parchment"
                      : "border-gold-light/50 bg-parchment text-ink-soft hover:border-gold hover:text-maroon"
                  }`}
                >
                  {theme}
                  <span
                    className={`ml-2 rounded-full px-1.5 py-0.5 text-xs ${
                      activeTheme === theme
                        ? "bg-parchment/20 text-parchment"
                        : "bg-gold-light/30 text-maroon-dark"
                    }`}
                  >
                    {d.total}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          {active && (
            <Reveal delay={120} className="mt-10">
              <div className="rounded-2xl border border-gold-light/40 bg-parchment-dark/20 p-6">
                <h3 className="font-display text-lg font-semibold text-maroon-dark">
                  {activeTheme}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft/60">
                  Toplam {active.total} metinde geçiyor · dergiye göre oran (arşivdeki o
                  dergiden gelen tüm metinlere kıyasla)
                </p>

                <div className="mt-6 space-y-3">
                  {active.journals.map((j) => (
                    <div key={j.journal} className="group">
                      <div className="flex items-baseline justify-between gap-2 text-sm">
                        <span className="font-semibold text-ink">{j.journal}</span>
                        <span className="shrink-0 text-xs text-ink-soft">
                          %{j.percent} · {j.count} metin
                        </span>
                      </div>
                      <div className="mt-1 h-2.5 w-full overflow-hidden rounded-full bg-parchment">
                        <div
                          className="h-full rounded-full bg-gold transition-all duration-500 group-hover:bg-maroon"
                          style={{ width: `${Math.max((j.percent / maxPercent) * 100, 3)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </>
      )}
    </section>
  );
}
