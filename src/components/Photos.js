import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-bootstrap/Carousel';
import Logo from "./../images/streamline-solar-logo.png";
import Footer from "./Footer";
import Header from "./Header";
import "./../styles/index.scss";
import "./../styles/photos.scss";
import "./../styles/bootstrap.scss";
import PhotoBackground from "../images/photos-home-effects.jpg";


class Photos extends Component {

  render() {
    return (
      <div className="main-page-wrapper">

        <Header title="Photos"
                background={PhotoBackground}
        />

        <div className="main-body-wrapper">
          <main className="body-content">

            <div className="slideshow-row-wrapper">
              <div className="slideshow-row-content">
                <div className="slideshow-title-wrapper">
                  <div className="slideshow-title">
                    <h3>Sustainabilibash</h3>
                  </div>
                  <div className="photo-credz">
                    <p><em>Photos by: </em></p>
                    <a href="https://www.instagram.com/m.dallen" target="_blank" rel="noopener noreferrer"><em>Mike Allen</em></a>
                  </div>
                </div>
                <div className="main-slider-wrapper">
                  <div className="main-slider-content">
                    <Carousel
                    activeIndex={this.index} 
                    direction={this.direction} 
                    onSelect={this.handleSelect}
                    pauseOnHover={false} >
                      <Carousel.Item>
                        <img className="d-block w-100" src={require("./../images/photos/Bash/Bash-1.jpeg")} alt="pic" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" src={require("./../images/photos/Bash/Bash-2.jpeg")} alt="pic" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" src={require("./../images/photos/Bash/Bash-3.jpeg")} alt="pic" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" src={require("./../images/photos/Bash/Bash-4.jpeg")} alt="pic" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" src={require("./../images/photos/Bash/Bash-5.jpg")} alt="pic" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" src={require("./../images/photos/Bash/Bash-6.jpeg")} alt="pic" />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>

            <div className="slideshow-row-wrapper">
              <div className="slideshow-row-content">
                <div className="slideshow-title-wrapper">
                  <div className="slideshow-title">
                    <h3>AlChE Climate Conference</h3>
                  </div>
                  <div className="photo-credz">
                    <p><em>Photos by: </em></p>
                    <a href="https://www.instagram.com/m.dallen" target="_blank" rel="noopener noreferrer"><em>Mike Allen</em></a>
                  </div>
                </div>
                <div className="main-slider-wrapper">
                  <div className="main-slider-content">
                    <Carousel
                    activeIndex={this.index} 
                    direction={this.direction} 
                    onSelect={this.handleSelect}
                    pauseOnHover={false} >
                      <Carousel.Item>
                        <img className="d-block w-100" src={require("./../images/photos/AlChE/AlChE-0.jpeg")} alt="pic" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" src={require("./../images/photos/AlChE/AlChE-1.jpeg")} alt="pic" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" src={require("./../images/photos/AlChE/AlChE-2.jpeg")} alt="pic" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" src={require("./../images/photos/AlChE/AlChE-3.jpeg")} alt="pic" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" src={require("./../images/photos/AlChE/AlChE-4.jpeg")} alt="pic" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" src={require("./../images/photos/AlChE/AlChE-5.jpeg")} alt="pic" />
                      </Carousel.Item>
                      {/* lmao wut is this picture? what are any of these pictures???
                      <Carousel.Item>
                        <img className="d-block w-100" src={require("./../images/photos/AlChE/AlChE-6.jpeg")} alt="pic" />
                      </Carousel.Item>
                      */}
                      <Carousel.Item>
                        <img className="d-block w-100" src={require("./../images/photos/AlChE/AlChE-7.jpeg")} alt="pic" />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>

          </main>
        </div>

        <Footer />

      </div>
    );
  }
}

export default Photos;