import "./product-card.styles.scss"
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component"

import { addItemToCart } from "../../store/cart/cart.action"

import { selectCartItems } from "../../store/cart/cart.selector"
import { useSelector, useDispatch } from "react-redux"

const ProductCard = ({product}) => {
    const cartItems = useSelector(selectCartItems)
    const {name, price, imageUrl} = product
    const dispatch = useDispatch()


    
    return (
    <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`}/>
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={()=> dispatch(addItemToCart(cartItems,product))}> Add to card</Button>
    </div>
)}

export default ProductCard