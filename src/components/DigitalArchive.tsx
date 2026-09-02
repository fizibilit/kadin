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

const BOOKMARK_KEY = "kadin-arsiv-favoriler";

// Bir alıntıyı, sosyal medyada paylaşılabilir görsel bir kart (PNG) olarak indirir.
function downloadQuoteCard(r: ArchiveRecord) {
  const W = 1080;
  const H = 1080;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, "#4a1420");
  grad.addColorStop(1, "#6d1f2b");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = "rgba(217,184,118,0.35)";
  ctx.lineWidth = 2;
  ctx.strokeRect(36, 36, W - 72, H - 72);

  ctx.textAlign = "center";
  ctx.fillStyle = "#d9b876";
  ctx.font = "600 21px Georgia, serif";
  ctx.fillText("OSMANLI BASININDA KADINA YÖNELİK ŞİDDET", W / 2, 108);

  ctx.fillStyle = "rgba(217,184,118,0.35)";
  ctx.font = "italic 110px Georgia, serif";
  ctx.fillText("“", W / 2, 240);

  ctx.fillStyle = "#f6efe2";
  ctx.font = "400 36px Georgia, serif";
  const maxWidth = W - 170;
  const words = r.text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  const maxLines = 9;
  const displayLines =
    lines.length > maxLines
      ? [...lines.slice(0, maxLines - 1), lines[maxLines - 1].replace(/\s*\S*$/, "") + "…"]
      : lines;
  const lineHeight = 52;
  const startY = H / 2 - (displayLines.length * lineHeight) / 2;
  displayLines.forEach((l, i) => ctx.fillText(l, W / 2, startY + i * lineHeight));

  ctx.fillStyle = "#d9b876";
  ctx.font = "italic 25px Georgia, serif";
  const sourceLine = [r.journal, r.year].filter(Boolean).join(", ");
  ctx.fillText(
    sourceLine || "Osmanlı Basını Arşivi",
    W / 2,
    startY + displayLines.length * lineHeight + 60
  );

  ctx.fillStyle = "rgba(246,239,226,0.5)";
  ctx.font = "19px Arial, sans-serif";
  ctx.fillText("kadin-self.vercel.app · Dijital Arşiv", W / 2, H - 66);

  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `alinti-${r.id}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, "image/png");
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
  // Favorileri (yalnızca bu tarayıcıya özel) localStorage'dan oku. Bu bölüm
  // IntersectionObserver ile lazy-load edildiği ve kartlar `data` gelmeden
  // render edilmediği için (bkz. aşağıda `{data && (...)}`), lazy initializer
  // sunucu tarafında hiç kullanılmaz — hydration uyuşmazlığı oluşturmaz.
  const [bookmarks, setBookmarks] = useState<Set<number>>(() => {
    if (typeof window === "undefined") return new Set();
    try {
      const raw = window.localStorage.getItem(BOOKMARK_KEY);
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch {
      return new Set();
    }
  });
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);

  function toggleBookmark(id: number) {
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        window.localStorage.setItem(BOOKMARK_KEY, JSON.stringify(Array.from(next)));
      } catch {
        // yok say
      }
      return next;
    });
  }

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
      if (showBookmarksOnly && !bookmarks.has(r.id)) return false;
      return true;
    });
  }, [data, search, journal, year, eylem, fail, alan, magdur, showBookmarksOnly, bookmarks]);

  // Filtre değişince sayfalamayı sıfırla (render sırasında, ekstra effect'siz).
  const filterKey = `${search}|${journal}|${year}|${eylem}|${fail}|${alan}|${magdur}|${showBookmarksOnly}`;
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
          <span className="flex flex-wrap items-center gap-3">
            {!data && !loading && !error && "Sonuçları görmek için bu bölüme kaydırın."}
            {loading && "Arşiv yükleniyor…"}
            {error && "Arşiv yüklenemedi, lütfen sayfayı yenileyin."}
            {data && (
              <>
                <span>
                  <span className="font-semibold text-gold-light">{filtered.length}</span> /{" "}
                  {data.length} metin
                  {hasActiveFilters ? " (filtre uygulandı)" : ""}
                </span>
                {bookmarks.size > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowBookmarksOnly((v) => !v)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
                      showBookmarksOnly
                        ? "border-gold bg-gold text-maroon-dark"
                        : "border-gold-light/40 text-gold-light hover:bg-parchment/[0.08]"
                    }`}
                  >
                    <svg width="11" height="11" viewBox="0 0 12 12" fill={showBookmarksOnly ? "currentColor" : "none"}>
                      <path
                        d="M3 1.5h6a.5.5 0 0 1 .5.5v9l-3.5-2-3.5 2V2a.5.5 0 0 1 .5-.5Z"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                    Favorilerim ({bookmarks.size})
                  </button>
                )}
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
              {filtered.slice(0, visibleCount).map((r) => {
                const isBookmarked = bookmarks.has(r.id);
                return (
                <div
                  key={r.id}
                  className="group flex flex-col rounded-xl border border-parchment/10 bg-parchment/[0.05] p-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="flex-1 text-sm leading-relaxed text-parchment">
                      &ldquo;{r.text.length > 220 ? r.text.slice(0, 220) + "…" : r.text}&rdquo;
                    </p>
                    <div className="flex shrink-0 gap-1 opacity-60 transition-opacity group-hover:opacity-100">
                      <button
                        type="button"
                        onClick={() => toggleBookmark(r.id)}
                        aria-label={isBookmarked ? "Favorilerden çıkar" : "Favorilere ekle"}
                        title={isBookmarked ? "Favorilerden çıkar" : "Favorilere ekle"}
                        className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
                          isBookmarked ? "text-gold-light" : "text-parchment-dark/60 hover:text-gold-light"
                        }`}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill={isBookmarked ? "currentColor" : "none"}>
                          <path
                            d="M3 1.5h6a.5.5 0 0 1 .5.5v9l-3.5-2-3.5 2V2a.5.5 0 0 1 .5-.5Z"
                            stroke="currentColor"
                            strokeWidth="1"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={() => downloadQuoteCard(r)}
                        aria-label="Alıntı kartı olarak indir"
                        title="Alıntı kartı olarak indir (paylaşım için)"
                        className="flex h-6 w-6 items-center justify-center rounded-full text-parchment-dark/60 transition-colors hover:text-gold-light"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M6 1v6.5m0 0L3.5 5m2.5 2.5L8.5 5M2 9.5h8"
                            stroke="currentColor"
                            strokeWidth="1.1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
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
                );
              })}
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
