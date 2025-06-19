import React from 'react';
import Banner from '../Components/Home/Banner';
import HowItWorks from '../Components/HowItWoks/howItWorks';
import OurServices from '../Components/OurServices/OurServices';
import Tracking from '../Components/Tracking/Tracking';
import BecomeAMarchent from '../Components/BecomeAMarchent/BecomeAMarchent';

const HomePage = () => {
    return (
        <div className='max-w-7xl mx-auto min-h-screen'>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <Tracking></Tracking>
            <BecomeAMarchent></BecomeAMarchent>
        </div>
    );
};

export default HomePage;