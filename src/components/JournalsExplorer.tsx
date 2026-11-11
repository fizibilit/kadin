import Link from "next/link";
import { chronologyArchiveCounts } from "@/data/project";
import { journals, type Journal } from "@/data/journals";
import JournalCovers from "./JournalCovers";
import JournalSidebar from "./JournalSidebar";

// Paragraf biçimi: "## " alt başlık, "- " madde işareti, diğerleri düz paragraf.
function Body({ paragraphs }: { paragraphs: string[] }) {
  const out: React.ReactNode[] = [];
  let list: string[] = [];
  const flush = (key: string) => {
    if (list.length) {
      out.push(
        <ul key={key} className="mt-4 list-disc space-y-1.5 pl-5 text-base leading-relaxed text-ink-soft marker:text-gold">
          {list.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ul>
      );
      list = [];
    }
  };
  paragraphs.forEach((p, i) => {
    if (p.startsWith("- ")) {
      list.push(p.slice(2));
      return;
    }
    flush(`ul-${i}`);
    if (p.startsWith("## ")) {
      out.push(
        <h3 key={i} className="mt-8 font-display text-lg font-semibold text-maroon-dark">
          {p.slice(3)}
        </h3>
      );
    } else {
      out.push(
        <p key={i} className="mt-4 text-base leading-relaxed text-ink-soft">
          {p}
        </p>
      );
    }
  });
  flush("ul-end");
  return <>{out}</>;
}

export default function JournalsExplorer({ active }: { active: Journal }) {
  const idx = journals.findIndex((j) => j.slug === active.slug);
  const prev = idx > 0 ? journals[idx - 1] : null;
  const next = idx < journals.length - 1 ? journals[idx + 1] : null;
  const archiveCount = active.archiveKey ? chronologyArchiveCounts[active.archiveKey] : undefined;

  return (
    <section id="dergiler-sayfasi" className="mx-auto max-w-7xl px-5 sm:px-8 py-10 sm:py-14">
      <nav aria-label="Sayfa yolu" className="text-xs text-ink-soft/70">
        <Link href="/" className="hover:text-maroon">
          Ana sayfa
        </Link>
        <span className="mx-2">/</span>
        <Link href="/#dergiler" className="hover:text-maroon">
          Dergiler
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink-soft">{active.name}</span>
      </nav>

      <div className="mt-4">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Dergiler ve Yayın Politikaları
        </span>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-ink">
          Kadın dergileri: kapaklar, yayın çizgisi, içerik
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Projede incelenen {journals.length} dergi, yayımlandıkları yıla göre sıralanmıştır. Bir
          dergiyi seçerek kapağını ve yayın politikasını okuyabilirsiniz.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">
        <JournalSidebar journals={journals} activeSlug={active.slug} />

        <article className="min-w-0">
          <div className="grid gap-8 md:grid-cols-[minmax(220px,340px)_minmax(0,1fr)] md:gap-10">
            <div className="min-w-0 md:sticky md:top-24 md:self-start">
              <JournalCovers covers={active.covers} name={active.name} />
            </div>

            <div>
              <span className="inline-block rounded-full border border-gold-light/60 bg-parchment-dark/30 px-3 py-1 text-xs font-semibold text-maroon">
                {active.year}
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-maroon-dark">
                {active.name}
              </h2>
              {active.subtitle && (
                <p className="mt-1 text-sm text-gold">{active.subtitle}</p>
              )}

              <Body paragraphs={active.paragraphs} />

              {archiveCount ? (
                <Link
                  href="/#arsiv"
                  className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-maroon/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-maroon transition-colors hover:bg-maroon/10"
                >
                  Dijital arşivde bu dergiden {archiveCount} metin kodlanmış →
                </Link>
              ) : null}
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-gold-light/30 pt-6 text-sm">
            {prev ? (
              <Link
                href={`/dergiler/${prev.slug}`}
                className="rounded-lg border border-gold-light/40 px-4 py-2.5 text-ink-soft transition-colors hover:border-maroon/40 hover:bg-maroon/10 hover:text-maroon"
              >
                ← {prev.name} <span className="text-xs text-ink-soft/60">({prev.year})</span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                href={`/dergiler/${next.slug}`}
                className="rounded-lg border border-gold-light/40 px-4 py-2.5 text-ink-soft transition-colors hover:border-maroon/40 hover:bg-maroon/10 hover:text-maroon"
              >
                {next.name} <span className="text-xs text-ink-soft/60">({next.year})</span> →
              </Link>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
