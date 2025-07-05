import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DataInput from "../data-input/data-input.component";
import Button, { buttonTypes } from "../button/button.component";
import { SignInContainer, SignInFormButtonsContainer } from "./sign-in-form.styles";

import { googleSignInStart, emailSignInStart } from "../../store/user/user.actions";
import { getErrorSelector } from "../../store/user/user.selectors";


const defaultFiles = {
    email: "",
    password: ""
};

const SignInForm = () => {
    const [fieldsData, setFieldsData] = useState(defaultFiles);
    const { email, password } = fieldsData;
    const dispatch = useDispatch();

    const handelChange = (event) => {
        const { value, name } = event.target;

        setFieldsData({ ...fieldsData, [name]: value });
    }

    const signInWithGoogleHandler = () => {
        dispatch(googleSignInStart());
    }

    const handelSubmit = (event) => {
        try {
            event.preventDefault();
            dispatch(emailSignInStart(email, password));
            setFieldsData(defaultFiles);
        } catch (error) {
            switch (error) {
                case "auth/invalid-credential":
                    alert("You have entered the wrong credentials");
                    break;
                case "auth/user-not-found":
                    alert("No user associated with this email and password was found");
                    break;
                default:
                    alert("Failed to log you in", error);
                    break;
            }
        }
    }

    return (
        <SignInContainer>
            <h2>Have and account ? Sign in here</h2>
            <form onSubmit={handelSubmit}>
                <DataInput label="Email" type="email" required name="email" onChange={handelChange} value={email} />
                <DataInput label="Password" type="password" required name="password" onChange={handelChange} value={password} />
                <SignInFormButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button buttonType={buttonTypes.google} type="button" onClick={signInWithGoogleHandler}>Sign in with google</Button>
                </SignInFormButtonsContainer>
            </form>
        </SignInContainer>);
}


export default SignInForm;