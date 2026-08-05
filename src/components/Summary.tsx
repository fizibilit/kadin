import { project, summary, summaryExtra } from "@/data/project";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Summary() {
  return (
    <section id="ozet" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Proje Özeti"
            title="Şiddeti fiziksel bir olgunun ötesinde okumak"
          />
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink-soft">{summary}</p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">{summaryExtra}</p>

          <blockquote className="mt-8 border-l-2 border-gold pl-5 font-display text-lg sm:text-xl italic text-maroon-dark">
            Şiddetin türleri, failleri, gerçekleştiği alanlar ve mağdur algısı; dört
            katmanlı tipolojik bir çerçevede, anakronizme düşmeden dönemin koşulları
            içinde değerlendiriliyor.
          </blockquote>
        </Reveal>

        <Reveal delay={120}>
          <div className="paper-grain rounded-2xl border border-gold-light/40 bg-parchment-dark/40 p-7">
            <h3 className="font-display text-lg font-semibold text-maroon-dark">
              Proje Bilgileri
            </h3>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-ink-soft/70 uppercase tracking-wide text-xs">Program</dt>
                <dd className="mt-1 font-medium">{project.program}</dd>
              </div>
              <div>
                <dt className="text-ink-soft/70 uppercase tracking-wide text-xs">
                  Yürütücü Kurum
                </dt>
                <dd className="mt-1 font-medium">{project.institution}</dd>
              </div>
              <div>
                <dt className="text-ink-soft/70 uppercase tracking-wide text-xs">
                  Proje Yürütücüsü
                </dt>
                <dd className="mt-1 font-medium">{project.pi}</dd>
              </div>
              <div>
                <dt className="text-ink-soft/70 uppercase tracking-wide text-xs">
                  İncelenen Dönem
                </dt>
                <dd className="mt-1 font-medium">{project.years}</dd>
              </div>
              <div>
                <dt className="text-ink-soft/70 uppercase tracking-wide text-xs">Süre</dt>
                <dd className="mt-1 font-medium">{project.duration}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
