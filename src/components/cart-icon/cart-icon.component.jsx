import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ShoppingCartIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
    const { isDropdownVisible, setDropdownVisibility, cartItemsCount } = useContext(CartContext);

    const toggleDropdown = () => {
        setDropdownVisibility(!isDropdownVisible);
    };

    return (
        <CartIconContainer onClick={toggleDropdown}>
            <ShoppingCartIcon />
            <ItemCount>{cartItemsCount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;