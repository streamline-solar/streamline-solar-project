import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "./../styles/index.scss";
import "./../styles/partners.scss";
import AlChEBanner from "./../images/AlChE-smaller-banner.png";
import MSULogo from "./../images/msu-logo.jpg";
import StreamlineLogo from "./../images/streamline-logo.png";
import HRDCLogo from "./../images/HRDC-logo.jpg";
import PartnerBackground from "../images/partners-home-image-effects.jpg";

const PartnerInfo = (props) => {
  return(
    <div className="partners-content-row">
      <div className="partner-image-wrapper">
        <div className="partners-image-content">
          <img className="partners-image" src={props.image} alt="AlChE Banner"></img>
        </div>
      </div>
      <div className="partners-info-wrapper">
        <div className="partners-info-content">
          <p>
            {props.body}
          </p>
          <p className="partner-sig">{props.sig}</p>
        </div>
      </div>
    </div>
  );
}

class Partners extends Component {

  render() {
    return (
      <div className="main-page-wrapper">
      
        <Header title="Our Partners"
                background={PartnerBackground}
        />

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

                <PartnerInfo 
                  image={AlChEBanner} 
                  body='The American Institute of Chemical Engineers is a world wide professional organization that facilitates the sharing of research, student competitions, varied conferences, global networking, and other learning opportunities.' 
                  sig='ALCHe' 
                />

                <PartnerInfo
                  image={MSULogo}
                  body='Montana State University is as remarkable as its setting. Created as a land-grant institution, it is a welcoming, adventurous community of students, faculty and staff distinguished by its commitment to address the worlds greatest challenges. The university energizes individuals to discover and pursue their aspirations.'
                  sig='-Montana State University'
                />

                <PartnerInfo
                  image={StreamlineLogo}
                  body='Streamline offers fare-free service throughout the Bozeman area to fulfill everyone’s transportation needs. Our routes provide service to and from Bozeman, Belgrade, Four Corners, Livingston and seasonal routes to Bridger Bowl.'
                  sig='-Streamline'
                />

                <PartnerInfo
                  image={HRDCLogo}
                  body='HRDC is a 501(c)3 non-profit Community Action Agency dedicated to building a better community through innovation and leadership. We provide programs and services in the areas of Housing, Food & Nutrition, Child & Youth Development, Senior Empowerment, Community Transportation, Home Heating–Energy–Safety, and Community Development.'
                  sig='-HRDC'
                />


              </div>
            </div>

            <div className="seperator-block">
              <hr className="seperator"></hr>
            </div>

          </section>
        </main>
      </div>

      <Footer />

      </div>
    );
  }
}

export default Partners;