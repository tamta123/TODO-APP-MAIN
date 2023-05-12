import { useState } from "react";
import "./App.css";
import Home from "./pages/home";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <div className={`main-div ${mode === "dark" ? "dark-mode" : ""}`}>
      <Home mode={mode} toggleMode={toggleMode} />
    </div>
  );
}

export default App;
