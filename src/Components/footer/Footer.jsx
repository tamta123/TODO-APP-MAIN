import "./Footer.css";

const Footer = ({ mode }) => {
  return (
    <div className={`footer ${mode === "dark" ? "dark-theme" : ""}`}>
      <div className="all">All</div>
      <div className="active">Active</div>
      <div className="completed">Completed</div>
    </div>
  );
};

export default Footer;
