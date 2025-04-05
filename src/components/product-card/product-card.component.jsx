import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { buttonTypes } from "../button/button.component"
import { getUserCartItemsSelector } from "../../store/cart/cart.selectors";
import { addCartItem } from "../../store/cart/cart.actions";

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
    const dispatch = useDispatch();
    const userCartItems = useSelector(getUserCartItemsSelector);

    const addProductToCart = () => {
        dispatch(addCartItem(userCartItems, product));
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