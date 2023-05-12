import { useState } from "react";
import "./input.css";

const Input = ({ mode }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValueChange = (event) => {
    setInputValue(event.target.value);
    // set the value of input whatever is typed as input
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue !== "") {
      // do something
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
