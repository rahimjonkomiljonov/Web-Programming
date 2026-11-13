import { useState } from 'react';
import { projects } from './data.js';
import FilterBar from './components/FilterBar.jsx';
import ProjectList from './components/ProjectList.jsx';

// every technology that appears in at least one project, sorted
const allTech = [...new Set(projects.flatMap((p) => p.tech))].sort();

function App() {
  const [selected, setSelected] = useState('All');
  const shown = selected === 'All' ? projects : projects.filter((p) => p.tech.includes(selected));

  return (
    <>
      <header>
        <p className="eyebrow">K0126002 · Week 11 homework</p>
        <h1>
          Portfolio <span className="marker">gallery</span>
        </h1>
        <p className="lead">
          My projects as React components: ProjectCard, ProjectList and a FilterBar that filters by
          technology.
        </p>
      </header>
      <FilterBar options={allTech} selected={selected} onSelect={setSelected} />
      <p className="count" role="status">
        Showing {shown.length} of {projects.length} projects{selected !== 'All' && ` using ${selected}`}
      </p>
      <ProjectList projects={shown} />
    </>
  );
}

export default App;
