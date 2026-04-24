import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sterling International",
    desc: "Training and education platform for aged care and disability services with student portals and course management.",
    url: "https://sterlinginternational.com.au/",
    tags: ["Education", "WordPress", "LMS"],
  },
  {
    title: "Momentum College",
    desc: "Workforce training platform for NDIS employers featuring traineeship pathways and funded program enrollment.",
    url: "https://momentumcollege.edu.au/",
    tags: ["Education", "Web Design", "SEO"],
  },
  {
    title: "The Marketing Factory",
    desc: "Creative agency portfolio showcasing branding, design, and marketing services with a bold visual identity.",
    url: "https://themarketingfactory.com.au/",
    tags: ["Agency", "Portfolio", "Branding"],
  },
  {
    title: "Unicorn CMS",
    desc: "Content management system built for Australian businesses, offering streamlined website management and publishing workflows.",
    url: "https://unicorn-cms.au/",
    tags: ["CMS", "SaaS", "Web Platform"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 px-6">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-3">Projects</p>
          <h2 className="text-3xl lg:text-5xl font-display font-bold">
            Selected Work
          </h2>
        </motion.div>

        <div className="grid gap-4">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-xl p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 group hover:border-primary/30 transition-all hover:glow cursor-pointer"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display font-semibold text-xl lg:text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                </div>
                <p className="text-muted-foreground text-sm lg:text-base max-w-2xl">
                  {project.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
