import { Link } from "react-router-dom";
import Menu from "../Component/Menu";

const data = [
    {
        id: '01',
        title: 'Cinematic Videos',
        des: 'Lorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing Lorem',
        link: '/cinmatic',
    },
    {
        id: '02',
        title: 'Corporate Videos',
        des: 'Lorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing Lorem',
        link: '/corporate',
    },
    {
        id: '02',
        title: "Wedding Videos",
        des: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing LoremIpsum is simply dummy text of the printing Lorem Ipsum",
        link: "/wedding",
      },
    {
        id: '03', 
        title: 'Traditional Videos',
        des: 'Lorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing Lorem',
        link: '#',
    },
    {
        id: '04',
        title: 'Photo Videos',
        des: 'Lorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing Lorem',
        link: '#',
    },
    
]



const Index = () => {
    return(
        <>
         

         <div className="container">
         <h3 className="hero_heading mt-5">About Us</h3>


         <div className="container mt-5">
           <div className="row">
              <div className="col-12">
                
              <h3 className="subheading mt-5"><span style={{ fontSize: '15px', marginRight: '50px' , color: '#434040' }}>What We Do</span>We are a team of creative heads all working towards designing your memory in the most spectacular way. From shooting to editing and the final delivery is curated finely, with attention to detail, to provide you with the best you'll find around. We have partnered with clients who have appreciated us for our quality and also for our timely delivery. Don't trust us? Book your order now and experience it like never before. Call us on:</h3>
<br /> <br />
                {data.map((data , index) => (

                   <div className="card_about" key={index}>
                       
                       <div className="row">
                         <div className="col-md-2">
                          
                          <h5 className="about_cardid">{data.id}</h5>

                         </div>
                         <div className="col-md-5">
                          
                          <h2 className="about_cardname"> {data.title} </h2>
 
                         </div>
                         <div className="col-md-5">
                          
                          <p className="about_carddes">{data.des}</p>

                          <Link to={data.link}><button className="btn btn_custom_knomorebtn">Know More About Project</button></Link>

                         </div>
                       </div>

                   </div>

                ))}
               



              </div>
           </div>
         </div>



        


          </div>

        </>
    )
}
export default Index;