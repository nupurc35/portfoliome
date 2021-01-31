import   React, {Fragment } from 'react'
import   './App.css';
import   Navbarapp from './components/nav/Nav'
import  {createBrowserHistory} from 'history';
import  Itempage from './components/pages/items/Itempage'
import  Cartpage from  './components/pages/cart/Cartpage'
import  {Provider} from 'react-redux'
import  store from './store'
import  {connect} from 'react-redux' 
import  {Router} from "react-router-dom";
const App =( )=> {
  const history = createBrowserHistory();  
return (
    <Provider store={store}>
    <Router history={history}>
    <div className="App">
     <Navbarapp ></Navbarapp> 
      <div className="main-box">
       <Itempage></Itempage>
       <Cartpage></Cartpage>
      </div>
   </div>
   </Router>
   </Provider>
   );
}
export default connect(null)(App)
