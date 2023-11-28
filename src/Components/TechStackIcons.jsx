// TechStackIcons.js
import React from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import "../techStackIcons.css";

const TechStackIcons = () => {
  return (
    <div className="tech-stack-icons ">
      <div className="icon-container">
        <FaReact size={100} className="icon" />
        <FaNodeJs size={100} className="icon" />
        <FaDatabase size={100} className="icon" />
      </div>
    </div>
  );
};

export default TechStackIcons;
