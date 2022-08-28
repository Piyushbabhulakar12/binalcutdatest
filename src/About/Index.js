

const data = [
    {
        title: 'Cinematic Videos',
        des: 'Lorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing Lorem',
        link: '#',
    },
    {
        title: 'Cinematic Videos',
        des: 'Lorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing Lorem',
        link: '#',
    },
    {
        title: 'Cinematic Videos',
        des: 'Lorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing Lorem',
        link: '#',
    },
    {
        title: 'Cinematic Videos',
        des: 'Lorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing LoremLorem Ipsum is simply dummy text of the printing Lorem',
        link: '#',
    },
    {
        title: 'Cinematic Videos',
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
                {data.map((data) => (

                   <div className="card_about">
                       
                       <div className="row">
                         <div className="col-md-2">
                          
                          <h5 className="about_cardid">01</h5>

                         </div>
                         <div className="col-md-5">
                          
                          <h2 className="about_cardname"> {data.title} </h2>
 
                         </div>
                         <div className="col-md-5">
                          
                          <p className="about_carddes">{data.des}</p>

                          <button className="btn btn_custom_knomorebtn">Know More About Project</button>

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