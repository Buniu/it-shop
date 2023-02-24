import {createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

const addCartItem = (cartItems,productToAdd) => {
    // if (cartItems.filter(e => e.name === productToAdd.name).length > 0)  {
    //     return cartItems.map( (item)=> {
    //         if(item.name === productToAdd.name){
    //             item.quantity++
    //         }
    //         return item;
    //     }        
    //     )
    // } else {
    //     productToAdd.quantity = 1;
    //     return cartItems.concat(productToAdd)
    // }

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




export const CartDropdownHandler = createContext({
    activeCartDropdown: false,
    setActiveCartDropdown: ()=> null,
    cartItems: [],
    addItemToCart: () => {},
    cartCount:0
})


const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_DROPDOWN: 'SET_CART_DROPDOWN'
}

const INITIAL_STATE = {
    cartCount :0,
    cartTotal: 0,
    cartItems : [],
    activeCartDropdown: false,
}

const cartReducer = (state,action) => {
    const {type,payload} = action


    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
        return {
            ...state,
            ...payload
        }
        case CART_ACTION_TYPES.SET_CART_DROPDOWN:
            return {
                ...state,
                ...payload
            }

        default:
            throw new Error(`unhandled type of ${type} in cartReducer`)
    }
}


export const CartDropdownHandlerProvider = (({children})=>{


    const [{cartItems,cartCount,cartTotal,activeCartDropdown},dispatch] = useReducer(cartReducer,INITIAL_STATE)

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total,cartItem) => total + cartItem.quantity,0)

        const newCartTotal = newCartItems.reduce(
            (total,cartItem) => total+cartItem.quantity * cartItem.price,0
        )

        dispatch({type:CART_ACTION_TYPES.SET_CART_ITEMS, payload: {cartItems: newCartItems,cartCount:newCartCount, cartTotal:newCartTotal}})
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems,productToAdd)
        updateCartItemsReducer(newCartItems)
        
    }
    const deAddItemToCart = (productToDeAdd) => {
        const newCartItems = deAddCartItem(cartItems,productToDeAdd)
        updateCartItemsReducer(newCartItems)
    }
    const removeItemFromCart = (product) => {
        const newCartItems = removeCartItem(cartItems,product)
        updateCartItemsReducer(newCartItems)
    }

    const setActiveCartDropdown = () => {
        dispatch({type: CART_ACTION_TYPES.SET_CART_DROPDOWN, payload: {activeCartDropdown: !activeCartDropdown}})
    }


    return <CartDropdownHandler.Provider value={{activeCartDropdown,setActiveCartDropdown, addItemToCart,deAddItemToCart, cartItems, cartCount, removeItemFromCart,cartTotal}}> {children} </CartDropdownHandler.Provider>
})