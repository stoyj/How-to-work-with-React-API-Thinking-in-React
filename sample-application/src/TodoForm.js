//✅(Форма за добавяне на задачи)
import { useState } from "react";

function TodoForm({ onAdd }) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask) {
      onAdd(newTask); // Подаваме новата задача към родителя (App)
      setNewTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
