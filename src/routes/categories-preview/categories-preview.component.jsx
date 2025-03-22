import { Fragment } from "react";
import { useSelector } from "react-redux";

import { getAllCategoriesSelector } from "../../store/categories/categories.selectors";
import CategoryPreview from "../../components/category-preview/category-preview.component";


const CategoriesPreview = () => {
    const categories = useSelector(getAllCategoriesSelector);

    return (<Fragment>
        {
            Object.keys(categories).map((title) => {
                const products = categories[title];
                return <CategoryPreview key={title} title={title} products={products} />
            })
        }
    </Fragment>);
}

export default CategoriesPreview;