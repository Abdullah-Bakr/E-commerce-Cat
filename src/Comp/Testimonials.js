import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../scss/comp/testimonials.scss";

const Testimonials = () => {
  const data = [
    {
      id: 111,
      name: "Adam",
      photo: "images/pexels-ali-pazani-2787341.jpg",
      des: "high rated for that high quality products and speed delvery",
    },
    {
      id: 112,
      name: "Adam",
      photo: "images/pexels-joellen-moths-3372787.jpg",
      des: "high rated for that high quality products and speed delvery",
    },
    {
      id: 113,
      name: "Adam",
      photo: "images/pexels-luizclas-1848471.jpg",
      des: "high rated for that high quality products and speed delvery",
    },
    {
      id: 114,
      name: "Adam",
      photo: "images/pexels-tomaz-barcellos-1987301.jpg",
      des: "high rated for that high quality products and speed delvery",
    },
    {
      id: 115,
      name: "Adam",
      photo: "images/pexels-spencer-selover-775358.jpg",
      des: "high rated for that high quality products and speed delvery",
    },
    {
      id: 116,
      name: "Adam",
      photo: "images/pexels-chloe-1043473.jpg",
      des: "high rated for that high quality products and speed delvery",
    },
    {
      id: 117,
      name: "Adam",
      photo: "images/pexels-taryn-elliott-3889819.jpg",
      des: "high rated for that high quality products and speed delvery",
    },
    {
      id: 118,
      name: "Adam",
      photo: "images/pexels-juliana-stein-1898555.jpg",
      des: "high rated for that high quality products and speed delvery",
    },
  ];

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="testimonials">
      <div className="container">
        <h1>testimonials</h1>
        <motion.div ref={carousel} className="carousel">
          <motion.div
            className="inner-carousel"
            drag="x"
            dragConstraints={{ right: "0", left: -width }}
          >
            {data.map((test) => {
              return (
                <div key={test.id} className="test-card">
                  <img src={test.photo} alt="" />
                  <h3>{test.name}</h3>
                  <p>{test.des}</p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
