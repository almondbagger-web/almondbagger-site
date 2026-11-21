import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Strengths from "@/components/Strengths";
import Works from "@/components/Works";
import Strategy from "@/components/Strategy";
import FAQ from "@/components/FAQ";
import CompanyContact from "@/components/CompanyContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Strengths />
        <Works />
        <Strategy />
        <FAQ />
        <CompanyContact />
      </main>
      <Footer />
    </>
  );
}
