import React, { useState } from 'react';
import Hero from '../Header/Hero/Hero';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router';

const Home = () => {

    const phonedata = useLoaderData();
    
    const [showAll, setShowAll] = useState(false);


    const [phones,setPhones] =  useState(phonedata);

    const handleSearch = (e,text) =>{
        e.preventDefault();
        const searchedPhones = phonedata.filter(phone => phone.name.toLowerCase().includes(text.toLowerCase()))
        setPhones(searchedPhones);
    }

    // var data = phones;
    //  data = showAll ? phonedata : phonedata.slice(0,6);


    return (
        <div>
            <Hero handleSearch={handleSearch}></Hero>
            <Cart data={phones}></Cart>
            <div className='text-center mb-10'>
               {
                showAll ?  <button className='btn btn-secondary' onClick={()=>{setShowAll(!showAll)}}>See Less</button> :  <button className='btn btn-primary' onClick={()=>{setShowAll(!showAll)}}>See All</button>
               }
            </div>
        </div>
    );
};

export default Home;