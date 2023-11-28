// ContactMePage.js
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons from react-icons library
import ContactForm from "./ContactForm"; // Assuming you have a ContactForm component
import "../contactMe.css";

const ContactMe = () => {
  return (
    <div className=" background text-center">
      <h1>Contact Me</h1>

      {/* Social Media Links */}
      <div className="mb-4">
        <a
          href="https://github.com/iamluisnunez"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link ml-5"
        >
          <FaGithub size={100} />
        </a>
        <a
          href="https://www.linkedin.com/in/iamluisnunez/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link ml-5"
        >
          <FaLinkedin size={100} />
        </a>
        <a
          href="mailto:incepzz@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link ml-5"
        >
          <FaEnvelope size={100} />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
