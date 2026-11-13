// A row of buttons, one per technology plus "All".
// It does not keep the selection itself: App owns it and passes it down as a prop,
// and FilterBar reports clicks back up through the onSelect function prop.
function FilterBar({ options, selected, onSelect, counts }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter projects by technology">
      {['All', ...options].map((option) => (
        <button
          key={option}
          type="button"
          className={option === selected ? 'active' : ''}
          aria-pressed={option === selected}
          onClick={() => onSelect(option)}
        >
          {option} <span className="count">{counts[option]}</span>
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
