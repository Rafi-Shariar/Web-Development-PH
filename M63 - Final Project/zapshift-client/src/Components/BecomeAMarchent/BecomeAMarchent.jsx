
import React from 'react';
import imgae from '../../assets/images/location-merchant.png';
const BecomeAMarchent = () => {
    return (
        <div className='mt-10 bg-[#03373D] flex justify-center items-center gap-10 px-20 py-10 rounded-4xl my-10'>

            <div className='w-1/2 text-white '>
                <h1 className='text-4xl font-semibold'>Merchant and Customer Satisfaction is Our First Priority</h1>
                <p className='text-sm text-slate-300 my-6 max-w-[400px]'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>

                <button className='btn btn-primary text-black rounded-2xl'>Become a Merchant</button>
                <button className='btn btn-dash  ml-3 text-black rounded-2xl'>Earn with Profast Courier</button>

            </div>

            <div>
                <img src={imgae} alt="" />
            </div>
            
        </div>
    );
};

export default BecomeAMarchent;