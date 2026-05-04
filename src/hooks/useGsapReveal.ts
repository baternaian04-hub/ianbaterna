import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Applies scroll-triggered fade/slide reveals to elements with [data-reveal]
 * and parallax to elements with [data-parallax].
 */
export const useGsapReveal = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Reveals
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        const direction = el.dataset.reveal || "up";
        const delay = parseFloat(el.dataset.revealDelay || "0");
        const from: gsap.TweenVars = { opacity: 0, duration: 0.9, ease: "power3.out", delay };
        if (direction === "up") from.y = 50;
        if (direction === "down") from.y = -50;
        if (direction === "left") from.x = -60;
        if (direction === "right") from.x = 60;
        if (direction === "scale") from.scale = 0.92;

        gsap.from(el, {
          ...from,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Parallax
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.2");
        gsap.to(el, {
          yPercent: -speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Stagger groups
      gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((parent) => {
        const children = parent.querySelectorAll<HTMLElement>("[data-stagger-item]");
        if (!children.length) return;
        gsap.from(children, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: parent,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    // Refresh after fonts/images load
    const t = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, []);
};