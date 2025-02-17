import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBnEGVWvQY3kOvUoKlkBYG224P8AEx4wdA",
    authDomain: "crwn-clothing-db-2393d.firebaseapp.com",
    projectId: "crwn-clothing-db-2393d",
    storageBucket: "crwn-clothing-db-2393d.firebasestorage.app",
    messagingSenderId: "625828685287",
    appId: "1:625828685287:web:c7f8865c2b95ff5aa24942"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const addUserFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userDocSnapshot = await getDoc(userDocRef);

    if (!userDocSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }
        catch (err) {
            console.log("A error occurred while creating the user", err.message);
        }
    }

    return userDocRef;
};
