import { useContext } from "react";

import Button, { buttonTypes } from "../button/button.component"
import { CartContext } from "../../contexts/cart.context";

import {
    ProductContainer,
    ProductImg,
    ProductFooter,
    ProductName,
    ProductPrice,
    ProductButton,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    const { addCartItem } = useContext(CartContext);

    const addProductToCart = () => {
        addCartItem(product)
    }

    return (
        <ProductContainer>
            <ProductImg src={imageUrl} alt={name} />
            <ProductFooter>
                <ProductName>{name}</ProductName>
                <ProductPrice>{price}</ProductPrice>
            </ProductFooter>
            <ProductButton buttonType={buttonTypes.inverted} onClick={addProductToCart}>Add to card</ProductButton>
        </ProductContainer>);
};

export default ProductCard;