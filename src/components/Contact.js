import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "./../styles/index.scss";
import "./../styles/contact.scss";
import ContactBackground from "../images/contact-home-img-edited-min.jpg";


class Contact extends Component {

  render() {
    return(
      <div className="main-page-wrapper">

        <Header title="Contact Us"
                background={ContactBackground}
        />

        <div className="main-body-wrapper">
          <main className="body-content">

            <div className="contact-info-wrapper">
              <div className="contact-info-content">

                <div className="contact-info-title-wrapper">
                  <div className="contact-info-title">
                    <h3>Streamline Solar Stops</h3>
                  </div>
                  <div className="contact-info-subtitle">
                    <h4><em>AlChE at Montana State University</em></h4>
                  </div>
                </div>
                <div className="contact-actual-info-wrapper">
                  <div className="contact-info-email">
                    <h4><strong>Email:  </strong></h4>
                    <a href="mailto: streamline.solar.stops@gmail.com">streamline.solar.stops@gmail.com</a>
                  </div>
                  <div className="contact-info-instagram">
                    <h4><strong>Instagram:  </strong></h4>
                    <a href="https://www.instagram.com/streamlinesolarstops/?hl=en" target="_blank" rel="noopener noreferrer">Streamline Solar Stops</a>
                  </div>
                  <div className="contact-info-other-information">
                    <p>Please email with questions, comments, or concerns and we will get back to you as soon as possible</p>
                    <p><em>For specific or urgent inquiries about events, participants, or donations, please contact the appropriate team members in addition to the general project email</em></p>
                  </div>
                </div>

              </div>
            </div>

            <div className="seperator-block">
              <hr className="seperator"></hr>
            </div>

            <div className="specific-contact-wrapper">
              <div className="specific-contact-info">

                <div className="project-column-wrapper">
                  <div className="project-lead-column">
                    <div className="project-lead-title">
                      <h3>Project Lead:</h3>
                    </div>
                    <div className="person-contact-info-wrapper">
                      <h4 className="person-text">Graham Hughes</h4>
                      <div className="person-contact-info">
                        <a href="mailto: robertgrahamhughes94@gmail.com">robertgrahamhughes94@gmail.com</a>
                        <a href="tel:+972-955-1227">(972) 955-1227</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-column-wrapper">
                  <div className="project-lead-column">
                    <div className="project-lead-title">
                      <h3>Communications & Outreach:</h3>
                    </div>
                    <div className="person-contact-info-wrapper">
                      <h3 className="person-text">Kelcey Sterling</h3>
                      <div className="person-contact-info">
                        <a href="mailto: kdawnsterling@gmail.com">kdawnsterling@gmail.com</a>
                        <a href="tel:+208-392-7211">(208) 392-7211</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-column-wrapper">
                  <div className="project-lead-column">
                    <div className="project-lead-title">
                      <h3>Faculty Advisor:</h3>
                    </div>
                    <div className="person-contact-info-wrapper">
                      <h4 className="person-text">Joseph Menicucci</h4>
                      <div className="person-contact-info">
                        <a href="mailto: joseph.menicucci@montana.edu">joseph.menicucci@montana.edu</a>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>

          </main>
        </div>

        <Footer />

      </div>
    );
  }
}

export default Contact;