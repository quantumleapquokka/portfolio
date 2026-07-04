import ProjectMediaGallery from './ProjectMediaGallery'

function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-backdrop">
      <section className={`project-modal ${project.colorClass}`}>
        <div className="modal-title-bar">
          <p>
            {project.icon} {project.title} — Project Info
          </p>

          <button type="button" onClick={onClose} aria-label="Close project">
            ×
          </button>
        </div>

        <div className="modal-content">
          <div className="modal-preview">
            {project.image ? (
              <img src={project.image} alt={`${project.title} expanded view`} />
            ) : (
              <div className="project-placeholder large">
                <span>{project.icon}</span>
              </div>
            )}
          </div>

          <div className="modal-details">
            <p className="modal-meta">
              {project.type} · {project.year}
            </p>

            <h2>{project.title}</h2>

            <div className="modal-links">
              {project.figma && (
                <a href={project.figma} target="_blank" rel="noreferrer">
                  View Figma
                </a>
              )}

              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub 
                </a>
              )}

              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
            </div>

            <div className="modal-section">
              <h3>↠ Overview</h3>
              <p>{project.overview}</p>
            </div>

            <div className="modal-section">
              <h3>↠ My Role</h3>
              <p>{project.role}</p>
            </div>

            <div className="modal-section">
              <h3>↠ Process</h3>
              <p>{project.process}</p>
            </div>

            <div className="modal-section">
              <h3>↠ Tools & Stack</h3>

              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="modal-section">
              <h3>↠ Outcome</h3>
              <p>{project.outcome}</p>
            </div>

            <ProjectMediaGallery media={project.media} />

            
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectModal