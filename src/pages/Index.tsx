import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedBackground from "@/components/AnimatedBackground";
import ThreeBackground from "@/components/ThreeBackground";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const Index = () => {
  useGsapReveal();
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <ThreeBackground />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="border-t border-border py-8 px-6 text-center">
        <p className="text-muted-foreground text-sm font-body">
          © {new Date().getFullYear()} Ian Baterna. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
