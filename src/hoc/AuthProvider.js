import {createContext, useState} from "react";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const logIn = (user, cb) => {
        setUser(user)
        cb()
    }

    const logOut = (cb) => {
        setUser(null)
        cb()
    }

    const value = {user, logIn, logOut}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};