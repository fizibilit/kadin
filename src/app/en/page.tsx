import type { Metadata } from "next";
import Link from "next/link";
import {
  projectEn,
  statsEn,
  summaryEn,
  summaryExtraEn,
  innovationEn,
  nationalGainsEn,
  methodStepsEn,
  teamEn,
  womenPeriodicalsEn,
} from "@/data/project.en";
import Reveal from "@/components/Reveal";
import ScrollToTop from "@/components/ScrollToTop";

const EN_TITLE = "Analysis of Violence Against Women in the Ottoman Press (1869–1923) | TÜBİTAK 3005";
const EN_DESCRIPTION =
  "An English-language overview of a TÜBİTAK 3005 project led by Kilis 7 Aralık University, examining representations of violence against women in Ottoman-era periodicals (1869–1923) through a four-layer typology.";

export const metadata: Metadata = {
  title: EN_TITLE,
  description: EN_DESCRIPTION,
  openGraph: {
    title: EN_TITLE,
    description: EN_DESCRIPTION,
    url: "https://kadin-self.vercel.app/en",
    siteName: "Analysis of Violence Against Women in the Ottoman Press",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: EN_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: EN_TITLE,
    description: EN_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-gold-light/25 py-14 sm:py-16">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-maroon-dark">
            {title}
          </h2>
          <div className="mt-6">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}

export default function EnglishSummaryPage() {
  return (
    <div className="min-h-screen bg-parchment text-ink" lang="en">
      <header className="sticky top-0 z-50 border-b border-gold-light/40 bg-parchment/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 sm:px-8 py-3.5">
          <Link href="/en" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold text-gold font-display text-sm">
              OB
            </span>
            <span className="font-display text-sm font-semibold text-maroon-dark leading-tight">
              Violence Against Women
              <br /> in the Ottoman Press
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-maroon/30 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-maroon hover:bg-maroon/5 transition-colors"
          >
            Türkçe site →
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-maroon-dark via-maroon to-maroon-dark text-parchment">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-gold/20 blur-[110px]"
        />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 pt-16 sm:pt-20 pb-16 sm:pb-20">
          <Reveal className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
            <span className="rounded-full border border-gold-light/50 px-3 py-1 font-semibold uppercase tracking-[0.2em] text-gold-light">
              {projectEn.program} · {projectEn.number}
            </span>
            <span className="text-parchment-dark/70">{projectEn.programFull}</span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-3xl sm:text-5xl font-semibold leading-[1.1] text-balance">
              {projectEn.title}
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-3 font-display text-lg sm:text-xl text-gold-light/90">
              {projectEn.years} · Violence, Discourse and Silence in the Periodical Press
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-parchment-dark/85">
              {projectEn.institution} · Principal Investigator: {projectEn.pi} · {projectEn.duration}
            </p>
          </Reveal>

          <Reveal delay={300} className="mt-6 flex flex-wrap items-center gap-2 text-xs text-gold-light/70">
            <span className="rounded-full border border-gold-light/30 px-2.5 py-1">
              This is a summary in English.
            </span>
            <span>
              The full site — typology, digital archive, chronology and concept map — is in Turkish.
            </span>
          </Reveal>

          <Reveal delay={380}>
            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-5 sm:gap-4 border-t border-parchment/15 pt-8">
              {statsEn.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-xl sm:text-2xl font-semibold text-gold-light">
                    {s.value}
                  </dd>
                  <dd className="mt-1 text-xs text-parchment-dark/70">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <Section id="summary" eyebrow="Overview" title="Project Summary">
        <p className="text-base leading-relaxed text-ink-soft">{summaryEn}</p>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">{summaryExtraEn}</p>
      </Section>

      <Section id="innovation" eyebrow="Contribution" title="What Makes This Study New">
        <div className="grid gap-4 sm:grid-cols-2">
          {innovationEn.map((it) => (
            <div key={it.title} className="rounded-xl border border-gold-light/40 bg-parchment-dark/20 p-5">
              <h3 className="font-display text-base font-semibold text-maroon-dark">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{it.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="gains" eyebrow="Impact" title="National and Scholarly Gains">
        <div className="space-y-5">
          {nationalGainsEn.map((g) => (
            <div key={g.title}>
              <h3 className="font-display text-base font-semibold text-maroon-dark">{g.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{g.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="method" eyebrow="Methodology" title="How the Research Is Conducted">
        <ol className="space-y-4">
          {methodStepsEn.map((m, i) => (
            <li key={m.title} className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold text-xs font-semibold text-gold">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-maroon-dark">{m.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="sources" eyebrow="Primary Sources" title="Women's Periodicals Surveyed">
        <div className="flex flex-wrap gap-2.5">
          {womenPeriodicalsEn.map((p) => (
            <span
              key={p}
              className="rounded-full border border-gold/40 bg-parchment-dark/20 px-3.5 py-1.5 text-sm text-ink-soft"
            >
              {p}
            </span>
          ))}
        </div>
        <p className="mt-5 text-sm leading-relaxed text-ink-soft/80">
          General-interest newspapers of the period (e.g. İkdam, Tercüman-ı Hakikat, Sebilürreşat) are
          surveyed as comparison sources. See the Turkish site&rsquo;s{" "}
          <Link href="/#kronoloji" className="text-maroon underline underline-offset-2">
            Chronology
          </Link>{" "}
          section for detail on each publication.
        </p>
      </Section>

      <Section id="team" eyebrow="Project Team" title="Researchers">
        <div className="rounded-xl border border-gold-light/40 bg-parchment-dark/20 p-5">
          <p className="text-sm font-semibold text-maroon-dark">{teamEn.pi.name}</p>
          <p className="text-xs uppercase tracking-wide text-gold mt-0.5">{teamEn.pi.role}</p>
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {teamEn.researchers.map((r) => (
            <div key={r.name} className="rounded-lg border border-gold-light/25 px-4 py-2.5 text-sm text-ink-soft">
              {r.name}
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-ink-soft/80">
          <span className="font-semibold text-maroon-dark">Project advisors: </span>
          {teamEn.projectAdvisors.map((a) => a.name).join(", ")}
        </p>
        <p className="mt-1.5 text-sm text-ink-soft/80">
          <span className="font-semibold text-maroon-dark">Field advisors: </span>
          {teamEn.advisors.join(", ")}
        </p>
        <p className="mt-1.5 text-sm text-ink-soft/80">
          <span className="font-semibold text-maroon-dark">Graduate scholars: </span>
          {teamEn.scholars.map((s) => s.name).join(", ")}
        </p>
      </Section>

      <Section id="contact" eyebrow="Get in Touch" title="Contact">
        <p className="text-sm leading-relaxed text-ink-soft">
          For questions about the project, please reach the Principal Investigator,{" "}
          <span className="font-semibold text-maroon-dark">{projectEn.pi}</span>, at{" "}
          {projectEn.institution}.
        </p>
        <p className="mt-4 text-sm text-ink-soft/70">
          For the full project site — including the interactive violence typology, the searchable
          digital archive of transcribed texts, the periodical chronology and the concept map — visit
          the{" "}
          <Link href="/" className="text-maroon underline underline-offset-2">
            Turkish-language site
          </Link>
          .
        </p>
      </Section>

      <footer className="border-t border-gold-light/25 py-8 text-center text-xs text-ink-soft/60">
        {projectEn.program} (No. {projectEn.number}) · {projectEn.institution} · {projectEn.years}
      </footer>
      <ScrollToTop />
    </div>
  );
}
