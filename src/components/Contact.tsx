import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ state: 'idle', message: '' });

  const handleSubmit = async (e: { preventDefault: () => void; target: EventTarget | null }) => {
    e.preventDefault();
    setFormState({ state: 'submitting', message: '' });

    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setFormState({
          state: 'error',
          message: json.error || `Server returned ${res.status}.`,
        });
        return;
      }

      setFormState({ state: 'success', message: 'Message sent! I will get back to you soon.' });
      form.reset();
    } catch (err: any) {
      setFormState({
        state: 'error',
        message: err?.message || 'Network error. Make sure the API server is running.',
      });
    }
  };

  return (
    <section id="contact" className="bg-hero-bg text-bg py-16 md:py-28 px-6 md:px-14 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-[radial-gradient(ellipse,rgba(212,168,83,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent mb-7 flex items-center gap-3 before:content-[''] before:block before:w-8 before:h-[1px] before:bg-accent"
          >
            Get in Touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.75rem,5.5vw,5rem)] font-light leading-[1.02] tracking-[-0.025em] text-bg mb-8"
          >
            Let's build<br />something <em className="italic text-accent">meaningful.</em>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <a href="mailto:ajit@example.com" className="inline-flex items-center gap-4 font-display text-[clamp(1.6rem,3.5vw,2.8rem)] font-normal text-bg border-b border-bg/25 pb-2 transition-all hover:text-accent hover:border-accent hover:shadow-[0_0_30px_rgba(212,168,83,0.25)] self-start group">
              <Mail className="group-hover:text-accent transition-colors" size={28} strokeWidth={1.5} />
              ajit@example.com
            </a>

            <p className="text-base text-bg/90 mt-2 leading-relaxed max-w-[500px]">
              <strong className="text-bg font-medium">Open to data analyst, junior data scientist, and BI developer roles.</strong> Also available for freelance dashboard builds and analytics deep-dives. I respond within 24 hours.
            </p>

            <div className="flex gap-3 mt-6 flex-wrap">
              <a href="https://www.linkedin.com/in/ajit-singh-a42297382/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 font-mono text-xs tracking-[0.12em] font-medium uppercase text-bg/85 border border-bg/25 px-5 py-3.5 rounded-sm transition-all hover:border-accent hover:text-accent">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://github.com/ajitchauhann" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 font-mono text-xs tracking-[0.12em] font-medium uppercase text-bg/85 border border-bg/25 px-5 py-3.5 rounded-sm transition-all hover:border-accent hover:text-accent">
                <Github size={16} /> GitHub
              </a>
              <a href="https://www.instagram.com/nextgenajit/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 font-mono text-xs tracking-[0.12em] font-medium uppercase text-bg/85 border border-bg/25 px-5 py-3.5 rounded-sm transition-all hover:border-accent hover:text-accent">
                <Instagram size={16} /> Instagram
              </a>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-dark2 border border-border-dark p-8 md:p-10 rounded-sm"
        >
          <div className="font-mono text-xs tracking-widest text-accent mb-6 uppercase">Send a message</div>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-[11px] font-medium tracking-widest text-bg/80 uppercase">Name</label>
              <input
                type="text"
                id="name"
                required
                className="bg-transparent border-b border-border-dark py-3 px-0 text-bg text-base focus:outline-none focus:border-accent transition-colors placeholder:text-bg/40"
                placeholder="Jane Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-[11px] font-medium tracking-widest text-bg/80 uppercase">Email</label>
              <input
                type="email"
                id="email"
                required
                className="bg-transparent border-b border-border-dark py-3 px-0 text-bg text-base focus:outline-none focus:border-accent transition-colors placeholder:text-bg/40"
                placeholder="jane@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-mono text-[11px] font-medium tracking-widest text-bg/80 uppercase">Subject</label>
              <select
                id="subject"
                className="bg-transparent border-b border-border-dark py-3 px-0 text-bg text-base focus:outline-none focus:border-accent transition-colors appearance-none"
              >
                <option value="job" className="bg-dark2">Job Opportunity</option>
                <option value="freelance" className="bg-dark2">Freelance Project</option>
                <option value="coffee" className="bg-dark2">Virtual Coffee</option>
                <option value="other" className="bg-dark2">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-[11px] font-medium tracking-widest text-bg/80 uppercase">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                className="bg-transparent border-b border-border-dark py-3 px-0 text-bg text-base focus:outline-none focus:border-accent transition-colors placeholder:text-bg/40 resize-none"
                placeholder="Tell me about your project or role..."
              ></textarea>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="submit"
                disabled={formState.state === 'submitting' || formState.state === 'success'}
                className="font-body text-[11px] tracking-widest uppercase font-semibold text-hero-bg bg-accent border-none py-3.5 px-8 rounded-sm cursor-pointer hover:bg-[#e8bc6a] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {formState.state === 'submitting' ? 'Sending...' : formState.state === 'success' ? 'Sent' : 'Send Message'}
              </button>

              {formState.message && (
                <span className={`font-mono text-[10px] tracking-wider ${formState.state === 'success' ? 'text-green-400' : 'text-bg/60'}`}>
                  {formState.message}
                </span>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
