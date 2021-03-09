import   React, {Fragment } from 'react'
import   './App.css';
import   Navbarapp from './components/nav/Nav'
import Home from './components/sections/home/Home'
import About from './components/sections/about/About'
import Project from './components/sections/project/Project';
import Footer from './components/sections/footer/Footer';
import Contact from './components/sections/contact/Contact';
import { createBrowserHistory } from 'history';
import {Router, Route, Switch } from "react-router-dom";

const App =( )=> {
   const history = createBrowserHistory();
return (
   <Router history={history}>
    <div className="App">
     <Navbarapp ></Navbarapp> 
     <Switch>
        <Route exact path='/' render={props=>(<Fragment>
        <Home></Home> 
        </Fragment>)}></Route> 
      <Route exact path = '/about/' render={props=>(<Fragment>
           <About ></About>
      </Fragment>)}></Route>
      <Route exact path = '/project/' render={props=>(<Fragment>
           <Project></Project>
      </Fragment>)}></Route>
      <Route exact path = '/contact/' render={props=>(<Fragment>
           <Contact></Contact>
      </Fragment>)}></Route>
    </Switch>
     <Footer> </Footer>
   </div>
   </Router>
   
   );
}
export default  App 
