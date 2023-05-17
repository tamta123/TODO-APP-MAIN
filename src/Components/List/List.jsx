import { useState, useRef } from "react";
import TodoItem from "../todoitem/TodoItem";
import Footer from "../footer/Footer";
import "./List.css";

const List = ({
  mode,
  todoList,
  setTodoList,
  deleteTodoItem,
  setActiveFilter,
  clearCompletedItems,
}) => {
  const incompleteCount = todoList.filter((item) => !item.completed).length;

  return (
    <div className={`list-container ${mode === "dark" ? "dark-theme" : ""}`}>
      {todoList && todoList.length > 0
        ? todoList.map((item) => {
            return (
              <TodoItem
                mode={mode}
                key={item.id}
                item={item}
                setTodoList={setTodoList}
                deleteTodoItem={deleteTodoItem}
              />
            );
          })
        : null}
      <div className="left-clear">
        <div className="left">{incompleteCount} items left</div>
        <div className="hidden">
          <Footer mode={mode} setActiveFilter={setActiveFilter} />
        </div>
        <div className="clear" onClick={clearCompletedItems}>
          Clear Completed
        </div>
      </div>
    </div>
  );
};

export default List;
