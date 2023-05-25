import "./Footer.css";

const Footer = ({ mode, setActiveFilter, activeFilter }) => {
  const handleActiveClick = (condition) => {
    setActiveFilter(condition);
  };

  return (
    <div className={`footer ${mode === "dark" ? "dark-theme" : ""}`}>
      <div
        onClick={() => handleActiveClick("all")}
        className={`all ${activeFilter === "all" ? "isActive" : ""}`}
      >
        All
      </div>
      <div
        className={`all ${activeFilter === "active" ? "isActive" : ""}`}
        onClick={() => handleActiveClick("active")}
      >
        Active
      </div>
      <div
        className={`all ${activeFilter === "completed" ? "isActive" : ""}`}
        onClick={() => handleActiveClick("completed")}
      >
        Completed
      </div>
    </div>
  );
};

export default Footer;
