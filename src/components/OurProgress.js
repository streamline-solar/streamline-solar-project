import React, { Component } from 'react';
import "./../styles/index.scss";
import "./../styles/progress.scss";
import Header from "./Header";
import Footer from "./Footer";
import UniversitySupport from "./../images/progress-support.jpeg";
import StudentInvolvement from "./../images/progress-student.jpeg";
import Sustainabilibash from "./../images/sustainabilibash.jpg";
import ClimateConference from "./../images/climate-conference.png";
import ProgressBackground from "../images/progress-home-image-effects-min.jpg";

const BodyElement = (props) => {
  return (
    <div className="body-element-wrapper InlineBlock">
      <div className="body-element-content FlexColCenter">
        <div className="left-text-wrapper">
          <div className="left-text-content">
            <div className="left-text-title">
              <h1>{props.title}</h1>
            </div>
            <div className="left-text-body">
              <p className="SmallText">
                {props.body}
              </p>
            </div>
          </div>
        </div>
        <div className="image-wrapper">
          <div className="image-image">
            <img className="progress-body-image" src={props.image} alt="mountains?" />
          </div>
        </div>
      </div>
    </div>
  );
}

const Events = (props) => {
  return (
    <div className="main-events-content FlexColCenter">
      <div className="left-text-wrapper">
        <div className="left-text-content">
          <div className="text-title">
            <h1>{props.title}</h1>
          </div>
          <div className="left-text-body">
            <p className="SmallText">
              {props.body1}
            </p>
            <p className="SmallText">
              {props.body2}
            </p>
          </div>
        </div>
      </div>
      <div className="image-wrapper">
        <div className="image-image">
          <img className="progress-body-image" src={props.image} alt="msu campus" />
        </div>
      </div>
    </div>
  );
}

class Progress extends Component {
  render() {
    return (
      <div className="main-page-wrapper">
        <Header title="Our Progress"
          background={ProgressBackground}
        />

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


                  <BodyElement
                    title='University Support'
                    body='We have received support and are seeking counsel from a number of department heads and faculty members around campus. Montana State University is aware and excited about the Streamline Solar Stops project!'
                    image={UniversitySupport}
                  />

                  <BodyElement
                    title='Student Involvement'
                    body='Thanks to extensive student outreach and cooperation between many of the departments on campus, we have been able to actively include several different Montana State Unviersity disciplines. This adds invaluable diversity which will increase the quality and outcome of the Streamline Solar Stops project.'
                    image={StudentInvolvement}
                  />

                  <div className="seperator-block">
                    <hr className="seperator"></hr>
                  </div>

                  <section className="streamline-solar-events">
                    <div className="main-events-wrapper InlineBlock">
                      <div className="section-header">
                        <h1 className="events-header">Events</h1>
                      </div>

                      <Events
                        title='Sustainabilibash: 04/18/19'
                        body1='The Streamline Solar Stops joined other Montana State University organizations in a celebration of Earth Day.'
                        body2='A huge thanks to everyone who stopped by and supported us! It was an awesome opportunity to meet more students and people who gained interest in the project. Check out our Instagram or our photos page to see how the event went!'
                        image={Sustainabilibash}
                      />

                      <Events
                        title='Climate Conference'
                        body1='The Climate Conference, hosted by the MSU chapter of AlChE, is a yearly, open event designed to unite the Montana community in the fight against our changing climate. The Streamline Solar Stops team joined this years event to share our project.'
                        body2='A huge thanks to all of the members who showed interest in our project and signed up for our newsletter! Check out our Instagram or our photos page to see how the event went.'
                        image={ClimateConference}
                      />

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

                    <strong>In Construction. If you are seeing this right now, then you are here a little early. This portion will be completed soon</strong>
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