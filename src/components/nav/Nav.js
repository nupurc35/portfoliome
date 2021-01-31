import React,{useEffect}from 'react';
import './Nav.css';
import PropTypes from 'prop-types'; 
import {getcategories} from '../../actions/itemAction';
import {getproducts} from '../../actions/itemAction';
import {connect} from 'react-redux' 
const Nav = ({categories,getcategories,getproducts})=>{
  useEffect(() => {
    getcategories()
        },[]);  
        
   const handleproducts = (id)=>{
            getproducts(id)
        }    
return (
  <header>
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
     <a className="navbar-brand" href="#">Shopping List</a> 
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className ="collapse navbar-collapse" id="collapsibleNavbar">
         <ul className="navbar-nav"> 
        {categories&& categories.map(category=>{
                 return ( <li className="nav-item" key={category.id}>
                 <a className="nav-link" href="/#" onClick={()=>handleproducts(category.id)} >{category.name}</a>
                         </li>) 
            })       
      }   
        </ul>
      </div>
    </nav>
  </header>
      ) 
}
const mapStateToProps = (state) =>({
  categories:state.item.categories,
  products:state.item.products,
 
})

Nav.propTypes = {
  getcategories:PropTypes.func.isRequired
};
export default connect(mapStateToProps,{getcategories,getproducts})(Nav)


