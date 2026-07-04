// useState lets us remember which project card was clicked.
// If selectedProject is null, no popup is open.
// If selectedProject contains a project object, the popup shows that project.
import { useState } from 'react'

import './App.css'
import { projects } from './data/projects'
import Navbar from './components/Navbar'
import ProjectCard from './components/ProjectCard'
import ProjectModal from './components/ProjectModal'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <Navbar />

      <div className="sparkle-layer" aria-hidden="true">
        <span className="sparkle s1">✦</span>
        <span className="sparkle s2">✧</span>
        <span className="sparkle s3">✦</span>
        <span className="sparkle s4">✧</span>
        <span className="sparkle s5">✦</span>
        <span className="sparkle s6">✧</span>
        <span className="sparkle s7">✦</span>
        <span className="sparkle s8">✧</span>
      </div>

      <main>
        <section className="hero-section" id="home">

          <p className="status-badge">▣ Player status: available for hire</p>

          <h1>
            Samantha
            <span>Siew</span>
          </h1>

          <div className="hero-tags">
            <span>Product Design</span>
            <span>Developer</span>
            <span>Game Design</span>
          </div>

          <p className="hero-description">
            I design and build playful, thoughtful digital experiences that
            combine UI/UX, game design, and software engineering.
          </p>

          <div className="player-card">
            <p className="card-label">✦ Player stats</p>

            <div className="stat-row">
              <span>UI/UX</span>
              <div className="stat-bar">
                <div className="stat-fill width-90"></div>
              </div>
              <strong>9/10</strong>
            </div>

            <div className="stat-row">
              <span>Frontend</span>
              <div className="stat-bar">
                <div className="stat-fill width-80"></div>
              </div>
              <strong>8/10</strong>
            </div>

            <div className="stat-row">
              <span>Game Design</span>
              <div className="stat-bar">
                <div className="stat-fill width-80"></div>
              </div>
              <strong>8/10</strong>
            </div>

            <div className="stat-row">
              <span>Creativity</span>
              <div className="stat-bar">
                <div className="stat-fill width-100"></div>
              </div>
              <strong>10/10</strong>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              View Projects
            </a>
            <a href="https://docs.google.com/document/d/1bjAlmE8YYiKMWxu15cRwYPjGR2CDgZV0/edit?usp=sharing&ouid=117689381125272830563&rtpof=true&sd=true" className="button secondary">
              Resume
            </a>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">✦ Selected Work</p>
              <h2>Projects</h2>
            </div>

            <p className="entry-count">{projects.length} entries</p>
          </div>

          <div className="pixel-divider"></div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                number={index + 1}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </section>

        <section id="about" className="section about-section">
          <p className="eyebrow">✦ About Me</p>
          <h2>Designer-minded developer</h2>

          <p>
            I'm a Computer Science: Game Design graduate passionate about creating products that are both functional and enjoyable to use.
            My experience spans software engineering, UI/UX design, and collaborative product development,
            giving me a strong appreciation for how design and engineering work together to build meaningful user experiences.
          </p>
          <p>
            I believe great user interfaces are often overlooked. To me, good UI is more than aesthetics, it makes products intuitive, 
            accessible, and enjoyable, ultimately leading to a better overall user experience. 
            I enjoy designing interfaces that balance clarity with personality and hope to create products that people genuinely enjoy using.
          </p>
          <p>
            I'm naturally curious and always eager to learn new technologies, design methods, and ways of thinking. I approach every project 
            with the goal of doing my best work, embracing feedback, and continuously improving as both a designer and an engineer.
          </p>
        </section>

        <section id="contact" className="section contact-section">
          <p className="eyebrow">✦ Contact</p>
          <h2>Let’s connect</h2>

          <p>
            Email me at{' '}
            <a href="mailto:sammie.siew@gmail.com">sammie.siew@gmail.com</a>
          </p>
          <p>
            Connect with me! {' '}
            <a 
              href="https://www.linkedin.com/in/samanthasiew1354"
              target="_blank"
              rel="noopener noreferrer"
              >LinkedIn</a>
          </p>
          <p>
            My{' '}
            <a
              href="https://github.com/quantumleapquokka"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{' '}
            if you wanna take a peek at anything else (｡•̀ᴗ-)✧
          </p>
        </section>
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}

export default App