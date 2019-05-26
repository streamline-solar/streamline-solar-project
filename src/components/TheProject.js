import React, { Component } from 'react';
import "./../styles/index.scss";
import "./../styles/project.scss";
import Logo from "./../images/streamline-solar-logo.png";

class Project extends Component {
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
                    <a href="/the-project" className="header-nav-item">The Project</a>
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
                  <h2 className="LargerText">
                    <strong>The Project</strong>
                  </h2>
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
                    <h1 className="LargeText">Streamline Solar Stops</h1>
                    <h2 className="LargeText">Collaboration is our mission. Sustainability is our goal.</h2>
                  </div>
                  <div className="bottom-inner-text-block JustSomePadding">
                    <p className="SmallText">
                      Our mission is to create a multidisciplinary team of undergraduate students who will apply their interests and skills in order to give back to the Bozeman community. This project will encourage collaboration between diverse students and bridge the gap between the student body and their local area. Over the course of the next few semesters, this group will design and implement sustainable, solar powered bus stops capable of providing light and electric heat during the harsh Montana winters. The Streamline Solar Stops project will employ the efforts of our students, the participation of the community, the collaboration of businesses, and the charity of donors to provide a better, safer, and more sustainable Bozeman. 
                    </p>
                  </div>
                </div>
                <div className="seperator-block">
                  <hr className="seperator"></hr>
                </div>
              </div>
            </div>
          </section>

          <div className="seperator-block">
            <hr className="seperator"></hr>
          </div>

        </main>
      </div>

      </div>
    );
  }
}

export default Project;