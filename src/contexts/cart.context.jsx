import { createContext, useState, useEffect } from "react";

//#region outerFunctions
const updateCartList = (cartList, product) => {
    const itemInList = cartList.find(item => item.id == product.id);
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
    const itemInList = cartList.find(item => item.id == cartItem.id);

    if (itemInList) {
        return cartList.map(item => item.id === cartItem.id ?
            { ...item, quantity: item.quantity + 1 }
            : item
        );
    }

    return cartList;
}

const removeItemFromCartByCartItem = (cartList, cartItem) => {
    const itemInList = cartList.find(item => item.id == cartItem.id);

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


export const CartContextProvider = ({ children }) => {
    //#region states

    const [isDropdownVisible, setDropdownVisibility] = useState(false);
    const [userCartItems, setUserCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    //#endregion

    //#region utilities
    const addCartItem = (product) => {
        setUserCartItems(updateCartList(userCartItems, product));
    }

    const increaseItemCountInCart = (item) => {
        setUserCartItems(increaseItemCount(userCartItems, item));
    }

    const removeItemFromCart = (item) => {
        setUserCartItems(removeItemFromCartByCartItem(userCartItems, item));
    }

    const clearItemFromCart = (item) => {
        setUserCartItems(deleteItemFromCart(userCartItems, item))
    }
    //#endregion

    //#region  useEffects

    useEffect(() => {
        const newCartItemsCount = userCartItems.reduce((total, item) => total + item.quantity, 0);

        setCartItemsCount(newCartItemsCount);

    }, [userCartItems]);

    useEffect(() => {
        const calculatedTotalPrice = userCartItems.reduce((total, item) => total += item.quantity * item.price, 0);

        setTotalPrice(calculatedTotalPrice);
    }, [userCartItems]);

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