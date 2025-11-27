import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Statistics />
      <Mission />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
