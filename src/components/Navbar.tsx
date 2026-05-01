import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const smoothScrollTo = (targetY: number) => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.scrollTo({
    top: Math.max(0, targetY),
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
};

const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  const id = href.slice(1);
  if (!id) {
    smoothScrollTo(0);
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 64; // navbar height
  const targetY = el.getBoundingClientRect().top + window.scrollY - offset;
  smoothScrollTo(targetY);
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50"
    >
      <div className="container max-w-6xl flex items-center justify-between h-16 px-5 sm:px-6">
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          className="relative z-[60] font-display font-bold text-lg group"
        >
          ian<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <div
          className="hidden md:flex items-center gap-8 relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              onMouseEnter={() => setHoveredIndex(i)}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors font-medium py-1"
            >
              {l.label}
              {hoveredIndex === i && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-foreground relative z-[60]"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: [0.83, 0, 0.17, 1] }}
            className="md:hidden fixed inset-0 z-40 w-screen h-screen bg-background"
            style={{ backgroundColor: "hsl(var(--background))" }}
          >
            <div className="flex flex-col min-h-screen h-full pt-24 px-6">
              <div className="flex-1 flex flex-col">
                {links.map((l, i) => (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{
                      delay: 0.15 + i * 0.07,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={(e) => {
                      handleNavClick(e, l.href);
                      setOpen(false);
                    }}
                    className="group flex items-center justify-between py-5 border-b border-border/40 text-foreground"
                  >
                    <span className="font-display text-[20px] font-medium tracking-tight transition-colors group-hover:text-primary">
                      {l.label}
                    </span>
                    <span className="text-xs text-muted-foreground tabular-nums">
                      0{i + 1}
                    </span>
                  </motion.a>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="py-8 text-xs text-muted-foreground"
              >
                © {new Date().getFullYear()} Ian Baterna
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
