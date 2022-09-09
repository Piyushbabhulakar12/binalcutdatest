import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Navigation , FreeMode } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/navigation";


const service = [
     {
          title: "Final Cut Productions",
          subtext: "Photo shoot",
          desc: "Stable hands on the camera with a vision with clarity; that's exactly what makes our photoshoots stand out in the market full of photographers. We mainly specialise into weddings, baby shower, corporate events, candids and birthdays.",
     },
     {
          title: "Final Cut Productions",
          subtext: "Video shoot",
          desc: "With 10+ years of experience into shooting videos, the cinematographer of our chief videographer/ editor has delivered over 100+ shoots with the final cut. His hands on camera is a work of miracle.",
     },
     {
          title: "Final Cut Productions",
          subtext: "Corporate shoot",
          desc: "Our corporate shoots include any corporate event including leisure, sports and conferences. The subtle essence of a corporate shoot in its decency and that's how we like to keep it.",
     },
     {
          title: "Final Cut Productions",
          subtext: "Video editing",
          desc: "Video editing is the real game. Here, along with the after process of video editing and reaching the final cut, we also strive towards delivering the project on the same day itself. Cool na?",
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
             <div className='col-md-3'>
                 <div className='service_card'>
                 <p className="card_para">{data.title}</p>
             <h4 className="card_head">{data.subtext}</h4>
             <p className="cart_title">{data.desc}</p>
                 </div>
             </div>
          ))}
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