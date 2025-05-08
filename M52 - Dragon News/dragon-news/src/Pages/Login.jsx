import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  
  const {LogIn} = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('');

  const handleLogin = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    LogIn(email,password)
    .then(()=>{
      alert('signed in');
      
      navigate(`${location.state? location.state : '/'}`);

    }).catch(error => {
      alert(error.message);
      setError(error.code);
      
    })


  }

  return (
    <div className="flex justify-center min-h-screen items-center">
       
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="p-5 text-2xl font-semibold">Login Your Account</h1>
        <form className="card-body" onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" name="email"/>
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" name="password"/>
            <div>
              { error && <p className="text-xs text-red-600">{error}</p>}
             <p>don't have an account? <Link to='/auth/register' className="text-secondary">Register</Link></p>
            </div>
            
            <button className="btn btn-neutral mt-4" type="submit">Login</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
