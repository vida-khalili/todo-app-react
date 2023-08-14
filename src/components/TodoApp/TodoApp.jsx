import { useEffect, useState } from "react";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import FilterOptions from "../FilterOptions/FilterOptions";
import TasksList from "../TaskList/TasksList";
import "./TodoApp.css";
import { v4 as uuidv4 } from "uuid";
const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks([
      { id: uuidv4(), title: "Default Task", status: true },
      { id: uuidv4(), title: "Default Task 2", status: false },
    ]);
  }, []);
  const addTask = (taskTitle) => {
    setTasks([...tasks, { id: uuidv4(), title: taskTitle, status: false }]);
  };

  const deleteTask = (taskId) => {
    let newTasks = tasks;
    delete newTasks[tasks.findIndex((task) => task.id === taskId)];
    newTasks = newTasks.filter((item) => item);
    setTasks(newTasks);
  };
  return (
    <div className="todo-app">
      <AddTaskForm addTask={addTask} />
      <TasksList tasks={tasks} deleteTask={deleteTask} />
      <FilterOptions tasks={tasks} />
    </div>
  );
};
export default TodoApp;
