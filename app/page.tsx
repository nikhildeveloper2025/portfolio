'use client';

import { motion } from 'framer-motion';

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Redux',
  'GraphQL',
  'Jest',
  'Cypress',
  'Figma',
];

const projects = Array.from({ length: 6 }).map((_, index) => ({
  title: `Project ${index + 1} Placeholder`,
  description:
    'A modern frontend project focused on performance, maintainability, and delightful user experiences.',
  tech: ['Next.js', 'TypeScript', 'Tailwind'],
  github: '#',
  live: '#',
}));

const timeline = [
  {
    period: '2021 — Present',
    role: 'Lead Frontend Developer',
    details: 'Spearheaded scalable UI architecture and led delivery for enterprise SaaS products.',
  },
  {
    period: '2017 — 2021',
    role: 'Senior Frontend Engineer',
    details: 'Built high-impact product experiences with React, improving conversion and usability metrics.',
  },
  {
    period: '2013 — 2017',
    role: 'Frontend Developer',
    details: 'Created responsive web interfaces and collaborated across design and backend teams.',
  },
];

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-radial">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Your Name
          </a>
          <ul className="hidden gap-6 text-sm text-slate-300 md:flex">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section id="hero" className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 pt-20 md:grid-cols-2 md:items-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.7 }}>
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-slate-400">11+ Years Experience</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Your Name</h1>
          <h2 className="mt-4 text-2xl font-semibold text-slate-200">Senior Frontend Developer</h2>
          <p className="mt-6 max-w-xl text-slate-300">
            I build polished, high-performance web experiences with modern frontend technologies and a strong product mindset.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
              View Projects
            </a>
            <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-6"
        >
          <div className="rounded-xl border border-white/10 bg-black/25 p-6">
            <p className="text-sm text-slate-400">Specialization</p>
            <ul className="mt-4 space-y-3 text-slate-200">
              <li>• Component-driven architecture</li>
              <li>• Design systems & accessibility</li>
              <li>• Performance optimization</li>
              <li>• Product-focused UI engineering</li>
            </ul>
          </div>
        </motion.div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }} className="glass-card p-8">
          <h3 className="section-title">About</h3>
          <p className="mt-4 max-w-3xl text-slate-300">
            Frontend Developer with 11+ years of experience delivering production-ready web applications for startups and enterprise teams. I focus on clean architecture, delightful UX, and measurable business impact.
          </p>
          <p className="mt-4 text-slate-300">
            <span className="font-semibold text-white">Core skills:</span> React, Next.js, TypeScript, JavaScript, accessibility, testing, and design systems.
          </p>
        </motion.div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="section-title">Skills</h3>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="glass-card px-4 py-3 text-center text-sm font-medium text-slate-200 transition hover:-translate-y-1 hover:border-accent/40 hover:bg-white/5"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="section-title">Projects</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="glass-card flex flex-col p-6 transition hover:-translate-y-1 hover:border-accent/50"
            >
              <h4 className="text-lg font-semibold text-white">{project.title}</h4>
              <p className="mt-3 flex-1 text-sm text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-4 text-sm">
                <a href={project.github} className="text-accent hover:text-violet-300" aria-label={`${project.title} GitHub`}>
                  GitHub
                </a>
                <a href={project.live} className="text-accent hover:text-violet-300" aria-label={`${project.title} Live Demo`}>
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="section-title">Experience</h3>
        <ol className="mt-8 space-y-6 border-l border-white/15 pl-6">
          {timeline.map((item, idx) => (
            <motion.li
              key={item.period}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-accent shadow-glow" />
              <p className="text-sm uppercase tracking-wide text-slate-400">{item.period}</p>
              <h4 className="mt-1 text-lg font-semibold text-white">{item.role}</h4>
              <p className="mt-2 text-slate-300">{item.details}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="section-title">Contact</h3>
            <p className="mt-4 text-slate-300">Let&apos;s collaborate on your next product experience.</p>
            <ul className="mt-6 space-y-2 text-slate-200">
              <li>Email: <a href="mailto:you@example.com" className="text-accent hover:text-violet-300">you@example.com</a></li>
              <li>LinkedIn: <a href="#" className="text-accent hover:text-violet-300">linkedin.com/in/your-profile</a></li>
              <li>GitHub: <a href="#" className="text-accent hover:text-violet-300">github.com/your-handle</a></li>
            </ul>
          </div>

          <form className="glass-card space-y-4 p-6" aria-label="Contact form">
            <label className="block text-sm">
              <span className="mb-1 block text-slate-300">Name</span>
              <input
                type="text"
                className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-white outline-none transition focus:border-accent"
                placeholder="Your name"
                required
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block text-slate-300">Email</span>
              <input
                type="email"
                className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-white outline-none transition focus:border-accent"
                placeholder="you@example.com"
                required
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block text-slate-300">Message</span>
              <textarea
                className="min-h-28 w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-white outline-none transition focus:border-accent"
                placeholder="Tell me about your project"
                required
              />
            </label>
            <button type="submit" className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
