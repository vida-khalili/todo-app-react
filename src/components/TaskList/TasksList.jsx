import TaskItem from "../TaskItem/TaskItem";
import "./TasksList.css";
const TasksList = ({ tasks, deleteTask }) => {
  return (
    <ul className="tasks-list">
      {tasks.map((task, index) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default TasksList;
