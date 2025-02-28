import Button from "../button/button.component";

import "./cart-list.styles.scss"


const CartList = () => {
    return (<div className="cart-dropdown-container">
        <div className="cart-items"></div>
        <Button>Go to checkout</Button>
    </div>);
}

export default CartList;