import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

  const {createUser,setUser} = use(AuthContext);

  const handleRegister = (e) =>{
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email,password)
    .then( res => setUser(res.user))
    .catch( error => console.log(error)
    )


  }
    return (
        <div>
            <div className="flex justify-center min-h-screen items-center">
       
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
       <h1 className="p-5 text-2xl font-semibold">Register Your Account</h1>
         <form className="card-body" onSubmit={handleRegister}>
           <fieldset className="fieldset">
             <label className="label">Name</label>
             <input type="name" className="input" placeholder="Name" name='name'/>
             <label className="label">Email</label>
             <input type="email" className="input" placeholder="Email" name='email'/>
             <label className="label" >Password</label>
             <input type="password" className="input" placeholder="Password" name='password'/>
             <div>
              <p>Already have an account? <Link to='/auth/login' className="text-secondary">Login</Link></p>
             </div>
             
             <button className="btn btn-neutral mt-4" type='submit'>Register</button>
           </fieldset>
         </form>
       </div>
     </div>
        </div>
    );
};

export default Register;