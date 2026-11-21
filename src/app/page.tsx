import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Strengths from "@/components/Strengths";
import Works from "@/components/Works";
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
        <CompanyContact />
      </main>
      <Footer />
    </>
  );
}
