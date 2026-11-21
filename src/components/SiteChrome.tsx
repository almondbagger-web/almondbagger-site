import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar forceLight />
      <main className="min-h-screen pt-[4.25rem] md:pt-[4.75rem]">{children}</main>
      <Footer />
    </>
  );
}
