import { useDispatch, useSelector } from "react-redux";

import { clearItemFromCart, increaseItemCountInCart, removeItemFromCart } from "../../store/cart/cart.actions";
import { getUserCartItemsSelector } from "../../store/cart/cart.selectors";


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
    const dispatch = useDispatch();
    const userCartItems = useSelector(getUserCartItemsSelector);

    //#region handlers

    const clearItemBtnHandler = () => dispatch(clearItemFromCart(userCartItems, cartItem));
    const increaseItemCountBtnHandler = () => dispatch(increaseItemCountInCart(userCartItems, cartItem));
    const decreaseItemCountBtnHandler = () => dispatch(removeItemFromCart(userCartItems, cartItem));

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