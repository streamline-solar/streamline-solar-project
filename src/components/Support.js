import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import Logo from "./../images/streamline-solar-logo.png";
import Footer from "./Footer";
import Header from "./Header";
import "./../styles/index.scss";
import "./../styles/support.scss";
import SupportBackground from "../images/support-home-edited.jpg";

class Support extends Component {
  render() {
    return( 
      <div className="main-page-wrapper">
      
        <Header title="Support Us"
                background={SupportBackground}
        />

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
              
                  <div className="donate-block-wrapper block-wrapper">
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

                      <div className="support-button-wrapper">
                        <div className="button-wrapper FlexRowCenter">
                          <div className="support-button-content">
                            <Link to="/contact-us" className="SupportButton ImageButton FlexCenter">Contact Us</Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div> 

                  <div className="block-seperator-wrap">
                    <div className="block-seperator">
                      <div className="block-inner-seperator"></div>
                    </div>
                  </div>

                  <div className="news-block-wrapper block-wrapper">
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

              </div>
            </section>

          </main>
        </div>

        <Footer />

      </div>
    );
  }
}

export default Support;