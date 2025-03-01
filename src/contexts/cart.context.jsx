import { createContext, useState, useEffect } from "react";


const updateCartList = (cartList, product) => {
    const item = cartList.find(cartItem => cartItem.id == product.id);
    if (item) {
        return cartList.map(cartItem => cartItem.id === product.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    else {
        cartList = [...cartList, { ...product, quantity: 1 }];
    }

    return cartList;
}

export const CartContext = createContext({
    isDropdownVisible: false,
    setDropdownVisibility: () => { },
    userCartItems: [],
    addCartItem: () => { },
    cartItemsCount: 0,
});


export const CartContextProvider = ({ children }) => {
    const [isDropdownVisible, setDropdownVisibility] = useState(false);
    const [userCartItems, setUserCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    const addCartItem = (product) => {
        setUserCartItems(updateCartList(userCartItems, product));
    }

    useEffect(() => {
        const newCartItemsCount = userCartItems.reduce((total, item) => total + item.quantity, 0);
        setCartItemsCount(newCartItemsCount);
    }, [userCartItems]);

    const value = {
        isDropdownVisible,
        setDropdownVisibility,
        userCartItems,
        addCartItem,
        cartItemsCount
    };

    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
}