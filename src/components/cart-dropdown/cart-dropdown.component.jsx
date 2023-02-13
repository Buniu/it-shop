import { useContext } from "react"
import { CartDropdownHandler } from "../../contexts/cart-dropdown-handler.context"
import { useNavigate } from "react-router-dom"

import {CartDropDownContainer, CartItems} from "./cart-dropdown.styles.jsx"
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"

const CartDropdown = () => {
    const {cartItems} = useContext(CartDropdownHandler)
    const navigate = useNavigate()
    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    return (
        <CartDropDownContainer>
            <CartItems> 
            {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </CartItems>
            <Button onClick={goToCheckoutHandler} >
                 Go TO CHECKOUT
            </Button>

        </CartDropDownContainer>
    )
}


export default CartDropdown