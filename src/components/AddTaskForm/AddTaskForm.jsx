import "./AddTaskForm.css";
const AddTaskForm = () => {
  return (
    <form className="add-task-form">
      <input type="text" autoComplete="off" placeholder="Type your task..." />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;
