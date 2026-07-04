function ProjectMediaGallery({ media }) {
  if (!media || media.length === 0) {
    return null
  }

  return (
    <div className="media-gallery">
      <h3>↠ Screens & Interactions</h3>

      <div className="media-grid">
        {media.map((item) => (
          <figure className="media-item" key={item.src}>
            {item.type === 'video' ? (
              <video src={item.src} controls muted playsInline />
            ) : (
              <img src={item.src} alt={item.alt || ''} />
            )}

            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </div>
  )
}

export default ProjectMediaGallery