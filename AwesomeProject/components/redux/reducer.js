import { ADD_TO_CART } from "./constants";



const initialState = [];  // here cart item are saved


export const reducer = (state = initialState, action) => {   // in state have save this array and action 
    switch (action.type) {      // what is type of action 
        case ADD_TO_CART:        // type of add_To_cart case action 
            return [               
                ...state,              // return state data 
                action.data                 // and action data 
            ]
        default:
            return state                // default value return state 
    }

}