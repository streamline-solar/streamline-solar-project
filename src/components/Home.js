import React, { Component } from 'react';
import "./../styles/index.scss";
import Logo from "./../images/streamline-solar-logo.png";
//import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="main-body-wrapper">
        <header className="header-wrapper">
          <div className="header-content FlexColCenter">
            <div className="logo-wrapper">
              <a href="/" className="header-logo">
                <img id="actual-logo-image" src={Logo} alt="Streamline Logo" />
              </a>
            </div>
            <div className="navigation-wrapper">
              <nav className="header-nav">
                <div className="header-nav-content">
                  <a href="/" className="header-nav-item">Home</a>
                  <a href="/" className="header-nav-item">The Project</a>
                  <a href="/" className="header-nav-item">Our Progress</a>
                  <a href="/" className="header-nav-item">Our Partners</a>
                  <a href="/" className="header-nav-item">Photos</a>
                  <a href="/" className="header-nav-item">Contact Us</a>
                  <a href="/" className="header-nav-item">Support Us</a>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;