export default function Footer() {
  return (
    <footer className="bg-dark2 border-t border-border-dark py-7 px-6 md:px-14 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
      <p className="font-mono text-[10px] tracking-widest text-bg/50 uppercase">
        © 2026 Ajit Singh · All rights reserved.
      </p>
      
      <span className="font-display text-base text-accent">
        A.Singh
      </span>
      
      <p className="font-mono text-[10px] tracking-widest text-bg/50 uppercase">
        Built with React & Tailwind
      </p>
    </footer>
  );
}
