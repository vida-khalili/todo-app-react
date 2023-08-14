import AddTaskForm from "../AddTaskForm/AddTaskForm";
import FilterOptions from "../FilterOptions/FilterOptions";
import TasksList from "../TaskList/TasksList";
import "./TodoApp.css";
const TodoApp = () => {
  return (
    <div className="todo-app">
      <AddTaskForm />
      <TasksList />
      <FilterOptions />
    </div>
  );
};
export default TodoApp;
