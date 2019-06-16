import React, { Component } from 'react';
import Insta from "./../images/svg-icons/instagram-white.svg";
import Email from "./../images/svg-icons/envelope-white.svg";
import "./../styles/footer.scss";

class Footer extends Component {

  render() {
    return(
      <footer className="Footer">
        <div className="inner-footer FlexCenter">
          <div className="promo-content-wrapper">
            <div className="promo-content">

              <div className="instagram-promo-wrapper">
                <div className="inner-promo-wrapper">
                  <a className="promo-image-wrapper" href="https://www.instagram.com/streamlinesolarstops/" target="_blank" rel="noopener noreferrer">
                    <img className="promo-image" src={Insta} alt="instagram" />
                  </a>
                </div>
              </div>

              <div className="email-promo-wrapper">
                <div className="inner-promo-wrapper">
                  <a className="promo-image-wrapper" href="mailto:streamline.solar.stops@gmail.com">
                    <img className="promo-image" src={Email} alt="email icon" />
                  </a>
                </div>
              </div>

            </div>
          </div>
          <div className="my-shameless-promo-wrapper">
            <div className="my-shameless-promo">
              <h6>Created By: </h6>
              <a href="https://www.jesse-dahl.com" target="_blank" rel="noopener noreferrer">Jesse Dahl</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;