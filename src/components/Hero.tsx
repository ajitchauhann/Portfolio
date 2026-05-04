import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-hero-bg flex flex-col justify-center items-center text-center px-6 md:px-14 pb-14 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[radial-gradient(ellipse,rgba(212,168,83,0.07)_0%,transparent_65%)] pointer-events-none" />

      {/* Grid Lines */}
      <div className="hidden md:block absolute top-0 bottom-0 w-[1px] bg-border-dark left-14 pointer-events-none" />
      <div className="hidden md:block absolute top-0 bottom-0 w-[1px] bg-border-dark right-14 pointer-events-none" />
      <div className="hidden md:block absolute top-0 bottom-0 w-[1px] bg-border-dark left-1/3 pointer-events-none" />
      <div className="hidden md:block absolute top-0 bottom-0 w-[1px] bg-border-dark left-2/3 pointer-events-none" />

      {/* Hero Name */}
      <h1 className="font-display text-[clamp(4.2rem,11vw,12rem)] font-light leading-none tracking-[-0.03em] text-bg z-10 flex flex-wrap justify-center items-center gap-x-4 md:gap-x-8 w-full">
        <span className="inline-block overflow-hidden pb-2 md:pb-4">
          <motion.span
            initial={{ y: "105%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="inline-block"
          >
            Ajit
          </motion.span>
        </span>
        <span className="inline-block overflow-hidden pb-2 md:pb-4">
          <motion.span
            initial={{ y: "105%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="inline-block italic text-accent drop-shadow-[0_0_20px_rgba(212,168,83,0.25)] relative"
          >
            Singh.
          </motion.span>
        </span>
      </h1>

      {/* Subline Row */}
      <div className="flex flex-col items-center gap-8 mt-12 z-10 w-full max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-display text-[clamp(1.1rem,2vw,1.45rem)] font-light italic text-bg/90 max-w-[500px] leading-relaxed text-center"
        >
          Turning raw data into clear, confident decisions — through Python, SQL, and Power BI.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4 items-center"
        >
          <a href="#projects" className="font-body text-xs tracking-widest uppercase font-semibold text-hero-bg bg-bg border-none py-3.5 px-7 rounded-sm cursor-pointer hover:bg-accent hover:text-ink hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,168,83,0.25)] transition-all">
            View My Work
          </a>
          <a href="#contact" className="font-body text-xs tracking-widest uppercase font-normal text-bg/55 bg-transparent border border-bg/20 py-3.5 px-6 rounded-sm cursor-pointer hover:border-bg/60 hover:text-bg transition-all">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
