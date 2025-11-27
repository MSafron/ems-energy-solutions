import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Statistics />
      <SectionDivider />
      <Mission />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
