"use client";

import React from "react";
// import "./Card.css";
import anime from "animejs";
import { useEffect } from "react";
import data from './data.json'
import Link from "next/link";
import Image from "next/image";

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
          <Image src={item.img} alt="" width={200} height={150} />
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <Link
            href={item.link}
            className="btn"
            onClick={() => readMore(item.title, item.content)}
          >
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ServicesPage;
