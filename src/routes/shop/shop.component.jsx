import { useContext } from "react";

import ProductCard from "../../components/product-card/product-card.component"
import { CategoriesContextProvider } from "../../contexts/categories.context"

import "./shop.styles.scss";

const Shop = () => {
    const { categories } = useContext(CategoriesContextProvider);

    return (<div className="products-container">

    </div>);
}

export default Shop;