import "./Footer.css";

const Footer = ({ mode, todoList, activeFilter, setActiveFilter }) => {
  const handleActiveClick = (condition) => {
    setActiveFilter(condition);
  };

  return (
    <div className={`footer ${mode === "dark" ? "dark-theme" : ""}`}>
      <div className="all" onClick={() => handleActiveClick("all")}>
        All
      </div>
      <div className="active" onClick={() => handleActiveClick("active")}>
        Active
      </div>
      <div className="completed" onClick={() => handleActiveClick("completed")}>
        Completed
      </div>
    </div>
  );
};

export default Footer;
