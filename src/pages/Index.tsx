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
import AnimatedSection from "@/components/ui/AnimatedSection";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="ЕМС.3 — Энергосервисная инвестиционная компания | Энергоэффективность"
        description="Инвестируем в энергоэффективность. Реализуем энергосервисные контракты с 2009 года. Снижение затрат на энергоресурсы без капитальных вложений."
        keywords="энергосервисный контракт, ЭСКО, энергоэффективность, энергосбережение, инвестиции в энергетику, снижение затрат"
      />
      <Header />
      <Hero />
      <AnimatedSection animation="fade-up">
        <About />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <Values />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <Directions />
      </AnimatedSection>
      <ESCODiagram />
      <AnimatedSection animation="fade-up">
        <Projects />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <NewsSection />
      </AnimatedSection>
      <AnimatedSection animation="scale-in">
        <Portal />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <Contact />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;
