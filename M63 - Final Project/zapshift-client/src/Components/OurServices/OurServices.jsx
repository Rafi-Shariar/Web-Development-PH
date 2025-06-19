import React from 'react';
import image from '../../assets/images/service.png'
const OurServices = () => {
    return (
        <div className='bg-[#03373D] rounded-2xl text-white py-10 mb-10'>
            
            <div className='max-w-3xl mx-auto flex flex-col justify-center items-center py-10'>
                <h1 className='text-4xl font-semibold'>Our Services</h1>
                <p className='text-center'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
                {/* Container */}
            <div className='px-30 grid grid-cols-3 gap-5'>

                <div className='bg-white text-black flex flex-col justify-center items-center p-8 hover:bg-primary rounded-2xl'>
                    <img src={image} alt="" />
                    <h1 className='my-4 text-2xl font-semibold'>Fulfillment Solution</h1>
                    <p className='text-sm text-center text-slate-500'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>

                <div className='bg-white text-black flex flex-col justify-center items-center p-8 hover:bg-primary rounded-2xl'>
                    <img src={image} alt="" />
                    <h1 className='my-4 text-2xl font-semibold'>Fulfillment Solution</h1>
                    <p className='text-sm text-center text-slate-500'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>

                <div className='bg-white text-black flex flex-col justify-center items-center p-8 hover:bg-primary rounded-2xl'>
                    <img src={image} alt="" />
                    <h1 className='my-4 text-2xl font-semibold'>Fulfillment Solution</h1>
                    <p className='text-sm text-center text-slate-500'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>

                <div className='bg-white text-black flex flex-col justify-center items-center p-8 hover:bg-primary rounded-2xl'>
                    <img src={image} alt="" />
                    <h1 className='my-4 text-2xl font-semibold'>Fulfillment Solution</h1>
                    <p className='text-sm text-center text-slate-500'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>

                <div className='bg-white text-black flex flex-col justify-center items-center p-8 hover:bg-primary rounded-2xl'>
                    <img src={image} alt="" />
                    <h1 className='my-4 text-2xl font-semibold'>Fulfillment Solution</h1>
                    <p className='text-sm text-center text-slate-500'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>

                <div className='bg-white text-black flex flex-col justify-center items-center p-8 hover:bg-primary rounded-2xl'>
                    <img src={image} alt="" />
                    <h1 className='my-4 text-2xl font-semibold'>Fulfillment Solution</h1>
                    <p className='text-sm text-center text-slate-500'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>



            </div>
        </div>
    );
};

export default OurServices;