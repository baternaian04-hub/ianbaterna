import { motion } from "framer-motion";
import { Code, Globe, Search, Wrench } from "lucide-react";

const skills = [
  { icon: Globe, title: "Web Design", desc: "Crafting beautiful, intuitive interfaces" },
  { icon: Code, title: "Full-Stack Dev", desc: "Front-end & back-end solutions" },
  { icon: Search, title: "SEO Optimization", desc: "Driving organic growth & visibility" },
  { icon: Wrench, title: "Integrations", desc: "Seamless system connections" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 px-6">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-3">About Me</p>
          <h2 className="text-3xl lg:text-5xl font-display font-semibold mb-8">
            Digital Experiences
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            I specialize in creating high-performing, user-centered websites and applications that not only look great but also deliver measurable results. Whether it's improving site performance, enhancing user experience, or solving complex technical challenges, I approach every project with a focus on efficiency, scalability, and impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-xl p-6 hover:border-primary/40 transition-colors group hover-lift relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <skill.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
              <h3 className="font-display font-semibold text-lg mb-1">{skill.title}</h3>
              <p className="text-muted-foreground text-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
