import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { getUserCartItemsSelector } from "../../store/cart/cart.selectors";

import { CartDropdownContainer, CartDropdownEmptyMessage, CartDropdownItemsContainer } from "./cart-list.styles"


const CartList = () => {
    const userCartItems = useSelector(getUserCartItemsSelector);
    let navigate = useNavigate();

    const navigateToCart = () => {
        navigate("/checkout");
    }
    return (
        <CartDropdownContainer>
            <CartDropdownItemsContainer>
                {
                    userCartItems.length ?
                        (userCartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)) :
                        (<CartDropdownEmptyMessage>Your cart is empty</CartDropdownEmptyMessage>)
                }
            </CartDropdownItemsContainer>
            <Button onClick={navigateToCart}>checkout</Button>
        </CartDropdownContainer>);
}

export default CartList;