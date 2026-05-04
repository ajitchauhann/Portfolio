import { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 60);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-4 md:py-7 transition-all duration-500 ${isScrolled ? 'bg-hero-bg/85 backdrop-blur-xl border-b border-border-dark py-4' : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="font-display font-medium text-lg tracking-wide text-bg">
        A<span className="text-accent">.</span>Singh
      </div>

      <ul className="hidden md:flex gap-9 list-none">
        {['About', 'Experience', 'Projects', 'Skills', 'Blog', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-xs font-normal tracking-widest uppercase text-bg/70 hover:text-bg/95 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <button className="text-[11px] tracking-widest uppercase text-hero-bg bg-accent border-none py-2.5 px-5 rounded-sm font-semibold hover:bg-[#e8bc6a] hover:-translate-y-px transition-all">
          <a href="#contact">Hire Me</a>
        </button>
      </div>
    </motion.nav>
  );
}
