
import {ShoppingIcon,CartIconContainer,ItemCount} from "./cart-icon.styles.jsx"
import { useSelector, useDispatch } from "react-redux"
import {selectCartDropdown,selectCartCount} from "../../store/cart/cart.selector.js"
import { setCartDropdown } from "../../store/cart/cart.action.js"

const CartIcon = () => {
    const cartDropdown = useSelector(selectCartDropdown)
    const cartCount = useSelector(selectCartCount)
    const dispatch = useDispatch()
    return (
        <CartIconContainer className="cart-icon-container" onClick={()=>{dispatch(setCartDropdown(!cartDropdown))}}>
        {/* <CartIconContainer className="cart-icon-container" onClick={()=>{setActiveCartDropdown(!activeCartDropdown)}}> */}
            <ShoppingIcon className="shopping-icon"/>
            <ItemCount className="item-count">{cartCount}</ItemCount>
        </CartIconContainer>
    )

}

export default CartIcon