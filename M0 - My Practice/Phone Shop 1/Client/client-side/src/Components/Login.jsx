import React, { use } from "react";
import { AuthContext } from "../Context/AuthContex";
import { MdLogoDev } from "react-icons/md";

const Login = () => {

  const {loginUser,setUserCart } = use(AuthContext);


  const handleLogin = (e) => {

    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => {

        fetch(`http://localhost:3000/user/${email}`,{
            method:'GET',
            headers:{
                'content-type' : 'application/json'
            }

        })
        .then(res => res.json())
        .then((data)=>{
            setUserCart(data)
            
            
        })

        
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6"></p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="fieldset" onSubmit={handleLogin}>
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
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
