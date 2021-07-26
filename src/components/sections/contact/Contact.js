import React,{useEffect}from 'react';
import './Contact.css';
import ContactForm from '../../contact-form'
const Contact = ()=>{
return(
  <section  id="contact" >
      <div className="container">
           <div className="contact-info">
               <div className="row">

               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">    
               <h1>Get in touch</h1>
               <p>If you wanna get in touch, talk to me about a project collaboration or just say hi,  
                <span className="fancy">
                   <a href="mailto:nupur435das@gmail.com">nupur435das@gmail.com</a>
                   
               </span>
                  and lets talk    
               </p>
             </div>        
            </div>
            <div className="row">
             <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">    
             <h1 className="m-t-0">Contact Form</h1>
             <ps-contact-form
		         integration-key="79c0f8fb079f1fa516c1476bd2ff1b2586e48a94ab910898d5ef18f8f74d1ba5"
		         full-name-placeholder-text="Full Name"
		         email-placeholder-text="Email"
		         message-placeholder-text="Message"
		         submit-button-text="Submit"
		         success-message="Thank you for contacting us, we will get back to your shortly"
		         tags="homepage, before-footer"></ps-contact-form>           
           </div>        
           </div> 
          </div>
    </div> 
 </section> 
)
}
export default Contact
