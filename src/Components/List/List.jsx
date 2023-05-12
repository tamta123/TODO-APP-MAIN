import { useState } from "react";
import TodoItem from "../todoitem/TodoItem";
import "./List.css";

const List = ({ todoList, setTodoList }) => {
  return (
    <div className="list-container">
      {todoList.length > 0
        ? todoList.map((item) => {
            return (
              <TodoItem key={item.id} item={item} setTodoList={setTodoList} />
            );
          })
        : null}
      <div className="left-clear">
        <div> items left</div>
        <div>Clear Completed</div>
      </div>
    </div>
  );
};

export default List;
