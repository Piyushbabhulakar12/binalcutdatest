import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import img1 from '../Assets/Image/slider/img1.png';
import img2 from '../Assets/Image/slider/img2.png';
import img3 from '../Assets/Image/slider/img3.png';
import img4 from '../Assets/Image/slider/img4.png';
import img5 from '../Assets/Image/slider/img5.png';
import img6 from '../Assets/Image/slider/img6.png';
import img7 from '../Assets/Image/slider/img7.png';
import img8 from '../Assets/Image/slider/img8.png';
import img9 from '../Assets/Image/slider/img9.png';
import video1 from '../Assets/Video/Payal & Sumeet Teaser .mp4';
import video2 from '../Assets/Video/Vinita & Rohan Teaser Final .mp4';
import video3 from '../Assets/Video/One Life .mp4';
import video4 from '../Assets/Video/R R Lakshya Cup 2022 .mp4';

class SliderModern extends Component {
  state = {
    goToSlide: 1,
    offsetRadius: 10,
    showNavigation: true,
    enableSwipe: true,
    config: config.slow,
    showModal: false,
    modalContent: null,
    autoScrollInterval: 9000,
  };

  slides = [
    {
      key: 1,
      content: (
        <img
          src={img1}
          alt="demo"
          onClick={() => this.openModal(<video src={video1} width="100%" height="600" autoPlay={"autoplay"}  loop />)}
        />
      ),
    },
    {
      key: 2,
      content: (
        <img
          src={img2}
          alt="demo"
          onClick={() => this.openModal(<video src={video2} width="100%" height="600" autoPlay={"autoplay"}  loop />)}
        />)
      } ,
    
         {
      key: 3,
      content: (
        <img
          src={img3}
          alt="demo"
          onClick={() => this.openModal(<video src={video3} width="100%" height="600" autoPlay={"autoplay"}  loop />)}
        />)
      },
      {
        key: 4,
        content: (
          <img
            src={img4}
            alt="demo"
            onClick={() => this.openModal(<video src={video4} width="100%" height="600" autoPlay={"autoplay"}  loop />)}
          />)
        },
        {
          key: 5,
          content: (
            <img
              src={img5}
              alt="demo"
              onClick={() => this.openModal(<video src={video1} width="100%" height="600" autoPlay={"autoplay"}  loop />)}
            />)
          },
          {
            key: 6,
            content: (
              <img
                src={img6}
                alt="demo"
                onClick={() => this.openModal(<video src={video1} width="100%" height="600" autoPlay={"autoplay"}  loop />)}
              />)
            },
            {
              key: 7,
              content: (
                <img
                  src={img7}
                  alt="demo"
                  onClick={() => this.openModal(<video src={video1} width="100%" height="600" autoPlay={"autoplay"}  loop />)}
                />)
              },
              {
                key: 8,
                content: (
                  <img
                    src={img8}
                    alt="demo"
                    onClick={() => this.openModal(<video src={video1} width="100%" height="600" autoPlay={"autoplay"}  loop />)}
                  />)
                },
                {
                  key: 9,
                  content: (
                    <img
                      src={img9}
                      alt="demo"
                      onClick={() => this.openModal(<video src={video1} width="100%" height="600" autoPlay={"autoplay"}  loop />)}
                    />)
                  } 
  ];

  openModal = (content) => {
    this.setState({
      showModal: true,
      modalContent: content,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      modalContent: null,
    });
  };

  // ... rest of your component code ...

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    this.startAutoScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    this.stopAutoScroll();
  }

  startAutoScroll = () => {
    this.autoScrollTimer = setInterval(() => {
      const nextSlideIndex = (this.state.goToSlide % this.slides.length) + 1;
      this.setState({ goToSlide: nextSlideIndex });
    }, this.state.autoScrollInterval);
  };

  stopAutoScroll = () => {
    clearInterval(this.autoScrollTimer);
  };

  render() {
    return (
      <div>
        <div
          style={{ width: "50%", height: "500px", margin: "0 auto", marginTop: '100px' }}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
        >
          <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
          />
        </div>


       

        {this.state.showModal && (
          <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: "block" }}>
            <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                <button type="button" class="btn-close" onClick={this.closeModal} data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  {this.state.modalContent}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SliderModern;
