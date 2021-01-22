import{ USER_LOADED, 
     USER_LOADING, 
     AUTH_ERROR , 
    LOGIN_SUCCESS, 
    LOGIN_FAIL,  
     LOGOUT_SUCCESS,
    REGISTER_SUCCESS,  
    REGISTER_FAIL 
}  from '../actions/types'

const initialState = {
    token:localStorage.getItem('token'),
    isAutheticated:null,
    isloading:null,
    user:null
    }
    export default function  (state = initialState , action ){
        switch(action.type){
        case USER_LOADING:
        return {
         ...state,   
          isloading:true
      };
       case USER_LOADED:
           return {
             ...state,
              isAutheticated:true,
              isloading:false,
              user:action.payload.user
            
             };
        case   LOGIN_SUCCESS,
        REGISTER_SUCCESS:  
                return {
                  ...state,
                  ...action.payload,
                   isAutheticated:true,
                   isloading:false,
                   //user:action.payload.user
                  };
       case     AUTH_ERROR,
                LOGIN_FAIL,  
                LOGOUT_SUCCESS,
                REGISTER_FAIL:    
                return {
                            ...state,
                              isAutheticated:false,
                             isloading:false,
                             token:null,
                             user:null
                             //user:action.payload.user
                            };
        


    
    default: 
    return state      
    } 
    }