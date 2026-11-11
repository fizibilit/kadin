import { disseminationActivities, publicationCategories } from "@/data/project";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ProjectOutputs() {
  return (
    <section id="ciktilar" className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Proje Çıktıları"
          title="Bilimsel yayınlar ve erişim bağlantıları"
          description="Proje kapsamında yayımlanan veya yayımlanması planlanan kitap, tez, bildiri, makale ve raporlar burada toplanır; her yayın tamamlandıkça ilgili bağlantı üzerinden doğrudan erişilebilir hâle getirilir."
        />
      </Reveal>

      <div className="mt-12 space-y-8">
        {publicationCategories.map((c, i) => {
          const count = c.items.length > 0 ? c.items.length : c.plannedCount;
          const countLabel = c.items.length > 0 ? "yayın" : "planlanan";
          return (
            <Reveal key={c.id} delay={i * 60}>
              <div
                id={`ciktilar-${c.id}`}
                className="scroll-mt-24 rounded-2xl border border-gold-light/40 bg-parchment-dark/20 p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-maroon-dark">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{c.note}</p>
                  </div>
                  {count !== undefined && (
                    <div className="shrink-0 text-right">
                      <span className="block font-display text-3xl font-semibold leading-none text-maroon">
                        {count}
                      </span>
                      <span className="text-[11px] uppercase tracking-wide text-ink-soft/60">
                        {countLabel}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-5 space-y-3">
                  {c.items.length > 0 ? (
                    c.items.map((item) => {
                      const body = (
                        <>
                          <span className="block text-base font-semibold leading-snug text-ink">
                            {item.title}
                          </span>
                          {item.authors && (
                            <span className="mt-1 block text-sm text-ink-soft">{item.authors}</span>
                          )}
                          {(item.venue || item.date || item.year) && (
                            <span className="mt-1 block text-xs text-ink-soft/70">
                              {[item.venue, item.date ?? item.year].filter(Boolean).join(" · ")}
                            </span>
                          )}
                          {item.abstract && (
                            <span className="mt-2 block text-xs leading-relaxed text-ink-soft/80">
                              {item.abstract}
                            </span>
                          )}
                          {item.url && (
                            <span className="mt-2 inline-block text-xs font-semibold uppercase tracking-wide text-gold">
                              Makaleye git (DOI) →
                            </span>
                          )}
                        </>
                      );
                      const cls =
                        "block rounded-lg border border-gold-light/40 bg-parchment p-4 transition-colors";
                      return item.url ? (
                        <a
                          key={item.title}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${cls} hover:border-gold`}
                        >
                          {body}
                        </a>
                      ) : (
                        <div key={item.title} className={cls}>
                          {body}
                        </div>
                      );
                    })
                  ) : (
                    <div className="rounded-lg border border-dashed border-gold-light/40 p-3 text-center text-xs text-ink-soft/60">
                      Henüz yayımlanmış çıktı yok — tamamlandıkça burada listelenecektir.
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120}>
        <div id="yayim-faaliyetleri" className="mt-14 scroll-mt-24">
          <h3 className="font-display text-xl font-semibold text-maroon-dark">
            Yayım Faaliyetleri
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
            Bulguların ve ara çıktıların paydaşlara ulaştırılmasına yönelik, dönem içinde
            yapılan faaliyetler.
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-gold-light/40">
            <div className="hidden grid-cols-[1.6fr_1.1fr_0.7fr] gap-4 bg-parchment-dark/40 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-ink-soft sm:grid">
              <span>Etkinlik</span>
              <span>Paydaş / olası kullanıcılar</span>
              <span>Zaman</span>
            </div>
            <ul className="divide-y divide-gold-light/30">
              {disseminationActivities.map((a) => (
                <li
                  key={a.activity}
                  className="grid gap-1.5 px-5 py-4 text-sm sm:grid-cols-[1.6fr_1.1fr_0.7fr] sm:gap-4"
                >
                  <span className="font-medium text-ink">
                    {a.activity}
                    {a.url && (
                      <>
                        {" "}
                        <a
                          href={a.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-maroon underline underline-offset-2"
                        >
                          ({a.url})
                        </a>
                      </>
                    )}
                  </span>
                  <span className="text-ink-soft">{a.audience}</span>
                  <span className="font-semibold text-maroon">{a.when}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
