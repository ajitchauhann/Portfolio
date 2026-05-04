import { motion } from 'motion/react';

const experiences = [
  {
    year: "2025 — Present",
    title: "Data Science Program",
    org: "AnalytixLabs · Online Cohort",
    desc: "Comprehensive curriculum: Python, SQL, statistics, machine learning fundamentals, Power BI, data cleaning, EDA, and storytelling — supplemented by hands-on capstone projects."
  },
  {
    year: "2025",
    title: "Independent BI Practice",
    org: "Self-directed · Portfolio Projects",
    desc: "Built three end-to-end analytics projects on retail, mobile manufacturer trends, and quick-commerce supply chain — focused on production-quality dashboards and clear executive narratives."
  },
  {
    year: "2024",
    title: "Excel & SQL Foundations",
    org: "Self-taught",
    desc: "Drilled the fundamentals — advanced Excel, pivot tables, lookups, complex SQL joins, window functions, schema basics. The unglamorous reps that compound over time."
  },
  {
    year: "Always",
    title: "Curious Generalist",
    org: "Reading, tinkering, asking better questions",
    desc: "Following practitioners I admire, reverse-engineering dashboards, chasing the small details that separate a competent analyst from a great one."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="bg-dark text-bg py-16 md:py-28 px-6 md:px-14">
      <motion.div 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent mb-7 flex items-center gap-3 before:content-[''] before:block before:w-8 before:h-[1px] before:bg-accent"
      >
        My Journey
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-[clamp(2.75rem,5.5vw,5rem)] font-light leading-[1.02] tracking-[-0.025em] text-bg"
      >
        Built step by<br />deliberate <em className="italic text-accent">step.</em>
      </motion.h2>

      <div className="mt-14">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-[160px_1fr_1fr] gap-2 md:gap-8 py-8 border-t border-border-dark last:border-b items-start transition-all hover:md:pl-6 cursor-default group"
          >
            <div className="font-mono text-xs tracking-[0.06em] text-bg/55 pt-1">{exp.year}</div>
            <div>
              <div className="font-display text-2xl font-normal tracking-[-0.01em] mb-1.5 text-bg">{exp.title}</div>
              <div className="font-mono text-[11px] tracking-[0.08em] text-accent">{exp.org}</div>
            </div>
            <div className="text-sm text-bg/75 leading-relaxed mt-2 md:mt-0">{exp.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
