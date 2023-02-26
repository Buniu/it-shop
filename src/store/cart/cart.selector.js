import { createSelector } from "reselect";

const selectCartReducer = state => state.cart

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.cartItems
)

export const selectCartDropdown = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.activeCartDropdown
)


export const selectCartCount = createSelector(
    [selectCartItems],
    (cart) => cart.reduce((total,cartItem) => total + cartItem.quantity,0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cart) => cart.reduce(
        (total,cartItem) => total+cartItem.quantity * cartItem.price,0
    )
)

