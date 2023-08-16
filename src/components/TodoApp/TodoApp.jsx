import { useEffect, useState } from "react";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import FilterOptions from "../FilterOptions/FilterOptions";
import TasksList from "../TaskList/TasksList";
import "./TodoApp.css";
import { v4 as uuidv4 } from "uuid";
const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    let storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      storedTasks = JSON.parse(storedTasks);
    } else {
      storedTasks = [];
    }
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredTasks(tasks);
    }
    if (filter === "active") {
      let activeTasks = tasks.filter((task) => !task.status);
      setFilteredTasks(activeTasks);
    }
    if (filter === "completed") {
      let completedTasks = tasks.filter((task) => task.status);
      setFilteredTasks(completedTasks);
    }
  }, [filter, tasks, refresh]);
  const addTask = (taskTitle) => {
    let newTasks = [
      ...tasks,
      { id: uuidv4(), title: taskTitle, status: false },
    ];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const deleteTask = (taskId) => {
    let newTasks = tasks;
    delete newTasks[tasks.findIndex((task) => task.id === taskId)];
    newTasks = newTasks.filter((item) => item);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };
  const handleChangeStatus = (taskId) => {
    let newChangedTasks = tasks;
    let changedStatusIndex = tasks.findIndex((task) => task.id === taskId);
    newChangedTasks[changedStatusIndex].status =
      !newChangedTasks[changedStatusIndex].status;
    setTasks(newChangedTasks);
    setRefresh(refresh + 1);
    localStorage.setItem("tasks", JSON.stringify(newChangedTasks));
  };

  return (
    <div className="todo-app">
      <AddTaskForm addTask={addTask} />
      <div className="todo-grid">
        <TasksList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          handleChangeStatus={handleChangeStatus}
        />
        <FilterOptions handleFilterTask={setFilter} tasks={filteredTasks} />
      </div>
    </div>
  );
};
export default TodoApp;
