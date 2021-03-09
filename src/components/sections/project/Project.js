import React,{useEffect}from 'react';
import cartimg from './images/shopping-cart.png'
import movieSearch from './images/movieSearch.jpg'
import quiz from './images/quiz.jpg' 
import './Project.css';
const Project = ()=>{
return(
  <section  id="project">
              <div className="container">
              <div className="row  site-content">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                          <h2>Selected projects</h2>
                          <p className="lead">On this page you will find a handful of my favourite personal projects.</p>   
                    </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12"> 
                    <div className ="aside-bg">
                        <h2 className="m-t-0">
                           Elsewhere
                       </h2>
                       <p>For even more recent work, you can find me coding on <a href="https://github.com/nupurc35">Github</a></p>
                    </div>
                </div>
              </div>
            </div>
           <div className="container project-bg">
             <div className="row site-content">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <a href="https://friendly-poitras-44eaf1.netlify.app/">
                  <div className="portfolio-card"  style={{ backgroundImage: 'url(/images/shopping-cart.png)',height:"150px"  }}>
                       <div className="card-overlay"></div>
                       <div className="article">
                         <h2 className='head'>Shopping cart</h2>
                         <p className="lead">Add item to cart page</p>
                       </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <a href="https://vigorous-jang-0802a9.netlify.app">
                   <div className="portfolio-card" style={{ backgroundImage: 'url(/images/quiz.jpg)',height:"150px"}}>
                     <div className="card-overlay"></div>
                     <div className="article">
                     <h2 className='head'>Quiz app</h2>
                     <p>Simple quiz app using react hook </p>
                     <p></p>
                     </div>
                  </div>  
                  </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <a href="https://happy-euler-6fc877.netlify.app">
              <div className="portfolio-card" style={{ backgroundImage: 'url(/images/movieSearch.jpg)',height:"150px"}}  >
                    <div className="card-overlay"></div>
                    <div className="article">
                    <h2 className='head'>Search movie</h2>
                    <p className="lead">search your favourite movies and read the detail description of that movie</p>
                    </div>
                  </div>  
                </a>  
              </div> 
              </div>
              </div>
           </section> )
}
export default Project
