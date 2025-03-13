import { CategoryContainer, BackgroundImage, CategoryBody } from "./category-item.styles"

const Category = ({ category }) => {
    const { title, imageUrl } = category;

    return (
        <CategoryContainer>
            <BackgroundImage background={imageUrl}></BackgroundImage>
            <CategoryBody>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </CategoryBody>
        </CategoryContainer>
    );
}

export default Category;