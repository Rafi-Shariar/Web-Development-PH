import React from 'react';
import swimming from '../assets/swimming.png';
import classImage from '../assets/class.png';
import playground from '../assets/playground.png';
const Qzone = () => {
    return (
        <div className='bg-base-200 p-3 mt-5'>

            <h1 className='font-semibold'>Q-Zone</h1>

            <div className='flex flex-col justify-center items-center gap-10'>
            <div>
                <img src={swimming} alt="" />
                <h1 className='text-center font-semibold'>Swimming</h1>
            </div>
            <div>
                <img src={classImage} alt="" />
                <h1 className='text-center font-semibold'>Class</h1>
            </div>
            <div>
                <img src={playground} alt="" />
                <h1 className='text-center font-semibold'>Play Ground</h1>
            </div>
            </div>

            
        </div>
    );
};

export default Qzone;