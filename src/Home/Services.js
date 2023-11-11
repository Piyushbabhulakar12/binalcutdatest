import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Navigation , FreeMode } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/navigation";


const service = [
     {
          title: "Videoddity Productions",
          subtext: "Photo shoot",
          desc: "At Videoddity, we believe that every moment is worth capturing, and our photography services are dedicated to preserving those moments with creativity and skill. Whether you're looking to update your personal photo album or create eye-catching visuals for your brand, our photoshoot services are tailored to meet your unique needs.",
     },
     {
          title: "Videoddity Productions",
          subtext: "Cinematography",
          desc: "At Videoddity, we believe that the essence of cinematography lies in the power of visual storytelling. We work closely with you to understand your vision and objectives, ensuring that every frame we capture aligns with your brand, message, and goals.          ",
     },
     {
          title: "Videoddity Productions",
          subtext: "Corporate shoot",
          desc: "At Videoddity, we understand the significance of corporate video content in today's digital landscape. Our corporate video shoot services are designed to help businesses and organizations convey their message, engage their audience, and leave a lasting impression.",
     },
     {
          title: "Videoddity Productions",
          subtext: "Video editing",
          desc: "Our video editing team is dedicated to excellence in storytelling through visuals. We blend creativity, precision, and a keen understanding of pacing and composition to create exceptional cinematic narratives. Whether it's a feature film, a documentary, or a short commercial, we're committed to delivering results that engage and inspire.",
     },
     
]


function Services() {
    return (
      <div>
       
          
       <div className="container section_margin_top">
            <h2 className="heading_text_about">Services</h2>
        </div>

        <div className="container gallary_margin_top">
          <div className='row'>
          {service.map((data , index) => ( 
             <div className='col-md-3' key={index}>
                 <div className='service_card'>
                 
             <h4 className="card_head">{data.subtext}</h4>
             <p className="cart_title">{data.desc}</p>
                 </div>
             </div>
          ))}
          </div>

          <div className='mt-5'>
            <center>
         <a target='_blank' href='https://wa.me/9987253771'> <button type="submit" className="btn btn-lg get_in_touch_btn">Get In Touch</button></a>
          </center>
          </div>
          
        {/* <Swiper
        style={{"--swiper-navigation-color": "#FFF" , "--swiper-navigation-size": "30px" ,  }}
        slidesPerView={1}
        freeMode={true}
        spaceBetween={10}
        navigation={true} 
        modules={[Navigation , FreeMode]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
       
        className="mySwiper"
      >
          {service.map((data , index) => (         
        <SwiperSlide key={index}>
             <p className="card_para">{data.title}</p>
             <h4 className="card_head">{data.subtext}</h4>
             <p className="cart_title">{data.desc}</p>
        </SwiperSlide>
         ))}
      </Swiper> */}
        </div>
      </div>
    );
  }
  
  export default Services;