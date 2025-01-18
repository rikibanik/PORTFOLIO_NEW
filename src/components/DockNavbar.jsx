import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faLightbulb, faProjectDiagram, faContactCard } from "@fortawesome/free-solid-svg-icons";

const DockNavbar = ({ activePage, onSwitchPage }) => {
  const icons = [
    { icon: faUser, label: "Profile", page: "profile" },
    { icon: faContactCard, label: "Contact", page: "contact" },
    { icon: faHouse, label: "Home", page: "home" },
    { icon: faLightbulb, label: "Skills", page: "skills" },
    { icon: faProjectDiagram, label: "Project", page: "project" },
  ];

  return (
    <div className="fixed bottom-4 neon-glow left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-[800px] bg-slate-800 bg-opacity-70 rounded-2xl shadow-lg p-4 flex justify-between items-center">
      {icons.map((item) => {
        const isActive = activePage === item.page;

        return (
          <div
            key={item.page}
            className={`flex flex-col items-center justify-center text-slate-200  cursor-pointer transition-transform duration-300 ${
              isActive ? "scale-125 translate-y-[-10px]" : "hover:scale-110"
            }`}
            onClick={() => onSwitchPage(item.page)}
            style={{
              transform: isActive ? "translateY(-10px) scale(1.25)" : "translateY(0px) scale(1)", // Active icon elevation
            }}
          >
            <FontAwesomeIcon icon={item.icon} className={`text-2xl ${isActive ? "text-blue-400" : ""}`} />
            <span className={`text-xs mt-1 ${isActive ? "text-blue-300" : "text-slate-400"}`}>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DockNavbar;
