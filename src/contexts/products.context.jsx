import { createContext, useEffect, useState } from "react";

import ShopData from "../001 shop-data.json";


export const ProductsContext = createContext({
    products:[],
});


export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState(ShopData);
    const value = { products };


    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}