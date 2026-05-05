import { FadeIn } from "./FadeIn";

const services = [
  { num: "01", name: "Web Development", desc: "Full-stack websites and web apps built with modern stacks — fast, scalable, and tailored to your business goals." },
  { num: "02", name: "Web Design", desc: "Clean, modern, and conversion-focused designs with attention to layout, typography, and user experience." },
  { num: "03", name: "SEO Optimization", desc: "Technical and on-page SEO that improves visibility, drives organic traffic, and ranks your business higher." },
  { num: "04", name: "Integrations", desc: "Connecting CRMs, payments, analytics, and third-party APIs to streamline operations and unlock automation." },
  { num: "05", name: "Web Management", desc: "Ongoing maintenance, performance tuning, and content management so your site stays fast, safe, and evolving." },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ backgroundColor: "#FFFFFF", color: "#0C0C0C" }}
    >
      <FadeIn>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 1 }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1} y={30}>
            <div
              className="flex items-center gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{ borderTop: i === 0 ? "1px solid rgba(12,12,12,0.15)" : "none", borderBottom: "1px solid rgba(12,12,12,0.15)" }}
            >
              <span
                className="font-black shrink-0"
                style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
              >
                {s.num}
              </span>
              <div className="flex-1 flex flex-col gap-3">
                <h3
                  className="font-medium uppercase"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)", lineHeight: 1.1 }}
                >
                  {s.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", opacity: 0.6 }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;