import React from 'react'
import './CartItem.css';
import {deleteitem} from '../../../actions/itemAction'
import {connect} from 'react-redux'
const CartItem = ({cartitem,deleteitem})=>{
return (      
              
              <div className="item">
                   <div className="leftbox">
                   <div className="image">
                     <img src="/images/product.jpg" />
                   </div>
                   <div className="mydescrip"> 
                   <div className="title">
                      {cartitem.name}
                   </div>
                   <div className="description">
                       {cartitem.price}
                   </div> 
                   </div>
                   </div>
                       <div className="rightbox">
                         <div className="deletecart">
                           <button onClick={()=>deleteitem(cartitem.id)}>Delete Item</button>
                         
                         </div>
                       </div>
              </div>
           
        )
} 
export default connect(null,{deleteitem})(CartItem)