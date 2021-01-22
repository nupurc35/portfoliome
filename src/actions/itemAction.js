import{GET_ITEMS ,INCREASE,DECREASE,SET_LOADING,ADD_QUANTITY,SUB_QUANTITY} from './types'
const axios = require('axios');

export const getItems = ()=>
  dispatch => {
            dispatch({
                     type: GET_ITEMS,
            })
        }

export const decrease = (id) =>
         dispatch => {
              dispatch({
                    type: DECREASE,
                    payload: id
            })
         
    }

export const increase = (id)=>
        dispatch => {
            dispatch({
                    type: INCREASE,
                    payload:id
            })
}

export const addQuantity = (id)=>
        dispatch => {
            dispatch({
                    type: ADD_QUANTITY,
                    payload:id
            })
    }

export const subQuantity = (id)=>
        dispatch => {
           dispatch({
                    type: SUB_QUANTITY,
                    payload:id
            })
}




