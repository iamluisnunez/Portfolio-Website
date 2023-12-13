// ResumeButton.js
import React from "react";
import "../resumeButton.css";

const ResumeButton = () => {
  const downloadResume = () => {
    // Add logic to trigger the download of the resume (e.g., open a new window with the resume URL)
    // For example:
    window.open("src/LuisNunez_Resume.docx.pdf", "_blank");
  };

  return (
    <div className="resume-button-container resumeButton">
      <button className="btn btn-primary" onClick={downloadResume}>
        Download Resume
      </button>
    </div>
  );
};

export default ResumeButton;
