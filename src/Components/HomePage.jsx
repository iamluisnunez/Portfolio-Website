import React from "react";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
import "../homePage.css";
import TechStackIcons from "./TechStackIcons";

const HomePage = () => {
  return (
    <div className="home-page-color text-white">
      <div className="text-center">
        <section id="about" className="py-5 with-border">
          <div className="container-lg">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h1>About Me</h1>
                <p className="smaller-width">
                  Hello! I'm Luis Nunez-Valadez, a passionate and results-driven
                  web developer based in Austin, Texas. With a strong foundation
                  in IT support and a flair for crafting innovative solutions, I
                  bring a unique blend of technical expertise and creative
                  problem-solving to the world of web development.
                </p>
                <br />
                <h2>Professional Background</h2>
                <p className="smaller-width">
                  Currently, I'm contributing my skills and knowledge as an IT
                  Support Engineer at Amazon, where I've had the opportunity to
                  enhance team efficiency through Python scripting and manage
                  Amazon Lockers globally. My role involves not only resolving
                  technical issues promptly but also actively participating in
                  the development of global IT policies and contributing to the
                  Global Policy website with HTML, CSS, and JavaScript.
                  Previously, as an IT Infrastructure Administrator at Douglas
                  Dynamics LLC, I played a pivotal role in the company-wide
                  deployment of Office 365, leading to a significant boost in
                  productivity. I spearheaded projects like the Cell Phone
                  Repeater initiative, increasing on-site cell phone reception
                  by approximately 90%. During my tenure, I also successfully
                  transitioned users from Active Directory to Azure AD and
                  handled support tickets with external vendors.
                </p>
              </div>
            </div>
          </div>
          <TechStackIcons />
        </section>
      </div>
      <Projects />
      <div className="with-border">
        <br />
        <br />
        <br />
      </div>
      <ContactMe />
    </div>
  );
};

export default HomePage;
