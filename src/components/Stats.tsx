import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { num: "3+", label: "Major Projects", delay: 0 },
    { num: "8", label: "Core Tools", delay: 0.1 },
    { num: "500+", label: "Hours of Practice", delay: 0.2 },
    { num: "100%", label: "Curiosity", delay: 0.3 }
  ];

  return (
    <div className="bg-dark grid grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: stat.delay, ease: [0.16, 1, 0.3, 1] }}
          className={`p-8 lg:p-9 flex flex-col gap-2 transition-colors hover:bg-dark2 border-b lg:border-b-0 border-border-dark md:border-r ${idx % 2 !== 0 ? 'border-r-0' : 'border-r'} lg:border-r ${idx === stats.length - 1 ? 'lg:border-r-0' : ''}`}
        >
          <span className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-light tracking-[-0.03em] leading-none text-bg">
            <em className="text-accent not-italic">{stat.num.replace(/[^0-9.]/g, '')}</em>
            {stat.num.replace(/[0-9.]/g, '')}
          </span>
          <span className="font-mono text-[10px] tracking-widest uppercase text-bg/60 mt-1">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
