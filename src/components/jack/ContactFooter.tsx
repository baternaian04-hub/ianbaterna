import { Mail, Phone } from "lucide-react";
import { FadeIn } from "./FadeIn";

const ContactFooter = () => {
  return (
    <section
      id="contact"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 sm:gap-16">
        <FadeIn>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Let&apos;s talk
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            className="text-[#D7E2EA] font-light text-center max-w-xl"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
          >
            I&apos;m always open to new projects and collaborations. Let&apos;s turn your ideas into powerful, growth-driven digital solutions.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
            <a
              href="mailto:baternaian95@gmail.com"
              className="flex items-center gap-3 text-[#D7E2EA] hover:opacity-70 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              <span className="uppercase tracking-wider text-sm sm:text-base">
                baternaian95@gmail.com
              </span>
            </a>
            <a
              href="tel:09684044242"
              className="flex items-center gap-3 text-[#D7E2EA] hover:opacity-70 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              <span className="uppercase tracking-wider text-sm sm:text-base">09684044242</span>
            </a>
          </div>
        </FadeIn>
      </div>

      <div className="mt-20 pt-8 border-t border-[#D7E2EA]/10 text-center text-[#D7E2EA]/50 text-xs uppercase tracking-widest">
        © {new Date().getFullYear()} Ian Baterna
      </div>
    </section>
  );
};

export default ContactFooter;