import React from 'react';
import photo from '../assets/images/authImage.png';
import LoginForm from '../Components/Login/LoginForm';
const LoginPage = () => {
    return (
        <div className='flex min-h-screen'>
            <div className='w-1/2'>
            <LoginForm></LoginForm>

            </div>
            <div className='bg-[#FAFDF0] flex justify-center items-center w-1/2'>
                <img src={photo} alt=""/>
            </div>
        </div>
    );
};

export default LoginPage;