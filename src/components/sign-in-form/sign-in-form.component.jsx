import { useState } from "react";

import { signInWithGooglePopup, addUserFromAuth, signInWithEmailAndPasswordFromAuth } from "../../utilities/firebase/firebase.utils";

import DataInput from "../data-input/data-input.component";
import Button from "../button/button.component";


import "./sign-in-form.styles.scss";


const defaultFiles = {
    email: "",
    password: ""
};

const SignInForm = () => {
    const [fieldsData, setFieldsData] = useState(defaultFiles);
    const { email, password } = fieldsData;

    const logInUserByGoogle = async () => {
        const response = await signInWithGooglePopup();
        addUserFromAuth(response.user)
    }


    const handelChange = (event) => {
        const { value, name } = event.target;

        setFieldsData({ ...fieldsData, [name]: value });
    }

    const handelSubmit = async () => {
        try {
            const user = await signInWithEmailAndPasswordFromAuth(email, password);
            setFieldsData(defaultFiles);
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("You have entered the wrong credentials");
                    break;
                case "auth/user-not-found":
                    alert("No user associated with this email and password was found");
                    break;
                default:
                    alert("Failed to log you in");
            }
        }
    }

    return (<div className="sign-in-container">
        <h2>Have and account ? Sign in here</h2>
        <form onSubmit={handelSubmit}>
            <DataInput label="Email" type="email" required name="email" onChange={handelChange} value={email} />
            <DataInput label="Password" type="password" required name="password" onChange={handelChange} value={password} />
            <div className="sign-in-form-buttons">
                <Button type="submit">Sign In</Button>
                <Button buttonType="google" type="button" onClick={logInUserByGoogle}>Sign in with google</Button>
            </div>
        </form>
    </div>)
}


export default SignInForm;