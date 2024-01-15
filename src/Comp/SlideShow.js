// App.js
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import allInfo from "./info";
import "../scss/comp/slide.scss";

const Slideshow = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="slide">
      <div className="container">
        <h1>our products</h1>
        <motion.div ref={carousel} className="carousel">
          <motion.div
            className="inner-carousel"
            drag="x"
            dragConstraints={{ right: "0", left: -width }}
          >
            {allInfo.map((test) => {
              return (
                <div key={test.id} className="test-card">
                  <img src={`${process.env.PUBLIC_URL}/${test.image}`} alt="" />
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slideshow;
