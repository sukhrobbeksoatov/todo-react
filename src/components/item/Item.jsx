import React from "react";
import "./Item.scss";

export default function Item({ id, children }) {
  return (
    <div className="todo-item">
      <input className="todo-item__checkbox" type="checkbox" id={id} />
      <label className="todo-item__label" htmlFor={id}>
        {children}
      </label>
    </div>
  );
}
