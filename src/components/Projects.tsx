import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Database, Activity, LayoutDashboard, Clock, Tag, Lightbulb, Hash, ArrowRight } from 'lucide-react';

const getMetricIcon = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes('row')) return <Database size={13} strokeWidth={1.5} />;
  if (l.includes('kpi') || l.includes('metric')) return <Activity size={13} strokeWidth={1.5} />;
  if (l.includes('page') || l.includes('dashboard')) return <LayoutDashboard size={13} strokeWidth={1.5} />;
  if (l.includes('time')) return <Clock size={13} strokeWidth={1.5} />;
  if (l.includes('brand') || l.includes('sku')) return <Tag size={13} strokeWidth={1.5} />;
  if (l.includes('insight')) return <Lightbulb size={13} strokeWidth={1.5} />;
  return <Hash size={13} strokeWidth={1.5} />;
};

const projects = [

  {
    badge: "Retail · BI",
    year: "2025",
    num: "01",
    tech: "Power BI",
    name: "Retail Business Intelligence",
    desc: "End-to-end BI solution analyzing sales performance, customer segmentation, and inventory dynamics — turning fragmented spreadsheets into a single, trusted source of truth.",
    metrics: [
      { num: "50K+", label: "Rows Analyzed" },
      { num: "12", label: "KPIs Built" },
      { num: "4", label: "Dashboard Pages" }
    ],
    tags: ["Power BI", "SQL", "Python", "DAX", "ETL"],
    bars: [
      { height: "40%", opacity: 0.5 },
      { height: "65%", opacity: 0.6 },
      { height: "50%", opacity: 0.55 },
      { height: "80%", opacity: 0.75 },
      { height: "55%", opacity: 0.6 },
      { height: "90%", opacity: 0.85 },
      { height: "70%", opacity: 0.7 }
    ],
    cols: 1
  },
  {
    badge: "Telecom · Trends",
    year: "2025",
    num: "02",
    tech: "Python",
    name: "Mobile Manufacturer Sales Trends",
    desc: "Multi-year analysis of smartphone OEM market dynamics — uncovering growth vectors, seasonal demand patterns, and pricing-band shifts using time-series exploration.",
    metrics: [
      { num: "6yr", label: "Time Range" },
      { num: "15+", label: "Brands Tracked" },
      { num: "3", label: "Key Insights" }
    ],
    tags: ["Python", "Pandas", "Matplotlib", "Statistics", "Excel"],
    bars: [
      { height: "25%", opacity: 0.4 },
      { height: "45%", opacity: 0.5 },
      { height: "60%", opacity: 0.6 },
      { height: "55%", opacity: 0.55 },
      { height: "75%", opacity: 0.7 },
      { height: "88%", opacity: 0.8 },
      { height: "95%", opacity: 0.9 }
    ],
    cols: 1
  },
  {
    badge: "Quick Commerce · Ops — Featured",
    year: "2026",
    num: "03",
    tech: "Power BI + SQL",
    name: "Blinket Supply Chain & Sales",
    desc: "Integrated supply-chain visibility tool for a quick-commerce use case — tracking demand patterns, stockout risk, fulfillment SLAs, and category performance across SKUs and dark stores. Surfaces operational alerts before they become customer problems.",
    metrics: [
      { num: "200+", label: "SKUs Tracked" },
      { num: "6", label: "Live Metrics" },
      { num: "15", label: "DAX Measures" },
      { num: "5", label: "Report Pages" }
    ],
    tags: ["Power BI", "SQL", "Data Modeling", "DAX", "Star Schema", "Storytelling"],
    bars: [
      { height: "55%", opacity: 0.55 },
      { height: "42%", opacity: 0.5 },
      { height: "78%", opacity: 0.75 },
      { height: "65%", opacity: 0.65 },
      { height: "82%", opacity: 0.8 },
      { height: "48%", opacity: 0.5 },
      { height: "90%", opacity: 0.85 },
      { height: "70%", opacity: 0.7 },
      { height: "85%", opacity: 0.82 }
    ],
    cols: 2
  }
];

function ProjectCard({ proj, idx }: { proj: typeof projects[0], idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, delay: 0.1 * (idx % 3), ease: [0.16, 1, 0.3, 1] }}
      className="project-card bg-bg p-6 md:p-7 cursor-pointer overflow-hidden transition-colors hover:bg-bg2 flex flex-col group"
    >
      <div className="aspect-[16/8] bg-dark mb-6 relative overflow-hidden flex items-end">
        <motion.div
          className="absolute inset-[-20%]"
          style={{
            y: backgroundY,
            background: `
              repeating-linear-gradient(90deg, transparent, transparent 12.5%, rgba(247,246,242,0.04) 12.5%, rgba(247,246,242,0.04) calc(12.5% + 1px)),
              repeating-linear-gradient(0deg, transparent, transparent 33%, rgba(247,246,242,0.04) 33%, rgba(247,246,242,0.04) calc(33% + 1px))
            `
          }}
        />

        <div className="absolute left-7 right-7 bottom-0 flex flex-row items-end h-[65%] gap-[6%]">
          {proj.bars.map((bar, bidx) => (
            <div
              key={bidx}
              className="flex-1 rounded-t-sm transition-opacity duration-300 group-hover:!opacity-100 group-hover:scale-y-[1.15] origin-bottom delay-75"
              style={{
                height: bar.height,
                opacity: bar.opacity,
                background: 'linear-gradient(to top, var(--color-accent), rgba(212,168,83,0.15))',
                transition: 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
          ))}
        </div>

        <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.15em] uppercase text-bg/90 border border-bg/20 px-2.5 py-1 z-10 backdrop-blur-sm bg-bg/5">
          {proj.badge}
        </span>
        <span className="absolute top-4 right-4 font-mono text-[10px] tracking-[0.12em] text-bg/85 z-10 bg-bg/5 px-2 py-1 backdrop-blur-sm">
          {proj.year}
        </span>
      </div>

      <div className="font-mono text-[10px] tracking-[0.12em] text-ink3 mb-2.5 flex justify-between relative z-10">
        <span>{proj.num} / Project</span>
        <span className="text-accent">{proj.tech}</span>
      </div>
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-[clamp(1.1rem,1.4vw,1.45rem)] font-semibold leading-[1.15] tracking-[-0.01em] mb-2.5 relative z-10"
      >
        {proj.name}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-[13px] text-ink leading-relaxed mb-4 relative z-10"
      >
        {proj.desc}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap gap-1 mb-4 relative z-10"
      >
        {proj.tags.map((tag, tidx) => (
          <span key={tidx} className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink3 border border-border-light px-2 py-1 transition-colors group-hover:text-accent group-hover:border-accent/40 bg-bg/50">
            {tag}
          </span>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        href="#case-study-placeholder"
        onClick={(e) => e.preventDefault()}
        className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase font-medium text-ink hover:text-accent transition-colors mb-4 group/link self-start relative z-10"
      >
        View Case Study
        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
      </motion.a>

      <div className="flex gap-5 flex-wrap pt-4 border-t border-border-light mt-auto overflow-hidden relative z-10">
        {proj.metrics.map((metric, midx) => (
          <motion.div
            key={midx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: 0.4 + (midx * 0.1), ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-1.5"
          >
            <span className="font-display text-xl font-medium text-ink leading-none">
              <em className="text-accent not-italic">{metric.num.replace(/[^0-9.]/g, '')}</em>
              <span className="text-[17px] text-ink/80">{metric.num.replace(/[0-9.]/g, '')}</span>
            </span>
            <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.1em] uppercase text-ink2 font-medium">
              <span className="text-accent/80">{getMetricIcon(metric.label)}</span>
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-bg border-t border-border-light py-16 md:py-28 px-6 md:px-14">

      {/* Section header: label + title left, description right */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
        <div className="md:max-w-[55%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent mb-5 flex items-center gap-3 before:content-[''] before:block before:w-8 before:h-[1px] before:bg-accent"
          >
            Selected Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.75rem,5.5vw,5rem)] font-light leading-[1.02] tracking-[-0.025em]"
          >
            Projects that<br /><em className="italic text-accent">move</em> the needle.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:max-w-[38%] flex flex-col gap-4 md:pb-1"
        >
          <p className="text-[14px] text-ink2 leading-relaxed">
            Three real-world analytics builds that transform raw transactional data into insight and clear business outcomes.
          </p>
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink3">
            03 Projects &nbsp;·&nbsp; Power BI · Python · SQL
          </span>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-light outline outline-1 outline-border-light">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} proj={proj} idx={idx} />
        ))}
      </div>
    </section>
  );
}
