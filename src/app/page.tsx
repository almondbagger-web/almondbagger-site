import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Works from "@/components/Works";
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
        <Works />
        <FAQ />
        <CompanyContact />
      </main>
      <Footer />
    </>
  );
}
