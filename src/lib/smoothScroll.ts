export const smoothScrollTo = (targetY: number) => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: Math.max(0, targetY), behavior: reduce ? "auto" : "smooth" });
};

export const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) => {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  const id = href.slice(1);
  if (!id) return smoothScrollTo(0);
  const el = document.getElementById(id);
  if (!el) return;
  const targetY = el.getBoundingClientRect().top + window.scrollY - 64;
  smoothScrollTo(targetY);
};