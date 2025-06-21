import React from 'react';
import logoImg from '../../assets/images/logo.png';
import { Link } from 'react-router';
import { useForm } from 'react-hook-form';
const LoginForm = () => {

    const {register,handleSubmit} = useForm();

    const onSubmit = data =>{
        console.log(data);
        
    }
    return (
        <div>
            <div className='flex items-center p-20'>
                 <div tabIndex={0} role="button" className="">
              <img src={logoImg} alt="" className=""/>
            </div>
             <a className=" text-2xl font-semibold mt-4 -ml-4">Profast</a>
            </div>
             
             {/* Form */}
            <div className='w-1/2 mx-auto'> 
                <h1 className='text-4xl font-bold'>Welcome Back</h1>
                <p>Login with ProFast</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                     <legend className="fieldset-legend">Email</legend>
                     <input type="text" {...register('email')} className="input w-full" placeholder="Email"/>

                     <legend className="fieldset-legend">Password</legend>
                     <input type="password" {...register('password')} className="input w-full" placeholder="password"/>

                     <p className='underline text-slate-600 my-3'>Forgot Password?</p>

                     <button className='btn btn-primary text-black w-full'>Login</button>
                </form>

                <p className='my-3 text-slate-400'>don't have an accout? <Link to={'/register'} className='text-primary'>Register</Link></p>
                <p className='text-center'>Or</p>
                <button className='btn bg-slate-200 text-black w-full'>Login with Google</button>

            </div>
            
        </div>
    );
};

export default LoginForm;