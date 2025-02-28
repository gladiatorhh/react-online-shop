import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/004 shopping-bag.svg"


import "./cart-icon.styles.scss";

const CartIcon = () => {
    const { isDropdownVisible, setDropdownVisibility } = useContext(CartContext);

    const toggleDropdown = () => {
        setDropdownVisibility(!isDropdownVisible);
    };

    return (
        <div className="cart-icon-container" onClick={toggleDropdown}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">10</span>
        </div>
    );
}

export default CartIcon;