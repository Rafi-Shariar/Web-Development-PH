import React, {  use } from "react";
import { NavLink, useLocation, useNavigate} from 'react-router';
import { AuthContext } from "../../Contexts/AuthContext";
const Login = () => {

  const {singInUser} = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

    const handleLogin = (e) =>{
      e.preventDefault();

      const email = e.target.email.value;
      const password = e.target.password.value;

      singInUser(email,password)
      .then(result=>{
        console.log(result);
        navigate(location?.state || '/')
      }).catch(error => {
        console.log(error);
      })
    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>

          </div>
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body">

              <form className="fieldset" onSubmit={handleLogin}>
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" name="email"/>
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div className="flex justify-between">
                  <a className="link link-hover">Forgot password?</a>
                  <NavLink to='/register' className='text-blue-500'> Register</NavLink>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
