import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const SignUp = () => {
    const {createUser} = use(AuthContext);

    const handleSignUp = (e) =>{
      e.preventDefault()
      const form = e.target;
      const formData = new FormData(form);

      const {email,password, ...userProfileInfo} = Object.fromEntries(formData.entries())


      //Create User
      createUser(email,password)
      .then(result => {
        console.log(result.user);

        //save profile info In DB
        fetch('http://localhost:3000/users',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(userProfileInfo)
        })
        .then(res => res.json())
        .then(data =>{
          console.log('added',data)
          
        })
      })
      .catch(error => {
        alert(error);
      })
      

    }
    
  return (
    <div>
         
      <div className="hero bg-base-200 min-h-screen">
        
       
         <form className="fieldset w-96 text-2xl" onSubmit={handleSignUp}>
            <h1 className="text-4xl">Sign Up Now !</h1>
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" name='email'/>
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="name" name='name'/>
                <label className="label">Address</label>
                <input type="text" className="input" placeholder="address" name='address'/>
                <label className="label">Phone</label>
                <input type="number" className="input" placeholder="phote" name='phone'/>
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
              <input className="btn btn-neutral mt-4" type="submit" value="Sign up" />

              </form>
      </div>
    </div>
  );
};

export default SignUp;
