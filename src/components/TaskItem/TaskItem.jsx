import "./TaskItem.css";
import { FaTrashCan } from "react-icons/fa6";
const TaskItem = ({ task, deleteTask, handleChangeStatus }) => {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.status}
        onChange={() => {
          handleChangeStatus(task.id);
        }}
      />
      <h2>{task.title}</h2>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        <FaTrashCan />
      </button>
    </li>
  );
};

export default TaskItem;
