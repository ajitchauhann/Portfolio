import { motion } from 'motion/react';
import { Database, LineChart, Code2, Presentation } from 'lucide-react';

const specializedSkills = [
  {
    title: "Data Engineering & SQL",
    icon: <Database strokeWidth={1.2} className="w-8 h-8 mb-6 text-accent" />,
    skills: ["Complex Joins", "Window Functions", "CTEs", "Schema Design", "ETL Pipelines"],
    desc: "Extracting and transforming raw data into structured, reliable assets ready for advanced analysis."
  },
  {
    title: "Analytics & Python",
    icon: <Code2 strokeWidth={1.2} className="w-8 h-8 mb-6 text-accent" />,
    skills: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn"],
    desc: "Applying statistical models, advanced manipulation, and automating exploratory data analysis workflows."
  },
  {
    title: "Business Intelligence",
    icon: <LineChart strokeWidth={1.2} className="w-8 h-8 mb-6 text-accent" />,
    skills: ["Power BI", "DAX", "Power Query", "Excel", "Data Modeling"],
    desc: "Building interactive, performant dashboards that serve as a trusted single source of truth."
  },
  {
    title: "Strategy & Storytelling",
    icon: <Presentation strokeWidth={1.2} className="w-8 h-8 mb-6 text-accent" />,
    skills: ["Executive Reporting", "A/B Testing", "KPI Design", "Presentations", "Business Logic"],
    desc: "Translating complex mathematical findings into clear narratives that drive immediate business action."
  }
];

export default function Skills() {
  return (
    <section id="skills" className="bg-bg2 border-t border-border-light py-16 md:py-28 px-6 md:px-14 overflow-hidden relative">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent mb-7 flex items-center gap-3 before:content-[''] before:block before:w-8 before:h-[1px] before:bg-accent"
        >
          Expertise
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.75rem,5.5vw,5rem)] font-light leading-[1.02] tracking-[-0.025em]"
        >
          Tools & <em className="italic text-accent">craft.</em>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base text-ink2 max-w-[560px] mt-4 leading-relaxed"
        >
          A rigorous approach to data requires a precise set of tools. Every technology in this stack earns its place by solving real business problems efficiently.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px mt-16 bg-border-light outline outline-1 outline-border-light">
          {specializedSkills.map((spec, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
              className="bg-bg2 p-8 md:p-12 transition-colors hover:bg-bg group flex flex-col"
            >
              {spec.icon}
              <h3 className="font-display text-2xl lg:text-3xl font-normal text-ink mb-3 group-hover:text-accent transition-colors">{spec.title}</h3>
              <p className="text-base text-ink/80 leading-relaxed mb-10 lg:h-[45px]">{spec.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {spec.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="font-mono text-[11px] tracking-widest uppercase bg-transparent border border-border-light px-3.5 py-2 text-ink2 font-medium transition-all hover:-translate-y-0.5 group-hover:border-accent/40 group-hover:bg-accent/[0.04] group-hover:text-ink cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
