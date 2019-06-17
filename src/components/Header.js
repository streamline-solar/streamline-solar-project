import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Logo from "./../images/streamline-solar-logo.png";
//import MobileMenu from "./MobileMenu";
import "./../styles/mobile.scss";
import SideDrawer from './SideDrawer/SideDrawer';
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";

class Header extends Component {

  drawerToggleClickHandler = () => {
    
  }

  constructor(props) {
    super(props);

    this.state = {
      HeaderTitle: props.title,
      BackgroundImg: props.background,
    };

  }

  render() {
    return(
      <Fade>
      <div className="top-page-wrapper">
      
        <div className="top-page-background" style={{backgroundImage: `url(${this.state.BackgroundImg})`}}>
          <header className="header-wrapper">
            <div className="header-content FlexColCenter">
              <div className="logo-wrapper">
                <a href="/" className="header-logo">
                  <img id="actual-logo-image" src={Logo} alt="Streamline Logo" />
                </a>
              </div>
              <div className="navigation-wrapper">
                <div className="mobile-hamburger-menu">
                  <DrawerToggleButton />
                </div>
                <SideDrawer />
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
                  <h2 className="LargerText">
                    <strong>{this.state.HeaderTitle}</strong>
                  </h2>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      </Fade>
    );
  }
}

export default Header;