import React, { Component } from 'react';
import "./../styles/index.scss";
import Logo from "./../images/streamline-solar-logo.png";
//import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="main-page-wrapper">
        <div className="top-page-wrapper">
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
          <section id="streamline-vision">
            <div className="vision-wrapper FlexRowCenter">
              <div className="vision-content">
                <div className="vision-content-text">
                  <h1 className="MidText"> 
                    <em>Streamline Solar Stops</em>
                  </h1>
                  <h2 className="LargerText">
                    <strong>Sustainable Bus Stops For a Renewable World</strong>
                  </h2>
                </div>
                <div className="button-wrapper FlexRowCenter">
                  <div className="button-content">
                    <a href="/" className="Button FlexCenter">Support Us</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="main-body-wrapper">
          <main className="body-content">
            <section className="streamline-main-page">
              <div className="index-page-wrapper">
                <div className="inner-index-wrapper">
                  <div className="seperator-block">
                    <hr className="seperator"></hr>
                  </div>
                  <div className="inner-text-block">
                    <div className="top-inner-text-block JustSomePadding">
                      <h1 className="LargeText">MSU Students Are Giving Back to Their Local Community</h1>
                    </div>
                    <div className="bottom-inner-text-block JustSomePadding">
                      <p className="SmallText">
                        The Streamline Solar Stops team is using the American Institute of Chemical Engineering chapter at Montana State University as a platform to apply student interests to the needs of our local community. Our goal is to design and implement sustainable, solar powered bus stops, which will be capable of providing light and heat during the harsh Montana winters.
                      </p>
                    </div>
                  </div>
                  <div className="seperator-block">
                    <hr className="seperator"></hr>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default Home;