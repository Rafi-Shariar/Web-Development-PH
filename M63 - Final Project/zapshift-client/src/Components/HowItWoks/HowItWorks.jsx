import React from 'react';
import image from '../../assets/images/bookingIcon.png'
const HowItWorks = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-2xl font-bold'>How It Works</h1>
            
            {/* container */}
            <div className='flex gap-6 mt-6 my-10'>

                <div className='bg-white p-8 rounded-2xl'>
                    <img src={image} alt="" />
                    <h1 className='text-xl font-semibold  my-4'>Booking Pick & Drop</h1>
                    <p className='text-sm text-slate-400'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>

                 <div className='bg-white p-8 rounded-2xl'>
                    <img src={image} alt="" />
                    <h1 className='text-xl font-semibold my-4'>Booking Pick & Drop</h1>
                    <p className='text-sm text-slate-400'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>

                 <div className='bg-white p-8 rounded-2xl'>
                    <img src={image} alt="" />
                    <h1 className='text-xl font-semibold my-4'>Booking Pick & Drop</h1>
                    <p className='text-sm text-slate-400'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>

                 <div className='bg-white p-8 rounded-2xl'>
                    <img src={image} alt="" />
                    <h1 className='text-xl font-semibold my-4'>Booking Pick & Drop</h1>
                    <p className='text-sm text-slate-400'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>



                

            </div>
            
        </div>
    );
};

export default HowItWorks;