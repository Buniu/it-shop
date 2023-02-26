import { CART_ACTION_TYPES } from "./cart.types"

const CART_INITIAL_STATE = {
    cartItems : [],
    activeCartDropdown: true,
}

export const cartReducer = (state = CART_INITIAL_STATE,action = {}) => {
    const {type,payload} = action


    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
        return {
            ...state,
            cartItems:payload
        }
        case CART_ACTION_TYPES.SET_CART_DROPDOWN:
            return {
                ...state,
                activeCartDropdown:payload
            }

        default:
            return state
    }
}