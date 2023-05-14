import { useState } from "react";
import TodoItem from "../todoitem/TodoItem";
import "./List.css";

const List = ({ mode, todoList, setTodoList, deleteTodoItem }) => {
  const incompleteCount = todoList.filter((item) => !item.completed).length;

  return (
    <div className={`list-container ${mode === "dark" ? "dark-theme" : ""}`}>
      {todoList.length > 0
        ? todoList.map((item) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                setTodoList={setTodoList}
                deleteTodoItem={deleteTodoItem}
              />
            );
          })
        : null}
      <div className="left-clear">
        <div>{incompleteCount} items left</div>
        <div>Clear Completed</div>
      </div>
    </div>
  );
};

export default List;
