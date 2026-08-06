import { typology } from "@/data/project";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TypologyCard from "./TypologyCard";

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
            description="Kodlama sürecinde her metin; eylem, fail, alan ve mağdur algısı olmak üzere dört düzlemde birden değerlendiriliyor. Başlığa tıklayarak açabilirsiniz."
          />
        </Reveal>

        <div className="mt-12 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {typology.map((t, i) => (
            <Reveal key={t.key} delay={i * 100}>
              <TypologyCard t={t} accentClass={accents[i]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
