//✅(Форма за добавяне на задачи)
import { useState } from "react";
import "./TodoForm.css"; // Импортиране на CSS файла

function TodoForm({ onAdd }) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting task:", newTask);
    if (newTask) {
      if (typeof onAdd !== "function") {
        console.error("Error: onAdd is not a function");
        return;
      }
      onAdd(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="todo-form-container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="todo-input"
        />
        <button type="submit" className="todo-button">
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
