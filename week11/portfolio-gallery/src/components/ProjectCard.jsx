// One project: title, description, tech stack, GitHub link and demo link.
function ProjectCard({ title, description = '', tech = [], github, demo }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      {description && <p className="description">{description}</p>}

      <ul className="tech" aria-label="Tech stack">
        {tech.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <div className="links">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub<span className="visually-hidden"> repository for {title} (opens in a new tab)</span>
          </a>
        )}
        {demo ? (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Live demo<span className="visually-hidden"> of {title} (opens in a new tab)</span>
          </a>
        ) : (
          <span className="no-demo">No live demo</span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
