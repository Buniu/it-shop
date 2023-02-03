import "./checkout.styles.scss"
import { useContext } from "react"
import { CartDropdownHandler } from "../../contexts/cart-dropdown-handler.context"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"


const Checkout = () => {
    const {cartItems, totalCartPrice} = useContext(CartDropdownHandler)
    const totalValue = totalCartPrice()
    return (
        <div className="checkout-container">
            <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
            </div>
            <div> {cartItems.map(item => <CheckoutItem cartItem={item}/>)}
            </div>
        <span className="total"> Total Amount: {totalValue}$</span>
        </div>
    )
}


export default Checkout