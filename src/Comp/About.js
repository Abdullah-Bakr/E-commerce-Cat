import React from "react";
import "../scss/comp/about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="info">
          <div className="left-side">
            <img src="./images/Team work-amico.svg" alt="" />
          </div>
          <div className="right-side">
            <h1>about us</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              voluptate totam doloremque laudantium maxime dignissimos laborum,
              ad necessitatibus porro impedit pariatur. Vel unde possimus ipsam
              enim nesciunt facere aperiam maiores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
