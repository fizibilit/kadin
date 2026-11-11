import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JournalsExplorer from "@/components/JournalsExplorer";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollToTop from "@/components/ScrollToTop";
import { journals } from "@/data/journals";

export function generateStaticParams() {
  return journals.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata(props: PageProps<"/dergiler/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const j = journals.find((x) => x.slug === slug);
  if (!j) return {};
  return {
    title: `${j.name} (${j.year}) | Dergiler | Osmanlı Basınında Kadına Yönelik Şiddetin Analizi`,
    description: j.paragraphs[0]?.slice(0, 180),
  };
}

export default async function JournalPage(props: PageProps<"/dergiler/[slug]">) {
  const { slug } = await props.params;
  const journal = journals.find((j) => j.slug === slug);
  if (!journal) notFound();

  return (
    <>
      <ReadingProgress />
      <Header />
      <main>
        <JournalsExplorer active={journal} />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
