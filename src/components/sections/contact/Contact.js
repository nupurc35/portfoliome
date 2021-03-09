import React,{useEffect}from 'react';
import './Contact.css';
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
             <form>
             <div class="form-group">
         <label>Name</label>
         <input type="name" class="form-control" placeholder="John alan"/>
         </div>
    
     <div class="form-group">
     <label>Email address</label>
    <input type="email" class="form-control"placeholder="Enter email"/>
  </div>
    <div class="form-group">
    <label>Message</label>
    <textarea class="form-control" rows="3"></textarea>
    </div>
   
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
           </div>        
           </div> 
          </div>
    </div> 
 </section> 
)
}
export default Contact
