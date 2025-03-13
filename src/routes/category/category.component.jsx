import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoryProductsContainer, CategoryTitle } from "./category.styles"

const Category = () => {
    const { category } = useParams();
    const { categories } = useContext(CategoriesContext);
    const [categoryProducts, setCategoryProducts] = useState(categories[category]);

    useEffect(() => {
        setCategoryProducts(categories[category]);
    }, [categories, category]);

    return (
        <Fragment>
            <CategoryTitle>{category}</CategoryTitle>
            <CategoryProductsContainer>
                {
                    categoryProducts && categoryProducts.map(product => <ProductCard key={product.id} product={product} />)
                }
            </CategoryProductsContainer>
        </Fragment>);
}

export default Category;