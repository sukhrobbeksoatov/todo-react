import React, { useState } from "react";
import Item from "../item/Item";
import "./List.scss";

export default function List() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos"))
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  localStorage.setItem(
    "todos",
    JSON.stringify(todos) ? JSON.stringify(todos) : "[]"
  );

  const [todoName, setTodoName] = useState("");
  function handleSubmit(evt) {
    evt.preventDefault();

    setTodos([
      ...todos,
      {
        name: todoName,
        isDone: false,
        id: todos.length + 1,
        dueDate: new Date(Date.now()),
      },
    ]);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function handleToggle(id) {
    let tempTodos = [...todos];
    const index = tempTodos.findIndex((todo) => todo.id === +id);

    if (typeof index !== "number") return;

    tempTodos[index].isDone = !tempTodos[index].isDone;
    setTodos(tempTodos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== +id));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  return (
    <section className="List">
      <div className="container">
        <form onSubmit={(evt) => handleSubmit(evt)} className="add-form">
          <input
            className="add-form__input"
            type="text"
            placeholder="Create a new todo..."
            onChange={(evt) => setTodoName(evt.target.value)}
            value={todoName}
          />
        </form>
        <div className="todo-list">
          {todos.map((todo, i) => (
            <Item
              key={i}
              text={todo.name}
              id={todo.id}
              onToggle={() => handleToggle(todo.id)}
              onDelete={() => handleDelete(todo.id)}
              isDone={todo.isDone}
              dueDate={todo.dueDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
