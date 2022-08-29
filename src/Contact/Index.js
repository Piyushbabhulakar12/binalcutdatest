import React , { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';

function Index() {

   const [name, setName] = useState("");
   const [message, setMessage] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");


const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_adcd7nn', 'template_r4krh7i', form.current, 'TdtEf6ojRcI3WAk5-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     setName("");
     setMessage("");
     setEmail("");
     setPhone("");
  };

  return (
    <div>
       
      <div className="container">
      	 <div className="row">
      	 	<div className="col-12">
      	 		<div className="row_spacing">
      	 			<h3 className="hero_heading">Get In Touch</h3>

                    <div className="row m-auto justify-content-center">
                    	<div className="col-8">
                    		<h3 className="hero_heading mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</h3>

                           
                          <div className="contact_section">
                          	 <h4 className="contact_heading">Contact</h4>
                           <p className="contact_des">+91 484-5556-44</p>

                           <h4 className="contact_heading">E-Mail</h4>
                           <p className="contact_des">demo@gmail.com</p>
                          </div>

                           <div className="form_section">

                              <form autoComplete="off" ref={form} onSubmit={sendEmail}>
                              <div className="row">
                              	 <div className="col-md-1 margin_top_grid">
                              	 	<h4 className="form_text">I am</h4>
                              	 </div>
                              	 <div className="col-md-5 margin_top_grid">
                              	 	<input type="text" name="from_name" value={name} placeholder="Name" className="form-control form_custom" onChange={(e) => setName(e.target.value)} />
                              	 </div>
                              	 <div className="col-md-6 margin_top_grid">
                              	 	<h4 className="form_text">I Was Wondering if we could Collabrate</h4>
                              	 </div>
                              	  <div className="col-md-2 margin_top_grid">
                              	 	<h4 className="form_text"> For Project</h4>
                              	 </div>
                              	 <div className="col-md-4 margin_top_grid">
                              	 	<input type="text" name="message" value={message} placeholder="Project Name" className="form-control form_custom" onChange={(e) => setMessage(e.target.value)} />
                              	 </div>
                              	 <div className="col-md-6 margin_top_grid">
                              	 	<h4 className="form_text">Project ? You Can Connect with me</h4>
                              	 </div>
                              	  <div className="col-md-1 margin_top_grid">
                              	 	<h4 className="form_text"> at</h4>
                              	 </div>
                              	  <div className="col-md-4 margin_top_grid">
                              	 	<input type="email" name="email" value={email} placeholder="Email Id" className="form-control form_custom"  onChange={(e) => setEmail(e.target.value)} />
                              	 </div>
                              	  <div className="col-md-3 margin_top_grid">
                              	 	<h4 className="form_text">Or Just give our</h4>
                              	 </div>
                              	  <div className="col-md-4 margin_top_grid">
                              	 	<input type="number" name="phone" value={phone} placeholder="Phone" className="form-control form_custom"  onChange={(e) => setPhone(e.target.value)} />
                              	 </div>
                              	 <div className="col-12 margin_top_grid">
                              	 	<button type="submit" className="btn form_btn ">Send</button>
                              	 </div>
                              </div>
</form>

                           </div>


                    	</div>
                    </div>

      	 		</div>
      	 	</div>
      	 </div>
      </div>

    </div>
  );
}

export default Index;