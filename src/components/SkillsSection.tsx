import { motion } from "framer-motion";
import {
  Code2, Search, Database, Palette, BarChart3, Server,
  Sparkles, HardDrive, LayoutGrid, Globe2, Settings2, FileCode2,
  Briefcase, Gauge, Workflow,
} from "lucide-react";

const skills = [
  { name: "WordPress", icon: Globe2 },
  { name: "SEO", icon: Search },
  { name: "Supabase Backend", icon: Database },
  { name: "HTML, CSS, JavaScript", icon: FileCode2 },
  { name: "Web Design", icon: Palette },
  { name: "PHP", icon: Code2 },
  { name: "Google Analytics", icon: BarChart3 },
  { name: "Firebase Studio", icon: Sparkles },
  { name: "SiteGround", icon: Server },
  { name: "Lovable.dev", icon: Sparkles },
  { name: "Google Console", icon: Settings2 },
  { name: "Microsoft Apps", icon: Briefcase },
  { name: "Elementor Pro", icon: LayoutGrid },
  { name: "Web Management", icon: Workflow },
  { name: "Yoast SEO", icon: Gauge },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 px-5 sm:px-6 relative">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <p className="text-primary font-display font-medium tracking-wider uppercase text-xs sm:text-sm mb-3">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-4 sm:mb-6">
            Tools & technologies
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
            A curated stack honed across 5+ years of building, optimizing, and shipping production-grade web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.05 + Math.floor(i / 5) * 0.08 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="group relative glass-card rounded-xl p-3.5 sm:p-5 flex flex-col items-start gap-2.5 sm:gap-3 hover:border-primary/50 transition-colors overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:rotate-6 transition-all duration-300">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <span className="relative z-10 font-display font-medium text-xs sm:text-sm leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Marquee tag strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 sm:mt-12 -mx-5 sm:mx-0 overflow-hidden relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex gap-3 animate-marquee whitespace-nowrap">
            {[...skills, ...skills].map((s, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full border border-border/60 bg-card/40 backdrop-blur text-xs font-medium text-muted-foreground"
              >
                {s.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;