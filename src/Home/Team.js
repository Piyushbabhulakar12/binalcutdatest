import React from 'react';


const team = [
  {
    img: "https://i.pinimg.com/originals/ef/08/cc/ef08cc9f9ffd9797d7ec0c02628060ed.jpg",
    alt: "Web Designer",
    title: "Demo Name",
    des: "Web Designer",
  },
  {
    img: "https://i.pinimg.com/originals/9b/aa/8a/9baa8ac4eb217c87c4563e418c8c37a2.jpg",
    alt: "Web Designer",
    title: "Demo Name",
    des: "Web Designer",
  },
  {
    img: "https://i.pinimg.com/736x/7b/4e/72/7b4e72c0347b65838583fe74004007cc.jpg",
    alt: "Web Designer",
    title: "Demo Name",
    des: "Web Designer",
  },
  {
    img: "https://i.pinimg.com/originals/ef/08/cc/ef08cc9f9ffd9797d7ec0c02628060ed.jpg",
    alt: "Web Designer",
    title: "Demo Name",
    des: "Web Designer",
  },
  {
    img: "https://i.pinimg.com/originals/9b/aa/8a/9baa8ac4eb217c87c4563e418c8c37a2.jpg",
    alt: "Web Designer",
    title: "Demo Name",
    des: "Web Designer",
  },
  {
    img: "https://i.pinimg.com/736x/7b/4e/72/7b4e72c0347b65838583fe74004007cc.jpg",
    alt: "Web Designer",
    title: "Demo Name",
    des: "Web Designer",
  },
]

function Team() {
  return (
    <div>
       
       <div className="container section_margin_top">
            <h2 className="heading_text_about">Our Team</h2>
        </div>

        <div className="container">
            <div className="row m-auto justify-content-center">
              <div className="col-md-10 col-12">

                  <div className="row">
                      
                      {team.map((data , index) => (

                     
                  <div className="col-md-4" key={index}>
                    
                    <center>
                        
                        <img alt={data.alt} src={data.img} className="team_img" />
                    

                       <h5 className="team_title">{data.title}</h5>
                       <p className="team_des">{data.des}</p>


                    </center>
      
                      </div>
                       ))}
                      </div>

              </div>
            </div>
        </div>


    </div>
  );
}

export default Team;