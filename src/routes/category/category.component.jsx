import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getAllCategoriesSelector } from "../../store/categories/categories.selectors";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoryProductsContainer, CategoryTitle } from "./category.styles"

const Category = () => {
    const { category } = useParams();
    const categories = useSelector(getAllCategoriesSelector);
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