import Chronology from "@/components/Chronology";
import ConceptMap from "@/components/ConceptMap";
import DigitalArchive from "@/components/DigitalArchive";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Innovation from "@/components/Innovation";
import Method from "@/components/Method";
import NationalGains from "@/components/NationalGains";
import Periodicals from "@/components/Periodicals";
import ProjectOutputs from "@/components/ProjectOutputs";
import Summary from "@/components/Summary";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import Typology from "@/components/Typology";

export default function Home() {
  return (
    <>
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
        <ConceptMap />
        <DigitalArchive />
        <ProjectOutputs />
        <Impact />
      </main>
      <Footer />
    </>
  );
}
