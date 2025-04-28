import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const Register = () => {

    const {createUser} = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;



    createUser(email,password)
    .then(result =>{
        console.log(result);
        
    })
    .catch(error =>{
        console.log(error);
        
    })
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="fieldset" onSubmit={handleRegister}>
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  name="name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div className="flex justify-between">
                  <NavLink to="/login" className="text-blue-500">
                    
                    please login
                  </NavLink>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
