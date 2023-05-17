import { useState } from "react";
import "./Input.css";

const Input = ({ mode, setTodoList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValueChange = (event) => {
    setInputValue(event.target.value);
    // set the value of input whatever is typed as input
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue !== "") {
      // Add the new todo item to the list
      const newTodoItem = {
        text: inputValue,
        completed: false,
        id: Math.floor(Math.random() * 1000),
        show: true,
      };
      setTodoList((prevTodoList) => [...prevTodoList, newTodoItem]);
    }
    // after we hit enter
    setInputValue(" ");
  };

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <div
          className={`input-with-icon ${mode === "dark" ? "dark-theme" : ""}`}
        >
          <div className="input-icon"></div>
          <input
            type="text"
            className={`input ${mode === "dark" ? "dark-theme" : ""}`}
            value={inputValue}
            placeholder="Create a new todo…"
            onChange={handleInputValueChange}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Input;
