import { additionalTheorists, innovation, theoreticalFrame } from "@/data/project";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Innovation() {
  return (
    <section id="yenilik" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Yenilikçi Yön"
          title="Literatürdeki boşluğu dolduran özgün bir yaklaşım"
          description="Dört katmanlı tipolojik model, Osmanlı dönemi süreli yayınlarında kadına yönelik şiddetin söylemsel analizinde ilk kez sistematik olarak uygulanıyor."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {innovation.map((item, i) => (
          <Reveal key={item.title} delay={i * 90}>
            <div className="flex gap-4 rounded-xl border border-gold-light/40 bg-parchment-dark/30 p-5">
              <span className="font-display text-2xl font-semibold text-gold shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-maroon-dark">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-12 rounded-2xl bg-maroon-dark p-7 sm:p-9 text-parchment">
          <h3 className="font-display text-lg font-semibold text-gold-light">
            Kuramsal Çerçeve
          </h3>
          <p className="mt-2 text-sm text-parchment-dark/75 max-w-2xl">
            Feminist kuramın şiddeti cinsiyet rolleri, sembolik tahakküm ve hegemonik
            yapılar bağlamında yeniden tanımlayan çerçevesi, Osmanlı toplumunun kültürel
            dinamikleriyle ilişkilendiriliyor.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {theoreticalFrame.map((t) => (
              <div key={t.name} className="rounded-lg border border-parchment/15 p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-display text-sm font-semibold text-gold-light">{t.name}</p>
                  <span className="shrink-0 text-[11px] text-parchment-dark/60">{t.years}</span>
                </div>
                <p className="mt-0.5 text-xs font-semibold text-gold-light/80">{t.concept}</p>
                <p className="mt-2 text-xs leading-relaxed text-parchment-dark/75">{t.bio}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs uppercase tracking-wide text-gold-light/70">
            Ayrıca temel alınan kuramcılar
          </p>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {additionalTheorists.map((t) => (
              <div key={t.name} className="rounded-lg border border-parchment/15 p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-display text-sm font-semibold text-gold-light">{t.name}</p>
                  <span className="shrink-0 text-[11px] text-parchment-dark/60">{t.years}</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-parchment-dark/75">{t.bio}</p>
                <p className="mt-2 text-[11px] text-parchment-dark/50">
                  Başvuru formunda atıf: {t.formCitation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
