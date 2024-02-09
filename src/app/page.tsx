import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Survey from "@/components/Survey";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Services />
      <Survey />
      <Footer />
    </>
  );
}
