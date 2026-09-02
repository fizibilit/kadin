import CiteThis from "@/components/CiteThis";
import Chronology from "@/components/Chronology";
import ConceptMap from "@/components/ConceptMap";
import ContributeCallout from "@/components/ContributeCallout";
import DigitalArchive from "@/components/DigitalArchive";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Innovation from "@/components/Innovation";
import Method from "@/components/Method";
import NationalGains from "@/components/NationalGains";
import Periodicals from "@/components/Periodicals";
import ProjectOutputs from "@/components/ProjectOutputs";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollToTop from "@/components/ScrollToTop";
import Summary from "@/components/Summary";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import Typology from "@/components/Typology";
import UpdatesLog from "@/components/UpdatesLog";
import ViolenceTrend from "@/components/ViolenceTrend";
import WordCloud from "@/components/WordCloud";

export default function Home() {
  return (
    <>
      <ReadingProgress />
      <Header />
      <main>
        <Hero />
        <Summary />
        <NationalGains />
        <Innovation />
        <Typology />
        <Method />
        <Timeline />
        <Team />
        <Periodicals />
        <Chronology />
        <ViolenceTrend />
        <ConceptMap />
        <WordCloud />
        <DigitalArchive />
        <ProjectOutputs />
        <Impact />

        <section className="mx-auto max-w-5xl px-5 sm:px-8 py-16 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            <CiteThis />
            <ContributeCallout />
          </div>
        </section>

        <FAQ />
        <UpdatesLog />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
