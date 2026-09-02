"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { typology } from "@/data/project";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type ArchiveRecord = {
  id: number;
  text: string;
  source: string;
  journal: string;
  year: string;
  eylem: string[];
  fail: string[];
  alan: string[];
  magdur: string[];
};

function optionsFor(key: string) {
  const entry = typology.find((t) => t.key === key);
  return entry?.groups?.map((g) => g.category) ?? [];
}
const eylemOptions = optionsFor("eylem");
const failOptions = optionsFor("fail");
const alanOptions = optionsFor("alan");
const magdurOptions = optionsFor("magdur");

const PAGE_SIZE = 24;

function toCsv(records: ArchiveRecord[]) {
  const headers = ["id", "metin", "kaynak", "dergi", "yil", "eylem", "fail", "alan", "magdur"];
  const escape = (v: string) => `"${v.replace(/"/g, '""')}"`;
  const rows = records.map((r) =>
    [
      String(r.id),
      r.text,
      r.source,
      r.journal,
      r.year,
      r.eylem.join("; "),
      r.fail.join("; "),
      r.alan.join("; "),
      r.magdur.join("; "),
    ]
      .map(escape)
      .join(",")
  );
  return [headers.join(","), ...rows].join("\r\n");
}

function downloadCsv(records: ArchiveRecord[], filename: string) {
  const csv = "﻿" + toCsv(records); // BOM: Excel'de Türkçe karakterlerin doğru görünmesi için
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-[11px] font-semibold uppercase tracking-wide text-gold-light/80">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-parchment/20 bg-parchment/[0.08] px-2.5 py-2 text-sm text-parchment [&>option]:text-ink"
      >
        <option value="">Tümü</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function DigitalArchive() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<ArchiveRecord[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [search, setSearch] = useState("");
  const [journal, setJournal] = useState("");
  const [year, setYear] = useState("");
  const [eylem, setEylem] = useState("");
  const [fail, setFail] = useState("");
  const [alan, setAlan] = useState("");
  const [magdur, setMagdur] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Bölüm görünür olduğunda arşiv verisini (bir kez) yükle
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || data || loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.disconnect();
            setLoading(true);
            fetch("/data/arsiv-verileri.json")
              .then((res) => {
                if (!res.ok) throw new Error("fetch failed");
                return res.json();
              })
              .then((json: ArchiveRecord[]) => setData(json))
              .catch(() => setError(true))
              .finally(() => setLoading(false));
          }
        }
      },
      { rootMargin: "500px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [data, loading]);

  const journalOptions = useMemo(() => {
    if (!data) return [];
    const counts = new Map<string, number>();
    for (const r of data) if (r.journal) counts.set(r.journal, (counts.get(r.journal) ?? 0) + 1);
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([j]) => j);
  }, [data]);

  const yearOptions = useMemo(() => {
    if (!data) return [];
    const set = new Set<string>();
    for (const r of data) if (r.year) set.add(r.year);
    return Array.from(set).sort();
  }, [data]);

  const filtered = useMemo(() => {
    if (!data) return [];
    const q = search.trim().toLocaleLowerCase("tr");
    return data.filter((r) => {
      if (q && !r.text.toLocaleLowerCase("tr").includes(q)) return false;
      if (journal && r.journal !== journal) return false;
      if (year && r.year !== year) return false;
      if (eylem && !r.eylem.includes(eylem)) return false;
      if (fail && !r.fail.includes(fail)) return false;
      if (alan && !r.alan.includes(alan)) return false;
      if (magdur && !r.magdur.includes(magdur)) return false;
      return true;
    });
  }, [data, search, journal, year, eylem, fail, alan, magdur]);

  // Filtre değişince sayfalamayı sıfırla (render sırasında, ekstra effect'siz).
  const filterKey = `${search}|${journal}|${year}|${eylem}|${fail}|${alan}|${magdur}`;
  const [prevFilterKey, setPrevFilterKey] = useState(filterKey);
  if (filterKey !== prevFilterKey) {
    setPrevFilterKey(filterKey);
    setVisibleCount(PAGE_SIZE);
  }

  const hasActiveFilters = Boolean(search || journal || year || eylem || fail || alan || magdur);

  function clearFilters() {
    setSearch("");
    setJournal("");
    setYear("");
    setEylem("");
    setFail("");
    setAlan("");
    setMagdur("");
  }

  return (
    <section
      id="arsiv"
      ref={sectionRef}
      className="relative overflow-hidden bg-maroon-dark py-20 sm:py-28 text-parchment"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[480px] w-[480px] opacity-[0.08] mix-blend-luminosity blur-[2px]"
        style={{
          backgroundImage: "url(/images/dergi-kapaklari/siyanet.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          maskImage: "radial-gradient(circle, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Dijital Arşiv"
            title="Transkribe edilmiş metinlerde arama ve filtreleme"
            description="Eski harfli metinlerin Latin alfabesine aktarılmasıyla oluşturulan veri seti; yayın adına, yıla, şiddet türüne, faile, gerçekleştiği alana ve mağdurun algısına göre filtrelenebilir — proje ekibinin ATLAS.ti kodlamalarına dayanır."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 grid gap-3 rounded-2xl border border-parchment/10 bg-parchment/[0.05] p-4 sm:grid-cols-2 lg:grid-cols-4">
            <label className="flex flex-col gap-1 sm:col-span-2 lg:col-span-4">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-gold-light/80">
                Metin içinde ara
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="örn. çarşaf, dayak, mektup…"
                className="rounded-lg border border-parchment/20 bg-parchment/[0.08] px-3 py-2 text-sm text-parchment placeholder:text-parchment-dark/50"
              />
            </label>

            <Select label="Yayın Adı" value={journal} onChange={setJournal} options={journalOptions} />
            <Select label="Yıl" value={year} onChange={setYear} options={yearOptions} />
            <Select label="Şiddet Türü (Eylem)" value={eylem} onChange={setEylem} options={eylemOptions} />
            <Select label="Fail" value={fail} onChange={setFail} options={failOptions} />
            <Select label="Alan" value={alan} onChange={setAlan} options={alanOptions} />
            <Select
              label="Mağdurun Algısı"
              value={magdur}
              onChange={setMagdur}
              options={magdurOptions}
            />

            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="self-end rounded-lg border border-gold-light/40 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gold-light hover:bg-parchment/[0.08] transition-colors"
              >
                Filtreleri Temizle
              </button>
            )}
          </div>
        </Reveal>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-parchment-dark/70">
          <span>
            {!data && !loading && !error && "Sonuçları görmek için bu bölüme kaydırın."}
            {loading && "Arşiv yükleniyor…"}
            {error && "Arşiv yüklenemedi, lütfen sayfayı yenileyin."}
            {data && (
              <>
                <span className="font-semibold text-gold-light">{filtered.length}</span> /{" "}
                {data.length} metin
                {hasActiveFilters ? " (filtre uygulandı)" : ""}
              </>
            )}
          </span>

          {data && filtered.length > 0 && (
            <button
              type="button"
              onClick={() =>
                downloadCsv(
                  filtered,
                  hasActiveFilters ? "arsiv-filtrelenmis.csv" : "arsiv-tum-metinler.csv"
                )
              }
              className="inline-flex items-center gap-1.5 rounded-full border border-gold-light/40 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-light transition-colors hover:bg-parchment/[0.08]"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 1v7m0 0L3.5 5.5M6 8l2.5-2.5M2 10h8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {hasActiveFilters ? "Filtrelenmiş sonuçları indir" : "Tüm arşivi indir"} (CSV)
            </button>
          )}
        </div>

        {data && (
          <>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.slice(0, visibleCount).map((r) => (
                <div
                  key={r.id}
                  className="flex flex-col rounded-xl border border-parchment/10 bg-parchment/[0.05] p-4"
                >
                  <p className="flex-1 text-sm leading-relaxed text-parchment">
                    &ldquo;{r.text.length > 220 ? r.text.slice(0, 220) + "…" : r.text}&rdquo;
                  </p>
                  {r.source && (
                    <p className="mt-2 text-xs text-parchment-dark/60">— {r.source}</p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {[...r.eylem, ...r.fail, ...r.alan, ...r.magdur].map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-gold-light/25 px-2 py-0.5 text-[10px] text-gold-light/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="mt-8 text-center text-sm text-parchment-dark/60">
                Bu kriterlere uyan metin bulunamadı.
              </p>
            )}

            {visibleCount < filtered.length && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
                  className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-maroon-dark hover:bg-gold-light transition-colors"
                >
                  Daha Fazla Göster ({filtered.length - visibleCount} kayıt kaldı)
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
