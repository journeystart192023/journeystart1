import React from 'react';
import './fstyle.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are an ed tech company who is filling the gap between the industry and students.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: journeystart192023@gmail.com</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">
              {/* <i className="fab fa-facebook"></i> */}
              facebook
            </a>
            <a href="#" className="social-icon">
              {/* <i className="fab fa-twitter"></i> */}
              twitter
            </a>
            <a href="#" className="social-icon">
              {/* <i className="fab fa-instagram"></i> */}
              instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; JourneyStart All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
