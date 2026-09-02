import Image from "next/image";
import { project, stats } from "@/data/project";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-maroon-dark via-maroon to-maroon-dark text-parchment"
    >
      {/* decorative radial glow */}
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
      {/* arka planda bulanık, silik Osmanlıca kaligrafi dokusu (Mürüvvet dergisi kapağından) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-[520px] w-[520px] opacity-[0.09] mix-blend-luminosity blur-[2px]"
        style={{
          backgroundImage: "url(/images/dergi-kapaklari/muruvvet.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          maskImage: "radial-gradient(circle, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-20 sm:pt-28 pb-24 sm:pb-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <Reveal className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <span className="rounded-full border border-gold-light/50 px-3 py-1 font-semibold uppercase tracking-[0.2em] text-gold-light">
                {project.program}
              </span>
              <span className="text-parchment-dark/70">{project.programFull}</span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-8 font-display text-4xl sm:text-6xl font-semibold leading-[1.08] text-balance">
                Osmanlı Basınında Kadına Yönelik{" "}
                <span className="text-gold-light">Şiddetin Analizi</span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-4 font-display text-xl sm:text-2xl text-gold-light/90">
                {project.years} · Süreli Yayınlarda Şiddet, Söylem ve Sessizlik
              </p>
            </Reveal>

            <Reveal delay={260}>
              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-parchment-dark/85">
                1869&rsquo;da yayımlanan ilk kadın dergisinden 1923&rsquo;e uzanan bir
                dönemde, kadınlara seslenen Osmanlı süreli yayınlarındaki şiddet
                temsillerini disiplinlerarası bir tipoloji ile ilk kez sistematik olarak
                inceleyen bir TÜBİTAK araştırması.
              </p>
            </Reveal>

            <Reveal delay={340} className="mt-9 flex flex-wrap gap-3">
              <a
                href="#ozet"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-maroon-dark hover:bg-gold-light transition-colors"
              >
                Projeyi Keşfet
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
              <a
                href="#is-plani"
                className="inline-flex items-center gap-2 rounded-full border border-parchment/30 px-6 py-3 text-sm font-semibold text-parchment hover:bg-parchment/10 transition-colors"
              >
                İş Planını Gör
              </a>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 scale-90 rounded-full bg-gold/25 blur-[90px]"
            />
            <Image
              src="/images/hero-collage.png"
              alt="1869-1923 yılları arasında Osmanlı kadın dergilerinin kapakları, mektuplar ve dönem eşyalarıyla çevrili, elinde kalemle bir defter üzerinde yazan kadın illüstrasyonu"
              width={1920}
              height={1080}
              priority
              className="relative w-full h-auto scale-110 animate-float-slow drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
            />
          </Reveal>
        </div>

        <Reveal delay={420}>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-5 sm:gap-4 border-t border-parchment/15 pt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl sm:text-3xl font-semibold text-gold-light">
                  {s.value}
                </dd>
                <dd className="mt-1 text-xs sm:text-sm text-parchment-dark/70">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="divider-ornament px-5 sm:px-8 pb-6">
        <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      </div>
    </section>
  );
}
