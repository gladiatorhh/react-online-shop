import "./category-item.styles.scss"

const Category = ({ category }) => {
    const { title, imageUrl } = category;

    return (
        <div className="category-container">
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
}

export default Category;