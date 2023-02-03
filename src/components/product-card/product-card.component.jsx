import { useContext } from "react"
import { CartDropdownHandler } from "../../contexts/cart-dropdown-handler.context"

import "./product-card.styles.scss"

import Button from "../button/button.component"

const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(CartDropdownHandler)
    const {name, price, imageUrl} = product
    return (
    <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`}/>
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button buttonType='inverted' onClick={()=> addItemToCart(product)}> Add to card</Button>
    </div>
)}

export default ProductCard