import{ USER_LOADED, 
    USER_LOADING, 
    AUTH_ERROR , 
   LOGIN_SUCCESS, 
   LOGIN_FAIL,  
    LOGOUT_SUCCESS,
   REGISTER_SUCCESS,  
   REGISTER_FAIL 
}  from '../actions/types'
const axios = require('axios');

/* export const loaduser = ()=>
  
(dispatch,getState) => {
  dispatch({type:USER_LOADING});
  const token = getState().auth.token
  
  const config = {
        headers:{
              "Content-type":"application/json"
          }
    }

    if(token){
             config.headers['x-auth-token'] = token
      } 
  axios.get('http://localhost:5000/items/')
      .then(res =>
          dispatch({
              type: GET_ITEMS,
              payload: res.data
      })
    )
    .catch(err =>
     // dispatch(returnErrors(err.response.data, err.response.status))
           console.log(err)
     );
} */
