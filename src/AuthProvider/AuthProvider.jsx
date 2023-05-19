import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import app from '../firebase/firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth,googleAuthProvider);
    }

    const passwordReset =(email) => {
        return sendPasswordResetEmail(auth,email);
    } 

    const logOut = () => {
        signOut(auth);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged( auth, currentUser => {
            setUser(currentUser);
            // console.log(currentUser);
            setLoading(false);

        });
        return () => {
            unsubscribe();    
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        loading,
        signIn,
        googleSignIn,
        passwordReset,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;