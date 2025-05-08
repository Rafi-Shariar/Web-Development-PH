import React, { useState } from 'react';
import { GoogleAuthProvider,signInWithPopup, signOut,GithubAuthProvider } from "firebase/auth";
import { auth } from '../../firebase/firebase.init';

const Login = () => {

    const [user,setUser] = useState(null);

    const provider = new GoogleAuthProvider();

    const handleGoogleSingIn = () =>{
        signInWithPopup(auth,provider)
        .then(result => {
            console.log(result);
            setUser(result.user)
        })
        .catch(error =>{
            console.log(error);
            
        })
    }

    const handleSignOut =()=>{
        signOut(auth).then(()=>{
            setUser(null)
            alert('sign out')
        })
        .catch(error => {
            console.log(error);
        })
    }

    const GithubProvider = new GithubAuthProvider();

    const handleGithubSingIn =()=>{

        signInWithPopup(auth,GithubProvider)
        .then(result =>{
            console.log(result);
            setUser(result.user);
            
        })
        .then( error =>{
            console.log(error);
            
        })

    }



    return (
        <div>
            <h1 className='text-3xl'>Please login</h1>
            <button className='btn btn-primary' onClick={handleGoogleSingIn}>Sing in With Google</button>
            
            <button className='btn btn-primary ml-10' onClick={handleGithubSingIn}>Sign In with Github</button>

            <button className='btn btn-secondary block mt-5' onClick={handleSignOut}>Sign Out</button>
            {
                user && 
                <div>
                    <h1>User : {user?.displayName}</h1>
                    <h1>Email : {user?.email}</h1>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    ); 
};

export default Login;