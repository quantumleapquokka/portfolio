function ProjectCard({ project, number, onClick }) {
  const previewShape = project.previewShape || 'wide'

  return (
    <button
      type="button"
      className={`project-card ${project.colorClass}`}
      onClick={onClick}
    >
      <div className={`project-image-wrap ${previewShape}-preview`}>
        {project.image ? (
          <>
            <img
              className="preview-bg"
              src={project.image}
              alt=""
              aria-hidden="true"
            />

            <img
              className="preview-main"
              src={project.image}
              alt={`${project.title} preview`}
            />

            <div className="preview-gradient"></div>
          </>
        ) : (
          <div className="project-placeholder">
            <span>{project.icon}</span>
          </div>
        )}

        <span className="project-category">{project.type}</span>
        <span className="project-year">{project.year}</span>
      </div>

      <div className="project-card-content">
        <p className="project-number">
          <span>{project.icon}</span> {String(number).padStart(2, '0')}
        </p>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </button>
  )
}

export default ProjectCard