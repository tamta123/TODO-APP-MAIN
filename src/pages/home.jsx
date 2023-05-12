import "./home.css";
import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";
import LightMobile from "../assets/bg-mobile-light.jpg";
import DarkMobile from "../assets/bg-mobile-dark.jpg";
import Input from "../Components/input/Input";
import List from "../Components/List/List";
import Footer from "../Components/footer/Footer";
import { useState } from "react";

const Home = ({ mode, toggleMode }) => {
  const [todoList, setTodoList] = useState([]);

  return (
    <section
      className={`home-page-container ${mode === "dark" ? "dark-mode" : ""}`}
    >
      <img
        className="home-page-image"
        id="light"
        src={mode === "light" ? LightMobile : DarkMobile}
        alt="light"
      />
      <img className="home-page-image" id="dark" src={DarkMobile} alt="dark" />
      <div className="todo-container">
        <div className="todo-wrapper">
          <h1 className="title">TODO</h1>
          <div className="theme-icon">
            <img
              id="moon"
              src={mode === "light" ? Moon : Sun}
              alt="moon"
              onClick={toggleMode}
            />
            <img id="sun" src={Sun} alt="sun" onClick={toggleMode} />
          </div>
        </div>
        <Input mode={mode} setTodoList={setTodoList} />
        <List todoList={todoList} />
        <Footer mode={mode} />
        <p>Drag and drop to reorder list</p>
      </div>
    </section>
  );
};

export default Home;
