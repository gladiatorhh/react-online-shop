import { useContext } from "react";

import Button from "../button/button.component"
import { CartContext } from "../../contexts/cart.context";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    const { addCartItem } = useContext(CartContext);

    const addProductToCart = () => {
        console.log("Click");
        addCartItem(product)
    }

    return (<div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted" onClick={addProductToCart}>Add to card</Button>
    </div>);
};

export default ProductCard;