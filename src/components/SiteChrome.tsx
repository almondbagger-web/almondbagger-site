import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlatinumBackdrop from "@/components/PlatinumBackdrop";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar forceLight />
      <main className="relative min-h-screen overflow-hidden bg-background/90 pt-[4.25rem] md:pt-[4.75rem]">
        <PlatinumBackdrop />
        <div className="relative z-[2]">{children}</div>
      </main>
      <Footer />
    </>
  );
}
