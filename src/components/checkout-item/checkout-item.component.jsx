import "./checkout-item.styles.scss"

import { addItemToCart,deAddItemToCart,removeItemFromCart } from "../../store/cart/cart.action"
import { useSelector, useDispatch } from "react-redux"
import { selectCartItems } from "../../store/cart/cart.selector"

const CheckoutItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price, id} = cartItem
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()





    return (
        <div key={id} className='checkout-item-container'>
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className="name"> {name}</span>
            <span className="quantity">
                <div onClick={()=>{dispatch(deAddItemToCart(cartItems,cartItem))}} className="arrow"> 
                    &#10094;
                </div>
                <span className="value">
                    {quantity}
                </span>
                <div onClick={()=>{dispatch(addItemToCart(cartItems,cartItem))}} className="arrow"> 
                    &#10095;
                </div>
             </span>
            <span className="price"> ${price} </span>
            <div className="remove-button" onClick={()=>{dispatch(removeItemFromCart(cartItems,cartItem))}}> &#10005;</div>
        </div>
)
}


export default CheckoutItem