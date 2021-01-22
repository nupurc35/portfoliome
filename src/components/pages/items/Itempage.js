import React from 'react'
import './Item.css';
import PropTypes from 'prop-types';
import Item from '../../item/Item';
import {useEffect} from 'react';
import {getItems} from '../../../actions/itemAction'
import { Fragment } from 'react';
import { connect } from 'react-redux';
const Itempage = ({items,Total})=>{
   useEffect(()=>{
      getItems()
     // eslint-disable-next-line 
     //console.log(logs)  
},[])
    return (
         <Fragment>
         <ul className="item-ul">
                 {items.map(item=><li className="item-li" key={item.id}>
                                     <Item item={item}>
                                      </Item>
                                  </li>
         )}
         </ul>
         <div className = "grand-total">
            <span className="total">Total</span> <span className="amount"></span>    
         
         </div>    
        </Fragment>

       )
} 

Itempage.propTypes = {
   items:PropTypes.array.isRequired
};
const mapStateToProps = state=>({
   item:state.item,
   items:state.item.items,
   Total:state.item.Total 
   
})


export default connect(mapStateToProps,{getItems})(Itempage)