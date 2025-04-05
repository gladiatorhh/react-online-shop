import { CART_ACTION_TYPES } from "./cart.types";
import { generateDispatchObj } from "../../utilities/reducer/reducer.utils";
import { store } from "../store";


//#region Utilities

const updateCartList = (cartList, product) => {
    const itemInList = cartList.find(item => item.id === product.id);
    if (itemInList) {
        return cartList.map(item => item.id === product.id ?
            { ...item, quantity: item.quantity + 1 }
            : item
        );
    }
    else {
        cartList = [...cartList, { ...product, quantity: 1 }];
    }

    return cartList;
}

const increaseItemCount = (cartList, cartItem) => {
    const itemInList = cartList.find(item => item.id === cartItem.id);

    if (itemInList) {
        return cartList.map(item => item.id === cartItem.id ?
            { ...item, quantity: item.quantity + 1 }
            : item
        );
    }

    return cartList;
}

const removeItemFromCartByCartItem = (cartList, cartItem) => {
    const itemInList = cartList.find(item => item.id === cartItem.id);

    if (itemInList) {
        if (itemInList.quantity > 1) {
            return cartList.map(item => {
                if (item.id === cartItem.id) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
        }
        else {
            return cartList.filter(item => item.id !== cartItem.id);
        }
    }
    return cartList;
}

const deleteItemFromCart = (cartList, cartItem) => {
    return cartList.filter(item => item.id !== cartItem.id);
}

//#endregion



export const addCartItem = (currentCart, product) =>
    generateDispatchObj(CART_ACTION_TYPES.CHANGE_CART_ITEMS, updateCartList(currentCart, product));

export const increaseItemCountInCart = (currentCart, item) =>
    generateDispatchObj(CART_ACTION_TYPES.CHANGE_CART_ITEMS, increaseItemCount(currentCart, item));

export const removeItemFromCart = (currentCart, item) =>
    generateDispatchObj(CART_ACTION_TYPES.CHANGE_CART_ITEMS, removeItemFromCartByCartItem(currentCart, item));

export const clearItemFromCart = (currentCart, item) =>
    generateDispatchObj(CART_ACTION_TYPES.CHANGE_CART_ITEMS, deleteItemFromCart(currentCart, item));

export const setDropdownVisibility = (isDropdownVisible) =>
    generateDispatchObj(CART_ACTION_TYPES.SET_DROPDOWN_VISIBLE, !isDropdownVisible);