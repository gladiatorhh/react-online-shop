import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";


import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartList from "../../components/cart-list/cart-list.component";

import { signOutUser } from "../../utilities/firebase/firebase.utils";
import { setCurrentUser } from "../../store/user/user.actions";
import { getCurrentUserSelector } from "../../store/user/user.selectors";
import { getCartVisibilitySelector } from "../../store/cart/cart.selectors";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import { NavigationContainer, LogoContainer, NavigationLinksContainer, NavigationLinks } from "./navigation.styles"


const Navigation = () => {
    const dispatch = useDispatch();
    const userData = useSelector(getCurrentUserSelector);
    const isDropdownVisible = useSelector(getCartVisibilitySelector);

    const signOutHandler = async () => {
        await signOutUser();
        dispatch(setCurrentUser(null));
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