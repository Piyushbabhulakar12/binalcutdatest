import React from 'react';


const about = [
  {
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
  },
]


function About() {
    return (
      <div>
        

        <div className="container section_margin_top">
            <h2 className="heading_text_about">About Me</h2>
        </div>

        <div className="container mt-5 bg_color_about">
            <div className="box_padd">
                
                <div className="row">
                  {about.map((data , index) => (
                  <div className="col-md-6 box_padd_rwo mt-5" key={index}>                   
                   <h3 className="about_title_text">{data.title}</h3>
                   <p className="about_para_text">{data.desc}</p>
                  </div>
                    ))}
                </div>
            </div>
        </div>
          
           
      </div>
    );
  }
  
  export default About;