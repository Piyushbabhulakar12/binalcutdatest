import React from 'react';
import video1 from "../Assets/Video/bg_video.mp4";
import video2 from "../Assets/Video/bg_video1.mp4";


function HeroSlider() {
    return (
      <div>
         
         <div className="container mt-5">
         <div id="carouselExampleControls" className="carousel" data-bs-ride="carousel" data-bs-interval="false">
            <div className="carousel-inner">
               <div className="carousel-item active">
               
            

               <video src={video1} width="100%" height="600" autoPlay={"autoplay"} muted loop className="video_fit" />


               </div>
            {/* <div className="carousel-item">

            <video src={video1} width="100%" height="600" autoPlay={"autoplay"} muted loop className="video_fit" />

            </div>
            <div className="carousel-item">
                <video src={video1} width="100%" height="600" autoPlay={"autoplay"} muted loop className="video_fit" />
            </div> */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

    
        </div>  
        </div>


       
      </div>
    );
  }
  
  export default HeroSlider;
