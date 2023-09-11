// in this folder have root folder of reducers 

import { combineReducers } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
// import { userReducer } from "./reducerReducer";



// combine the reducers 
export default combineReducers({

    reducer,  // this is first reducers 
    // userReducer,   // this is second reducers 

})




