import { useState } from "react";
import "./FilterOptions.css";
const FilterOptions = ({ tasks, handleFilterTask }) => {
  const [filter, setFilter] = useState("all");

  const handleFilter = (filterName) => {
    setFilter(filterName);
    handleFilterTask(filterName);
  };
  return (
    <div className="filter-options">
      <div className="item-counter">{tasks.length} items</div>
      <ul className="filter-buttons">
        <li>
          <button
            onClick={() => {
              handleFilter("all");
            }}
            className={filter === "all" ? "active" : ""}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              handleFilter("active");
            }}
            className={filter === "active" ? "active" : ""}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              handleFilter("completed");
            }}
            className={filter === "completed" ? "active" : ""}
          >
            Completed
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FilterOptions;
