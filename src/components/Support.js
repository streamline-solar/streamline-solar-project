import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import Logo from "./../images/streamline-solar-logo.png";
import "./../styles/index.scss";
import "./../styles/support.scss";

class Support extends Component {
  render() {
    return( 
      <div className="main-page-wrapper">
      
      <Fade>
      <div className="support-top-page-wrapper">
        <div className="support-top-page-background">
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
                    <a href="/contact-us" className="header-nav-item">Contact Us</a>
                    <a href="/support-us" className="header-nav-item">Support Us</a>
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
                    <strong>Support Us</strong>
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
          <div className="support-body-title-wrapper">
            <div className="support-body-title">
              <h2>Find out how you can help us make a difference in the greater Bozeman area!</h2>
            </div>
          </div>

          <div className="seperator-block">
            <hr className="seperator"></hr>
          </div>

          <section className="support-page-wrapper">
            <div className="support-page-content">

              <div className="support-page-text">
            
                <div className="donate-block-wrapper">
                  <div className="donate-block-content">
                    <div className="donate-block-title-wrapper">
                      <div className="donate-block-title block-title">
                        <h3><strong>Donate</strong></h3>
                      </div>
                    </div>
                    <div className="donate-block-body-wrapper">
                      <div className="donate-block-body-content block-body-content">
                        <p>Your donation allows us to connect with more community members, students, and businesses who help facilitate our project and will be the key in the implementation and construction of our Solar Stops. Please reach out to find out how to donate.</p>
                      </div>
                    </div>

                  </div>
                </div> 

                <div className="block-seperator-wrap">
                  <div className="block-seperator">
                    <div className="block-inner-seperator"></div>
                  </div>
                </div>

                <div className="news-block-wrapper">
                  <div className="news-block-content">
                    <div className="news-block-title-wrapper">
                      <div className="news-block-title block-title">
                        <h3><strong>Spread The Word</strong></h3>
                      </div>
                    </div>
                    <div className="news-block-body-wrapper">
                      <div className="news-block-body-content block-body-content">
                        <p>Sign up for our newsletter and tell your friends and family about the Streamline Solar Stops Project! We will be sending out updates via email every 2-3 weeks. Please reach out with any questions.</p>
                      </div>
                    </div>

                  </div>
                </div> 

              </div>

              <div className="buttons-wrapper">
                <div className="buttons-buttons">
                
                  <div className="support-button-wrapper">
                    <div className="button-wrapper FlexRowCenter">
                      <div className="support-button-content">
                        <Link to="/contact-us" className="SupportButton ImageButton FlexCenter">Contact Us</Link>
                      </div>
                    </div>
                  </div>

                  <div className="button-block-seperator-wrap">
                    <div className="button-block-seperator">
                      <div className="block-inner-seperator"></div>
                    </div>
                  </div>

                  <div className="news-button-wrapper">
                    <div className="button-wrapper FlexRowCenter">
                      <div className="support-button-content">
                        <Link to="/our-progress" className="SupportButton ImageButton FlexCenter">Sign Up</Link>
                      </div>
                    </div>
                  </div>

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

export default Support;