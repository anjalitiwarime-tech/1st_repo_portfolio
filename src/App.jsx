import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaAward,
  FaBars,
  FaBootstrap,
  FaBrain,
  FaBriefcase,
  FaCalendarAlt,
  FaCode,
  FaDatabase,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaGraduationCap,
  FaJava,
  FaLaptopCode,
  FaLinkedinIn,
  FaMoon,
  FaPaperPlane,
  FaProjectDiagram,
  FaReact,
  FaSchool,
  FaSun,
  FaTimes,
  FaTools,
  FaTrophy,
  FaUserAstronaut,
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiCss,
  SiEclipseide,
  SiGit,
  SiGithub,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiLeetcode,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const publicBase = import.meta.env.BASE_URL;
const resumePath = `${publicBase}resume/Anjali_Resume_Jake.pdf`;
const developerImage = `${publicBase}developer.webp`;

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://tinyurl.com/2wtdb35n',
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    href: 'https://tinyurl.com/n3jvr99m',
    icon: FaGithub,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/codewith_Anj609',
    icon: SiLeetcode,
  },
  {
    label: 'Email',
    href: 'mailto:tiwarianjali5740@gmail.com',
    icon: FaEnvelope,
  },
];

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: FaCode,
    skills: [
      { name: 'Java', icon: FaJava },
      { name: 'C++', icon: SiCplusplus },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    title: 'Frontend',
    icon: FaLaptopCode,
    skills: [
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
      { name: 'Bootstrap', icon: FaBootstrap },
      { name: 'React.js', icon: FaReact },
    ],
  },
  {
    title: 'Core Subjects',
    icon: FaDatabase,
    skills: [
      { name: 'Data Structures & Algorithms', icon: FaProjectDiagram },
      { name: 'OOP', icon: FaCode },
      { name: 'DBMS', icon: FaDatabase },
      { name: 'Operating Systems', icon: FaTools },
      { name: 'Computer Networks', icon: FaProjectDiagram },
    ],
  },
  {
    title: 'Tools',
    icon: FaTools,
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'VS Code', icon: VscCode },
      { name: 'Eclipse', icon: SiEclipseide },
      { name: 'IntelliJ IDEA', icon: SiIntellijidea },
    ],
  },
  {
    title: 'AI',
    icon: FaBrain,
    skills: [
      { name: 'Generative AI', icon: FaBrain },
      { name: 'Prompt Engineering', icon: FaPaperPlane },
    ],
  },
];

const projects = [
  {
    title: 'SkyFlew - Airline Booking Website',
    stack: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    features: [
      'Flight Search',
      'Booking Workflow',
      'Responsive Design',
      'Modern UI',
      'Reusable Components',
    ],
    live: 'https://anjalitiwarime-tech.github.io/Demo-Air/',
    github: 'https://github.com/anjalitiwarime-tech/Demo-Air',
  },
  {
    title: 'Personal Portfolio Website',
    stack: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    features: [
      'Responsive Design',
      'Project Showcase',
      'Social Integration',
      'Resume Integration',
    ],
    live: 'https://anjalitiwarime-tech.github.io/1st_repo_portfolio/',
    github: 'https://github.com/anjalitiwarime-tech/1st_repo_portfolio',
  },
];

const achievements = [
  'Solved 200+ LeetCode Problems',
  'Active GitHub Developer',
  'Generative AI Certification (Analytics Vidhya)',
  'Continuous Learning and Project Building',
];

const highlights = [
  'B.Tech CSE Student',
  'React Developer',
  'Java Programmer',
  'DSA Enthusiast',
  'Web Developer',
  'Problem Solver',
];

function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </motion.div>
  );
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function trackResumeDownload() {
  const key = 'anjali_resume_downloads';
  const count = Number(window.localStorage.getItem(key) || '0') + 1;
  window.localStorage.setItem(key, String(count));
  window.dispatchEvent(new CustomEvent('resume-download', { detail: { count } }));
}

function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 46 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        top: `${(index * 61) % 100}%`,
        delay: `${(index % 9) * 0.35}s`,
        duration: `${7 + (index % 5)}s`,
      })),
    [],
  );

  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}

function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[var(--nav-bg)] backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          className="lg:hidden icon-button"
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
        >
          <FaBars />
        </button>

        <button className="logo-mark" type="button" onClick={() => handleNav('home')}>
          <span>Anjali's</span> Portfolio
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button key={item.id} type="button" className="nav-link" onClick={() => handleNav(item.id)}>
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            className="icon-button"
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button className="btn hidden sm:inline-flex" type="button" onClick={() => handleNav('contact')}>
            Let's Talk
            <FaPaperPlane />
          </button>
        </div>
      </nav>

      <motion.aside
        className="mobile-panel lg:hidden"
        initial={false}
        animate={{ x: open ? 0 : '-105%' }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between">
          <span className="logo-mark text-lg">Anjali's Portfolio</span>
          <button className="icon-button" type="button" onClick={() => setOpen(false)} aria-label="Close navigation">
            <FaTimes />
          </button>
        </div>
        <div className="mt-8 grid gap-2">
          {navItems.map((item) => (
            <button key={item.id} type="button" className="mobile-nav-link" onClick={() => handleNav(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
        <div className="mt-8 flex gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} className="icon-button" href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon />
            </a>
          ))}
        </div>
      </motion.aside>

      {open ? <button className="mobile-scrim lg:hidden" type="button" aria-label="Close navigation" onClick={() => setOpen(false)} /> : null}
    </header>
  );
}

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      className="loader-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="loader-card">
        <span className="loader-ring" />
        <p>Anjali Tiwari</p>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="section-shell hero-section">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="hero-kicker">Web Developer</p>
          <h1 className="hero-title">
            Hey! I'm <span>Anjali</span>
          </h1>
          <div className="typing-line" aria-live="polite">Web Developer</div>
          <p className="hero-summary">
            Building clean, responsive websites with modern frontend skills and strong problem-solving fundamentals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="btn" type="button" onClick={() => scrollToSection('projects')}>
              View Projects
              <FaProjectDiagram />
            </button>
            <a className="btn btn-secondary" href={resumePath} download onClick={trackResumeDownload}>
              Download Resume
              <FaDownload />
            </a>
            <button className="btn btn-ghost" type="button" onClick={() => scrollToSection('contact')}>
              Contact Me
              <FaEnvelope />
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <div className="hero-image-frame">
            <img src={developerImage} alt="Professional developer illustration" width="300" height="300" />
          </div>
          <motion.div className="floating-badge bottom-12 right-0" animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 4.8 }}>
            <FaJava />
            Java
          </motion.div>
          <motion.div className="floating-badge bottom-0 left-8" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4.4 }}>
            <SiLeetcode />
            DSA
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeader
        eyebrow="About Me"
        title="Focused on clean products, strong fundamentals, and steady growth."
        description="I build responsive interfaces, solve DSA problems, and keep improving the engineering habits that recruiters and teams care about."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <motion.div
          className="glass-panel p-6 sm:p-8"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.55 }}
        >
          <h3 className="text-2xl font-semibold text-[var(--text)]">I'm Anjali Tiwari</h3>
          <p className="mt-4 leading-8 text-[var(--muted)]">
            I'm Anjali Tiwari, a Computer Science Engineering student at RGPV University, Bhopal. I enjoy building
            responsive web applications, solving DSA problems, and learning modern technologies. My goal is to become a
            Software Development Engineer and contribute to impactful products.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              ['Email', 'tiwarianjali5740@gmail.com'],
              ['Current Focus', 'React.js, Java, DSA'],
              ['Goal', 'Software Development Engineer'],
              ['Location', 'India'],
            ].map(([label, value]) => (
              <div key={label} className="info-row">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight}
              className="highlight-chip"
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <FaAward />
              {highlight}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeader
        eyebrow="Skills"
        title="A practical stack for building and problem solving."
        description="Frontend development, Java programming, computer science fundamentals, and AI-enhanced workflows."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map(({ title, icon: GroupIcon, skills }, index) => (
          <motion.article
            key={title}
            className="glass-panel skill-card"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            whileHover={{ y: -6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="skill-card-icon">
                <GroupIcon />
              </span>
              <h3>{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map(({ name, icon: Icon }) => (
                <span key={name} className="skill-pill">
                  <Icon />
                  {name}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeader
        eyebrow="Projects"
        title="Real projects with recruiter-friendly proof points."
        description="Each project emphasizes reusable UI, responsive implementation, and practical workflows."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
          >
            <div className="project-topline">
              <span>Featured Project</span>
              <FaExternalLinkAlt />
            </div>
            <h3>{project.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="tech-chip">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="feature-line">
                  <span />
                  {feature}
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn" href={project.live} target="_blank" rel="noreferrer">
                Live Demo
                <FaExternalLinkAlt />
              </a>
              <a className="btn btn-secondary" href={project.github} target="_blank" rel="noreferrer">
                GitHub
                <FaGithub />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const responsibilities = [
    'Communication Workflow Management',
    'CRM Maintenance',
    'Project Execution Support',
    'Business Development Assistance',
  ];

  return (
    <section id="experience" className="section-shell">
      <SectionHeader
        eyebrow="Experience"
        title="Early professional exposure with ownership and communication."
        description="Internship work across workflow coordination, CRM upkeep, execution support, and growth operations."
      />
      <motion.div
        className="timeline-card"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-90px' }}
        transition={{ duration: 0.55 }}
      >
        <div className="timeline-icon">
          <FaBriefcase />
        </div>
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            <FaCalendarAlt /> Oct 2025 - Feb 2026
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-[var(--text)]">Strategy Intern</h3>
          <p className="mt-1 text-[var(--muted)]">Mission Helping Hands</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {responsibilities.map((item) => (
              <div key={item} className="feature-line">
                <span />
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Education() {
  const education = [
    {
      icon: FaGraduationCap,
      school: 'RGPV University, Bhopal',
      degree: 'Bachelor of Technology',
      focus: 'Computer Science Engineering',
      date: '2024 - 2028',
    },
    {
      icon: FaSchool,
      school: 'Avisans Public Hr. Sec. School, Khargone',
      degree: 'Higher Secondary Education',
      focus: '',
      date: '2023 - 2024',
    },
  ];

  return (
    <section id="education" className="section-shell">
      <SectionHeader
        eyebrow="Education"
        title="Academic foundation in computer science."
        description="Formal education paired with continuous project building and algorithm practice."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {education.map(({ icon: Icon, school, degree, focus, date }, index) => (
          <motion.article
            key={school}
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="skill-card-icon">
                <Icon />
              </span>
              <span className="date-pill">{date}</span>
            </div>
            <h3 className="text-2xl font-semibold text-[var(--text)]">{school}</h3>
            <p className="mt-3 font-semibold text-cyan-300">{degree}</p>
            {focus ? <p className="mt-1 text-[var(--muted)]">{focus}</p> : null}
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <SectionHeader
        eyebrow="Achievements"
        title="Momentum that compounds."
        description="Consistent practice, public building, and certification work across development and AI."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement, index) => (
          <motion.article
            key={achievement}
            className="achievement-card"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <FaTrophy />
            <h3>{achievement}</h3>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="section-shell">
      <SectionHeader
        eyebrow="Resume"
        title="Resume preview for quick recruiter review."
        description="Open the PDF in a new tab or download it directly for screening and internship opportunities."
      />
      <div className="grid gap-6 lg:grid-cols-[0.45fr_1fr]">
        <motion.aside
          className="resume-preview-card"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.55 }}
        >
          <span className="resume-icon">
            <FaUserAstronaut />
          </span>
          <h3>Anjali Tiwari</h3>
          <p>Computer Science Engineering Student, React Developer, Java Programmer, and DSA Enthusiast.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={resumePath} target="_blank" className="btn" rel="noreferrer">
              View Resume
            </a>
            <a href={resumePath} download className="btn" onClick={trackResumeDownload}>
              Download Resume
            </a>
          </div>
        </motion.aside>

        <motion.div
          className="resume-viewer-shell"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.55 }}
        >
          <div className="resume-container">
            <iframe
              src={resumePath}
              width="100%"
              height="800"
              title="Anjali Resume">
            </iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLinks() {
  return (
    <section className="section-shell py-14">
      <div className="social-band">
        <div>
          <p className="section-eyebrow text-left">Connect</p>
          <h2 className="text-3xl font-semibold text-[var(--text)]">Social links and coding profiles.</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} className="social-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);

    setStatus('Opening your email app...');
    window.location.href = `mailto:tiwarianjali5740@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section-shell">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something useful."
        description="Interested in internships, freelance projects, collaborations, or software development opportunities? Feel free to connect."
      />
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr]">
        <motion.div
          className="glass-panel p-6"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-[var(--text)]">Contact Details</h3>
          <div className="mt-6 grid gap-4">
            <a className="contact-line" href="mailto:tiwarianjali5740@gmail.com">
              <FaEnvelope />
              tiwarianjali5740@gmail.com
            </a>
            {socialLinks.slice(0, 3).map(({ label, href, icon: Icon }) => (
              <a key={label} className="contact-line" href={href} target="_blank" rel="noreferrer">
                <Icon />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <label>
            <span>Name</span>
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows="5" placeholder="Tell me about the opportunity" required />
          </label>
          <button className="btn w-full justify-center" type="submit">
            Send Message
            <FaPaperPlane />
          </button>
          {status ? <p className="form-status">{status}</p> : null}
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 text-[var(--muted)] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p>© 2026 Anjali Tiwari</p>
          <p className="mt-1">Built with React.js ❤️</p>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} className="icon-button" href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon />
            </a>
          ))}
          <button className="icon-button" type="button" onClick={() => scrollToSection('home')} aria-label="Back to top">
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('anjali-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    window.localStorage.setItem('anjali-theme', theme);
  }, [theme]);

  return (
    <div className="app-shell">
      <Loader />
      <ParticleField />
      <Navbar theme={theme} onToggleTheme={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Resume />
        <SocialLinks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
