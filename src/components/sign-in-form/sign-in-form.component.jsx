import { useState } from "react";

import { signInWithGooglePopup, addUserFromAuth, signInWithEmailAndPasswordFromAuth } from "../../utilities/firebase/firebase.utils";

import DataInput from "../data-input/data-input.component";
import Button from "../button/button.component";


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
        const user = await signInWithEmailAndPasswordFromAuth(email, password);

        console.log(user);
    }

    return (<div className="sign-in-container">
        <h2>Have and account ? Sign in here</h2>
        <form onSubmit={handelSubmit}>
            <DataInput label="Email" type="email" required name="email" onChange={handelChange} value={email} />
            <DataInput label="Password" type="password" required name="password" onChange={handelChange} value={password} />
            <Button type="submit">Sign In</Button>
            <Button buttonType="google" type="button" onClick={logInUserByGoogle}>Sign in with google</Button>
        </form>
    </div>)
}


export default SignInForm;