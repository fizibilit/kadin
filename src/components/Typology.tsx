import { typology } from "@/data/project";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const accents = ["bg-maroon", "bg-teal", "bg-gold", "bg-maroon-light"];

export default function Typology() {
  return (
    <section id="tipoloji" className="bg-maroon-dark py-20 sm:py-28 text-parchment">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Dört Katmanlı Çerçeve"
            title="Şiddet Tipolojisi"
            description="Kodlama sürecinde her metin; eylem, fail, alan ve mağdur algısı olmak üzere dört düzlemde birden değerlendiriliyor."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {typology.map((t, i) => (
            <Reveal key={t.key} delay={i * 100} className="h-full">
              <div className="flex h-full flex-col rounded-2xl bg-parchment/[0.06] border border-parchment/10 p-6 backdrop-blur-sm">
                <span className={`h-1.5 w-10 rounded-full ${accents[i]}`} />
                <h3 className="mt-4 font-display text-lg font-semibold text-parchment">
                  {t.title}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-gold-light/80">
                  {t.subtitle}
                </p>
                <ul className="mt-5 space-y-2.5 text-sm text-parchment-dark/85">
                  {t.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-gold-light shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
