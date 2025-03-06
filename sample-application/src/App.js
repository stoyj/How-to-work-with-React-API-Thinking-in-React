//✅(Главен компонент)

//✅Импортира useState от React (използва се за управление на задачите).
//✅Импортира TodoForm (формата за добавяне на задачи).
//✅Импортира Todo (компонент за отделна задача).
//✅Импортира TodoForm.css за стилизиране.
import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "./TodoForm.css";

//✅Дефиниране на App компонента
function App() {
  const [tasks, setTasks] = useState([]);
  //✅tasks – масив, който съдържа списъка със задачи.
  //✅setTasks – функция за актуализиране на tasks.
  //✅useState([]) – започва със празен списък от задачи.

  const addTask = (task) => {
    setTasks([...tasks, task]);
    //✅Функция за добавяне на нова задача.
    //✅Когато потребителят добави нова задача, тя се вмъква в масива tasks.
    //✅setTasks([...tasks, task]) създава нов масив, който съдържа предишните задачи плюс новата.
  };

  return (
    //✅Рендериране на компонентите.
    <div>
      <h1>Todo List</h1>
      {/* ✅Показва заглавие "Todo List". */}

      <TodoForm onAdd={addTask} />
      {/*✅Включва TodoForm, като му подава функцията addTask, за да може да добавя задачи.  */}
      <ul>
        {/* ✅Използва map(), за да обходи tasks и да създаде Todo компонент за всяка задача. */}
        {tasks.map((task, index) => (
          <Todo key={index} task={task} />
          //✅key={index} – React изисква уникален ключ за всеки елемент в списък (по-добре е да се използва id, но тук се използва index).
        ))}
      </ul>
    </div>
  );
}

//✅export default App;
export default App;
