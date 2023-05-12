import "./TodoItem.css";
import { useState } from "react";
import Check from "../../assets/icon-check.svg";
import Cross from "../../assets/icon-cross.svg";

const TodoItem = ({ item, setTodoList }) => {
  return (
    <div className="todo-item-container">
      <div className="todo-items">
        <div className="check-div"></div>
        <div className="todo-task">{item.text}</div>
        <img className="cross" src={Cross} alt="cross" />
      </div>
    </div>
  );
};

export default TodoItem;
