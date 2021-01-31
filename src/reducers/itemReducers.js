import{SET_LOADING, GET_CATEGORIES,GET_PRODUCTS,ADD_TO_CART, DELETE_ITEM} from '../actions/types'
const initialState = {
categories:[],
addedItems : [],
products:[],
cart:[]
}
  export default function  (state = initialState , action ){
    let cart = state.cart ;
    switch(action.type){
     
     case GET_CATEGORIES:
      return {
       ...state ,
           categories:action.payload,
       };
     case GET_PRODUCTS:
      return {
       ...state ,
         products: state.categories.find(category =>
                 category.id  === action.payload
                  ).products.map(product=>
                           product    
                    )   
      };  
     
     case ADD_TO_CART:
            return {
               ...state,
               cart:[...state.cart,action.payload]
              };
        
      case DELETE_ITEM:
                return {
                   ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload)
                  };  
        
 

      case SET_LOADING:
              return {
           ...state,
           loading: true
        };          
    default:
            return state      
         } 
    }