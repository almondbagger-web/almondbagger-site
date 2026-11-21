import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import OpportunityBanners from "@/components/OpportunityBanners";
import Marquee from "@/components/Marquee";
import Analytics from "@/components/Analytics";
import Works from "@/components/Works";
import Ecosystem from "@/components/Ecosystem";
import News from "@/components/News";
import FAQ from "@/components/FAQ";
import CompanyContact from "@/components/CompanyContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <OpportunityBanners />
        <Marquee />
        <Analytics />
        <Works />
        <Ecosystem />
        <News />
        <FAQ />
        <CompanyContact />
      </main>
      <Footer />
    </>
  );
}
