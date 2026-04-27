import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const smoothScrollTo = (targetY: number, duration = 900) => {
  const startY = window.scrollY;
  const diff = targetY - startY;
  if (Math.abs(diff) < 1) return;
  let startTime: number | null = null;

  const step = (timestamp: number) => {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + diff * eased);
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
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

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50"
    >
      <div className="container max-w-6xl flex items-center justify-between h-16 px-6">
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          className="font-display font-bold text-lg group"
        >
          ian<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-xl px-6 pb-4">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => {
                handleNavClick(e, l.href);
                setOpen(false);
              }}
              className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
