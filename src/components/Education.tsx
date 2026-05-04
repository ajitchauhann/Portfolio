import { motion } from 'motion/react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

const educations = [
  {
    name: "Data Science Specialization",
    org: "AnalytixLabs",
    desc: "Industry-led Curriculum",
    badge: "In Progress",
    year: "2025–26",
    done: false
  },
  {
    name: "Bachelor's Degree",
    org: "University Education",
    desc: "",
    badge: "Completed",
    year: "2021–24",
    done: true
  },
  {
    name: "Higher Secondary",
    org: "Science / Mathematics Stream",
    desc: "",
    badge: "Completed",
    year: "2019–21",
    done: true
  }
];

const certifications = [
  {
    name: "Python for Data Science",
    org: "AnalytixLabs",
    desc: "Module Certification",
    badge: "In Progress",
    year: "2025",
    done: false
  },
  {
    name: "SQL & Database Fundamentals",
    org: "AnalytixLabs",
    desc: "Hands-on Practicum",
    badge: "Completed",
    year: "2025",
    done: true
  },
  {
    name: "Power BI & Data Visualization",
    org: "AnalytixLabs",
    desc: "Capstone Track",
    badge: "Completed",
    year: "2026",
    done: true
  },
  {
    name: "Statistics for Analytics",
    org: "Self-paced",
    desc: "Applied Coursework",
    badge: "In Progress",
    year: "2024",
    done: false
  }
];

export default function Education() {
  return (
    <section id="credentials" className="bg-bg border-t border-border-light py-16 md:py-28 px-6 md:px-14">

      {/* Section header: label + title left, descriptor right */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
        <div className="md:max-w-[55%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent mb-5 flex items-center gap-3 before:content-[''] before:block before:w-8 before:h-[1px] before:bg-accent"
          >
            Education & Credentials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.75rem,5.5vw,5rem)] font-light leading-[1.02] tracking-[-0.025em]"
          >
            Always <em className="italic text-accent">learning,</em> always shipping.
          </motion.h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        {/* Education column */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink3 mb-4 pb-3 border-b border-border-light flex items-center justify-between">
            <span className="flex items-center gap-2">
              <GraduationCap size={12} className="text-accent" strokeWidth={1.8} />
              Education
            </span>
            <span className="text-ink3/50 tracking-normal normal-case">{educations.length} entries</span>
          </h3>

          {educations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.07 * idx, ease: [0.16, 1, 0.3, 1] }}
              className="group relative py-4 border-b border-border-light flex items-start gap-4 transition-all duration-300 hover:bg-bg2 hover:px-3 overflow-hidden"
            >
              {/* Sliding accent bar on hover */}
              <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <span className="font-mono text-[10px] text-ink3/60 w-6 shrink-0 pt-[3px] tabular-nums">
                {String(idx + 1).padStart(2, '0')}
              </span>

              <div className="flex-1 min-w-0">
                <div className="font-display text-[15px] font-semibold leading-snug group-hover:text-ink transition-colors">
                  {item.name}
                </div>
                <div className="text-[12px] text-ink2 mt-0.5">
                  <em className="text-accent not-italic">{item.org}</em>
                  {item.desc ? <span className="text-ink3"> · {item.desc}</span> : null}
                </div>
              </div>

              <div className="flex flex-col items-end gap-1.5 shrink-0">
                <span className={`inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.08em] uppercase px-2 py-[3px] rounded-sm border ${
                  item.done
                    ? 'bg-transparent text-ink3 border-ink3/25'
                    : 'bg-accent/10 text-accent border-accent/30'
                }`}>
                  {item.done
                    ? <CheckCircle2 size={9} strokeWidth={2} />
                    : <span className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse" />
                  }
                  {item.badge}
                </span>
                <span className="font-mono text-[10px] text-ink3 tabular-nums">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications column */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink3 mb-4 pb-3 border-b border-border-light flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Award size={12} className="text-accent" strokeWidth={1.8} />
              Certifications & Coursework
            </span>
            <span className="text-ink3/50 tracking-normal normal-case">{certifications.length} entries</span>
          </h3>

          {certifications.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.07 * idx, ease: [0.16, 1, 0.3, 1] }}
              className="group relative py-4 border-b border-border-light flex items-start gap-4 transition-all duration-300 hover:bg-bg2 hover:px-3 overflow-hidden"
            >
              <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <span className="font-mono text-[10px] text-ink3/60 w-6 shrink-0 pt-[3px] tabular-nums">
                {String(idx + 1).padStart(2, '0')}
              </span>

              <div className="flex-1 min-w-0">
                <div className="font-display text-[15px] font-semibold leading-snug group-hover:text-ink transition-colors">
                  {item.name}
                </div>
                <div className="text-[12px] text-ink2 mt-0.5">
                  <em className="text-accent not-italic">{item.org}</em>
                  {item.desc ? <span className="text-ink3"> · {item.desc}</span> : null}
                </div>
              </div>

              <div className="flex flex-col items-end gap-1.5 shrink-0">
                <span className={`inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.08em] uppercase px-2 py-[3px] rounded-sm border ${
                  item.done
                    ? 'bg-transparent text-ink3 border-ink3/25'
                    : 'bg-accent/10 text-accent border-accent/30'
                }`}>
                  {item.done
                    ? <CheckCircle2 size={9} strokeWidth={2} />
                    : <span className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse" />
                  }
                  {item.badge}
                </span>
                <span className="font-mono text-[10px] text-ink3 tabular-nums">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
