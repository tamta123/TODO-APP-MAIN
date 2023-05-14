import "./Footer.css";

const Footer = ({ mode, todoList, activeFilter, setActiveFilter }) => {
  const activeItems = () => {
    todoList.filter((item) => !item.completed);
  };

  const handleActiveClick = () => {
    setActiveFilter("active");
  };

  return (
    <div className={`footer ${mode === "dark" ? "dark-theme" : ""}`}>
      <div className="all">All</div>
      <div className="active" onClick={handleActiveClick}>
        Active
      </div>
      <div className="completed">Completed</div>
    </div>
  );
};

export default Footer;
