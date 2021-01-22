import{GET_ITEMS,ADD_QUANTITY,SUB_QUANTITY} from '../actions/types'
import image1 from '../components/images/image-1.jpg';
import image2 from '../components/images/image-2.jpg';
import image3 from '../components/images/image-3.jpg';
import image4 from '../components/images/image-4.jpg';
import image5 from '../components/images/image-5.jpg'; 
const initialState = {
items:[
    {
       id: 1,
       name: "Apple Watch Silver",
       description: "A more expensive watch",
       price: 200,
       img:image1,
       quantity:0
      },
  
     {
      id: 2,
      name: "Apple laptop",
      description: "An iPad like no other. 16GB, WiFi, 4G.",
      price: 330,
      img:image4,
      quantity:0
      },
      {
      id: 3,
      name: "A pair of nike shoe",
      description: "Its very pleasant to wear",
      price: 220,
      img:image2,
      quantity:0
      },
      {
      id: 4,
      name: "A sony headphone",
      description: "A beautiful headpho",
      price: 110,
      img:image5,
      quantity:0
      },
      {
      id: 5,
      name: "Apple Watch Sport",
      description: "A watch",
      price:300,
      img:image3,
      quantity:0
      }
],
addedItems : [],
Total : 0  
}
export default function  (state = initialState , action ){
    switch(action.type){
    case GET_ITEMS:
    return {
   ...state ,
     items:action.payload,
     };
   
    case ADD_QUANTITY:
        return {
              ...state,
              items: state.items.map(item =>
                item.id === action.payload
                  ? {...item, quantity: item.quantity + 1}
                  : item,
              ),
             Total: state.items.reduce((Total, item) => Total + item.quantity*item.price) 
            };


    case SUB_QUANTITY:
             return {
                ...state,
                   items: state.items.map(item =>
                       item.id === action.payload
                        ?   {...item, quantity: item.quantity>=1? item.quantity-1:item.quantity}: item,
                ),    
          };          
    
    default:
            return state      

             } 
    }