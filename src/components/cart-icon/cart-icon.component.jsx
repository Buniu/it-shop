import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { useContext } from "react"
import "./cart-icon.styles.scss"

import { CartDropdownHandler } from "../../contexts/cart-dropdown-handler.context"

const CartIcon = () => {
    const {activeCartDropdown,setActiveCartDropdown, cartCount} = useContext(CartDropdownHandler)
    return (
        <span className="cart-icon-container" onClick={()=>{setActiveCartDropdown(!activeCartDropdown)}}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </span>
    )

}

export default CartIcon