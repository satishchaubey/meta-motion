"use client";

import React from "react";
// import "./Card.css";
import anime from "animejs";
import { useEffect } from "react";
import data from './data.json'

const ServicesPage = () => {
  function readMore(a, b) {
    let message = `${a} - ${b}`;
    alert(message);
  }

  let cardAnimation = () => {
    anime({
      targets: ".Card",
      translateX: [-2000, 0],
      direction: "normal",
      easing: "linear",
      delay: 500,
      opacity: [0, 1]
    });
  };

  useEffect(() => {
    cardAnimation();
  });

  return (
    <div className="Card">
      {data.map((item, index) => (
        <div className="box" key={index}>
          <img src={item.img} alt="" />
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <a
            href={item.link}
            className="btn"
            onClick={() => readMore(item.title, item.content)}
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default ServicesPage;
