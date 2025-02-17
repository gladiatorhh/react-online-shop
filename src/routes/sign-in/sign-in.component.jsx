import { signInWithGooglePopup, addUserFromAuth } from "../../utilities/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        addUserFromAuth(response.user)
    }

    return (<div>
        <h1>Sign-in</h1>
        <button type="button" onClick={logGoogleUser}>Click to sign in</button>
    </div>);
}

export default SignIn;