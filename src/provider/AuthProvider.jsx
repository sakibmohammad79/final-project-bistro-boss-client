import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const provider = new GoogleAuthProvider();

    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          });
    }

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            if(currentUser){
                axios.post('http://localhost:5000/jwt', {email: currentUser.email})
                .then(data => {
                    console.log(data.data.token);
                    localStorage.setItem('access_token', data.data.token);
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access_token');
            }
           
        })
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user, 
        loading,
        createUser,
        loginUser,
        googleLogIn,
        logOutUser,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;