import { methodSteps } from "@/data/project";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Method() {
  return (
    <section id="yontem" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Yöntem"
          title="Nitel araştırma ve doküman analizi"
          description="Amaçlı ölçüt örnekleme ile seçilen metinler, sadeleştirilmiş transkripsiyon ve ATLAS.ti destekli içerik analiziyle işleniyor."
        />
      </Reveal>

      <div className="relative mt-14">
        <div
          aria-hidden
          className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-gold via-gold-light to-transparent sm:left-1/2"
        />
        <div className="space-y-10">
          {methodSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div
                className={`relative flex flex-col sm:flex-row gap-5 sm:gap-10 ${
                  i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
                }`}
              >
                <div
                  className={`hidden sm:block sm:w-1/2 ${
                    i % 2 === 1 ? "" : "sm:invisible"
                  }`}
                />
                <span className="absolute left-5 sm:left-1/2 top-0 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-maroon text-parchment font-display text-sm font-semibold ring-4 ring-parchment">
                  {i + 1}
                </span>
                <div className="pl-16 sm:w-1/2 sm:pl-0">
                  <div
                    className={`rounded-xl border border-gold-light/40 bg-parchment-dark/30 p-5 ${
                      i % 2 === 1 ? "sm:mr-10" : "sm:ml-10"
                    }`}
                  >
                    <h3 className="font-display text-base font-semibold text-maroon-dark">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
