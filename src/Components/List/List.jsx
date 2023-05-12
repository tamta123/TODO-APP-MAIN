import { useState } from "react";
import TodoItem from "../todoitem/TodoItem";
import "./List.css";

const List = () => {
  // const [todoList, setTodoList] = useState[]

  return (
    <div className="list-container">
      <TodoItem />
      <div className="left-clear">
        <div> items left</div>
        <div>Clear Completed</div>
      </div>
    </div>
  );
};

export default List;
