import React, {Fragment } from 'react'
import './App.css';
import Navbarapp from './components/nav/Nav'
import {items}  from './components/staticdata'
import { createBrowserHistory } from 'history';
import {Router, Route, Switch } from "react-router-dom";
import Itempage from './components/pages/items/Itempage'
import {Provider} from 'react-redux'
import store from './store'
const App =()=> {
const history = createBrowserHistory();
  return (
    <Provider store={store}>
    <Router history={history}>
    <div className="App">
     <Navbarapp></Navbarapp> 
     <section className ='container'>
      <Switch>
        <Route exact path='/' render={props=>(<Fragment>
        <Itempage items={items}></Itempage>  
       </Fragment>)}></Route> 
     </Switch>
    </section>
 </div>
 </Router>
 </Provider>
   );
}

export default App;
