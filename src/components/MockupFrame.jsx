function MockupFrame({ src, alt }) {
  return (
    <div className="mockup-frame">
      <img src={`${import.meta.env.BASE_URL}${src}`} alt={alt} />
    </div>
  )
}

export default MockupFrame