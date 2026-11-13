// One button per technology (plus "All"). The parent owns the selected value.
function FilterBar({ options, selected, onSelect }) {
  return (
    <div className="filter" role="group" aria-label="Filter projects by technology">
      {['All', ...options].map((opt) => (
        <button key={opt} type="button" aria-pressed={selected === opt} onClick={() => onSelect(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
