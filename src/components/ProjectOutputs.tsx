import { publications } from "@/data/project";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ProjectOutputs() {
  return (
    <section id="ciktilar" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Proje Çıktıları"
          title="Bilimsel yayınlar ve erişim bağlantıları"
          description="Proje kapsamında yayımlanan veya yayımlanması planlanan makale, bildiri, tez ve kitaplar burada toplanır; her yayın tamamlandıkça ilgili bağlantı üzerinden doğrudan erişilebilir hâle getirilecektir."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {publications.map((p, i) => (
          <Reveal key={p.category} delay={i * 100} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-gold-light/40 bg-parchment-dark/20 p-6">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-display text-base font-semibold text-maroon-dark">
                  {p.category}
                </h3>
                <span className="shrink-0 font-display text-2xl font-semibold text-maroon">
                  {p.plannedCount}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.note}</p>

              <div className="mt-4 flex-1 space-y-2">
                {p.items.length > 0 ? (
                  p.items.map((item) => (
                    <a
                      key={item.url}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-2 rounded-lg border border-gold-light/40 bg-parchment p-3 text-sm text-ink hover:border-gold transition-colors"
                    >
                      <span>
                        {item.title}
                        {item.venue && (
                          <span className="block text-xs text-ink-soft/70">
                            {item.venue}
                            {item.year ? `, ${item.year}` : ""}
                          </span>
                        )}
                      </span>
                      <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-gold">
                        Görüntüle →
                      </span>
                    </a>
                  ))
                ) : (
                  <div className="rounded-lg border border-dashed border-gold-light/40 p-3 text-center text-xs text-ink-soft/60">
                    Henüz yayımlanmış çıktı yok — tamamlandıkça burada bağlantısıyla
                    listelenecektir.
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
