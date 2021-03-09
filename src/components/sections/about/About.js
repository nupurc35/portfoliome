import React,{useEffect}from 'react';
import me from './images/me_large.JPG';
import './About.css';
import bootstrap from  './images/bootstrap.png'
import react from  './images/react.png'
import nodejs from  './images/nodejs.png'
import html  from  './images/html.svg'
import js  from  './images/js.svg'
import crane from './images/crane.png'


const About = ()=>{
return(
  <section  id="about">
         <div className = "about"> 
              <div className ="text about-top">
                    <p className="heading-num">01</p>
                     
                <div className="text-wrap  text-wrap-content">
                         <h2 className="heading heading-top">
                               WHO I AM
                         </h2>
                            

                     <div className='who-wrap'>
                          <div className='who_name'>
                                 <p className='who_en'>
                                      NUPUR DAS
                                </p>      
                          </div> 
                          <p className="who-text">

                          Though I have done my graduation in civil engineering,but I have been always fascinated by  technology specially the computer science field.
                          after working for a few months in a <span className="cons"><img src={crane}></img></span> construction company I decided to move into the programming.I started to learn and code html/css with the minimum resources available in the internet.
                          Gradually i learned javascript,then I started to make projects on my own with javascript framework.
                          My first solo job was a web developer in a web designing/developing firm,but I left the job decided to do freelancing. 
                          </p>
                           <div className = "who_image">
                                   <img src= {me}/>

                           </div>

                    </div> 
                 </div>
            </div>
        </div>
       <div className="skill-set">
           <div className="text skill-head">
                    <p className="heading-num">02</p>
                    <div className="text-wrap  text-wrap-content">
                         <h2 className="heading heading-top">
                         SKILL SET  
                         </h2>
                    </div>        
                 
           </div>
          <div className ="content contentskill_set">
              <ul className="skill-list">
                 <li className="skill-set-item">
                       <div className="skill-set-icon">
                             <img src= {html}></img>
                       </div>
                        <div className="skill-set-details">
                        <div className="skillset_text">
                                  <h1 className="heading-text">
                                     html/css
                                  </h1>  
                                 </div>                           
                                <div className="skillset-bar html">
                                   
                              </div>  
                       </div> 

                 </li>
                 <li className="skill-set-item">
                       <div className="skill-set-icon">
                       <img src= {js}></img>
                       </div>
                        <div className="skill-set-details">
                        <div className="skillset_text">
                                  <h1 className="heading-text">
                                  javascript
                                  </h1> 
                                 </div>                           
                                <div className="skillset-bar js">
                                   
                              </div>  
                       </div> 

                 </li>
                 <li className="skill-set-item">
                       <div className="skill-set-icon">
                       <img src= {bootstrap}></img>
                       </div>
                        <div className="skill-set-details">
                                <div className="skillset_text">
                                  <h1 className="heading-text">
                                     bootstrap
                                  </h1>  
                                 </div>                           
                                <div className="skillset-bar btstrp">
                                   
                              </div>  
                      
                      
                       </div> 

                 </li>
           
                        
               </ul>
              <ul className="skill-list">
              <li className="skill-set-item">
                       <div className="skill-set-icon">
                       <img src= {react}></img>   
                       </div>
                        <div className="skill-set-details">
                        <div className="skillset_text">
                                  <h1 className="heading-text">
                                      react
                                  </h1>  
                                 </div>                           
                                <div className="skillset-bar react">
                                   
                              </div>  
                       </div> 

                 </li>
                 <li className="skill-set-item">
                       <div className="skill-set-icon">
                       <img src= {nodejs}></img>   
                       </div>
                        <div className="skill-set-details">
                        <div className="skillset_text">
                                  <h1 className="heading-text">
                                     nodejs
                                  </h1>  
                                 </div>                           
                                <div className="skillset-bar node">
                                   
                              </div>  
                       </div> 

                 </li>
               
               </ul>              
             
         </div>   
     </div>
</section> )
}
export default About
