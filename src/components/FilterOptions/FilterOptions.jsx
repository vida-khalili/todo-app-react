import "./FilterOptions.css";
const FilterOptions = ({ tasks }) => {
  return (
    <div className="filter-options">
      <div className="item-counter">{tasks.length} items</div>
      <ul className="filter-buttons">
        <li>
          <button className="active">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
    </div>
  );
};

export default FilterOptions;
