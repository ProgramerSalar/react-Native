import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";





export function addToCart(item){
    return{
        type:ADD_TO_CART,         // type is add_TO_cart
        data:item,             // data are item 
    }
}



export function removeFromCart(item){
    return{
        type:REMOVE_FROM_CART,
        data:item
    }
}