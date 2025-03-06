import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart, increaseItemCountInCart, removeItemFromCart } = useContext(CartContext);

    //#region handlers

    const clearItemBtnHandler = () => clearItemFromCart(cartItem);
    const increaseItemCountBtnHandler = () => increaseItemCountInCart(cartItem);
    const decreaseItemCountBtnHandler = () => removeItemFromCart(cartItem);

    //#endregion

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <button className="btn-arrow" onClick={decreaseItemCountBtnHandler}>&#10094;</button>
                <span className="value">{quantity}</span>
                <button className="btn-arrow" onClick={increaseItemCountBtnHandler}>&#10095;</button>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearItemBtnHandler}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;