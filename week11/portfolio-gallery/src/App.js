import { useState } from 'react';
import './App.css';
import projects from './data/projects';
import FilterBar from './components/FilterBar';
import ProjectList from './components/ProjectList';

// Every technology used by at least one project, in the order they first appear.
const techOptions = [...new Set(projects.flatMap((project) => project.tech))];

// How many projects each filter would show.
const counts = { All: projects.length };
for (const tech of techOptions) {
  counts[tech] = projects.filter((project) => project.tech.includes(tech)).length;
}

function App() {
  const [selected, setSelected] = useState('All');

  const visible =
    selected === 'All' ? projects : projects.filter((project) => project.tech.includes(selected));

  return (
    <div className="app">
      <header className="app-header">
        <p className="eyebrow">K0126002 · Week 11 homework</p>
        <h1>Portfolio Gallery</h1>
        <p className="intro">
          Projects I built this semester. Pick a technology to filter the cards.
        </p>
      </header>

      <main>
        <FilterBar options={techOptions} selected={selected} onSelect={setSelected} counts={counts} />
        <p className="status" aria-live="polite">
          Showing {visible.length} of {projects.length} projects
          {selected !== 'All' && <> that use {selected}</>}
        </p>
        <ProjectList projects={visible} />
      </main>

      <footer className="app-footer">
        Created by Rahimjon | Student ID: 202438377 ·{' '}
        <a href="../index.html">Back to Week 11</a>
      </footer>
    </div>
  );
}

export default App;
