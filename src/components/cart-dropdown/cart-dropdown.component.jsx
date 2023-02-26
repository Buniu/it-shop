import { useNavigate } from "react-router-dom"

import {CartDropDownContainer, CartItems} from "./cart-dropdown.styles.jsx"
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"
import { selectCartItems } from "../../store/cart/cart.selector.js"
import { useSelector } from "react-redux"

const CartDropdown = () => {


    const cartItems = useSelector(selectCartItems)
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