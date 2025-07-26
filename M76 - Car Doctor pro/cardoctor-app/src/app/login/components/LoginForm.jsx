"use client"
import React from "react";
import { signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
const LoginForm = () => {

    const router = useRouter();


    const handleLogin = async(e) =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

       try{
         const res = await signIn("credentials", {email,password , callbackUrl:'/', redirect:false}); 
         
         if(res.ok){
            router.push('/');
            alert('logged In');
            form.reset();
         }
         else{
             alert("Logged In failed")
         }
       }
       catch(error){
        alert("Logged In failed")
       }
        
    }
  return (
    <div>
      <form onSubmit={handleLogin} action="">
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            name="email"
          />
        </div>
        <div>
          <label
       
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            name="password"
          />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
