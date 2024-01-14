import React from "react";
import "../scss/comp/home.scss";
import Slideshow from "./SlideShow";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="home">
      <div className="">
        <div className="home-top">
          <div className="home-info">
            <h2>Hello Everyone</h2>
            <p>
              "Your one-stop destination for all things cat! Explore our curated
              collection of purr-fect essentials and treats for your whiskered
              companion."
            </p>
          </div>
        </div>

        <div className="testmonials">
          <div>
            <Testimonials />
          </div>
        </div>
        <div className="products">
          <div>
            <Slideshow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
