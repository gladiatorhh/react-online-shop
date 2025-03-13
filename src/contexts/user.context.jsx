import { createContext, useState, useEffect } from "react";
import { authStateChangeObserver, addUserFromAuth } from "../utilities/firebase/firebase.utils";

export const UserContext = createContext({
    userData: null,
    setUserData: () => null,
});

export const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const value = { userData, setUserData };

    useEffect(() => {
        const subscription = authStateChangeObserver((user) => {
            if (user) {
                addUserFromAuth(user)
            }
            setUserData(user);
        });

        return subscription;
    }, [])

    return (<UserContext.Provider value={value}>{children}</UserContext.Provider>);
}
