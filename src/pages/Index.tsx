import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Directions from "@/components/Directions";
import ESCODiagram from "@/components/ESCODiagram";
import Projects from "@/components/Projects";
import Portal from "@/components/Portal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { NewsSection } from "@/components/news/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Values />
      <Directions />
      <ESCODiagram />
      <Projects />
      <NewsSection />
      <Portal />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
