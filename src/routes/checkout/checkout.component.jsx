import { useContext } from "react"

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component"

import { CheckoutContainer, CheckoutHeader, Header, TotalPrice } from "./checkout.styles"


const Checkout = () => {
    const { userCartItems, increaseItemCountInCart, removeItemFromCart, totalPrice } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <Header>
                    <span>Product</span>
                </Header>
                <Header>
                    <span>Description</span>
                </Header>
                <Header>
                    <span>Quantity</span>
                </Header>
                <Header>
                    <span>Price</span>
                </Header>
                <Header>
                    <span>Remove</span>
                </Header>
            </CheckoutHeader>
            {
                userCartItems.map(item => (
                    <CheckoutItem key={item.id} cartItem={item} />
                ))
            }
            <TotalPrice>Total : {totalPrice}</TotalPrice>
        </CheckoutContainer>
    );
}

export default Checkout;