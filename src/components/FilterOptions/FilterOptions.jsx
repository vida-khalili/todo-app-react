import "./FilterOptions.css";
const FilterOptions = () => {
  return (
    <div className="filter-options">
      <div className="item-counter">98 items</div>
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
