import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, LineChart, Code2, Presentation, ArrowRight } from 'lucide-react';

const scenarios = [
  {
    id: "sql",
    title: "Data Engineering & SQL",
    icon: <Database strokeWidth={1.5} className="w-5 h-5 text-accent" />,
    problem: "Fragmented sales data residing in multiple legacy systems, causing inconsistent reporting and delayed metrics.",
    solution: "Designed complex ETL pipelines using Window Functions and CTEs to unify and clean daily transactional records into a single robust schema.",
    project: "Retail Business Intelligence",
    tech: ["SQL", "ETL", "Schema Design"]
  },
  {
    id: "python",
    title: "Analytics & Python",
    icon: <Code2 strokeWidth={1.5} className="w-5 h-5 text-accent" />,
    problem: "Identifying obscure growth vectors and seasonal demand patterns across a massive multi-year dataset.",
    solution: "Aggregated 6 years of time-series data using Pandas, performing exploratory data analysis to model market dynamics mathematically.",
    project: "Mobile Manufacturer Sales Trends",
    tech: ["Python", "Pandas", "Matplotlib"]
  },
  {
    id: "bi",
    title: "Business Intelligence",
    icon: <LineChart strokeWidth={1.5} className="w-5 h-5 text-accent" />,
    problem: "Dark store managers lacked visibility into SKU-level stockout risks, hurting SLA fulfillment and customer trust.",
    solution: "Architected a star schema and a suite of live-refreshing Power BI dashboards utilizing advanced DAX measures for instant operational alerts.",
    project: "Blinket Supply Chain & Sales",
    tech: ["Power BI", "DAX", "Data Modeling"]
  },
  {
    id: "strategy",
    title: "Strategy & Storytelling",
    icon: <Presentation strokeWidth={1.5} className="w-5 h-5 text-accent" />,
    problem: "Stakeholders felt overwhelmed by raw data outputs and struggled to confidently make strategic bets.",
    solution: "Re-framed mathematical findings into executive-ready presentations, anchoring on core KPIs and stripping away vanity metrics to drive immediate action.",
    project: "Applied across all builds",
    tech: ["Presentations", "A/B Testing", "KPI Design"]
  }
];

export default function SkillsInAction() {
  const [activeId, setActiveId] = useState(scenarios[0].id);

  return (
    <section className="bg-bg py-16 md:py-24 px-6 md:px-14 border-t border-border-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bg2/50 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Column - Navigation */}
        <div className="lg:w-1/3 flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent mb-7 flex items-center gap-3 before:content-[''] before:block before:w-8 before:h-[1px] before:bg-accent"
          >
            Application
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] mb-10 text-ink"
          >
            Skills in <em className="italic text-accent">action.</em>
          </motion.h2>

          <div className="flex flex-col gap-2 relative">
            {scenarios.map((scenario, idx) => {
              const isActive = activeId === scenario.id;
              return (
                <button
                  key={scenario.id}
                  onClick={() => setActiveId(scenario.id)}
                  className={`flex items-center gap-4 p-4 text-left border-l-2 transition-all ${
                    isActive 
                      ? "border-accent bg-accent/5" 
                      : "border-transparent hover:border-border-dark hover:bg-bg2/50"
                  }`}
                >
                  <div className={`transition-transform duration-500 ${isActive ? 'scale-110' : 'scale-100 opacity-60'}`}>
                    {scenario.icon}
                  </div>
                  <span className={`font-mono text-xs tracking-widest uppercase transition-colors ${
                    isActive ? "text-ink font-semibold" : "text-ink3"
                  }`}>
                    {scenario.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column - Content Display */}
        <div className="lg:w-2/3 lg:pt-[7.5rem] min-h-[400px]">
          <AnimatePresence mode="wait">
            {scenarios.map((scenario) => {
              if (scenario.id !== activeId) return null;
              return (
                <motion.div
                  key={scenario.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-bg2 border border-border-light p-8 md:p-12 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none scale-150 origin-top-right">
                     {scenario.icon}
                  </div>

                  <div className="flex flex-col gap-8 relative z-10">
                    <div>
                      <h4 className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink3 mb-3">The Challenge</h4>
                      <p className="text-[17px] text-ink font-medium leading-relaxed">
                        {scenario.problem}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink3 mb-3">The Execution</h4>
                      <p className="text-[15px] text-ink2 leading-relaxed">
                        {scenario.solution}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-border-light flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink3">Related Project</span>
                        <a href="#projects" className="text-sm font-semibold text-accent hover:text-ink transition-colors flex items-center gap-2 group">
                          {scenario.project}
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {scenario.tech.map((t, i) => (
                          <span key={i} className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink3 border border-border-light px-2 py-1 bg-bg/50">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
