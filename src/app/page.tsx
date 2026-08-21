import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Price from "@/components/Price";
import Company from "@/components/Company";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Works />
        <Price />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
