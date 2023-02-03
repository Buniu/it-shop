import "./checkout-item.styles.scss"
import { useContext } from "react"
import { CartDropdownHandler } from "../../contexts/cart-dropdown-handler.context"


const CheckoutItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price, id} = cartItem
    const {addItemToCart, deAddItemToCart, removeItemFromCart} = useContext(CartDropdownHandler)
    return (
        <div key={id} className='checkout-item-container'>
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className="name"> {name}</span>
            <span className="quantity">
                <div onClick={()=>{deAddItemToCart(cartItem)}} className="arrow"> 
                    &#10094;
                </div>
                <span className="value">
                    {quantity}
                </span>
                <div onClick={()=>{addItemToCart(cartItem)}} className="arrow"> 
                    &#10095;
                </div>
             </span>
            <span className="price"> ${price} </span>
            <div className="remove-button" onClick={()=>{removeItemFromCart(cartItem)}}> &#10005;</div>
        </div>
)
}


export default CheckoutItem