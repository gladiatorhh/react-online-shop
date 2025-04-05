import { createSelector } from "reselect";

const getUserCartSelector = (state) => state.cart;

export const getUserCartItemsSelector = createSelector(
    [getUserCartSelector],
    (cart) => cart.userCartItems)

export const getUserCartItemsCountSelector = createSelector(
    [getUserCartItemsSelector],
    (cartItems) => {
        console.log(typeof (cartItems));
        return cartItems.reduce((total, item) => total + item.quantity, 0)
    }
);

export const getUserCartTotalPriceSelector = createSelector(
    [getUserCartItemsSelector],
    (cartItems) => cartItems.reduce((total, item) => total += item.quantity * item.price, 0)
);

export const getCartVisibilitySelector = createSelector(
    [getUserCartSelector],
    (cart) => cart.isDropdownVisible
)