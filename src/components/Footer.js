import React, { Component } from 'react';
import Insta from "./../images/svg-icons/instagram.svg";
import Email from "./../images/svg-icons/envelope.svg";

class Footer extends Component {

  render() {
    return(
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
    );
  }
}

export default Footer;