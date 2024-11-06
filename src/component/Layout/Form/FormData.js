// ContactForm.js
"use client";

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './form.module.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    number: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'YOUR_SERVICE_ID',          // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',          // Replace with your EmailJS template ID
        formData,
        'YOUR_USER_ID'               // Replace with your EmailJS user ID
      )
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        alert('Failed to send message.');
      });

    setFormData({ email: '', message: '', number: '' }); // Reset form after submission
  };

  return (
    <div className="container mt-5 ">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
