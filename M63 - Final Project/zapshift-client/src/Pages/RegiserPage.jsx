import React from 'react';
import photo from '../assets/images/authImage.png';
import RegisterForm from '../Components/Register/RegisterForm';
const RegiserPage = () => {
    return (
        <div>
            <div className='flex min-h-screen'>
            <div className='w-1/2'>
            <RegisterForm></RegisterForm>
            

            </div>
            <div className='bg-[#FAFDF0] flex justify-center items-center w-1/2'>
                <img src={photo} alt=""/>
            </div>
        </div>
            
        </div>
    );
};

export default RegiserPage;