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

class SliderModern extends Component {
  state = {
    goToSlide: 1,
    offsetRadius: 10,
    showNavigation: true,
    enableSwipe: true,
    config: config.slow,  
    showModal: false,
    modalContent: null,
    autoScrollInterval: 12000,
  };

  slides = [
    {
      key: 1,
      content: (
        <img
          src={img1}
          alt="demo"
          onClick={() => this.openModal(<video src="https://rr2---sn-cvhelnls.c.drive.google.com/videoplayback?expire=1699177530&ei=CjpHZb3WNrvLp84Pn_iE0AI&ip=103.120.248.192&id=771337e00a0eb3ac&itag=22&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=v_&mm=32&mn=sn-cvhelnls&ms=su&mv=m&mvi=2&pl=24&ttl=transient&susc=dr&driveid=1MFGxjS0y4rpbr5GlcKhBnSHWZtdOCZVT&app=explorer&eaua=LEwfFUU4H3Y&mime=video/mp4&vprv=1&prv=1&dur=226.208&lmt=1642460701451020&mt=1699166199&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=ANLwegAwRQIgHKcLnhtRwFF_N5RMi6wvEZqmbmeE0r6rfnUgVn598kQCIQCOTGK68uSRLvzp_A07ejoqdckzDkBwXeIzFojYZYDtgA==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AM8Gb2swRAIgKZbOy5OI6Dh9YjbGB01C3VFWboiW5o97jpxLPynePFsCID3ClfhEy6ArTBei7FFVxdwiVxARgp2jewZRHy3iXZ3m&cpn=eE3P0J6NefBcMAps&c=WEB_EMBEDDED_PLAYER&cver=1.20231031.01.00" width="100%" height="600" autoPlay={"autoplay"}  loop />)}
        />
      ),
    },
    {
      key: 2,
      content: (
        <img
          src={img2}
          alt="demo"
          onClick={() => this.openModal(<video src="https://rr2---sn-cvh76nld.c.drive.google.com/videoplayback?expire=1699177673&ei=mTpHZcjII9XFp84P1Oqc4AE&ip=103.120.248.192&id=f8f115ca1373e502&itag=22&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=4m&mm=32&mn=sn-cvh76nld&ms=su&mv=m&mvi=2&pl=24&ttl=transient&susc=dr&driveid=1lvfF5Fo5h4bKhNoCftmuR8TIXUhEoo_D&app=explorer&eaua=LEwfFUU4H3Y&mime=video/mp4&vprv=1&prv=1&dur=279.545&lmt=1697970317093355&mt=1699166199&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=ANLwegAwRQIgFmYXUeuRxxDYJG5PN856kqaJJa1u0CgRSzLZz4DK0pYCIQDAIcFXFuwb4dPWVPQwRZ3zkjG9yt4dKNo937XCpcSL7g==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AM8Gb2swRgIhAKO4_zvhoV5f-qOCxVrZ5Xo4EQuUjjSzMIj92QuijUgfAiEAqXWdbnrYiaUY7HPp-H447cQMeFcrwlAEJvA6PAABr4A=&cpn=NFfymE5KuvnEUG0U&c=WEB_EMBEDDED_PLAYER&cver=1.20231031.01.00" width="100%" height="600" autoPlay={"autoplay"}  loop />)}
        />)
      } ,
    
         {
      key: 3,
      content: (
        <img
          src={img3}
          alt="demo"
          onClick={() => this.openModal(<video src="https://rr5---sn-cvh76nlz.c.drive.google.com/videoplayback?expire=1699177100&ei=XDhHZY-pCMnLp84PhKWfkAs&ip=103.120.248.192&id=99a17811e49b8d1b&itag=22&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=Xx&mm=32&mn=sn-cvh76nlz&ms=su&mv=m&mvi=5&pl=24&ttl=transient&susc=dr&driveid=1GM7pk1HLqPcf46VSsMRzkAo2QJmohPQM&app=explorer&eaua=LEwfFUU4H3Y&mime=video/mp4&vprv=1&prv=1&dur=61.277&lmt=1691477333436787&mt=1699165963&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=ANLwegAwRgIhAJezkG4C03Rva9fpDfUgmVOszJ4tLpDSY1Ri9XYVDiaOAiEAyqy0DqRIGknGFJwYPPpxdZuUBId3tFYyl9xDciGTtl0=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AM8Gb2swRgIhAN7-Gym9cQaA4FIY5e_rYFnJwdaH16E0B7xyUEvBbAFIAiEAxJFtfSpOj_Zb4-vN0nGAhuCT2cFEW4MiVUSGoSkvuqQ=&cpn=K3pxS6cFo_q3U82h&c=WEB_EMBEDDED_PLAYER&cver=1.20231031.01.00" width="100%" height="600" autoPlay={"autoplay"}  loop />)}
        />)
      },
      {
        key: 4,
        content: (
          <img
            src={img4}
            alt="demo"
            onClick={() => this.openModal(<video src="https://rr1---sn-cvh76nl6.c.drive.google.com/videoplayback?expire=1699177751&ei=5zpHZc2uNbOHp84P7sG1kAo&ip=103.120.248.192&id=a6c175ee33326891&itag=22&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=4l&mm=32&mn=sn-cvh76nl6&ms=su&mv=m&mvi=1&pl=24&ttl=transient&susc=dr&driveid=1f5sHLrAK959StD5XWYjqm9JPMFd0QPId&app=explorer&eaua=LEwfFUU4H3Y&mime=video/mp4&vprv=1&prv=1&dur=123.390&lmt=1697965199635699&mt=1699166199&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=ANLwegAwRQIhAIEBv_Gf8lLodpwxUpFlrO8jK7W0W6qavkTeTBjfAbjkAiBwIT7QMk7M8H-AyssC8kDlNR6gjb31qa3WH15WT11z4Q==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AM8Gb2swRAIge9W2QpFwbHybbSGlpnEVQGJfJBVM6sqWhHaXPjywJ0ACID7NMOtUW9jVGeUfVfPAmI4eTF6Sv8mW6COR4nA2iEYM&cpn=xEPm98bvc_75af0e&c=WEB_EMBEDDED_PLAYER&cver=1.20231031.01.00" width="100%" height="600" autoPlay={"autoplay"}  loop />)}
          />)
        },
        {
          key: 5,
          content: (
            <img
              src={img5}
              alt="demo"
              onClick={() => this.openModal(<video src="https://rr1---sn-cvhelnll.c.drive.google.com/videoplayback?expire=1699178176&ei=kDxHZdjeL43Kp84P5aimsAM&ip=103.120.248.192&id=2773806daf2e2bae&itag=22&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=aD&mm=32&mn=sn-cvhelnll&ms=su&mv=m&mvi=1&pl=24&ttl=transient&susc=dr&driveid=18dwMWTSQ9yPHQiMcWLTBMlMp5YQh3KDU&app=explorer&eaua=LEwfFUU4H3Y&mime=video/mp4&vprv=1&prv=1&dur=1112.259&lmt=1672061885366112&mt=1699166919&subapp=DRIVE_WEB_FILE_VIEWER&txp=0016224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=ANLwegAwRQIhAOdbVF5S90PwAQ9stuwT09JYLIeweb_U4UgMqNytDjKHAiAu5xFJ_vwLkGxpj_PtKO19yvuCKkJeajfHst7SEWm-iw==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AM8Gb2swRQIgcPnbcBYLZAvM8N2exUEDI9Eudw7Omf05hgpKwAPVHZYCIQDzhIRPVlYvColhaG9dcavPk4mIN7GQVQmgoZu189BwsQ==&cpn=xf1wW5LtTJW2fNR1&c=WEB_EMBEDDED_PLAYER&cver=1.20231031.01.00" width="100%" height="600" autoPlay={"autoplay"}  loop />)}
            />)
          },
              {
                key: 8,
                content: (
                  <img
                    src={img8}
                    alt="demo"
                    onClick={() => this.openModal(<video src="https://rr2---sn-cvhelnll.c.drive.google.com/videoplayback?expire=1699179540&ei=5EFHZYfEM8nLp84PhKWfkAs&ip=103.120.248.192&id=e0c0374c9c640a37&itag=22&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=5a&mm=32&mn=sn-cvhelnll&ms=su&mv=m&mvi=2&pl=24&ttl=transient&susc=dr&driveid=1FgvwK6Nc0z9Zxmo4Em5gAVBr3i4C6l3p&app=explorer&eaua=LEwfFUU4H3Y&mime=video/mp4&vprv=1&prv=1&dur=1578.515&lmt=1653697769974654&mt=1699168119&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=ANLwegAwRQIhAPV6tH6nUxZmlnlFtL9pMqCrUh2rb-ZhPWDdUpSXwAsXAiBGS5Y5claFmX6_durPlFKxqmHmfu7Z6rHfDPyQYKA5ug==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AM8Gb2swRQIgAL828khTg8eoyj5ZjqwLfJ6fBTKHADWvejZfMCX_hkoCIQDUDOaqb0zRWGjwwDJiEqe8pcn14wQ3VAPXg9sL1Y3jYQ==&cpn=SMvlHd8dS-lzsOa2&c=WEB_EMBEDDED_PLAYER&cver=1.20231031.01.00" width="100%" height="600" autoPlay={"autoplay"}  loop />)}
                  />)
                },
                {
                  key: 9,
                  content: (
                    <img
                      src={img9}
                      alt="demo"
                      onClick={() => this.openModal(<video src="https://rr5---sn-cvh76nll.c.drive.google.com/videoplayback?expire=1699179602&ei=IkJHZfGwB7z_p84Pov6M6AM&ip=103.120.248.192&id=11eeca93b9e939b7&itag=22&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=Kk&mm=32&mn=sn-cvh76nll&ms=su&mv=m&mvi=5&pl=24&ttl=transient&susc=dr&driveid=15ARn2YJ-TTgnGcsh67Snb4Z34_eX1CDj&app=explorer&eaua=LEwfFUU4H3Y&mime=video/mp4&vprv=1&prv=1&dur=701.916&lmt=1596806265818085&mt=1699168119&subapp=DRIVE_WEB_FILE_VIEWER&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=ANLwegAwRQIhAPtNPrUzdO3E93aUa7ku2gy4eU-oqYfxHkIqLs-Wa_SLAiA8TsVO4tDTDfJ2WY98AOfJJ79WRLCzuruTCUYXrJHx5Q==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AM8Gb2swRQIgd1wmeqTfS6mIjltsNUV-cAxGYsz0hsYakDoOz18rrF8CIQCD_yimHHN7J0zuddmzweV3X2DyR4eOcZdhl0UnD5xIqg==&cpn=QET7AXDnqVHm3DAp&c=WEB_EMBEDDED_PLAYER&cver=1.20231031.01.00" width="100%" height="600" autoPlay={"autoplay"}  loop />)}
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
