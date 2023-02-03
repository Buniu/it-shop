import { useState, createContext, useEffect } from "react";

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


export const CartDropdownHandler = createContext({
    activeCartDropdown: false,
    setActiveCartDropdown: ()=> null,
    cartItems: [],
    addItemToCart: () => {},
    cartCount:0
})

export const CartDropdownHandlerProvider = (({children})=>{
    const [activeCartDropdown,setActiveCartDropdown] = useState(false)

    const [cartItems,setCartItems] = useState([])
    const [cartCount,setCartCount] = useState(0)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
        // setCartCount(cartCount+1)
    }

    useEffect(()=> {
        const newCartCount = cartItems.reduce((total,cartItem) => total + cartItem.quantity,0)
        setCartCount(newCartCount)
    },[cartItems])



    return <CartDropdownHandler.Provider value={{activeCartDropdown,setActiveCartDropdown, addItemToCart, cartItems, cartCount}}> {children} </CartDropdownHandler.Provider>
})