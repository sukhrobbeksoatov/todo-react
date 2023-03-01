import React from "react";
import "./Item.scss";

export default function Item({ text, isDone, onToggle, id, onDelete, dueDate }) {

  const newDueDate = new Date(dueDate)

  return (
    <div className="todo-item">
      <label className="todo-item__label">
        <input
          onChange={onToggle}
          className="todo-item__checkbox"
          checked={isDone}
          type="checkbox"
        />
        <span className="todo-item__inner-text">{text}</span>
        <span className="todo-item__time-text">{`${newDueDate.toLocaleDateString()} ${newDueDate.toLocaleTimeString()}`}</span>
        <button className="todo-item__delete-btn" onClick={onDelete}>
          <img src="./images/icon-trash.svg" alt="" />
        </button>
      </label>
    </div>
  );
}
