import { useState } from "react";
import "./Input.css";
import axios from "axios";

const Input = ({ mode, setTodoList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValueChange = (event) => {
    setInputValue(event.target.value);
    // set the value of input whatever is typed as input
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inputValue !== "") {
      try {
        const response = await axios.post(
          "https://to-do-app-back-production.up.railway.app/api/newItem",
          {
            task: inputValue,
            completed: false,
          }
        );
        setTodoList((prevTodoList) => [...prevTodoList, response.data]);
        setInputValue("");
      } catch (error) {
        console.error("Error adding todo item:", error);
      }
    }
  };

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <div
          className={`input-with-icon ${mode === "dark" ? "dark-theme" : ""}`}
        >
          <div className="input-icon" onClick={handleSubmit}></div>
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
