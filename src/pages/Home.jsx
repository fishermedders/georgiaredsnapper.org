import Hero from "../components/Hero";
import WhatIs from "../components/WhatIs";
import HowItWorks from "../components/HowItWorks";
import DownloadQuickStart from "../components/DownloadQuickStart";
import WhoParticipates from "../components/WhoParticipates";
import FAQ from "../components/FAQ";
import Partners from "../components/Partners";
import "./Home.css";

export default function Home() {
  return (
    <>
      <main className="content-container">
        <Hero />
        <WhatIs />
        <HowItWorks />
        <DownloadQuickStart />
        <WhoParticipates />
        <FAQ />
        <Partners />
      </main>
    </>
  );
}
