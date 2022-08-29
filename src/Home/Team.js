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