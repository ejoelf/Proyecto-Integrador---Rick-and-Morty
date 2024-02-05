import React from "react";
import "./about.css";

function About() {
  return (
    <div className="container">
      <div className="about-container">
        <div className="about-header">
          <h2>Joel Fernandez</h2>
        </div>
        <img
          className="about-image"
          src="../../src/assets/img/yo.jpg"
          alt="joel-fernandez"
        />
        <div className="about-info">
          <h3>
            Status: <span>Alive</span>
          </h3>
          <h3>
            Specie: <span>Human</span>
          </h3>
          <h3>
            Gender: <span>Male</span>
          </h3>
          <h3>
            Origin: <span>Argentina</span>
          </h3>
        </div>
        <div className="about-contact">
          <a href="mailto:ejoelf10@gmail.com">
            <img src="../../src/assets/icon/email.png" alt="email" />
          </a>
          <a
            href="https://github.com/ejoelf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../../src/assets/icon/github.png" alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/eric-joel-fern%C3%A1ndez-b1b5b0234/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../../src/assets/icon/linkedin.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
