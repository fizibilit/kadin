import { workPackages } from "@/data/project";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const TOTAL_MONTHS = 18;
const barColors = ["bg-maroon", "bg-teal", "bg-gold", "bg-maroon-light", "bg-ink-soft"];

export default function Timeline() {
  return (
    <section id="is-plani" className="bg-parchment-dark/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="İş-Zaman Çizelgesi"
            title="18 Aylık Uygulama Planı"
            description="Proje beş iş paketi (İP) hâlinde yapılandırılmıştır: planlama, metin tespiti, tasnif, değerlendirme ve uluslararası yayına dönüştürme."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 overflow-x-auto scroll-thin pb-2">
            <div className="min-w-[720px]">
              {/* month ruler */}
              <div
                className="grid text-[11px] text-ink-soft/60 pl-[136px]"
                style={{ gridTemplateColumns: `repeat(${TOTAL_MONTHS}, minmax(0,1fr))` }}
              >
                {Array.from({ length: TOTAL_MONTHS }, (_, i) => (
                  <div key={i} className="border-l border-ink/10 pl-1 pb-2">
                    {i + 1}
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {workPackages.map((wp, i) => {
                  const [start, end] = wp.range;
                  return (
                    <div key={wp.no} className="flex items-center gap-0">
                      <div className="w-[136px] shrink-0 pr-3">
                        <p className="text-xs font-semibold text-maroon-dark">İP{wp.no}</p>
                        <p className="text-[11px] text-ink-soft leading-tight">{wp.title}</p>
                      </div>
                      <div
                        className="relative flex-1 grid h-9 rounded-md bg-parchment"
                        style={{ gridTemplateColumns: `repeat(${TOTAL_MONTHS}, minmax(0,1fr))` }}
                      >
                        <div
                          className={`${barColors[i % barColors.length]} rounded-md flex items-center justify-center text-[11px] font-semibold text-parchment shadow-sm`}
                          style={{
                            gridColumnStart: start,
                            gridColumnEnd: end + 1,
                          }}
                          title={`${start}-${end}. Ay · %${wp.contribution} katkı`}
                        >
                          %{wp.contribution}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workPackages.map((wp, i) => (
            <Reveal key={wp.no} delay={i * 80}>
              <div className="h-full rounded-xl border border-gold-light/40 bg-parchment p-5">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${barColors[i % barColors.length]}`}
                  />
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft/70">
                    İP{wp.no} · Ay {wp.range[0]}–{wp.range[1]}
                  </p>
                </div>
                <h3 className="mt-2 font-display text-base font-semibold text-maroon-dark">
                  {wp.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{wp.detail}</p>
                <p className="mt-3 text-xs leading-relaxed text-ink-soft/70 border-t border-gold-light/30 pt-3">
                  {wp.metric}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
