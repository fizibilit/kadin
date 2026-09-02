import { updates } from "@/data/project";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const MONTHS = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
];

function formatDate(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  return m ? `${MONTHS[m - 1]} ${y}` : y;
}

export default function UpdatesLog() {
  if (updates.length === 0) return null;

  return (
    <section className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Proje Güncellemeleri"
          title="Süreç ilerledikçe burada paylaşacağız"
        />
      </Reveal>

      <div className="mt-8 space-y-5">
        {updates
          .slice()
          .reverse()
          .map((u, i) => (
            <Reveal key={u.title} delay={i * 60}>
              <div className="flex gap-4">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                    {formatDate(u.date)}
                  </p>
                  <h3 className="mt-0.5 font-display text-base font-semibold text-maroon-dark">
                    {u.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{u.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
      </div>
    </section>
  );
}
