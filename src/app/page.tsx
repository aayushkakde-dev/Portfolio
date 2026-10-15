// @ts-expect-error - CSS side-effect import
import "./portfolio.css";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  liveUrl?: string;
};

const LINKEDIN_URL = "https://www.linkedin.com/in/aayushkakde/";
const EMAIL = "aayushkakde@gmail.com";

const skills = [
  "Python",
  "Machine Learning",
  "Data Analytics",
  "SQL",
  "Java",
  "JavaScript",
  "React",
  "HTML",
  "CSS",
];

const projects: Project[] = [];

const navigation = [
  { label: "Overview", href: "#overview" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Page() {
  return (
    <main className="portfolio-page">
      <header className="site-header">
        <a className="brand-mark" href="#overview" aria-label="AK — back to overview">
          AK
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="overview" className="hero section-anchor">
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-intro">
            <p className="hero-name">Aayush Prashanth Kakde</p>
            <p className="hero-degree">
              Pursuing a Bachelor&apos;s Degree in Engineering, majoring in Artificial
              Intelligence and Machine Learning.
            </p>
            <p className="hero-description">
              I build intelligent software and practical machine-learning systems,
              turning data and complex ideas into useful, intuitive products.
            </p>

            <div className="hero-links" aria-label="Contact links">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href={`mailto:${EMAIL}`}>
                Email <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-bottom">
            <h1 className="hero-title">
              AI &amp; ML Engineering Student<span className="hero-caret" aria-hidden="true">|</span>
            </h1>
            <a className="scroll-cue" href="#projects">
              <span className="scroll-line" aria-hidden="true" />
              Scroll to explore
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="content-section section-anchor projects-section">
        <div className="section-inner">
          <p className="section-kicker">01 / Selected work</p>
          <div className="section-heading-row">
            <h2>Projects</h2>
            <p className="section-intro">
              A collection of ideas explored through code, experimentation, and
              applied problem-solving.
            </p>
          </div>

          {projects.length > 0 ? (
            <div className="project-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.name}>
                  <div className="project-card-topline">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>PROJECT</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub repository <span aria-hidden="true">↗</span>
                    </a>
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        Live demo <span aria-hidden="true">↗</span>
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="projects-placeholder">
              <span className="placeholder-index">01—</span>
              <div>
                <h3>The work goes here.</h3>
                <p>
                  Project cards will appear here with a short overview, the
                  technologies used, and a direct link to each GitHub repository.
                </p>
              </div>
              <span className="placeholder-mark" aria-hidden="true">↘</span>
            </div>
          )}
        </div>
      </section>

      <section id="skills" className="content-section skills-section section-anchor">
        <div className="section-inner">
          <p className="section-kicker section-kicker-light">02 / Toolkit</p>
          <div className="section-heading-row">
            <h2>Skills</h2>
            <p className="section-intro section-intro-light">
              Tools and concepts used to explore ideas, build software, and work
              with data. Update this starter list to match your current skills.
            </p>
          </div>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
                <span>{skill}</span>
                <span className="skill-arrow" aria-hidden="true">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="content-section contact-section section-anchor">
        <div className="section-inner contact-inner">
          <p className="section-kicker">03 / Get in touch</p>
          <h2>Have an idea<br />worth building?</h2>
          <p className="contact-copy">
            I&apos;m open to conversations about AI, machine learning, meaningful
            projects, and opportunities to learn by building.
          </p>
          <div className="contact-links">
            <a href={`mailto:${EMAIL}`}>
              <span>Email</span>
              <strong>{EMAIL}</strong>
              <span className="contact-arrow" aria-hidden="true">↗</span>
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <strong>Connect professionally</strong>
              <span className="contact-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
          <footer className="site-footer">
            <span>AK — Aayush Prashanth Kakde</span>
            <a href="#overview">Back to top ↑</a>
          </footer>
        </div>
      </section>
    </main>
  );
}