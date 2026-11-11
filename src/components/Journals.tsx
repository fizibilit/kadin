import Image from "next/image";
import Link from "next/link";
import { chronologyArchiveCounts, project } from "@/data/project";
import { journals } from "@/data/journals";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const totalCoded = Object.values(chronologyArchiveCounts).reduce((a, b) => a + b, 0);

export default function Journals() {
  return (
    <section
      id="dergiler"
      className="relative overflow-hidden bg-maroon-dark py-20 sm:py-28 text-parchment"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-maroon-light/20 blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Dergiler"
            title="Osmanlı kadın dergileri"
            description="1869'dan 1924'e, kadınlara seslenen süreli yayınlar. Bir dergiye tıklayın: kapağını, yayın politikasını ve içeriğini ayrı bir sayfada okuyun. Kapak görsellerinin bir bölümü Kadın Eserleri Kütüphanesi'nin “Osmanlı ve Erken Cumhuriyet Kadın Dergileri: Talepler, Engeller, Mücadele” yeni harfli baskı serisindendir."
          />
        </Reveal>

        <Reveal delay={80}>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-gold-light/20 py-6 sm:max-w-xl">
            <div>
              <dt className="text-xs uppercase tracking-wide text-gold-light/70">Dergi</dt>
              <dd className="mt-1 font-display text-3xl font-semibold text-gold-light">
                <CountUp value={journals.length} />
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-gold-light/70">Yıl aralığı</dt>
              <dd className="mt-1 font-display text-3xl font-semibold text-gold-light">
                {project.years}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-gold-light/70">
                Arşivde kodlanan metin
              </dt>
              <dd className="mt-1 font-display text-3xl font-semibold text-gold-light">
                <CountUp value={totalCoded} />
              </dd>
            </div>
          </dl>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {journals.map((j, i) => (
            <Reveal key={j.slug} delay={(i % 4) * 70}>
              <Link
                href={`/dergiler/${j.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold-light/20 bg-parchment/[0.04] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-light/60 hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.55)]"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-maroon to-maroon-dark">
                  {j.covers[0] ? (
                    <Image
                      src={j.covers[0]}
                      alt={`${j.name} kapağı`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="font-display text-6xl font-semibold text-gold-light/20">
                        {j.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/95 via-maroon-dark/10 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-maroon-dark/80 px-2.5 py-1 text-xs font-semibold text-gold-light backdrop-blur-sm">
                    {j.year}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-3.5">
                  <h3 className="font-display text-sm font-semibold leading-snug text-parchment sm:text-base">
                    {j.name}
                  </h3>
                  <span className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-gold-light/80 transition-colors group-hover:text-parchment">
                    Dergiyi incele →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
