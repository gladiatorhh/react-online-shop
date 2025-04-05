import { useSelector, useDispatch } from "react-redux";

import { setDropdownVisibility } from "../../store/cart/cart.actions";
import { getUserCartItemsCountSelector, getCartVisibilitySelector } from "../../store/cart/cart.selectors";

import { CartIconContainer, ShoppingCartIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
    const dispatch = useDispatch();
    const isDropdownVisible = useSelector(getCartVisibilitySelector);
    const cartItemsCount = useSelector(getUserCartItemsCountSelector);

    const toggleDropdown = () => {
        dispatch(setDropdownVisibility(isDropdownVisible))
    };

    return (
        <CartIconContainer onClick={toggleDropdown}>
            <ShoppingCartIcon />
            <ItemCount>{cartItemsCount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;