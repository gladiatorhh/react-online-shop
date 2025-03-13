import { BaseButton, ButtonGoogleSignIn, ButtonInverted } from "./button.styles";

export const buttonTypes = {
    base: "base",
    inverted: "inverted",
    google: "google-sign-in"
}

const getButton = (type = buttonTypes.base) => {
    return ({
        [buttonTypes.base]: BaseButton,
        [buttonTypes.inverted]: ButtonInverted,
        [buttonTypes.google]: ButtonGoogleSignIn,
    }[type]);
}

const Button = ({ children, buttonType, className, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (<CustomButton className={`${className}`} {...otherProps}>{children}</CustomButton>)
};

export default Button;