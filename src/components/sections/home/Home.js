import React,{useEffect}from 'react';
import hcbgImage from './images/profile.JPG'
import './Home.css';




const Home = ()=>{
return(
  <section  id="masthead"  className="wrapper">
        
              <div className="row animate-title">
                  <div className = "col-lg-7 col-md-7 col-sm-8 col-xs-8"> 
                    <div className="title">
                         <h1 className="title-text">
                                   nupur
                                 <br/>das  
                         </h1>
                         <div className="title-border">
                         <span>
                        </span>      

                         <span className="margin-border">
                         </span>        
                      
                      </div>                         
                        <p className="title-lead">
                             web designer<br/>
                             web developer   
                        </p>      
                       </div>
                      </div>
                      <div className = "col-lg-5 col-md-5 col-sm-12 col-xs-12"> 
                     <div className="home-image">
                       <img src={hcbgImage}/>
                     </div>
                    </div>
                     </div>

 </section> 
)


}
export default Home
