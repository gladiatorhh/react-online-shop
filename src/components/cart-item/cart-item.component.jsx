import { CartItemContainer, CartItemImg, CartItemDetailsContainer, CartItemDetail } from "./cart-item.styles";

const CartItem = ({ item }) => {
    const { name, imageUrl, price, quantity } = item;

    return (
        <div>
            <CartItemContainer>
                <CartItemImg src={imageUrl} alt={name} />
                <CartItemDetailsContainer>
                    <CartItemDetail>{name}</CartItemDetail>
                    <CartItemDetail>{price} x {quantity}</CartItemDetail>
                </CartItemDetailsContainer>
            </CartItemContainer>
        </div>);
}

export default CartItem;