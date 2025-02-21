import "./button.styles.scss"

const buttonTypes = {
    inverted: "inverted",
    google: "google-sign-in"
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (<button className={`button-container ${buttonTypes[buttonType]}`} {...otherProps}>{children}</button>)
};

export default Button;