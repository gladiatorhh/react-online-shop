import Category from "../category-item/category-item.component";

import { CategoriesContainer } from "./categories-list.styles"

const Categories = ({ categories }) => {
    return (
        <CategoriesContainer>
            {
                categories.map(category => <Category key={category.id} category={category} />)
            }
        </CategoriesContainer>
    );
}

export default Categories;