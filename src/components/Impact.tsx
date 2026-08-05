import { beneficiaries, disseminationPartner, limitation, outputs, risks } from "@/data/project";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Impact() {
  return (
    <section id="etki" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Yaygın Etki"
          title="Bilimden politikaya uzanan çıktılar"
          description="Proje çıktıları; akademik literatüre katkının yanı sıra kamu kurumları ve sivil toplum için doğrudan kullanılabilir bir referans kaynağı oluşturuyor."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-4">
        {outputs.map((o, i) => (
          <Reveal key={o.label} delay={i * 80}>
            <div className="h-full rounded-2xl border border-gold-light/40 bg-parchment-dark/30 p-6 text-center">
              <p className="font-display text-4xl font-semibold text-maroon">{o.value}</p>
              <p className="mt-2 text-sm text-ink-soft">{o.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <h3 className="font-display text-lg font-semibold text-maroon-dark">
            Politikaya Katkı Sağlanacak Kurumlar
          </h3>
          <ul className="mt-5 space-y-3">
            {beneficiaries.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-xl border border-gold-light/40 bg-parchment-dark/20 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-maroon">
              Yayılım Faaliyeti · {disseminationPartner.period}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
              {disseminationPartner.activity}: {disseminationPartner.name}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h3 className="font-display text-lg font-semibold text-maroon-dark">
            Risk Yönetimi
          </h3>
          <div className="mt-5 space-y-4">
            {risks.map((r) => (
              <div key={r.title} className="rounded-xl border border-gold-light/40 bg-parchment-dark/20 p-4">
                <p className="text-sm font-semibold text-maroon">{r.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{r.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={180}>
        <div className="mt-10 rounded-xl border border-gold/50 bg-parchment-dark/30 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-maroon">
            Araştırmanın Sınırlılıkları
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{limitation}</p>
        </div>
      </Reveal>
    </section>
  );
}
