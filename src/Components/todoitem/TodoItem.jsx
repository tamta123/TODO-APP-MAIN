import "./TodoItem.css";
import { useState } from "react";
import Check from "../../assets/icon-check.svg";
import Cross from "../../assets/icon-cross.svg";

const TodoItem = ({
  mode,
  item,
  setTodoList,
  deleteTodoItem,
  dragStart,
  dragItem,
  dragEnter,
  drop,
  index,
}) => {
  const handleCheck = () => {
    const updatedItem = { ...item, completed: !item.completed };
    setTodoList((prevTodoList) =>
      prevTodoList.map((todoItem) =>
        todoItem.id === item.id ? updatedItem : todoItem
      )
    );
  };
  const handleDelete = () => {
    deleteTodoItem(item.id);
  };

  return (
    <div
      className={`todo-item-container ${mode === "dark" ? "dark-theme" : ""}`}
    >
      <div
        className={`todo-items ${item.completed ? "done" : ""} ${
          mode === "dark" ? "border" : ""
        }`}
        draggable
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
      >
        <div
          className={`check-div ${item.completed ? "background" : ""}`}
          id={`check-div-${item.id}`}
          onClick={handleCheck}
        >
          {item.completed ? (
            <img
              className={`check-hidden ${item.completed ? "checked" : ""}`}
              src={Check}
              alt="check"
              id={`check-${item.id}`}
            />
          ) : null}
        </div>
        <div
          className={`todo-task ${item.completed ? "underlined" : ""} ${
            mode === "dark" ? "change-color" : ""
          }`}
          id={`todo-task-${item.id}`}
        >
          {item.text}
        </div>
        <img
          className="cross"
          src={Cross}
          alt="cross"
          id={`cross -${item.id}`}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default TodoItem;
