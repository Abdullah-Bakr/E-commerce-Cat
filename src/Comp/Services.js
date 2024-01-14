import React from "react";
import { Container } from "react-bootstrap";
import MyCard from "./MyCard";
import "../scss/comp/services.scss";
import {
  GrDocumentText,
  GrSettingsOption,
  GrTechnology,
  GrUser,
} from "react-icons/gr";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="my-info">
          <h1>Our Services</h1>
          <p className="lor">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            laboriosam natus animi est quae.
          </p>
        </div>

        <Container
          fluid
          className="d-flex justify-content-center align-items-center"
        >
          <div className="d-flex justify-content-center align-items-center flex-wrap ">
            <div>
              <div className="cardy p-2">
                <MyCard />
                <div className="my-icon">
                  <GrTechnology />
                </div>
              </div>
              <div className="cardy  p-2">
                <MyCard />
                <div className="my-icon">
                  <GrDocumentText />
                </div>
              </div>
            </div>
            <div>
              <div className="cardy  p-2">
                <MyCard />
                <div className="my-icon">
                  <GrUser />
                </div>
              </div>
              <div className="cardy  p-2">
                <MyCard />
                <div className="my-icon">
                  <GrSettingsOption />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Services;
