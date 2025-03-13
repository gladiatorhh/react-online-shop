import { Fragment, useContext } from "react";

import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartList from "../../components/cart-list/cart-list.component";

import { signOutUser } from "../../utilities/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import { NavigationContainer, LogoContainer, NavigationLinksContainer, NavigationLinks } from "./navigation.styles"


const Navigation = () => {
    const { userData, setUserData } = useContext(UserContext);
    const { isDropdownVisible } = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
        setUserData(null);
    };

    return (<Fragment>
        <NavigationContainer>
            <LogoContainer to="/">
                <CrwnLogo className="logo" />
            </LogoContainer>
            <NavigationLinksContainer>
                <NavigationLinks to="/shop" >SHOP</NavigationLinks>
                {
                    userData ? (
                        <NavigationLinks as="span" onClick={signOutHandler}>Sign out</NavigationLinks>
                    ) : (
                        <NavigationLinks to="/auth">SIGN-IN</NavigationLinks>
                    )
                }
                <CartIcon />
            </NavigationLinksContainer>
            {
                isDropdownVisible && <CartList />
            }
        </NavigationContainer>
        <Outlet />
    </Fragment >);
}

export default Navigation;