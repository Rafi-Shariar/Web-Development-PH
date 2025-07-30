"use client"
import { signIn } from 'next-auth/react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const GoogleLogin = () => {

    const handleGoogleLogin = async() =>{

        const result = await signIn("google", {redirect:false});
        console.log(result);
        

    }
    return (
        <div>
             <button onClick={()=> handleGoogleLogin()}
            className="mt-4 w-full py-2 px-4 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FcGoogle className="mr-2 text-xl" />
            Sign in with Google
          </button>
            
        </div>
    );
};

export default GoogleLogin;