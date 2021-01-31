import React from 'react'
import './Item.css'
import { connect } from 'react-redux';
import {addtocart} from '../../actions/itemAction'
const Item = ({addtocart,product})=>{
   const addmyproduct = (p)=>{
      addtocart(p)
  }
return (
                <div className="item">
                   <div className="leftbox">
                   <div className="image">
                     <img src='/images/product.jpg' />
                   </div>
                   <div className="mydescrip"> 
                   <div className="title">
                     {product.name}
                   </div>
                   <div className="description">
                         {product.price}
                   </div> 
                   </div>
                   </div>
                       <div className="rightbox">
                             <div className="button-box">
                            <button className= "addtocart" onClick={()=>addmyproduct(product)}  >Add to cart</button>
                            </div>
                      </div>
            
        </div>
            );
    }

   export default connect(null,{addtocart})(Item)