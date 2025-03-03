//✅(Главен компонент)
import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAdd={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <Todo key={index} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default App;
