"use client";

import { useState } from "react";
import { faqs } from "@/data/project";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="sss" className="mx-auto max-w-4xl px-5 sm:px-8 py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Sıkça Sorulan Sorular"
          title="Site ve arşiv hakkında merak edilenler"
        />
      </Reveal>

      <div className="mt-10 divide-y divide-gold-light/25 border-y border-gold-light/25">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={item.q} delay={i * 40}>
              <div>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-maroon"
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-ink">
                    {item.q}
                  </span>
                  <svg
                    className={`h-4 w-4 shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-8 text-sm leading-relaxed text-ink-soft">{item.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
