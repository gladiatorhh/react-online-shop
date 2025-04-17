import { useState } from "react";
import { useDispatch } from "react-redux";

import DataInput from "../data-input/data-input.component";
import Button from "../button/button.component";

import { signUpStart } from "../../store/user/user.actions";

import { SingUpContainer } from "./sign-up-form.styles";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
};


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const dispatch = useDispatch();

    const handelSubmit = async (event) => {
        event.preventDefault();
        if (!displayName || !email || !password || !confirmPassword || password !== confirmPassword) {
            alert("Please check your provided information");
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName));
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
        <SingUpContainer>
            <h2>Don't have an account?</h2>
            <span>Create one here!!!</span>
            <form onSubmit={handelSubmit}>
                <DataInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <DataInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <DataInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

                <DataInput label="Confirm password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <Button type="submit">Sign Up</Button>
            </form>
        </SingUpContainer>
    );
}

export default SignUpForm;