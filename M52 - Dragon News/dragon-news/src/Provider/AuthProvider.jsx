import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // create User
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    // Observer
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            // setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    //SignOut
    const LogOut = () =>{
        return signOut(auth);
    }

    //SingIN
    const LogIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const authData = {
        user,
        setUser,
        createUser,
        LogOut,
        LogIn,
        loading,
        setLoading

    }
    return (
        <div>
             <AuthContext value={authData}>{children}</AuthContext>;
        </div>
    );
};

export default AuthProvider;