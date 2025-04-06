import { Fragment } from "react";
import { useSelector } from "react-redux";

import { getCategoriesMapSelector, getCategoriesFetchIsLoadingSelector } from "../../store/categories/categories.selectors";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";


const CategoriesPreview = () => {
    const categories = useSelector(getCategoriesMapSelector);
    const isCategoriesLoading = useSelector(getCategoriesFetchIsLoadingSelector);
    return (<Fragment>
        {
            isCategoriesLoading ? <Spinner /> :
                (Object.keys(categories).map((title) => {
                    const products = categories[title];
                    return <CategoryPreview key={title} title={title} products={products} />
                }))
        }
    </Fragment>);
}

export default CategoriesPreview;