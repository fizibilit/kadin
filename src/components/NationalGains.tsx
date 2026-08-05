import { nationalGains } from "@/data/project";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = [
  <path key="1" d="M4 19V6a2 2 0 012-2h9l5 5v10a2 2 0 01-2 2H6a2 2 0 01-2-2z" strokeWidth="1.5" />,
  <path key="2" d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z" strokeWidth="1.5" strokeLinejoin="round" />,
  <path key="3" d="M12 21c4.5-2.5 8-6.5 8-11.5A8 8 0 004 9.5C4 14.5 7.5 18.5 12 21z" strokeWidth="1.5" />,
];

export default function NationalGains() {
  return (
    <section id="kazanim" className="bg-parchment-dark/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Ulusal Kazanımlar"
            title="Toplumsal ve kamusal fayda potansiyeli"
            description="Proje, beşeri bilimlerdeki ilerlemenin ötesinde, kamu politikalarına bilimsel temel sağlayacak somut kazanımlar hedefliyor."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {nationalGains.map((g, i) => (
            <Reveal key={g.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-gold-light/40 bg-parchment p-6 transition-shadow hover:shadow-lg hover:shadow-maroon/5">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-maroon)"
                  className="mb-4"
                >
                  {icons[i]}
                </svg>
                <h3 className="font-display text-lg font-semibold text-maroon-dark">
                  {g.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{g.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
