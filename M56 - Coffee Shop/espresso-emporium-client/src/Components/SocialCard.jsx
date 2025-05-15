import React from 'react';
import cup1 from '../assets/images/cups/Rectangle 9.png';
import cup2 from '../assets/images/cups/Rectangle 10.png';
import cup3 from '../assets/images/cups/Rectangle 11.png';
import cup4 from '../assets/images/cups/Rectangle 12.png';
import cup5 from '../assets/images/cups/Rectangle 13.png';
import cup6 from '../assets/images/cups/Rectangle 14.png';
import cup7 from '../assets/images/cups/Rectangle 15.png';
import cup8 from '../assets/images/cups/Rectangle 16.png';
const SocialCard = () => {
    return (
        <div className='text-center mt-10'>
            <p >Follow Us Now</p>
            <h1 className='text-2xl'>Follow on Instagram</h1>

            <div className='w-10/12 mx-auto  mt-7'>
               
               <div className='grid grid-cols-4 gap-5 justify-center items-center'>
                <img src={cup1} alt="" className=' object-cover'/>
                <img src={cup2} alt="" className=' object-cover'/>
                <img src={cup3} alt="" className=' object-cover'/>
                <img src={cup4} alt="" className=' object-cover'/>
                <img src={cup5} alt="" className=' object-cover'/>
                <img src={cup6} alt="" className=' object-cover'/>
                <img src={cup7} alt="" className=' object-cover'/>
                <img src={cup8} alt="" className=' object-cover'/>
               </div>

            </div>
        </div>
    );
};

export default SocialCard;