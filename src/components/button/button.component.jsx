import { BaseButton, ButtonGoogleSignIn, ButtonInverted, ButtonSpinner } from "./button.styles";

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

const Button = ({ children, buttonType, className, isLoading, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (<CustomButton disabled={isLoading} className={`${className}`} {...otherProps}>
        {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>)
};

export default Button;