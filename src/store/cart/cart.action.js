import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES} from "./cart.types";

export const setCartItems = (cart) =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS,cart)

export const setCartDropdown = (dropdown) =>
    createAction(CART_ACTION_TYPES.SET_CART_DROPDOWN,dropdown)