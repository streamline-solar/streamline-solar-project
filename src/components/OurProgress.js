import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import "./../styles/index.scss";
import "./../styles/progress.scss";
import Logo from "./../images/streamline-solar-logo.png";
import Footer from "./Footer";
import UniversitySupport from "./../images/progress-support.jpeg";
import StudentInvolvement from "./../images/progress-student.jpeg";
import Sustainabilibash from "./../images/sustainabilibash.jpg";
import ClimateConference from "./../images/climate-conference.png";

class Progress extends Component {
  render() {
    return (
      <div className="main-page-wrapper">
        <Fade>
        <div className="progress-top-page-wrapper">
          <div className="progress-top-page-background">
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
                      <strong>Our Progress</strong>
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
            <section className="streamline-main-page">
              <div className="index-page-wrapper">
                <div className="inner-index-wrapper">

                  <div className="inner-text-block">
                    <div className="top-inner-text-block JustSomePadding">
                      <h2 className="LargeText MobileInnerTextTitle">Stay up to date on the advancements of the Streamline Solar Stops project!</h2>
                    </div>
                    <div className="bottom-inner-text-block JustSomePadding">
                      <p className="SmallText">Sign up for our newsletter to get updates sent directly to you! You can find the form at the end of this page.</p>
                    </div>
                  </div>

                  <div className="seperator-block">
                    <hr className="seperator"></hr>
                  </div>

                  <div className="body-element-wrapper InlineBlock">
                    <div className="body-element-content FlexColCenter">
                      <div className="left-text-wrapper">
                        <div className="left-text-content">
                          <div className="left-text-title">
                            <h1>University Support</h1>
                          </div>
                          <div className="left-text-body">
                            <p className="SmallText">
                              We have received support and are seeking counsel from a number of department heads and faculty members around campus. Montana State University is aware and excited about the Streamline Solar Stops project!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="image-wrapper">
                        <div className="image-image">
                          <img className="progress-body-image" src={UniversitySupport} alt="mountains?" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="body-element-wrapper InlineBlock">
                    <div className="body-element-content FlexColCenter">
                      <div className="left-text-wrapper">
                        <div className="left-text-content">
                          <div className="left-text-title">
                            <h1>Student Involvement</h1>
                          </div>
                          <div className="left-text-body">
                            <p className="SmallText">
                             Thanks to extensive student outreach and cooperation between many of the departments on cmapus, we have been able to actively include several different Montana State Unviersity disciplines. This adds invaluable diversity which will increase the quality and outcome of the Streamline Solar Stops proejct.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="image-wrapper">
                        <div className="image-image">
                          <img className="progress-body-image" src={StudentInvolvement} alt="random person" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="seperator-block">
                    <hr className="seperator"></hr>
                  </div>

                  <section className="streamline-solar-events">
                    <div className="main-events-wrapper InlineBlock">
                      <div className="section-header">
                        <h1 className="events-header">Events</h1>
                      </div>

                      <div className="main-events-content FlexColCenter">
                        <div className="left-text-wrapper">
                          <div className="left-text-content">
                            <div className="text-title">
                              <h1>Sustainabilibash: 04/18/19</h1>
                            </div>
                            <div className="left-text-body">
                              <p className="SmallText">
                                The Streamline Solar Stops joined other Montana State University organizations in a celebration of Earth Day.
                              </p>
                              <p className="SmallText">
                                A huge thanks to everyone who stopped by and supported us! It was an awesome opportunity to meet more students and people who gained interest in the project. Check out our Instagram or our photos page to see how the event went!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="image-wrapper">
                          <div className="image-image">
                            <img className="progress-body-image" src={Sustainabilibash} alt="msu campus" />
                          </div>
                        </div>
                      </div>

                      <div className="main-events-content FlexColCenter">
                        <div className="left-text-wrapper">
                          <div className="left-text-content">
                            <div className="text-title">
                              <h1>Climate Conference</h1>
                            </div>
                            <div className="left-text-body">
                              <p className="SmallText">
                                The Climate Conference, hosted by the MSU chapter of AlChE, is a yearly, open event designed to unite the Montana community in the fight against our changing climate. The Streamline Solar Stops team joined this year's event to share our project.
                              </p>
                              <p className="SmallText">
                                A huge thanks to all of the members who showed interest in our project and signed up for our newsletter! Check out our Instagram or our photos page to see how the event went.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="image-wrapper">
                          <div className="image-image">
                            <img className="progress-body-image" src={ClimateConference} alt="climate conference" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </section>

                </div>
              </div>
            </section>

          
            <div className="seperator-block">
              <hr className="seperator"></hr>
            </div>

            <div className="full-newsletter-wrapper">
              <div className="newsletter-title-wrapper">
                <div className="newsletter-title-content">
                  <div className="newsletter-title">
                    <h1><strong>Newsletter</strong></h1>
                  </div>
                  <div className="newsletter-subtitle">
                    <p>Sign up for our newsletters to get updates on our progress! We will be sending out a newsletter every 2 to 3 weeks.</p>
                  </div>
                </div>
              </div>

              <section className="newsletter-form-wrapper">
                <div className="newsletter-form-content">
                  <div className="newsletter-inner-form">
                    <form className="actual-form">
                      <div className="inner-form-content">
                        <fieldset className="form-fieldset">
                          <div className="name-title"></div>
                          <legend>Name</legend>
                          <div className="field-first-name">
                            <label className="caption">
                              <input className="field-element" name="fname" type="text" spellcheck="false" maxlength="30" data-title="First" />
                              First Name
                            </label>
                          </div>
                          <div className="field-last-name">
                            <label className="caption">
                              <input className="field-element" name="lname" type="text" spellcheck="false" maxlength="30" data-title="Last" />
                              Last Name
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>

          </main>
        </div>

        <Footer />

      </div>
    );
  }
}

export default Progress;