import "./TodoItem.css";
import { useState } from "react";
import Check from "../../assets/icon-check.svg";
import Cross from "../../assets/icon-cross.svg";
import axios from "axios";

const TodoItem = ({
  mode,
  item,
  setTodoList,
  deleteTodoItem,
  dragStart,
  dragEnter,
  drop,
  index,
}) => {
  const handleCheck = (id) => {
    const updatedItem = { ...item, completed: !item.completed };

    axios
      .put(
        `https://to-do-app-back-production.up.railway.app/api/items/${id}`,
        updatedItem
      )
      .then(() => {
        console.log(updatedItem);
        setTodoList((prevTodoList) =>
          prevTodoList.map((todoItem) =>
            todoItem._id === item._id ? updatedItem : todoItem
          )
        );
      })
      .catch((error) => {
        console.error("Error updating todo item status:", error);
      });
  };

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(
        `https://to-do-app-back-production.up.railway.app/api/items/${id}`
      )
      .then(() => {
        deleteTodoItem(item._id);
      })
      .catch((error) => {
        console.error("Error deleting todo item:", error);
      });
  };

  return (
    <div
      className={`todo-item-container ${mode === "dark" ? "dark-theme" : ""}`}
      draggable
      onDragStart={(e) => dragStart(e, index)}
      onDragEnter={(e) => dragEnter(e, index)}
      onDragEnd={drop}
    >
      <div
        className={`todo-items ${item.completed ? "done" : ""} ${
          mode === "dark" ? "border" : ""
        }`}
      >
        <div
          className={`check-div ${item.completed ? "background" : ""}`}
          id={`check-div-${item._id}`}
          onClick={() => handleCheck(item._id)}
        >
          {item.completed ? (
            <img
              className={`check-hidden ${item.completed ? "checked" : ""}`}
              src={Check}
              alt="check"
              id={`check-${item._id}`}
            />
          ) : null}
        </div>
        <div
          className={`todo-task ${item.completed ? "underlined" : ""} ${
            mode === "dark" ? "change-color" : ""
          }`}
          id={`todo-task-${item._id}`}
        >
          {item.task}
        </div>
        <img
          className="cross"
          src={Cross}
          alt="cross"
          id={`cross -${item._id}`}
          onClick={() => handleDelete(item._id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
