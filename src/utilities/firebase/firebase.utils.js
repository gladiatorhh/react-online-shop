import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    getDocs,
    query
} from "firebase/firestore";

//#region identifications

const firebaseConfig = {
    apiKey: "AIzaSyBnEGVWvQY3kOvUoKlkBYG224P8AEx4wdA",
    authDomain: "crwn-clothing-db-2393d.firebaseapp.com",
    projectId: "crwn-clothing-db-2393d",
    storageBucket: "crwn-clothing-db-2393d.firebasestorage.app",
    messagingSenderId: "625828685287",
    appId: "1:625828685287:web:c7f8865c2b95ff5aa24942"
};

//#endregion

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.map(item => item.data());

    return categoryMap;
}

export const addUserFromAuth = async (userAuth, otherOptions = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);

    const userDocSnapshot = await getDoc(userDocRef);

    if (!userDocSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...otherOptions
            });
        }
        catch (err) {
            console.log("A error occurred while creating the user", err.message);
        }
    }

    return userDocSnapshot;
};


export const createUserByEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInWithEmailAndPasswordFromAuth = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const authStateChangeObserver = (callback) => onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
}