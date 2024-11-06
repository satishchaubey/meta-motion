
"use client";

import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import anime from 'animejs';

const AboutUs = () => {
  const companyRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Animate each section on component mount
    anime({
      targets: companyRef.current,
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutQuad'
    });

    anime({
      targets: missionRef.current,
      translateX: [100, 0],
      opacity: [0, 1],
      delay: 300,
      duration: 1000,
      easing: 'easeOutQuad'
    });

    anime({
      targets: teamRef.current,
      translateY: [50, 0],
      opacity: [0, 1],
      delay: 600,
      duration: 1000,
      easing: 'easeOutQuad'
    });

    anime({
      targets: contactRef.current,
      translateY: [50, 0],
      opacity: [0, 1],
      delay: 900,
      duration: 1000,
      easing: 'easeOutQuad'
    });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About Us</h1>

      {/* Company Overview */}
      <section ref={companyRef} className="mb-5">
        <h2>Our Company</h2>
        <p>
          We are a leading company in [industry], dedicated to providing innovative solutions and exceptional service to our clients.
          Our mission is to transform the way people engage with [product/service field] by delivering top-quality products, driven by cutting-edge technology and customer-centric values.
        </p>
      </section>

      {/* Mission and Values */}
      <section ref={missionRef} className="mb-5">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make a positive impact in the world through our [products/services], supporting sustainable practices and empowering communities.
          We strive to bring the best experience to our customers and foster a work environment that cultivates growth and innovation.
        </p>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="mb-5">
        <h2>Meet Our Team</h2>
        <div className="row">
          {/* Team Member 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center">
              <img src="/images/team1.jpg" className="card-img-top" alt="Team Member 1" />
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text">CEO & Founder</p>
                <p>John has over 20 years of experience in the industry and a passion for leading the company towards success.</p>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center">
              <img src="/images/team2.jpg" className="card-img-top" alt="Team Member 2" />
              <div className="card-body">
                <h5 className="card-title">Jane Smith</h5>
                <p className="card-text">Chief Technology Officer</p>
                <p>Jane is the brains behind our technology, always pushing for innovation and efficiency in every project.</p>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center">
              <img src="/images/team3.jpg" className="card-img-top" alt="Team Member 3" />
              <div className="card-body">
                <h5 className="card-title">Alice Johnson</h5>
                <p className="card-text">Head of Marketing</p>
                <p>Alice is our marketing genius, bringing fresh ideas and driving brand growth with a customer-focused approach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section ref={contactRef} className="mb-5">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! For any inquiries, please reach out to us:</p>
        <ul className="list-unstyled">
          <li><strong>Email:</strong> info@ourcompany.com</li>
          <li><strong>Phone:</strong> +1 (123) 456-7890</li>
          <li><strong>Address:</strong> 1234 Market Street, Suite 100, City, State, ZIP</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
