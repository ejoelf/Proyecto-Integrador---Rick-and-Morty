import React from "react";
import "./about.css";
import "@fortawesome/fontawesome-free/css/all.css";

function About() {
  return (
    <div className="card">
      <div className="img-bx">
        <img src="../../assets/img/yo.jpg" alt="Joel" />
      </div>
      <div className="content">
        <div className="detail">
          <h2>
            Joel Fernandez
            <br />
            <span>Estudiante de Soy Henry</span>
          </h2>
          <ul className="sci">
            <li>
              <a
                href="https://github.com/ejoelf?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/eric-joel-fern%C3%A1ndez-b1b5b0234/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
