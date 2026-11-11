import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JournalsExplorer from "@/components/JournalsExplorer";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollToTop from "@/components/ScrollToTop";
import { journals } from "@/data/journals";

export const metadata: Metadata = {
  title: "Dergiler | Osmanlı Basınında Kadına Yönelik Şiddetin Analizi",
  description:
    "Projede incelenen Osmanlı kadın dergilerinin kapakları, yayın politikaları ve içerikleri.",
};

export default function JournalsIndexPage() {
  return (
    <>
      <ReadingProgress />
      <Header />
      <main>
        <JournalsExplorer active={journals[0]} />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
