import { useState } from "react";

import { createUserByEmailAndPassword, addUserFromAuth } from "../../utilities/firebase/firebase.utils";

import DataInput from "../data-input/data-input.component";
import Button from "../button/button.component";

import "./sign-up-form.styles.scss";
import { requestFormReset } from "react-dom";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
};


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handelSubmit = async (event) => {
        event.preventDefault();
        if (!displayName || !email || !password || !confirmPassword || password != confirmPassword) {
            alert("Please check your provided information");
            return;
        }

        try {
            let createdUser = await createUserByEmailAndPassword(email, password);
            addUserFromAuth(createdUser.user, { displayName });
            setFormFields(defaultFormFields);
        } catch (error) {
            alert("You sign in attempt has failed due to server errors")
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Create one here!!!</span>
            <form onSubmit={handelSubmit}>
                <DataInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <DataInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <DataInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

                <DataInput label="Confirm password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;