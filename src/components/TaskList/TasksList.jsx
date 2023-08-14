import TaskItem from "../TaskItem/TaskItem";
import "./TasksList.css";
const TasksList = () => {
  return (
    <ul className="tasks-list">
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </ul>
  );
};

export default TasksList;
