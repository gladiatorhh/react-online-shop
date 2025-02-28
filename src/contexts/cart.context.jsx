import { createContext, useState } from "react";


const updateCartList = (cartList, product) => {
    const item = cartList.find(cartItem => cartItem.id == product.id);
    if (item) {
        let itemIndex = cartList.indexOf(item);
        cartList[itemIndex].quantity += 1;
    }
    else {
        cartList.append({
            id: product.id,
            name: product.name,
            imageUrl: product.imageUrl,
            price: product.price,
            quantity: 1
        });
    }
}

export const CartContext = createContext({
    isDropdownVisible: false,
    setDropdownVisibility: () => { },
    userCartItems: [],
    addCartItem: () => { }
});


export const CartContextProvider = ({ children }) => {
    const [isDropdownVisible, setDropdownVisibility] = useState(false);
    const [userCartItems, setUserCartItems] = useState([]);

    const addCartItem = (product) => {
        updateCartList(userCartItems, product);
    }

    const value = { isDropdownVisible, setDropdownVisibility, userCartItems, addCartItem };

    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
}