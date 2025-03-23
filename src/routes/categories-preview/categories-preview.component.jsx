import { Fragment } from "react";
import { useSelector } from "react-redux";

import { getCategoriesMapSelector } from "../../store/categories/categories.selectors";
import CategoryPreview from "../../components/category-preview/category-preview.component";


const CategoriesPreview = () => {
    const categories = useSelector(getCategoriesMapSelector);

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