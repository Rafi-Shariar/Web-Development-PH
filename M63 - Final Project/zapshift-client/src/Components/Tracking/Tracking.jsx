import React from 'react';
import image from '../../assets/images/live-tracking.png';
const Tracking = () => {
    return (
        <div className='flex flex-col gap-4'>

            <div data-aos="fade-right" className='bg-white p-10 rounded-2xl flex gap-10'>
                <div className='border-r pr-10'>
                    <img src={image} alt="" />
                   
                </div>
                <div className='flex flex-col gap-3 justify-center'>
                    <h1 className='text-xl font-semibold'>Live Parcel Tracking</h1>
                    <p className='text-slate-400'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
            

             <div data-aos="fade-left" className='bg-white p-10 rounded-2xl flex gap-10'>
                <div className='border-r pr-10'>
                    <img src={image} alt="" />
                   
                </div>
                <div className='flex flex-col gap-3 justify-center'>
                    <h1 className='text-xl font-semibold'>Live Parcel Tracking</h1>
                    <p className='text-slate-400'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>

             <div data-aos="fade-right" className='bg-white p-10 rounded-2xl flex gap-10'>
                <div className='border-r pr-10'>
                    <img src={image} alt="" />
                   
                </div>
                <div className='flex flex-col gap-3 justify-center'>
                    <h1 className='text-xl font-semibold'>Live Parcel Tracking</h1>
                    <p className='text-slate-400'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
        </div>
    );
};

export default Tracking;