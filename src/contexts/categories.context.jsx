import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utilities/firebase/firebase.utils";


export const CategoriesContext = createContext({
    products: [],
});


export const CategoriesContextProvider = ({ children }) => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categories = await getCategoriesAndDocuments();
            setCategories(categories);
        }

        getCategoriesMap();
    }, []);


    const value = { categories };


    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
}