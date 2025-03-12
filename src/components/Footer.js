import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="team">Our Team</a></li>
            <li><a href="partners">Partners</a></li>
            <li><a href="/candidates">For Candidates</a></li>
            <li><a href="/employers">For Employers</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Job Categories</h3>
          <ul>
            <li><a href="/telecommunications">Telecommunications</a></li>
            <li><a href="/tourism">Tourism</a></li>
            <li><a href="/construction">Construction</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="financial">Financial Services</a></li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Send us a message.</p>
          <form>
            <input type="email" placeholder="Email Address" required />
            <button type="submit">Subscribe now</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;