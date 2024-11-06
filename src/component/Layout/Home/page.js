// LandingPage.js
"use client";

import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import anime from 'animejs';

const LandingPage = () => {
  const heroTextRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Animate Hero Text
    anime({
      targets: heroTextRef.current,
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1500,
      easing: 'easeOutExpo',
    });

    // Sequential Animation for sections
    anime({
      targets: [servicesRef.current, portfolioRef.current, testimonialsRef.current, ctaRef.current],
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1200,
      easing: 'easeOutExpo',
      delay: anime.stagger(300), // delay between each section
    });
  }, []);

  return (
    <div className="container mt-2">
      {/* Hero Section */}
      <section className="text-center py-5 bg-dark text-white" style={{ backgroundImage: 'url(/images/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="overlay"></div>
        <div ref={heroTextRef}>
          <h1 className="display-3 font-weight-bold">Capture Your Moments</h1>
          <p className="lead">Professional photography that tells your story</p>
          <a href="#portfolio" className="btn btn-primary mt-3">View Portfolio</a>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-5" id="services">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h3 className="card-title">Weddings</h3>
                <p className="card-text">Beautiful, romantic photography for your special day.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h3 className="card-title">Portraits</h3>
                <p className="card-text">Capturing unique personalities in every shot.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h3 className="card-title">Events</h3>
                <p className="card-text">Covering every moment of your memorable events.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="py-5 bg-light" id="portfolio">
        <h2 className="text-center mb-5">Portfolio</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <img src="/images/portfolio1.jpg" className="img-fluid rounded" alt="Portfolio 1" />
          </div>
          <div className="col-md-4 mb-4">
            <img src="/images/portfolio2.jpg" className="img-fluid rounded" alt="Portfolio 2" />
          </div>
          <div className="col-md-4 mb-4">
            <img src="/images/portfolio3.jpg" className="img-fluid rounded" alt="Portfolio 3" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-5" id="testimonials">
        <h2 className="text-center mb-5">What Our Clients Say</h2>
        <div className="row">
          <div className="col-md-6">
            <blockquote className="blockquote">
              <p className="mb-0">"Amazing photography that truly captures the essence of our wedding day."</p>
              <footer className="blockquote-footer">Sarah & Mike</footer>
            </blockquote>
          </div>
          <div className="col-md-6">
            <blockquote className="blockquote">
              <p className="mb-0">"The portraits are stunning, we couldn't be happier with the results."</p>
              <footer className="blockquote-footer">Anna & John</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section ref={ctaRef} className="py-5 bg-primary text-white text-center" id="contact">
        <h2>Ready to Book a Session?</h2>
        <p>Contact us to schedule your next photography session and capture beautiful memories.</p>
        <a href="#contact" className="btn btn-light mt-3">Contact Us</a>
      </section>
    </div>
  );
};

export default LandingPage;
