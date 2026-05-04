import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "Mastering Power BI DAX: A Beginner's Guide",
    date: "May 02, 2026",
    category: "Tutorial",
    desc: "A step-by-step approach to understanding context transition and evaluation context in DAX.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "SQL Window Functions Explained With Retail Data",
    date: "April 18, 2026",
    category: "SQL",
    desc: "How to use ROW_NUMBER, RANK, and moving averages to analyze seasonal sales trends.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Why Storytelling is the Most Underrated Data Skill",
    date: "March 25, 2026",
    category: "Opinion",
    desc: "Numbers don't speak for themselves. You need to give them a voice to drive business action.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", ...Array.from(new Set(posts.map(p => p.category)))];
  
  const filteredPosts = posts.filter(post => 
    activeCategory === "All" || post.category === activeCategory
  );

  return (
    <section id="blog" className="bg-bg py-16 md:py-28 px-6 md:px-14 border-t border-border-light">
      <motion.div 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent mb-7 flex items-center gap-3 before:content-[''] before:block before:w-8 before:h-[1px] before:bg-accent"
      >
        Insights & Articles
      </motion.div>
      
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.75rem,5.5vw,5rem)] font-light leading-[1.02] tracking-[-0.025em]"
        >
          Thoughts on <em className="italic text-accent">data.</em>
        </motion.h2>
        
        <div className="flex flex-col items-end gap-6 w-full lg:w-auto mt-4 lg:mt-0">
          <motion.a 
            href="#blog"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-xs tracking-widest uppercase font-semibold text-ink hover:text-accent flex items-center gap-2 transition-colors group self-start lg:self-end"
          >
            View all posts
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-2.5 mb-14 border-y border-border-light py-5"
      >
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat)}
            className={`font-mono text-[11px] tracking-widest uppercase px-4 py-2 transition-all ${
              activeCategory === cat 
                ? 'bg-ink text-bg border-transparent' 
                : 'bg-transparent text-ink border border-border-light hover:border-accent hover:text-accent'
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <motion.article 
              key={post.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-bg3 mb-6 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" 
                />
                <div className="absolute top-3 left-3 bg-bg/90 backdrop-blur-sm px-2.5 py-1 font-mono text-[9px] tracking-[0.1em] uppercase text-ink">
                  {post.category}
                </div>
              </div>
              
              <div className="font-mono text-[11px] font-medium tracking-widest text-ink3 mb-3">
                {post.date}
              </div>
              <h3 className="font-display text-2xl font-normal leading-[1.2] mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-[15px] text-ink/90 leading-relaxed">
                {post.desc}
              </p>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
