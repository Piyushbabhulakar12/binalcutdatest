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
                
              <h3 className="subheading mt-5"><span style={{ fontSize: '15px', marginRight: '50px' , color: '#434040' }}>What We Do</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</h3>
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