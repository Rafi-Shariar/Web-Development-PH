import React from 'react';
import photo from '../assets/images/agent-pending.png';
import BeARiderForm from '../Components/BeARider/BeARiderForm';
const BeARiderPage = () => {
    return (
        <div className='my-20 bg-white max-w-7xl mx-auto rounded-3xl p-20'>

            <div>

                <h1 className='text-3xl font-bold'>Be A Rider</h1>
                <p className='max-w-2xl text-sm text-slate-400 my-5'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>

            </div>

            <div className='flex '>

                <div className='w-1/2'>
                    <BeARiderForm></BeARiderForm>

                </div>

                <div className='w-1/2'>
                    <img src={photo} alt=""  className='w-fit mx-auto'/>

                </div>


            </div>
            
        </div>
    );
};

export default BeARiderPage;