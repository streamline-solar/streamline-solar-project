import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import "./../styles/index.scss";
import "./../styles/mobile.scss";
import Logo from "./../images/streamline-solar-logo.png";
import ProjectImage from "./../images/home-project-image-effects.jpg";
import ProgressImage from "./../images/home-progress-image-effects.jpg";
import PartnerImage from "./../images/home-partners-image-effects.jpg";
import ContactImage from "./../images/home-contact-us-image-effects.jpg";
import PhotosImage from "./../images/home-images-image-effects.jpg";
import AlChEBanner from "./../images/AIChEBanner.png";
//import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="main-page-wrapper">
        <Fade duration='2000'>
        <div className="home-top-page-wrapper">
          <div className="home-top-page-background">
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
        </div>
        </Fade>

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
                        The Streamline Solar Stops team is using the American Institute of Chemical Engineering chapter at Montana State University as a platform to apply student interests to the needs of our local community. Our goal is to design and implement sustainable, solar powered bus stops, which will be capable of providing light and heat during the harsh Montana winters
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
                        <img className="QuickLinkImage" id="project-link-image" src={ProjectImage} alt="pic of a classroom"></img>
                        <div className="image-text-block">
                          <div className="image-text-title">
                            <h2 className="ImageTitle">The Project</h2>
                          </div>
                          <div className="image-text-description">
                            <p className="ImageBody">Wondering what we're all about? Find out more about our story, goals, and student involvement.</p>
                          </div>
                          <div className="button-wrapper FlexRowCenter">
                            <div className="button-content">
                              <a href="/the-project" className="Button ImageButton FlexCenter">Learn More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  <div className="single-image-wrapper AlignRight JustSomePadding">
                    <div className="image-content-wrapper FlexCenter">
                      <img className="QuickLinkImage" id="project-link-image" src={ProgressImage} alt="bus"></img>
                      <div className="image-text-block">
                        <div className="image-text-title">
                          <h2 className="ImageTitle">Our Progress</h2>
                        </div>
                        <div className="image-text-description">
                          <p className="ImageBody">Curious about where we are in the process and what we are working on now? Stay up to date!</p>
                        </div>
                        <div className="button-wrapper FlexRowCenter">
                          <div className="button-content">
                            <a href="/our-progress" className="Button ImageButton FlexCenter">Explore</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-image-wrapper AlignLeft JustSomePadding">
                    <div className="image-content-wrapper FlexCenter">
                      <img className="QuickLinkImage" id="project-link-image" src={PartnerImage} alt="random kids in the great outdoors"></img>
                      <div className="image-text-block">
                        <div className="image-text-title">
                          <h2 className="ImageTitle">Our Partners</h2>
                        </div>
                        <div className="image-text-description">
                          <p className="ImageBody">Excited about the project? See who has contributed to our efforts and consider joining them!</p>
                        </div>
                        <div className="button-wrapper FlexRowCenter">
                          <div className="button-content">
                            <a href="/our-partners" className="Button ImageButton FlexCenter">Find Out How</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-image-wrapper AlignRight JustSomePadding">
                    <div className="image-content-wrapper FlexCenter">
                      <img className="QuickLinkImage" id="project-link-image" src={PhotosImage} alt="Streamline Solar Stops at Sustainabilibash"></img>
                      <div className="image-text-block">
                        <div className="image-text-title">
                          <h2 className="ImageTitle">Photos</h2>
                        </div>
                        <div className="image-text-description">
                          <p className="ImageBody">Want to see our team in action? Check out our pictures!</p>
                        </div>
                        <div className="button-wrapper FlexRowCenter">
                          <div className="button-content">
                            <a href="/photos" className="Button ImageButton FlexCenter">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-image-wrapper AlignLeft JustSomePadding">
                    <div className="image-content-wrapper FlexCenter">
                      <img className="QuickLinkImage" id="project-link-image" src={ContactImage} alt="more random kids"></img>
                      <div className="image-text-block">
                        <div className="image-text-title">
                          <h2 className="ImageTitle">Contact Us</h2>
                        </div>
                        <div className="image-text-description">
                          <p className="ImageBody">Have questions, comments, or concerns? Want to know more ways that you can get involved? Contact us!</p>
                        </div>
                        <div className="button-wrapper FlexRowCenter">
                          <div className="button-content">
                            <a href="/contact-us" className="Button ImageButton FlexCenter">Contact</a>
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

            <div className="seperator-block">
              <hr className="seperator"></hr>
            </div>

            <section className="ALCHE-section">
              <div className="alche-content-wrapper">
                <div className="inner-alche-content">
                  <div className="alche-logo-wrapper JustSomePadding FlexCenter">
                    <div className="alche-banner">
                      <img className="alche-logo-banner" src={AlChEBanner} alt="AlChE Banner"></img>
                    </div>
                  </div>
                  <div className="alche-text-wrapper JustSomePadding">
                    <div className="alche-text-content AlignTextCenter">
                      <p className="alche-text">
                      “The American Institute of Chemical Engineers is a world wide professional organization that facilitates the sharing of research, student competitions, varied conferences, global networking, and other learning opportunities.” 
                      </p>
                      <p className="alche-text">
                        -AIChE
                      </p>
                      <p className="alche-text">
                      Our chapter, at Montana State University, focuses on working with our community to spread information about STEM professions and the possibilities of chemical engineering.
                      </p>
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

export default Home;