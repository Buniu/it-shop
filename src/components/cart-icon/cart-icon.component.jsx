import { useContext } from "react"
import {ShoppingIcon,CartIconContainer,ItemCount} from "./cart-icon.styles.jsx"

import { CartDropdownHandler } from "../../contexts/cart-dropdown-handler.context"

const CartIcon = () => {
    const {activeCartDropdown,setActiveCartDropdown, cartCount} = useContext(CartDropdownHandler)
    return (
        <CartIconContainer className="cart-icon-container" onClick={()=>{setActiveCartDropdown(!activeCartDropdown)}}>
            <ShoppingIcon className="shopping-icon"/>
            <ItemCount className="item-count">{cartCount}</ItemCount>
        </CartIconContainer>
    )

}

export default CartIcon