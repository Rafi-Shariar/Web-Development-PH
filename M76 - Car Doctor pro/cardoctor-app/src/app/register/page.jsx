import React from "react";

import RegisterForm from "./components/RegisterForm";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Register
        </h2>

        <section>
          <RegisterForm/>
        </section>
      </div>
    </div>
  );
};

export default Register;
