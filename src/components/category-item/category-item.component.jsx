import { useNavigate } from "react-router-dom";

import { CategoryContainer, BackgroundImage, CategoryBody } from "./category-item.styles"

const Category = ({ category }) => {
    const { title, imageUrl,route } = category;

    const navigate = useNavigate();

    const navigateToRoute = () => {
        navigate(route);
    }

    return (
        <CategoryContainer onClick={navigateToRoute}>
            <BackgroundImage background={imageUrl}></BackgroundImage>
            <CategoryBody>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </CategoryBody>
        </CategoryContainer>
    );
}

export default Category;