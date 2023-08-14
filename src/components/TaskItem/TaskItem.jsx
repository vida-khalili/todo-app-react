import "./TaskItem.css";
import { FaTrashCan } from "react-icons/fa6";
const TaskItem = () => {
  return (
    <li className="task-item">
      <input type="checkbox" />
      <h2>my task</h2>
      <button>
        <FaTrashCan />
      </button>
    </li>
  );
};

export default TaskItem;
