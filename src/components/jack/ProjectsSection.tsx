import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./LiveProjectButton";

const projects = [
  {
    num: "01",
    category: "Client",
    name: "Sterling International",
    url: "https://sterlinginternational.com.au/",
    images: [
      "https://image.thum.io/get/width/1200/crop/900/https://sterlinginternational.com.au/",
      "https://image.thum.io/get/width/1200/crop/1200/https://sterlinginternational.com.au/about-us/",
      "https://image.thum.io/get/width/1200/crop/1600/https://sterlinginternational.com.au/courses/",
    ],
  },
  {
    num: "02",
    category: "Client",
    name: "Momentum College",
    url: "https://momentumcollege.edu.au/",
    images: [
      "https://image.thum.io/get/width/1200/crop/900/https://momentumcollege.edu.au/",
      "https://image.thum.io/get/width/1200/crop/1200/https://momentumcollege.edu.au/about/",
      "https://image.thum.io/get/width/1200/crop/1600/https://momentumcollege.edu.au/courses/",
    ],
  },
  {
    num: "03",
    category: "SaaS",
    name: "Unicorn CMS",
    url: "https://unicorn-cms.au/",
    images: [
      "https://image.thum.io/get/width/1200/crop/900/https://unicorn-cms.au/",
      "https://image.thum.io/get/width/1200/crop/1200/https://unicorn-cms.au/",
      "https://image.thum.io/get/width/1200/crop/1600/https://unicorn-cms.au/",
    ],
  },
];

const ProjectCard = ({
  project,
  index,
  total,
  progress,
}: {
  project: typeof projects[number];
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) => {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const range: [number, number] = [index / total, 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-24 md:top-32" style={{ top: `${24 + index * 28}px` }}>
      <motion.div
        style={{ scale, backgroundColor: "#0C0C0C" }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8"
      >
        <div className="flex items-center justify-between gap-4 flex-wrap mb-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            <span
              className="font-black text-[#D7E2EA]"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
            >
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <span
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)", lineHeight: 1.1 }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.url} />
        </div>

        <div className="flex gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: "40%" }}>
            <img
              src={project.images[0]}
              alt={project.name}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.images[1]}
              alt={project.name}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div style={{ width: "60%" }}>
            <img
              src={project.images[2]}
              alt={project.name}
              loading="lazy"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef}>
        {projects.map((p, i) => (
          <div key={p.num} className="h-[85vh]">
            <ProjectCard
              project={p}
              index={i}
              total={projects.length}
              progress={scrollYProgress}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;