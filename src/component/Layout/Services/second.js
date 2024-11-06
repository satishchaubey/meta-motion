// ServicesTwo.js
"use client";

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const ServicesTwo = () => {
  const serviceRefs = useRef([]);

  useEffect(() => {
    // Slide in and fade up animation for each service card
    serviceRefs.current.forEach((ref, index) => {
      anime({
        targets: ref,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: index * 200, // stagger each card
      });
    });
  }, []);

  const services = [
    {
      title: "Wedding Photography",
      description: "Capture every special moment with stunning wedding photography.",
      image: "/images/wedding.jpg",
    },
    {
      title: "Portrait Photography",
      description: "Highlight unique personalities with captivating portraits.",
      image: "/images/portrait.jpg",
    },
    {
      title: "Event Photography",
      description: "Cover every memorable detail of your important events.",
      image: "/images/event.jpg",
    },
    {
      title: "Product Photography",
      description: "Showcase your products with high-quality, eye-catching images.",
      image: "/images/product.jpg",
    },
    {
      title: "Nature Photography",
      description: "Explore the beauty of nature through stunning photography.",
      image: "/images/nature.jpg",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Our Photography Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div
            className="col-md-6 col-lg-4 mb-4"
            key={index}
            ref={(el) => (serviceRefs.current[index] = el)}
          >
            <div className="card h-100 shadow-lg">
              <img src={service.image} className="card-img-top" alt={service.title} />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesTwo;
