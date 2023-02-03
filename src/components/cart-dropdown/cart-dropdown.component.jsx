import { useContext } from "react"
import { CartDropdownHandler } from "../../contexts/cart-dropdown-handler.context"

import "./cart-dropdown.styles.scss"
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"

const CartDropdown = () => {
    const {cartItems} = useContext(CartDropdownHandler)
    return (
        <div className="cart-dropdown-container">
            {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            <Button> Go TO CHECKOUT</Button>
        </div>
    )
}


export default CartDropdown