import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { getUserCartItemsSelector, getUserCartItemsCountSelector } from "../../store/cart/cart.selectors";

import { CheckoutContainer, CheckoutHeader, Header, TotalPrice } from "./checkout.styles"


const Checkout = () => {
    const userCartItems = useSelector(getUserCartItemsSelector);
    const totalPrice = useSelector(getUserCartItemsCountSelector);

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