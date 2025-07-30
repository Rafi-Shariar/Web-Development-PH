import React from 'react';
import LoginForm from './components/LoginForm';
import GoogleLogin from './components/GoogleLogin';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
        <div className="space-y-4">
          <LoginForm/>
        </div>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>
          <div>
            <GoogleLogin/>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Login;