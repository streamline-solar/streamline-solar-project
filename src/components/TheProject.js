import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import "./../styles/index.scss";
import "./../styles/project.scss";
import Logo from "./../images/streamline-solar-logo.png";
import OurStory from "./../images/project-stop.jpeg";
import OurStudents from "./../images/project-our-students.jpeg";

class Project extends Component {
  render() {
    return (
      <div className="main-page-wrapper">
        <Fade>
        <div className="project-top-page-wrapper">
          <div className="project-top-page-background">
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

                <div className="body-element-wrapper InlineBlock">
                  <div className="body-element-content FlexColCenter">
                    <div className="left-text-wrapper">
                      <div className="left-text-content">
                        <div className="left-text-title">
                          <h1>Our Story</h1>
                        </div>
                        <div className="left-text-body">
                          <p className="SmallText">Students at Montana State University saw a lack of campus engagement in the local community and created the Streamline Solar Stops project as a way to give back.  The Streamline is an incredible service that serves both the students of MSU, and the populations of Bozeman, Belgrade, Livingston, and Four Corners. What better way to give back to our community than to improve a service that is such a cornerstone of the community? With hard work and collaboration, we believe that our student body can make a difference in Bozeman.</p>
                        </div>
                      </div>
                    </div>
                    <div className="image-wrapper">
                      <div className="image-image">
                        <img className="project-body-image" src={OurStory} alt="just an image" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="seperator-block">
                 <hr className="seperator"></hr>
                </div>

                <div className="body-element-wrapper InlineBlock">
                  <div className="body-element-content FlexColCenter">
                    <div className="image-wrapper">
                      <div className="image-image">
                        <img className="project-body-image" src={OurStudents} alt="just an image" />
                       </div>
                    </div>
                    <div className="left-text-wrapper">
                      <div className="left-text-content">
                        <div className="left-text-title">
                          <h1>Our Students</h1>
                        </div>
                        <div className="left-text-body">
                          <p className="SmallText">Not only does the Streamline Solar Stops project connect students to the community, but it connects us to each other. We are striving to encourage extensive interdisciplinary cooperation between all corners of the university. Our project is entirely student run; from communication and outreach, to energy technology and design, our students have the skills and drive to do it all. Our team is made up of students from departments all across campus including Engineering, Arts and Architecture, and Business.</p>
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
              <div className="created-by-wrapper">
                <h6>Created By:</h6>
              </div>
              <div className="promo-link-wrapper">
                <a href="https://www.jesse-dahl.com" target="_blank" id="shameless-promo-link">Jesse Dahl</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      </div>
    );
  }
}

export default Project;