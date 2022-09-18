import React from 'react';


const team = [
  {
    img: "https://i.pinimg.com/736x/03/02/48/0302481e8ca81d9c44b95413900cbeb1.jpg",
    alt: "Piyush Babhulakar",
    title: "Piyush Babhulakar",
    des: "Web Developer",
  },
  {
    img: "https://www.meme-arsenal.com/memes/29e49cd65cce6de46382d75d1fe817a2.jpg",
    alt: "Aniket Saluke",
    title: "Aniket Saluke",
    des: "Sr. Video Editor",
  },
  {
    img: "https://thumbor.prod.vidiocdn.com/6HrmLj6kpf1KLd5Y_3bPgsRUMwo=/smart/filters:strip_icc():quality(70)/vidio-web-prod-user/uploads/user/avatar/239841/velaniavello-36ebc1.jpg",
    alt: "Prerna",
    title: "Prerna",
    des: "Content Writer",
  },
  {
    img:  "https://www.meme-arsenal.com/memes/29e49cd65cce6de46382d75d1fe817a2.jpg",
    alt: "Web Designer",
    title: "Demo Name",
    des: "Web Designer",
  },
  {
    img: "https://thumbor.prod.vidiocdn.com/6HrmLj6kpf1KLd5Y_3bPgsRUMwo=/smart/filters:strip_icc():quality(70)/vidio-web-prod-user/uploads/user/avatar/239841/velaniavello-36ebc1.jpg",
    alt: "Web Designer",
    title: "Demo Name",
    des: "Web Designer",
  },
  {
    img: "https://i.pinimg.com/736x/03/02/48/0302481e8ca81d9c44b95413900cbeb1.jpg",
    alt: "Web Designer",
    title: "Demo Name",
    des: "Web Designer",
  },
]

function Team() {
  return (
    <>


<div className="container section_margin_top" id="team">
            <h2 className="heading_text_about">About Me</h2>
        </div>



        <div className="container mt-5">
           <div className="row">
              <div className="col-md-3 col-12">
                <img src="https://www.uwbec.org/content/2021/RFP/rfp%20reviewer%20pic.PNG" className="aboutus_img" />
                </div>
                <div className="col-md-9 col-12">
                  <h3 className="headinaboutus mt-5">Akshay Hendre</h3>
                  <span>Chief Editor</span>
                  <p className="paraaboutus">Akshay Hendre Chief Editor Skilled into editing and cinematography. Shaped this talents in the 10 years of his experience, working in corporate and also as a freelancer. Delivered 100+ shoots with the final cut before time. Clients know him as a happy-go-lucky human full of joy. He brings the same in his work and delivers it with uber class quality</p>
                </div>
            </div>
         </div>


       
       <div className="container section_margin_top" id="team">
            <h2 className="heading_text_about">Our Team</h2>
        </div>

        <div className="container">
            <div className="row m-auto justify-content-center">
              <div className="col-md-10 col-12">

                  <div className="row">
                      
                      {team.map((data , index) => (

                     
                  <div className="col-md-4 mt-4" key={index}>
                    
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


    </>
  );
}

export default Team;