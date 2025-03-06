//✅(Форма за добавяне на задачи)

//✅Импортиране на 2 модули.
import { useState } from "react";
import "./TodoForm.css"; // Импортиране на CSS файла

//✅Дефиниране на TodoForm компонента
function TodoForm({ onAdd }) {
  const [newTask, setNewTask] = useState("");
  //✅newTask – променлива, която съхранява въведената от потребителя задача.
  //✅setNewTask – функция, която актуализира newTask.
  //✅Началната стойност на newTask е "" (празен текст).
  //✅onAdd – функция, подадена като проп от родителския компонент (вероятно App.js).

  //✅Функция за обработка на изпращането на формата
  const handleSubmit = (event) => {
    event.preventDefault();
    //✅event.preventDefault() – спира презареждането на страницата при натискане на "Add".
    console.log("Submitting task:", newTask);

    //✅Проверка дали newTask не е празен – ако е празен, нищо не прави.
    if (newTask) {
      if (typeof onAdd !== "function") {
        console.error("Error: onAdd is not a function");
        //✅Проверка дали onAdd е функция – ако не е, показва грешка в конзолата.
        return;
      }

      //✅Изпраща задачата към onAdd, което добавя задачата към списъка.
      onAdd(newTask);

      setNewTask("");
      //✅Изчиства newTask, за да може потребителят да въведе нова задача.
    }
  };

  //✅Рендериране на JSX (HTML структура)
  return (
    //✅Обгражда формата в <div>, за да може да се стилизира с CSS.
    <div className="todo-form-container">
      <form onSubmit={handleSubmit} className="todo-form">
        {/* ✅Поле за въвеждане (<input>) */}
        <input
          type="text"
          value={newTask}
          //✅value={newTask} → Държи стойността от useState.

          onChange={(e) => setNewTask(e.target.value)}
          //✅onChange={(e) => setNewTask(e.target.value)} → Обновява newTask, докато пишеш.

          placeholder="Add a new task"
          className="todo-input"
        />
        {/*✅Бутон (<button>) */}
        <button type="submit" className="todo-button">
          {/*✅type="submit" – Изпраща формата.
          Когато се натисне, се извиква handleSubmit().  */}
          Add
        </button>
      </form>
    </div>
  );

  //✅Потребителят въвежда текст в полето.
  //✅Когато натисне бутона "Add":
  //✅handleSubmit се изпълнява.
  //✅Проверява дали е въведен текст.
  //✅Изпраща задачата към onAdd (функцията за добавяне в App.js).
  //✅Изчиства полето за следващата задача.
}

export default TodoForm;
