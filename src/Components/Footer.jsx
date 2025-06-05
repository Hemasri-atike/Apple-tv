// src/components/Footer.jsx
import React from 'react';
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <footer className="apple-footer">
      <div className="footer-links">
        <a href="#">Apple TV+</a>
        <a href="#">Originals</a>
        <a href="#">Watch Now</a>
        <a href="#">Support</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Policy</a>
      </div>
      <p className="footer-text">
        © {new Date().getFullYear()} Apple Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
