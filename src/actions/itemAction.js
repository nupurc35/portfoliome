import{GET_ITEMS,SET_LOADING,GET_CATEGORIES,GET_PRODUCTS,ADD_TO_CART,DELETE_ITEM} from './types'
const axios = require('axios');

export const getcategories = ()=>
 async dispatch => {
        try {
                setloading();
                 const res =  await axios.get(`https://my-json-server.typicode.com/fmartinsba/shopping-cart/categories`)
                 dispatch({
                  type: GET_CATEGORIES,
                  payload: res.data
                });
               } 
           catch (err) {
                console.log(err)
          }
        
        }

export const addtocart = (obj)=>
dispatch => {
        dispatch({
                type: ADD_TO_CART,
                payload:obj
              });
           
}

export const deleteitem = (id)=>
dispatch => {
        dispatch({
                type: DELETE_ITEM,
                payload:id
              });
           
}


export const getItems = ()=>
 async dispatch => {
        try {
                setloading();
                 const res =  await axios.get(`https://my-json-server.typicode.com/fmartinsba/shopping-cart/categories`)
                 dispatch({
                  type: GET_ITEMS,
                  payload: res.data
                });
               } 
           catch (err) {
                console.log(err)
          }
        
        }

export const getproducts = (id)=>
        async dispatch => {
                dispatch({
                        type: GET_PRODUCTS ,
                        payload: id
                })
        }
const setloading = ()=>
        dispatch => {
        dispatch({
                type: SET_LOADING,
               
        })

} 


