import ClientOnly from "@/components/ClientOnly";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Survey from "@/components/Survey";
import OurHistory from "@/components/OurHistory";

export default function Home() {
  return (
    <ClientOnly>
      <Navbar />
      <Hero />
      <Featured />
      <Services />
      <OurHistory />
      <Survey />
      <Footer />
    </ClientOnly>
  );
}
