import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Contact />
      <Footer />
    </div>
  );
};

export default PageLayout;
