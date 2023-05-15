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
  const [activeFilter, setActiveFilter] = useState("all");
  const deleteTodoItem = (itemId) => {
    const updateList = todoList.filter((item) => item.id !== itemId);
    setTodoList(updateList);
  };

  const filterTodoList = todoList.filter((item) => {
    if (activeFilter === "active") {
      return !item.completed;
    } else if (activeFilter === "completed") {
      return item.completed;
    } else {
      return true;
    }
  });

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
        <List
          mode={mode}
          todoList={filterTodoList}
          setTodoList={setTodoList}
          deleteTodoItem={deleteTodoItem}
        />
        <Footer mode={mode} setActiveFilter={setActiveFilter} />
        <p>Drag and drop to reorder list</p>
      </div>
    </section>
  );
};

export default Home;
