import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import DockNavbar from "./components/DockNavbar";
import Contact from "./pages/Contact";
function App() {
  const [activePage, setActivePage] = useState("home"); // 'home' or 'skills'

  // Handle section switch with animation
  const switchPage = (page) => {
    setActivePage(page);
  };

  return (
    <div className="app-container min-h-screen relative">
      {/* Page content */}
      <div
        className={`content transition-all duration-500 ease-in-out ${
          activePage === "home" ? "home-active" : "skills-active"
        }`}
      >
        {activePage === "home" && <Home />}
        {activePage === "skills" && <Skills />}
        {activePage === "contact" && <Contact />}
      </div>

      {/* Navbar */}
      <DockNavbar onSwitchPage={switchPage} />
    </div>
  );
}

export default App;
