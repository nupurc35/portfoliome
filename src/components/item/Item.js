import React from 'react'
import './Item.css'
import PropTypes from 'prop-types';
import { addQuantity} from '../../actions/itemAction';
import {subQuantity} from '../../actions/itemAction';
import { connect } from 'react-redux';

const Item = ({item,addQuantity,subQuantity})=>{
 
  const addItem =()=>{
       console.log('this is from additem')   
       //console.log(item.id)
       addQuantity(item.id)
 }

const deleteQantity = () =>{
  console.log('this is from delete quantity')   
  subQuantity(item.id)
           
} 

     return (
             <div className="item">
                   <div className="leftbox">
                   <div className="image">
                     <img src = {item.img}/>
                   </div>
                   <div className="mydescrip"> 
                   <div className="title">
                     {item.name}
                   </div>
                   <div className="description">
                            {item.description}
                   </div> 
                   </div>
                   </div>
                       <div className="rightbox">
                             <div className="button-box">
                              <span className="text-left" ><button className= "add" onClick={addItem} >+</button></span>{item.quantity}<span className="text-right"><button className= "minus" onClick={deleteQantity} >-</button></span> 
                            </div>
                      </div>
            
            </div>

         );
    }


    Item.propTypes = {
      addQuantity:PropTypes.func.isRequired,
      subQuantity:PropTypes.func.isRequired
   };

   export default connect(null,{addQuantity,subQuantity})(Item)