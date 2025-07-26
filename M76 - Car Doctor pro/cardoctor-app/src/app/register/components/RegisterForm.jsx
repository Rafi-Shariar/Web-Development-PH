"use client";
import { RegisterUser } from "@/app/actions/auth/RegisterUser";
import React from "react";
import { FcGoogle } from "react-icons/fc";
const RegisterForm = () => {

    const handleRegistration = async (e) =>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        RegisterUser({name,email,password});
        
    }



  return (
    <div>
      <form onSubmit={handleRegistration} action="">
        <div className="space-y-4">
          <div>
            <label
            
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              className="mt-1 w-full px-3 mb-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              name="name"
            />

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
            Register
          </button>
        </div>
        {/* <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <button className="mt-4 w-full py-2 px-4 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <FcGoogle className="mr-2 text-xl" />
            Sign in with Google
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default RegisterForm;
