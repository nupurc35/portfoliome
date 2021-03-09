import React,{useEffect}from 'react';
import './Footer.css';
import logo from './images/logo1.png';



const Footer = ()=>{
return(
  <section  id="footer" >
      <div className="container">
       <div className="row">
         <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">      
        <h2>Nupur das</h2>
        <p>Nupur das is web designer and developer </p>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">      
        <h3>Find me on:</h3>
        <ul className="find-me">
           <li><a href="https://www.linkedin.com/in/nupur-das-618b67204/"><i class="fab fa-linkedin-in"></i></a><span className="profile">linkedin.com/in/nupur-das-618b67204/</span></li>
           <li><a href="https://github.com/nupurc35"><i class="fab fa-github"></i></a><span className="profile">github.com/nupurc35</span></li>
           <li><a href="https://www.facebook.com/nupurc35/"><i class="fab fa-facebook"></i></a><span className="profile">facebook.com/nupurc35/</span></li>

        </ul>
      </div>
      
      </div>

     </div> 
 </section> 
)


}
export default Footer
