import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";



const initialState = [];  // here cart item are saved


export const reducer = (state = initialState, action) => {   // in state have save this array and action 
    switch (action.type) {      // what is type of action 
        case ADD_TO_CART:        // type of add_To_cart case action 
            return [               
                ...state,              // return state data 
                action.data                 // and action data 
            ]


        case REMOVE_FROM_CART:
            let result = state.filter(item=>{
                return item.name != action.data
            })
            return [ ...result]

            
        default:
            return state                // default value return state 
    }

}




