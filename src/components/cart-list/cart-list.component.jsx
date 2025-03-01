import { useContext } from "react";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";

import "./cart-list.styles.scss"


const CartList = () => {
    const { userCartItems } = useContext(CartContext);
    return (<div className="cart-dropdown-container">
        <div className="cart-items">
            {
                userCartItems.map(cartItem => <CartItem item={cartItem} />)
            }
        </div>
        <Button>Go to checkout</Button>
    </div>);
}

export default CartList;