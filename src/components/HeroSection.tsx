import { motion } from "framer-motion";
import profileImage from "@/assets/ian-profile.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, hsl(180 70% 50%), transparent 70%)' }} />

      <div className="container max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-4">
              Web Developer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-semibold leading-[1.1] mb-6">
              Hi, I'm{" "}
              <span className="text-gradient-animated">Ian Baterna</span>
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-xl leading-relaxed mb-8">
              A results-driven web developer with 5+ years of experience building high-performing, user-centered digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold shadow-lg shadow-primary/20 transition-shadow hover:shadow-primary/40"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-display font-medium hover:bg-secondary hover:border-primary/40 transition-colors"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Animated ring */}
              <motion.div
                className="absolute -inset-3 rounded-full border-2 border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ borderStyle: "dashed" }}
              />
              {/* Glow pulse */}
              <motion.div
                className="absolute -inset-1 rounded-full bg-primary/10 blur-xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.15, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Profile image */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/30 glow">
                <img src={profileImage} alt="Ian Baterna" className="w-full h-full object-cover" width={320} height={320} />
              </div>
              {/* Badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-primary flex flex-col items-center justify-center shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                <span className="text-primary-foreground font-display font-bold text-base leading-none">5+</span>
                <span className="text-primary-foreground/80 text-[9px] font-display">yrs</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
