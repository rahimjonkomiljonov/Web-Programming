// One project: title, description, tech stack, GitHub link and an optional demo link.
function ProjectCard({ title, description, tech, github, demo, demoNote }) {
  return (
    <article className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <ul className="tech" aria-label="Tech stack">
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub<span className="sr-only"> repository for {title}</span>
        </a>
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Live demo<span className="sr-only"> of {title}</span>
          </a>
        )}
      </div>
      {demo && demoNote && <p className="demo-note">{demoNote}</p>}
    </article>
  );
}

export default ProjectCard;
