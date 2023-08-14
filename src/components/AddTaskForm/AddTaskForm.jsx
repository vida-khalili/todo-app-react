import { useState, useRef } from "react";
import "./AddTaskForm.css";
const AddTaskForm = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const inputElement = useRef();
  const handleTaskTitleChange = (event) => {
    if (event) event.preventDefault();
    setTaskTitle(event.target.value);
  };

  const emptyForm = () => {
    inputElement.current.value = "";
  };

  const handleTaskSubmit = (event) => {
    if (event) event.preventDefault();
    if (!taskTitle || taskTitle === "") return;
    addTask(taskTitle);
    emptyForm();
  };

  return (
    <form className="add-task-form" onSubmit={handleTaskSubmit}>
      <input
        ref={inputElement}
        type="text"
        autoComplete="off"
        placeholder="Type your task..."
        onChange={handleTaskTitleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;
