import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
    CheckOutItemContainer,
    ImageContainer,
    Detail,
    QuantityContainer,
    QuantityArrowButton,
    QuantityValue,
    RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart, increaseItemCountInCart, removeItemFromCart } = useContext(CartContext);

    //#region handlers

    const clearItemBtnHandler = () => clearItemFromCart(cartItem);
    const increaseItemCountBtnHandler = () => increaseItemCountInCart(cartItem);
    const decreaseItemCountBtnHandler = () => removeItemFromCart(cartItem);

    //#endregion

    return (
        <CheckOutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <Detail>{name}</Detail>
            <QuantityContainer>
                <QuantityArrowButton onClick={decreaseItemCountBtnHandler}>&#10094;</QuantityArrowButton>
                <QuantityValue>{quantity}</QuantityValue>
                <QuantityArrowButton onClick={increaseItemCountBtnHandler}>&#10095;</QuantityArrowButton>
            </QuantityContainer>
            <Detail>{price}</Detail>
            <RemoveButton onClick={clearItemBtnHandler}>&#10005;</RemoveButton>
        </CheckOutItemContainer>
    );
}

export default CheckoutItem;