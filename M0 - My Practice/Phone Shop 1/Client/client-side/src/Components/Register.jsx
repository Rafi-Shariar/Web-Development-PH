import React, { use } from "react";
import { AuthContext } from "../Context/AuthContex";
import { Navigate } from "react-router";

const Register = () => {

    const {createUser,setUser,setUserCart} = use(AuthContext);
    
    


    const handleRegister = e =>{
        e.preventDefault();



        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photo.value;

          const user = {
            name,
            email,
            photoURL,
            cartItems : []
        }

        createUser(email,password)
        .then((userCredential)=>{
            console.log(userCredential.user);
            setUser(user)
            setUserCart(user);
            
            
        })
        .catch((error)=>{
            const errorMessage = error.message;
            alert(errorMessage);
        })

        //Adding User to DB
      

        fetch('http://localhost:3000/users', {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
        })






    }


  return (
    <div className="mt-10 max-w-xl mx-auto">
      <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4" onSubmit={handleRegister}>
        <legend className="fieldset-legend">Register</legend>

        <label className="label">Name</label>
        <input type="text" className="input" placeholder="Name" name="name"/>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" name="email"/>

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="password" name="password"/>

        <label className="label">PhotoURL</label>
        <input type="text" className="input" placeholder="Photo URL" name="photo"/>

        


        <input type="submit" className="btn btn-primary" placeholder="Register" />
      </form>
    </div>
  );
};

export default Register;
