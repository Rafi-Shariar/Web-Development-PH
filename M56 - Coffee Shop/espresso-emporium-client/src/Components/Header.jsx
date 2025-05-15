import React from 'react';
import logo from '../assets/images/more/logo1.png'
const Header = () => {
    return (
        <div className='border p-3'>

            <div className='flex gap-3 justify-center items-center'>
                <img src={logo} alt="" className='w-10'/>
                <h1 className='text-4xl'>Espresso Emporium</h1>
            </div>
            
        </div>
    );
};

export default Header;