type Props = {
  href?: string;
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const ContactButton = ({ href = "#contact", label = "Contact Me", onClick }: Props) => (
  <a
    href={href}
    onClick={onClick}
    className="contact-pill inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base"
  >
    {label}
  </a>
);

export default ContactButton;