import React from 'react'
import './Item.css';
import PropTypes from 'prop-types';
import Item from '../../item/Item' 
import { Fragment } from 'react';
import { connect } from 'react-redux';
const Productpage = ({products})=>{
return (<Fragment> 
         <div className="main-box-item">
         <div className="head-text-box">
         <h1 className = "head-text">Item Page</h1>
         </div>
         <div className="items">
         <ul className="item-ul">
                  <li>
                   {products && products.map(product=>{
                           return (<Item product={product} key={product.id}></Item>)
                     })}  
                 </li>
        </ul>
        </div>
        </div>
      </Fragment>
)
} 
const mapStateToProps = (state) =>({
  // categories:state.item.categories,
products:state.item.products,
})
Productpage.propTypes = {
   products:PropTypes.array.isRequired
};
export default connect(mapStateToProps,null)(Productpage)