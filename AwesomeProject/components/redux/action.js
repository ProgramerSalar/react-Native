import { ADD_TO_CART } from "./constants";





export function addToCart(item){
    return{
        type:ADD_TO_CART,         // type is add_TO_cart
        data:item,             // data are item 
    }
}