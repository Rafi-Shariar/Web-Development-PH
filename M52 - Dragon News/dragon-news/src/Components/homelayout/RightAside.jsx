import React from 'react';
import SocialLogins from './SocialLogins';
import FindUs from './FindUs';
import Qzone from '../Qzone';

const RightAside = () => {
    return (
        <div>
            <h1 className='font-semibold'>Login With</h1>
            <SocialLogins></SocialLogins>
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;