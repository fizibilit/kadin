"use client";

import { useEffect, useRef, useState } from "react";
import { project, stats } from "@/data/project";
import { journals } from "@/data/journals";

// Kaydırmayla çalışan video hero.
// - Sayfa kaydırıldıkça /video/hero.mp4 karelerinde ilerler (video.currentTime = kaydırma ilerlemesi).
// - Video dosyası yoksa ya da yüklenemezse koyu degrade zemin üzerinde aynı sahne metinleri gösterilir.
// - Dar ekranlarda önce /video/hero-mobile.mp4, yoksa /video/hero.mp4 denenir.
// - "Hareketi azalt" tercihinde sabit tek ekran (sticky/scrub yok).

const HEADER_PX = 64; // sticky Header yüksekliği (Header.tsx ile uyumlu)
const ARCHIVE_TOTAL = "1.425"; // arsiv-verileri.json kayıt sayısı

type Scene = {
  label: string;
  kicker?: string;
  big?: string;
  title?: string;
  text?: string;
  links?: { href: string; label: string; primary?: boolean }[];
};

const scenes: Scene[] = [
  { label: "Giriş" },
  {
    label: "Dergiler",
    kicker: "Dergiler",
    big: String(journals.length),
    title: "kadın dergisi, 1869'dan 1924'e",
    text: "Her derginin kapağını ve yayın politikasını ayrı bir sayfada oku.",
    links: [{ href: "#dergiler", label: "Dergilere göz at", primary: true }],
  },
  {
    label: "Arşiv",
    kicker: "Dijital Arşiv",
    big: ARCHIVE_TOTAL,
    title: "transkribe edilmiş metin",
    text: "Yıla, dergiye, şiddet türüne ve faile göre ara, filtrele, indir.",
    links: [{ href: "#arsiv", label: "Arşivi aç", primary: true }],
  },
  {
    label: "Tipoloji",
    kicker: "Tipoloji",
    big: "4",
    title: "katmanlı şiddet tipolojisi",
    text: "Eylem, fail, alan ve mağdurun algısı: her metin dört düzlemde okunuyor.",
    links: [{ href: "#tipoloji", label: "Tipolojiyi incele", primary: true }],
  },
  {
    label: "Harita",
    kicker: "Veri",
    title: "Veriyi görerek keşfet",
    text: "Kavram haritası, kelime bulutu ve yıllara göre dağılım.",
    links: [
      { href: "#ozet", label: "Projeyi Keşfet", primary: true },
      { href: "#kavram-haritasi", label: "Kavram haritası" },
    ],
  },
];

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scene, setScene] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const stage = stageRef.current;
    const video = videoRef.current;
    if (!wrap || !stage || !video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sources = [
      ...(window.matchMedia("(max-width: 767px)").matches ? ["/video/hero-mobile.mp4"] : []),
      "/video/hero.mp4",
    ];
    let sourceIndex = 0;
    let duration = 0;
    let target = 0;
    let cur = 0;
    let active = 0;
    let raf = 0;
    let kicked = false;

    const measure = () => {
      const rect = wrap.getBoundingClientRect();
      const range = rect.height - stage.offsetHeight;
      const p = range > 0 ? Math.min(1, Math.max(0, (HEADER_PX - rect.top) / range)) : 0;
      wrap.style.setProperty("--p", p.toFixed(4));
      target = p * duration;
      const idx = Math.min(scenes.length - 1, Math.floor(p * scenes.length));
      if (idx !== active) {
        active = idx;
        setScene(idx);
      }
    };

    // Kaydırma anında değil, yumuşatılarak ilerle (lerp): kareler arası akıcı geçiş.
    const tick = () => {
      raf = 0;
      if (!video.paused) video.pause(); // kaydırmayla sürülen video asla kendiliğinden oynamasın
      cur += (target - cur) * 0.14;
      if (Math.abs(target - cur) < 0.004) cur = target;
      if (duration && Math.abs(video.currentTime - cur) > 0.003) video.currentTime = cur;
      if (cur !== target) raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      measure();
      if (!raf) raf = requestAnimationFrame(tick);
      // iOS: video, bir kez oynatılıp durdurulmadan kare atlamayabilir.
      if (!kicked && duration) {
        kicked = true;
        // Aynı olay içinde oynat + hemen durdur: video kendi kendine ilerlemesin.
        const started = video.play();
        video.pause();
        started?.catch(() => {});
      }
    };

    const loadSource = () => {
      video.src = sources[sourceIndex];
      video.load();
    };
    const onLoaded = () => {
      duration = video.duration || 0;
      if (!duration) return;
      setReady(true);
      video.currentTime = 0.001;
      onScroll();
    };
    const onError = () => {
      if (sourceIndex < sources.length - 1) {
        sourceIndex += 1;
        loadSource();
      } else {
        setReady(false);
      }
    };

    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("error", onError);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    loadSource();
    const first = requestAnimationFrame(onScroll);

    return () => {
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("error", onError);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(first);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative bg-gradient-to-b from-maroon-dark via-maroon to-maroon-dark text-parchment"
    >
      <div ref={wrapRef} className="relative h-[420svh] motion-reduce:h-auto">
        <div
          ref={stageRef}
          className="sticky top-16 h-[calc(100svh-4rem)] overflow-hidden motion-reduce:static motion-reduce:h-auto motion-reduce:min-h-[calc(100svh-4rem)]"
        >
          {/* Katman 1: dekoratif ışık ve nokta deseni */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gold/20 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--color-gold-light) 1px, transparent 0)",
              backgroundSize: "26px 26px",
            }}
          />

          {/* Katman 2: kaydırmayla ilerleyen video */}
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            tabIndex={-1}
            aria-hidden
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:hidden ${
              ready ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Katman 3: yalnızca metnin durduğu yerde okunabilirlik gölgesi */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maroon-dark/85 via-maroon-dark/20 to-transparent md:bg-gradient-to-r md:from-maroon-dark/85 md:via-maroon-dark/40 md:to-transparent"
          />

          {/* Katman 4: sahneler */}
          {scenes.map((s, i) => {
            const on = scene === i;
            const hiddenMotionReduce = i > 0 ? "motion-reduce:hidden" : "";
            return (
              <div
                key={s.label}
                aria-hidden={!on}
                inert={!on}
                className={`absolute inset-0 flex items-end pb-16 transition-all ease-out md:items-center md:pb-0 motion-reduce:static motion-reduce:pb-16 ${hiddenMotionReduce} ${
                  on
                    ? "translate-y-0 opacity-100 duration-500 delay-150"
                    : "pointer-events-none translate-y-6 opacity-0 duration-200"
                }`}
              >
                <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
                  <div className="max-w-xl">
                    {i === 0 ? (
                      <>
                        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                          <span className="rounded-full border border-gold-light/50 px-3 py-1 font-semibold uppercase tracking-[0.2em] text-gold-light">
                            {project.program} · {project.number}
                          </span>
                          <span className="text-parchment-dark/70">{project.programFull}</span>
                        </div>
                        <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-balance sm:text-6xl">
                          Osmanlı Basınında Kadına Yönelik{" "}
                          <span className="text-gold-light">Şiddetin Analizi</span>
                        </h1>
                        <p className="mt-4 font-display text-xl text-gold-light/90 sm:text-2xl">
                          {project.years} · Süreli Yayınlarda Şiddet, Söylem ve Sessizlik
                        </p>
                        <p className="mt-5 max-w-lg text-base leading-relaxed text-parchment-dark/85 sm:text-lg">
                          1869&rsquo;da yayımlanan ilk kadın dergisinden 1923&rsquo;e uzanan bir
                          dönemde, kadınlara seslenen Osmanlı süreli yayınlarındaki şiddet
                          temsillerini disiplinlerarası bir tipoloji ile ilk kez sistematik olarak
                          inceleyen bir TÜBİTAK araştırması.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                          <a
                            href="#ozet"
                            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-maroon-dark transition-colors hover:bg-gold-light"
                          >
                            Projeyi Keşfet
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                          </a>
                          <a
                            href="#is-plani"
                            className="inline-flex items-center gap-2 rounded-full border border-parchment/30 px-6 py-3 text-sm font-semibold text-parchment transition-colors hover:bg-parchment/10"
                          >
                            İş Planını Gör
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
                          {s.kicker}
                        </span>
                        {s.big ? (
                          <p className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                            <span className="font-display text-7xl font-semibold leading-none text-gold-light sm:text-8xl">
                              {s.big}
                            </span>
                            <span className="font-display text-2xl text-parchment sm:text-3xl">
                              {s.title}
                            </span>
                          </p>
                        ) : (
                          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-parchment sm:text-5xl">
                            {s.title}
                          </h2>
                        )}
                        <p className="mt-4 max-w-md text-base leading-relaxed text-parchment-dark/85 sm:text-lg">
                          {s.text}
                        </p>
                        <div className="mt-7 flex flex-wrap gap-3">
                          {s.links?.map((l) => (
                            <a
                              key={l.href}
                              href={l.href}
                              className={
                                l.primary
                                  ? "inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-maroon-dark transition-colors hover:bg-gold-light"
                                  : "inline-flex items-center gap-2 rounded-full border border-parchment/30 px-6 py-3 text-sm font-semibold text-parchment transition-colors hover:bg-parchment/10"
                              }
                            >
                              {l.label}
                            </a>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* İlerleme çubuğu: hangi sahnede olduğunu gösterir */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-3 sm:flex motion-reduce:hidden"
          >
            {scenes.map((s, i) => (
              <div key={s.label} className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-semibold uppercase tracking-widest transition-opacity duration-300 ${
                    scene === i ? "text-gold-light opacity-100" : "opacity-0"
                  }`}
                >
                  {s.label}
                </span>
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    scene === i ? "h-2.5 w-2.5 bg-gold-light" : "h-1.5 w-1.5 bg-parchment/40"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-4 sm:px-8 sm:pb-20">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-parchment/15 pt-10 sm:grid-cols-5 sm:gap-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-2xl font-semibold text-gold-light sm:text-3xl">
                {s.value}
              </dd>
              <dd className="mt-1 text-xs text-parchment-dark/70 sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="divider-ornament px-5 pb-6 sm:px-8">
        <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      </div>
    </section>
  );
}
