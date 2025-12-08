import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Directions from "@/components/Directions";
import InvestmentModel from "@/components/InvestmentModel";
import Projects from "@/components/Projects";
import Portal from "@/components/Portal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Values />
      <Directions />
      <InvestmentModel />
      <Projects />
      <Portal />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;