import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Navigation , FreeMode } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/navigation";


const service = [
     {
          title: "Lorem Ipsum",
          subtext: "Wedding Video Editor",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
     },
     {
          title: "Lorem Ipsum",
          subtext: "Wedding Video Editor",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
     },
     {
          title: "Lorem Ipsum",
          subtext: "Wedding Video Editor",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
     },
     {
          title: "Lorem Ipsum",
          subtext: "Wedding Video Editor",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
     },
     {
          title: "Lorem Ipsum",
          subtext: "Wedding Video Editor",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
     },
     {
          title: "Lorem Ipsum",
          subtext: "Wedding Video Editor",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
     },
     {
          title: "Lorem Ipsum",
          subtext: "Wedding Video Editor",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
     },
     {
          title: "Lorem Ipsum",
          subtext: "Wedding Video Editor",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
     },
     {
          title: "Lorem Ipsum",
          subtext: "Wedding Video Editor",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
     },
]


function Services() {
    return (
      <div>
       
          
       <div className="container section_margin_top">
            <h2 className="heading_text_about">Services</h2>
        </div>

        <div className="container gallary_margin_top">
        <Swiper
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
      </Swiper>
        </div>
      </div>
    );
  }
  
  export default Services;