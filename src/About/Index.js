

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
         

         <div class="container">
         <h3 class="hero_heading mt-5">About Us</h3>


         <div class="container mt-5">
           <div class="row">
              <div class="col-12">
                
              <h3 class="subheading mt-5"><span style={{ fontSize: '15px', marginRight: '50px' , color: '#434040' }}>What We Do</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</h3>
<br /> <br />
                {data.map((data) => (

                   <div class="card_about">
                       
                       <div class="row">
                         <div class="col-md-2">
                          
                          <h5 class="about_cardid">01</h5>

                         </div>
                         <div class="col-md-5">
                          
                          <h2 class="about_cardname"> {data.title} </h2>
 
                         </div>
                         <div class="col-md-5">
                          
                          <p class="about_carddes">{data.des}</p>

                          <button class="btn btn_custom_knomorebtn">Know More About Project</button>

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