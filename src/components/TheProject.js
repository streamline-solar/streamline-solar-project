import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import "./../styles/index.scss";
import "./../styles/project.scss";
import "./../styles/mobile.scss";
import Logo from "./../images/streamline-solar-logo.png";
import OurStory from "./../images/project-stop.jpeg";
import OurStudents from "./../images/project-our-students.jpeg";
import ProjectBackground from "../images/project-home-image-effects.jpg";
import Header from "./Header";
import Footer from "./Footer";

class Project extends Component {
  render() {
    return (
      <div className="main-page-wrapper">
        
        <Header title="The Project"
                background={ProjectBackground}
        />

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
                    <h3 className="LargeText MobileInnerTextTitle">Streamline Solar Stops</h3>
                    <h2 className="LargeText MobileInnerSubTextTitle">Collaboration is our mission. Sustainability is our goal.</h2>
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
                        <img className="project-body-image" src={OurStory} alt="bus stop pic" />
                      </div>
                    </div>
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
                          <h1>Our Students</h1>
                        </div>
                        <div className="left-text-body">
                          <p className="SmallText">Not only does the Streamline Solar Stops project connect students to the community, but it connects us to each other. We are striving to encourage extensive interdisciplinary cooperation between all corners of the university. Our project is entirely student run; from communication and outreach, to energy technology and design, our students have the skills and drive to do it all. Our team is made up of students from departments all across campus including Engineering, Arts and Architecture, and Business.</p>
                        </div>
                      </div>
                    </div>

                    <div className="image-wrapper">
                      <div className="image-image">
                        <img className="project-body-image" src={OurStudents} alt="students pic" />
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

      <Footer />

      </div>
    );
  }
}

export default Project;