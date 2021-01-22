import React from 'react'
import './cartpage.css';
import PropTypes from 'prop-types';
import Item from '../../item/Item';

const Cartitempage = ({items,onRemoveOne,onAddOne})=>{
    return (
          <ul className="cartitem-ul">
                  {items.map(item=><li className="cartitem-li" key={item.id}>
                                      <Item item={item}>
                                      <div className="CartItem-controls">
                                      <button className="CartItem-removeOne"onClick={() => onRemoveOne(item)}>&ndash;</button>
                                      <span className="CartItem-count">{item.count}</span>
                                      <button className="CartItem-addOne" onClick={() => onAddOne(item)}>+</button>
                                      </div>
                                       </Item>
                                   </li>
          )}
         </ul>    
        )
 } 
 export default Cartitempage;