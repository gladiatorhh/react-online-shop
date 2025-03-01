import { Fragment, useContext } from "react";

import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartList from "../../components/cart-list/cart-list.component";

import { signOutUser } from "../../utilities/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import "./navigation.styles.scss"


const Navigation = () => {
    const { userData, setUserData } = useContext(UserContext);
    const { isDropdownVisible } = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
        setUserData(null);
    };

    return (<Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
                <CrwnLogo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop" >SHOP</Link>
                {
                    userData ? (
                        <span onClick={signOutHandler}>Sign out</span>
                    ) : (
                        <Link className="nav-link" to="/auth" >SIGN-IN</Link>
                    )
                }
                <CartIcon />
            </div>
            {
                isDropdownVisible && <CartList />
            }
        </div>
        <Outlet />
    </Fragment >);
}

export default Navigation;