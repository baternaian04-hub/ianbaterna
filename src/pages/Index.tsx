import HeroSection from "@/components/jack/HeroSection";
import MarqueeSection from "@/components/jack/MarqueeSection";
import AboutSection from "@/components/jack/AboutSection";
import ServicesSection from "@/components/jack/ServicesSection";
import ProjectsSection from "@/components/jack/ProjectsSection";
import ContactFooter from "@/components/jack/ContactFooter";

const Index = () => {
  return (
    <main
      className="min-h-screen relative"
      style={{ backgroundColor: "#0C0C0C", overflowX: "clip" }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactFooter />
    </main>
  );
};

export default Index;
