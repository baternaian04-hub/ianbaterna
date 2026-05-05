import profileImage from "@/assets/ian-profile.jpg";
import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./ContactButton";
import { handleNavClick } from "@/lib/smoothScroll";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col" style={{ overflowX: "clip" }}>
      <FadeIn delay={0} y={-20} duration={0.7}>
        <nav className="flex items-center justify-between gap-4 px-6 md:px-10 pt-6 md:pt-8">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            Ian<span className="text-primary">.</span>
          </a>
          <div className="flex items-center gap-5 sm:gap-8 md:gap-12">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-end relative">
        <div className="overflow-hidden px-6 md:px-10">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
              Hi, i&apos;m ian
            </h1>
          </FadeIn>
        </div>

        <div className="flex items-end justify-between gap-4 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
              style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
            >
              a web developer driven by crafting high-performing and unforgettable digital experiences
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton onClick={(e) => handleNavClick(e, "#contact")} />
          </FadeIn>
        </div>

        <FadeIn
          delay={0.6}
          y={30}
          className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
        >
          <Magnet padding={150} strength={3}>
            <img
              src={profileImage}
              alt="Ian Baterna"
              className="w-full h-auto rounded-[40px] object-cover"
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;