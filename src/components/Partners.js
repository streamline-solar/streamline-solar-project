import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import "./../styles/index.scss";
import "./../styles/partners.scss";
import Logo from "./../images/streamline-solar-logo.png";
import AlChEBanner from "./../images/AlChE-smaller-banner.png";
import MSULogo from "./../images/msu-logo.jpg";
import StreamlineLogo from "./../images/streamline-logo.png";
import HRDCLogo from "./../images/HRDC-logo.jpg";

class Partners extends Component {

  render() {
    return (
      <div className="main-page-wrapper">
      
      <Fade>
      <div className="partners-top-page-wrapper">
        <div className="partners-top-page-background">
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
                    <strong>Our Partners</strong>
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
          <div className="body-title-wrapper">
            <div className="body-title">
              <h2>
                Our partners allow this project to become a reality. Because of their generosity and collaboration, Montana State Unviersity students can make a positive impact on their community.
              </h2>
            </div>
          </div>
          <section className="partners-wrapper">

            <div className="seperator-block">
              <hr className="seperator"></hr>
            </div>

            <div className="partners-title-wrapper">
              <div className="partners-title">
                <h3>Partners</h3>
              </div>
            </div>

            <div className="seperator-block">
              <hr className="seperator"></hr>
            </div>

            <div className="partners-content">
              <div className="partners-content-column">

                <div className="partners-content-row">
                  <div className="partner-image-wrapper">
                    <div className="partners-image-content">
                      <img className="partners-image" src={AlChEBanner}></img>
                    </div>
                  </div>
                  <div className="partners-info-wrapper">
                    <div className="partners-info-content">
                      <p>
                        “The American Institute of Chemical Engineers is a world wide professional organization that facilitates the sharing of research, student competitions, varied conferences, global networking, and other learning opportunities.”
                      </p>
                      <p className="partner-sig">-AlChE</p>
                    </div>
                  </div>
                </div>

                <div className="partners-content-row">
                  <div className="partner-image-wrapper">
                    <div className="partners-image-content">
                      <img className="partners-image" src={MSULogo}></img>
                    </div>
                  </div>
                  <div className="partners-info-wrapper">
                    <div className="partners-info-content">
                      <p>
                        “Montana State University is as remarkable as its setting. Created as a land-grant institution, it is a welcoming, adventurous community of students, faculty and staff distinguished by its commitment to address the world's greatest challenges. The university energizes individuals to discover and pursue their aspirations.”
                      </p>
                      <p className="partner-sig">-Montana State University</p>
                    </div>
                  </div>
                </div>

                <div className="partners-content-row">
                  <div className="partner-image-wrapper">
                    <div className="partners-image-content">
                      <img className="partners-image" src={StreamlineLogo}></img>
                    </div>
                  </div>
                  <div className="partners-info-wrapper">
                    <div className="partners-info-content">
                      <p>
                      “Streamline offers fare-free service throughout the Bozeman area to fulfill everyone’s transportation needs. Our routes provide service to and from Bozeman, Belgrade, Four Corners, Livingston and seasonal routes to Bridger Bowl.”
                      </p>
                      <p className="partner-sig">-Streamline</p>
                    </div>
                  </div>
                </div>

                <div className="partners-content-row">
                  <div className="partner-image-wrapper">
                    <div className="partners-image-content">
                      <img className="partners-image" src={HRDCLogo}></img>
                    </div>
                  </div>
                  <div className="partners-info-wrapper">
                    <div className="partners-info-content">
                      <p>
                        “HRDC is a 501(c)3 non-profit Community Action Agency dedicated to building a better community through innovation and leadership. We provide programs and services in the areas of Housing, Food & Nutrition, Child & Youth Development, Senior Empowerment, Community Transportation, Home Heating–Energy–Safety, and Community Development.”
                      </p>
                      <p className="partner-sig">-HRDC</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="seperator-block">
              <hr className="seperator"></hr>
            </div>

          </section>
        </main>
      </div>

      <footer className="Footer">
        <div className="inner-footer FlexCenter">
          <div className="promotional-content-wrapper">
            <div className="promotional-content">
            
            </div>
          </div>
          <div className="my-shameless-promo-wrapper">
            <div className="my-shameless-promo">
              <h6>Created By: Jesse Dahl</h6>
            </div>
          </div>
        </div>
      </footer>

      </div>
    );
  }
}

export default Partners;