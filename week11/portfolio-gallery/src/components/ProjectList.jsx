import ProjectCard from './ProjectCard';

// Renders one ProjectCard per project. The key is the project's id, not the array index.
function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="empty">No projects use that technology yet.</p>;
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          tech={project.tech}
          github={project.github}
          demo={project.demo}
        />
      ))}
    </div>
  );
}

export default ProjectList;
