import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
     



      <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Final Cut</a>
    <button className="btn menu_icon mobile_menu_btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i className="fa fa-bars" aria-hidden="true"></i></button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <Link className="nav-link navbar_text" to="/binalcutdatest">Home</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link navbar_text" to="/about-us">About Us</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link navbar_text" href="#">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navbar_text" href="#">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navbar_text" href="#">Picture</a>
        </li>
         <li className="nav-item">
           <Link className="nav-link navbar_text" to="/contact-us">Contact</Link>
        </li>
      </ul>
    <button className="btn menu_icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i className="fa fa-bars" aria-hidden="true"></i></button>
    </div>
  </div>
</nav>


<div className="offcanvas offcanvas-end menu_siderbar" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title logo_bold" id="offcanvasExampleLabel">Final Cut</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    
           

           <div className="container mt-4">
               <div className="row">
                   <div className="col-md-5">
                       
                       <h3 className="font_600">Cinematic Videos</h3>
                       <p className="paragraph_text">Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing </p>

                   </div>
                   <div className="col-md-3">
                   <p className="paragraph_text">Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing Lorem Ipsum</p>

                   </div>
                   <div className="col-md-4">
                       
                      <Link to="/cinmatic-video"><button data-bs-dismiss="offcanvas" className="btn btn-dark float-end rounded-pill btn_spas shadow-lg"><i className="fa fa-angle-right" aria-hidden="true"></i></button></Link>

                   </div>
               </div>
           </div>

           <hr></hr>

           <div className="container mt-5">
               <div className="row">
                   <div className="col-md-5">
                       
                       <h3 className="font_600">Traditional Videos</h3>
                       <p className="paragraph_text">Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing </p>

                   </div>
                   <div className="col-md-3">
                   <p className="paragraph_text">Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing Lorem Ipsum</p>

                   </div>
                   <div className="col-md-4">
                       
                   <button className="btn btn-dark float-end rounded-pill btn_spas"><i className="fa fa-angle-right" aria-hidden="true"></i></button>

                   </div>
               </div>
           </div>

           <hr></hr>

           <div className="container mt-5">
               <div className="row">
                   <div className="col-md-5">
                       
                       <h3 className="font_600">Corporate Videos</h3>
                       <p className="paragraph_text">Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing </p>

                   </div>
                   <div className="col-md-3">
                   <p className="paragraph_text">Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing Lorem Ipsum</p>

                   </div>
                   <div className="col-md-4">
                       
                   <button className="btn btn-dark float-end rounded-pill btn_spas"><i className="fa fa-angle-right" aria-hidden="true"></i></button>

                   </div>
               </div>
           </div>

           <hr></hr>

           <div className="container mt-5">
               <div className="row">
                   <div className="col-md-5">
                       
                       <h3 className="font_600">Photo Edits</h3>
                       <p className="paragraph_text">Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing </p>

                   </div>
                   <div className="col-md-3">
                   <p className="paragraph_text">Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing Lorem Ipsum</p>

                   </div>
                   <div className="col-md-4">
                       
                   <button className="btn btn-dark float-end rounded-pill btn_spas"><i className="fa fa-angle-right" aria-hidden="true"></i></button>

                   </div>
               </div>
           </div>


      

  



  </div>
</div>



     

    </div>
  );
}

export default Contact;