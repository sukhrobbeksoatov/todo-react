import React from "react";
import Item from "../item/Item";
import "./AddForm.scss";

export default function AddForm() {
  return (
    <form className="add-form" action="https://echo.htmlacademy.ru">
      <input
        className="add-form__input"
        type="text"
        placeholder="Create a new todo..."
      />
      <div className="todo-items">
        <Item id="1">First todo</Item>
        <Item id="2">Some text</Item>
        <Item id="3">Something</Item>
      </div>
    </form>
  );
}
