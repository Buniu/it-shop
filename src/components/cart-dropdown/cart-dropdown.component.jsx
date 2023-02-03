import { useContext } from "react"
import { CartDropdownHandler } from "../../contexts/cart-dropdown-handler.context"
import { useNavigate } from "react-router-dom"

import "./cart-dropdown.styles.scss"
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"

const CartDropdown = () => {
    const {cartItems} = useContext(CartDropdownHandler)
    const navigate = useNavigate()
    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    return (
        <div className="cart-dropdown-container">
            {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            <Button onClick={goToCheckoutHandler} >
                 Go TO CHECKOUT
            </Button>

        </div>
    )
}


export default CartDropdown