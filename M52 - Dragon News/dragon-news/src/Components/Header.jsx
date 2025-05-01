import React from 'react';
import logo from '../assets/logo.png';
import {format} from 'date-fns';
const Header = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-10  gap-3'>
                <img src={logo} alt=""/>
                <p className='text-accent text-sm'>Journalism Without Fear or Favour</p>
                <p className='font-semibold'>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
            </div>
        </div>
    );
};

export default Header; 