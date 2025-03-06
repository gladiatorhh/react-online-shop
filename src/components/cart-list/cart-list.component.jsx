import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";

import "./cart-list.styles.scss"


const CartList = () => {
    const { userCartItems } = useContext(CartContext);
    let navigate = useNavigate();

    const navigateToCart = () => {
        navigate("/checkout");
    }
    return (<div className="cart-dropdown-container">
        <div className="cart-items">
            {
                userCartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <Button onClick={navigateToCart}>checkout</Button>
    </div>);
}

export default CartList;