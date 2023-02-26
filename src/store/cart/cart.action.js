import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES} from "./cart.types";
import { selectCartItems } from "./cart.selector";
import { useSelector } from "react-redux";




export const setCartDropdown = (boolean) => {
    console.log(boolean)
    return createAction(CART_ACTION_TYPES.SET_CART_DROPDOWN,boolean)
}


    const addCartItem = (cartItems,productToAdd) => {
        console.log(cartItems)
        const existingCartItem = cartItems.find((cartItem)=> cartItem.id === productToAdd.id)
    
        if(existingCartItem) {
            return cartItems.map((cartItem)=> cartItem.id === productToAdd.id
             ? {...cartItem, quantity:cartItem.quantity+1}
             :cartItem
             )
        }
    
        return [...cartItems,{...productToAdd,quantity:1}]
    }
    
    const deAddCartItem = (cartItems,productToAdd) => {
    
    
        const existingCartItem = cartItems.find((cartItem)=> cartItem.id === productToAdd.id)
        if(existingCartItem.quantity > 1) {
            return cartItems.map((cartItem)=> cartItem.id === productToAdd.id
            ? {...cartItem, quantity:cartItem.quantity-1}
            :cartItem)
        } else {
            const newArray = cartItems.filter((item)=>{return item.id !== productToAdd.id })
            return newArray
        }
    }
    
    const removeCartItem= (cartItems,product) => {
        const newArray = cartItems.filter((item)=>{return item.id !== product.id })
        return newArray
    }
    
export const addItemToCart = (cartItems,productToAdd) => {
    const newCartItems = addCartItem(cartItems,productToAdd)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
        
}
export const deAddItemToCart = (cartItems,productToDeAdd) => {
    const newCartItems = deAddCartItem(cartItems,productToDeAdd)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
}
export const removeItemFromCart = (cartItems,product) => {
    const newCartItems = removeCartItem(cartItems,product)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
}