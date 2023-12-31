import React from "react";
import "../projects.css";

const Projects = () => {
  return (
    <div className="container-fluid text-center project-color text-white">
      {/* Project 1 */}
      <div className="project-header">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        <h2>Finance Manager</h2>
        {/* Add other content here */}

        <a
          href="https://github.com/iamluisnunez/FinanceApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../../images/FinanceManager.png"
            alt="Finance Manager"
            className="project-image"
          />
        </a>
        <a
          href="https://github.com/iamluisnunez/FinanceApp"
          className="project-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://spectacular-gnome-1046d7.netlify.app/"
          className="project-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site
        </a>
      </div>

      {/* Project 2 */}
      <div className="project-container">
        <h2>URL To PDF</h2>
        {/* Add other content here */}

        <a
          href="https://github.com/iamluisnunez/HTMLtoPDF"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../../images/HTMLtoPDF.png"
            alt="URL To PDF"
            className="project-image"
          />
        </a>
        <a
          href="https://github.com/iamluisnunez/HTMLtoPDF"
          className="project-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://coruscating-sprinkles-935426.netlify.app/"
          className="project-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site
        </a>
      </div>
    </div>
  );
};

export default Projects;
