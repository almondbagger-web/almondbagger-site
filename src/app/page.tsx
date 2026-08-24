import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AIFeature from "@/components/AIFeature";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Price from "@/components/Price";
import FAQ from "@/components/FAQ";
import Recruit from "@/components/Recruit";
import Company from "@/components/Company";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FastArrowGraphBackground from "@/components/FastArrowGraphBackground";
import { SiteAtmosphere } from "@/components/VelocityVisuals";

export default function Home() {
  return (
    <>
      <SiteAtmosphere />
      <FastArrowGraphBackground
        mode="fixed"
        intensity="subtle"
        className="z-[1]"
      />
      <Navbar />
      <main className="relative z-[2]">
        <Hero />
        <About />
        <Services />
        <AIFeature />
        <Works />
        <Price />
        <FAQ />
        <Recruit />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
