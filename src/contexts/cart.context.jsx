import { createContext, useReducer } from "react";
import { generateDispatchObj } from "../utilities/reducer/reducer.utils";

//#region outerFunctions
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

//#region reducerTemplate

export const CartContext = createContext({
    isDropdownVisible: false,
    setDropdownVisibility: () => { },
    userCartItems: [],
    addCartItem: () => { },
    cartItemsCount: 0,
    increaseItemCount: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    totalPrice: 0,
});

export const CART_ACTION_TYPES = {
    SET_DROPDOWN_VISIBLE: "SET_DROPDOWN_VISIBLE",
    CHANGE_CART_ITEMS: "CHANGE_CART_ITEMS",
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_DROPDOWN_VISIBLE:
            return { ...state, ...payload };
        case CART_ACTION_TYPES.CHANGE_CART_ITEMS:
            return { ...state, ...payload };
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

const CART_INITIAL_STATE = {
    isDropdownVisible: false,
    userCartItems: [],
    cartItemsCount: 0,
    totalPrice: 0,
};

//#endregion

export const CartContextProvider = ({ children }) => {
    //#region reducerSettings

    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);


    const {
        isDropdownVisible,
        userCartItems,
        cartItemsCount,
        totalPrice,
    } = state;

    //#endregion

    //#region utilities

    const updateUserCart = (cartItems) => {
        const newCartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        const calculatedTotalPrice = cartItems.reduce((total, item) => total += item.quantity * item.price, 0);

        dispatch(generateDispatchObj(CART_ACTION_TYPES.CHANGE_CART_ITEMS, {
            userCartItems: cartItems,
            cartItemsCount: newCartItemsCount,
            totalPrice: calculatedTotalPrice,
        }));
    }


    const addCartItem = (product) => {
        updateUserCart(updateCartList(userCartItems, product));
    }

    const increaseItemCountInCart = (item) => {
        updateUserCart(increaseItemCount(userCartItems, item));
    }

    const removeItemFromCart = (item) => {
        updateUserCart(removeItemFromCartByCartItem(userCartItems, item));
    }

    const clearItemFromCart = (item) => {
        updateUserCart(deleteItemFromCart(userCartItems, item));
    }

    const setDropdownVisibility = () => {
        dispatch(generateDispatchObj(CART_ACTION_TYPES.SET_DROPDOWN_VISIBLE, { isDropdownVisible: !isDropdownVisible }));
    }

    //#endregion

    const value = {
        isDropdownVisible,
        setDropdownVisibility,
        userCartItems,
        addCartItem,
        cartItemsCount,
        increaseItemCountInCart,
        removeItemFromCart,
        clearItemFromCart,
        totalPrice
    };

    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
}