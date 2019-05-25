import React, { Component } from 'react';
import "./../styles/index.scss";
import Logo from "./../images/streamline-solar-logo.png";
import ProjectImage from "./../images/home-project-image.jpeg";
import ProgressImage from "./../images/home-progress-image.jpeg";
import PartnerImage from "./../images/home-partners-image.jpg";
import ContactImage from "./../images/home-contact-us-image.jpeg";
import PhotosImage from "./../images/home-images-image.jpg";
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
                <div className="home-link-content-wrapper">
                  <div className="home-link-content">

                    <div className="single-image-wrapper AlignLeft JustSomePadding">
                      <div className="image-content-wrapper FlexCenter">
                        <img className="QuickLinkImage" id="project-link-image" src={ProjectImage} alt="just a random image"></img>
                        <div className="image-text-block">
                          <div className="image-text-title">
                            <h2 className="ImageTitle">The Project</h2>
                          </div>
                          <div className="image-text-description">
                            <p className="ImageBody">Wondering what we're all about? Find out more about our story, goals, and student involvement.</p>
                          </div>
                          <div className="button-wrapper FlexRowCenter">
                            <div className="button-content">
                              <a href="/" className="Button ImageButton FlexCenter">Learn More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  <div className="single-image-wrapper AlignRight JustSomePadding">
                    <div className="image-content-wrapper FlexCenter">
                      <img className="QuickLinkImage" id="project-link-image" src={ProgressImage} alt="just a random image"></img>
                      <div className="image-text-block">
                        <div className="image-text-title">
                          <h2 className="ImageTitle">Our Progress</h2>
                        </div>
                        <div className="image-text-description">
                          <p className="ImageBody">Curious about where we are in the process and what we are working on now? Stay up to date!</p>
                        </div>
                        <div className="button-wrapper FlexRowCenter">
                          <div className="button-content">
                            <a href="/" className="Button ImageButton FlexCenter">Explore</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-image-wrapper AlignLeft JustSomePadding">
                    <div className="image-content-wrapper FlexCenter">
                      <img className="QuickLinkImage" id="project-link-image" src={PartnerImage} alt="just a random image"></img>
                      <div className="image-text-block">
                        <div className="image-text-title">
                          <h2 className="ImageTitle">Our Partners</h2>
                        </div>
                        <div className="image-text-description">
                          <p className="ImageBody">Excited about the project? See who has contributed to our efforts and consider joining them!</p>
                        </div>
                        <div className="button-wrapper FlexRowCenter">
                          <div className="button-content">
                            <a href="/" className="Button ImageButton FlexCenter">Find Out How</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-image-wrapper AlignRight JustSomePadding">
                    <div className="image-content-wrapper FlexCenter">
                      <img className="QuickLinkImage" id="project-link-image" src={PhotosImage} alt="just a random image"></img>
                      <div className="image-text-block">
                        <div className="image-text-title">
                          <h2 className="ImageTitle">Photos</h2>
                        </div>
                        <div className="image-text-description">
                          <p className="ImageBody">Want to see our team in action? Check out our pictures!</p>
                        </div>
                        <div className="button-wrapper FlexRowCenter">
                          <div className="button-content">
                            <a href="/" className="Button ImageButton FlexCenter">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-image-wrapper AlignLeft JustSomePadding">
                    <div className="image-content-wrapper FlexCenter">
                      <img className="QuickLinkImage" id="project-link-image" src={ContactImage} alt="just a random image"></img>
                      <div className="image-text-block">
                        <div className="image-text-title">
                          <h2 className="ImageTitle">Contact Us</h2>
                        </div>
                        <div className="image-text-description">
                          <p className="ImageBody">Have questions, comments, or concerns? Want to know more ways that you can get involved? Contact us!</p>
                        </div>
                        <div className="button-wrapper FlexRowCenter">
                          <div className="button-content">
                            <a href="/" className="Button ImageButton FlexCenter">Contact</a>
                          </div>
                        </div>
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
      </div>
    );
  }
}

export default Home;