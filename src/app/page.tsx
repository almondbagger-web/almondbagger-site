import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Analytics from "@/components/Analytics";
import Works from "@/components/Works";
import Ecosystem from "@/components/Ecosystem";
import FAQ from "@/components/FAQ";
import CompanyContact from "@/components/CompanyContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Analytics />
        <Works />
        <Ecosystem />
        <FAQ />
        <CompanyContact />
      </main>
      <Footer />
    </>
  );
}
