import React from 'react';
import "../styles/mobile.scss";
import { Link } from "react-router-dom";

const toolbar = props => (
  <div className="full-mobile-menu-wrapper">
    <nav className="mobile-menu-nav">
      <div></div>
      <div className="mobile-menu-wrapper">
        <ul className="mobile-menu-content">
          <li className="mobile-menu-item">
            <Link to="/" className="menu-item">Home</Link>
          </li>
          <li className="mobile-menu-item">
            <Link to="/the-project" className="menu-item">The Project</Link>
          </li>
          <li className="mobile-menu-item">
            <Link to="/our-progress" className="menu-item">Our Progress</Link>
          </li>
          <li className="mobile-menu-item">
            <Link to="/our-partners" className="menu-item">Our Partners</Link>
          </li>
          <li className="mobile-menu-item">
            <Link to="/photos" className="menu-item">Photos</Link>
          </li>
          <li className="mobile-menu-item">
            <Link to="/contact-us" className="menu-item">Contact Us</Link>
          </li>
          <li className="mobile-menu-item">
            <Link to="/support-us" className="menu-item">Support Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default toolbar;