import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { CategoryProductsContainer, CategoryTitle } from "./category.styles"
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import { getCategoriesMapSelector, getCategoriesFetchIsLoadingSelector } from "../../store/categories/categories.selectors";


const Category = () => {
    const { category } = useParams();
    const categories = useSelector(getCategoriesMapSelector);
    const isCategoriesLoading = useSelector(getCategoriesFetchIsLoadingSelector);
    const [categoryProducts, setCategoryProducts] = useState(categories[category]);

    useEffect(() => {
        setCategoryProducts(categories[category]);
    }, [categories, category]);

    return (
        <Fragment>
            <CategoryTitle>{category}</CategoryTitle>
            {
                isCategoriesLoading ? <Spinner /> : (
                    <CategoryProductsContainer>
                        {
                            categoryProducts && categoryProducts.map(product => <ProductCard key={product.id} product={product} />)
                        }
                    </CategoryProductsContainer>
                )
            }
        </Fragment>);
}

export default Category;