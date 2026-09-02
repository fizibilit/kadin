import { bibliographyNote, generalPeriodicals, womenPeriodicals } from "@/data/project";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Periodicals() {
  return (
    <section id="kaynaklar" className="relative overflow-hidden bg-maroon-dark py-20 sm:py-28 text-parchment">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Birincil Kaynaklar"
            title="Taranan Süreli Yayınlar"
            description="Farklı bölge ve ideolojik eğilimlerden gelen dergi ve gazeteler, amaçlı ölçüt örnekleme yöntemiyle seçilmiştir."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Kadınlara Doğrudan Yönelik Yayınlar
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {womenPeriodicals.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-gold-light/40 bg-parchment/[0.06] px-3.5 py-1.5 text-sm text-parchment/90"
                >
                  {p}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Genel İçerikli Karşılaştırma Kaynakları
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {generalPeriodicals.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-parchment/15 px-3.5 py-1.5 text-sm text-parchment-dark/80"
                >
                  {p}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-gold-light/30 bg-parchment/[0.05] p-5">
              <p className="text-sm leading-relaxed text-parchment-dark/85">
                Metinlerin tespitinde &ldquo;nisa, nisvan, nisviyyet, kadın, hatun, hanım,
                genç kız, kız çocuğu&rdquo; gibi anahtar kelimeler ve yayın tarihleri esas
                alınarak yıllara göre tasnif yapılıyor; {bibliographyNote} gibi temel
                fihristler detaylı biçimde inceleniyor.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
