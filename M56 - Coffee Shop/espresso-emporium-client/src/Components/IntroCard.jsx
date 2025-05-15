import React from 'react';
import icon1 from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'
const IntroCard = () => {
    return (
        <div className='bg-[#ECEAE3] p-7'>
            <div className='w-10/12 mx-auto'>
                 
                 <div className='grid grid-cols-4'>
                    <div>
                        <img src={icon1} alt="" className='w-12'/>
                        <h1 className='text-xl'>Awesome Aroma</h1>
                        <p className='text-xs '>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>

                    <div>
                        <img src={icon2} alt="" className='w-12'/>
                        <h1 className='text-xl'>High Quality</h1>
                        <p className='text-xs '>We served the coffee to you maintaining the best quality</p>
                    </div>

                    <div>
                        <img src={icon3} alt="" className='w-12'/>
                        <h1 className='text-xl'>Pure Grades</h1>
                        <p className='text-xs '>The coffee is made of the green coffee beans which you will love</p>
                    </div>

                    <div>
                        <img src={icon4} alt="" className='w-12'/>
                        <h1 className='text-xl'>Proper Roasting</h1>
                        <p className='text-xs '>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                 </div>

            </div>
            
        </div>
    );
};

export default IntroCard;