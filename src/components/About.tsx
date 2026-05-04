import { motion } from 'motion/react';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-28 px-6 md:px-14">
      <motion.div 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent mb-7 flex items-center gap-3 before:content-[''] before:block before:w-8 before:h-[1px] before:bg-accent"
      >
        About
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-[clamp(2.75rem,5.5vw,5rem)] font-light leading-[1.02] tracking-[-0.025em]"
      >
        The person<br />behind the <em className="italic text-accent">data.</em>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 mt-14 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-[4/3] lg:aspect-[3/4] max-h-[400px] lg:max-h-none bg-bg3 border border-border-light flex flex-col items-center justify-center gap-4 text-ink2 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[repeating-linear-gradient(45deg,transparent,transparent_14px,var(--color-border-light)_14px,var(--color-border-light)_15px)]"
        >
          <div className="relative w-14 h-14 border border-border-light rounded-full flex items-center justify-center bg-bg/50 backdrop-blur-sm">
            <User size={24} strokeWidth={1} className="text-ink3" />
          </div>
          <span className="relative font-mono text-[10px] tracking-[0.12em] uppercase text-ink3 bg-bg/50 px-3 py-1 rounded-full backdrop-blur-sm">AJIT SINGH</span>
          <div className="absolute bottom-4 left-4 right-4 font-mono text-[9px] tracking-[0.1em] uppercase text-ink3 flex justify-between bg-bg/50 px-2 py-1 backdrop-blur-sm rounded-sm">
            <span>AS / 2026</span>
            <span>IND</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-display text-[clamp(1.2rem,2vw,1.5rem)] font-normal leading-relaxed text-ink mb-10 space-y-5">
            <p>I'm a <strong className="text-accent font-medium italic">Data Science learner at AnalytixLabs</strong>, building strong foundations in analytics, business intelligence, and statistical thinking. My focus is taking messy, real-world data and translating it into clean, actionable narratives that decision-makers can trust.</p>
            <p>I'm drawn to the intersection of <strong className="text-accent font-medium italic">numbers and storytelling</strong> — where a well-built dashboard or sharp visualization can change how an entire team thinks about a problem.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-10 border-t border-border-light pt-8">
            <div className="flex flex-col gap-1.5">
               <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-ink3">Focus</span>
              <span className="text-base text-ink">Analytics & BI</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-ink3">Stack</span>
              <span className="text-base text-ink">Python · SQL · Power BI</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-ink3">Education</span>
              <span className="text-base text-ink">AnalytixLabs · '25–'26</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-ink3">Open To</span>
              <span className="text-base text-ink">Internships, Junior roles</span>
            </div>
          </div>
          
          <div className="border-t border-border-light pt-8 flex flex-col gap-5">
            {[
              { num: '01', text: 'Clarity over complexity. Data is only valuable when understood. I obsess over how to present findings so they resonate immediately.' },
              { num: '02', text: 'Story-first thinking. Every dashboard is a narrative. I lead with the insight, not the method.' },
              { num: '03', text: 'Rigorous foundations. Python, SQL, statistics, schema design — I build on solid ground so results hold under scrutiny.' }
            ].map((val, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <span className="font-mono text-[10px] tracking-[0.1em] text-accent mt-1 min-w-[1.5rem]">{val.num}</span>
                <span className="text-[15px] text-ink2 leading-relaxed">
                  <strong className="text-ink font-medium">{val.text.split('.')[0]}.</strong>{val.text.substring(val.text.indexOf('.') + 1)}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
