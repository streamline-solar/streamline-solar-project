import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-bootstrap/Carousel';
import Logo from "./../images/streamline-solar-logo.png";
import "./../styles/index.scss";
import "./../styles/photos.scss";

class Photos extends Component {

  render() {
    return (
      <div className="main-page-wrapper">
        <Fade>
        <div className="photos-top-page-wrapper">
          <div className="photos-top-page-background">
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
                      <a href="/the-project" className="header-nav-item">The Project</a>
                      <a href="/our-progress" className="header-nav-item">Our Progress</a>
                      <a href="/our-partners" className="header-nav-item">Our Partners</a>
                      <a href="/photos" className="header-nav-item">Photos</a>
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
                    <h2 className="LargerText">
                      <strong>Photos</strong>
                    </h2>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        </Fade>

        <div className="main-body-wrapper">
          <main className="body-content">
            
          </main>
        </div>

      </div>
    );
  }
}

export default Photos;