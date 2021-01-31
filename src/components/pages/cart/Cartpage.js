import React, { Fragment} from 'react'
import './Cartpage.css';
import  CartItem from  './CartItem';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
const Cartpage = ({cart} )=>{
   const getcart = ()=>{
            console.log(cart) 
        }

 
          return ( 
    <Fragment>
                <div className="main-cart-box">
                <div className="head-text-box">
                  <h1 className = "head-text">Cart Page</h1>
                </div>
                {cart && cart.length===0?(<div className="empty-cart"><p>No cart items </p>
                 </div> ):( <div className="cart-items">  
              <ul className="cart-ul">
                      <li>
                         {cart.map(cartitem=>{
                               return (<CartItem cartitem={cartitem} key={cartitem.id}></CartItem>)
                         })}  
                     </li>
             </ul>
             </div>)}    
             
             </div>
    </Fragment>
    )
    } 
    const mapStateToProps = (state) =>({
      cart:state.item.cart,
    })
    Cartpage.propTypes = {
       cart:PropTypes.array.isRequired
    };
export default connect(mapStateToProps,null)(Cartpage)
