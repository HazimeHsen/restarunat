import ClientOnly from "@/components/ClientOnly";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Survey from "@/components/Survey";

export default function Home() {
  return (
    <ClientOnly>
      <Navbar />
      <Hero />
      <Featured />
      <Services />
      <Survey />
      <Footer />
    </ClientOnly>
  );
}
