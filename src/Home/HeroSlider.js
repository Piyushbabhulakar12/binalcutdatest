import React from 'react';
import video1 from "../Assets/Video/bg_video.mp4";
import video2 from "../Assets/Video/Motohom  TEASER 1.mp4";


function HeroSlider() {
    return (
      <div>
         
         <div className="container-fluid mt-1">
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" data-bs-interval="300">
   
    <div className="carousel-inner">
      <div className="carousel-item active">
        <video src={'https://youtu.be/Jarp7EF4HaY'} width="100%" height="1000" autoPlay={"autoplay"} muted loop className="video_fit" />
      </div>
     
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
