import { CART_ACTION_TYPES } from "./cart.types"

const INITIAL_STATE = {
    cartCount :0,
    cartTotal: 0,
    cartItems : [],
    activeCartDropdown: false,
}

export const cartReducer = (state = INITIAL_STATE,action) => {
    const {type,payload} = action


    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
        return {
            ...state,
            ...payload
        }
        case CART_ACTION_TYPES.SET_CART_DROPDOWN:
            return {
                ...state,
                ...payload
            }

        default:
            return state
    }
}