import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Char = ({ char, range, progress }: { char: string; range: [number, number]; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative">
      <span className="opacity-0">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const chars = text.split("");
  return (
    <p ref={ref} className={className}>
      {chars.map((c, i) => {
        const start = i / chars.length;
        const end = start + 1 / chars.length;
        return <Char key={i} char={c} range={[start, end]} progress={scrollYProgress} />;
      })}
    </p>
  );
};

export default AnimatedText;