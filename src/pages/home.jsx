import "./home.css";
import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";
import LightMobile from "../assets/bg-mobile-light.jpg";
import LightDesktop from "../assets/bg-desktop-light.jpg";
import DarkMobile from "../assets/bg-mobile-dark.jpg";
import DarkDesktop from "../assets/bg-desktop-dark.jpg";
import Input from "../Components/input/Input";
import List from "../Components/List/List";
import Footer from "../Components/footer/Footer";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const Home = ({ mode, toggleMode }) => {
  const [todoList, setTodoList] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const dragItem = useRef();
  const dragOverItem = useRef();

  const deleteTodoItem = (itemId) => {
    const updateList = todoList.filter((item) => item._id !== itemId);
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

  const clearCompletedItems = async () => {
    try {
      const response = await axios.delete(
        "https://to-do-app-back-production.up.railway.app/api/items/completed"
      );
      if (response.status === 200) {
        const updateTodoList = todoList.filter((item) => !item.completed);
        setTodoList(updateTodoList);
      } else {
        console.log("Error clearing completed items", response.data);
      }
    } catch (error) {
      console.log("Error clearing completed items", error);
    }
  };

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
    console.log(position);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e) => {
    const copyListItems = [...todoList];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setTodoList(copyListItems);
  };

  useEffect(() => {
    const fetchTodoItems = async () => {
      try {
        const response = await axios.get(
          "https://to-do-app-back-production.up.railway.app/api/items"
        );

        console.log(response.data);
        setTodoList(response.data);
      } catch (error) {
        console.error("Error fetching todo items:", error);
      }
    };
    fetchTodoItems();
  }, []);

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

      {mode !== "dark" ? (
        <img
          className="home-page-image-desktop"
          id="light"
          src={LightDesktop}
          alt="light"
        />
      ) : (
        <img
          className="home-page-image-desktop"
          id="dark-desk"
          src={DarkDesktop}
          alt="dark-desk"
        />
      )}
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
          setActiveFilter={setActiveFilter}
          clearCompletedItems={clearCompletedItems}
          dragStart={dragStart}
          dragEnter={dragEnter}
          drop={drop}
          activeFilter={activeFilter}
        />
        <div className="hidden-footer">
          <Footer
            mode={mode}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>

        <p>Drag and drop to reorder list</p>
      </div>
    </section>
  );
};

export default Home;
