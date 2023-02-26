import "./checkout.styles.scss"

import CheckoutItem from "../../components/checkout-item/checkout-item.component"
 
import { selectCartItems,selectCartTotal } from "../../store/cart/cart.selector"
import { useSelector } from "react-redux"

const Checkout = () => {
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)
    const totalValue = cartTotal
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