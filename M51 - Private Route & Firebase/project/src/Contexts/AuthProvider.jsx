import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signOut } from "firebase/auth"
import {auth} from '../firebase.init';
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
   

    const singInUser = (email,password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return ()=>{
            unSubscribe();
        }
    },[])


    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth);
    }


    const userInfo = {
        user,
        createUser,
        singInUser,
        signOutUser
    }



    return (
        <div>
            <AuthContext value={userInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;