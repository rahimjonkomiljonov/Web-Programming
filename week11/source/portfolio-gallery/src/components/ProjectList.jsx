import ProjectCard from './ProjectCard.jsx';

// Renders an array of projects as ProjectCards; the project id is the stable key.
function ProjectList({ projects }) {
  if (projects.length === 0) return <p className="empty">No projects use this technology yet.</p>;
  return (
    <div className="grid">
      {projects.map((p) => (
        <ProjectCard key={p.id} {...p} />
      ))}
    </div>
  );
}

export default ProjectList;
