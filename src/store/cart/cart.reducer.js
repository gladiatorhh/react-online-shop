import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
    isDropdownVisible: false,
    userCartItems: []
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.CHANGE_CART_ITEMS:
            return { ...state, userCartItems : payload };
        case CART_ACTION_TYPES.SET_DROPDOWN_VISIBLE:
            return { ...state, isDropdownVisible: payload };
        default:
            return state;
    }
}
