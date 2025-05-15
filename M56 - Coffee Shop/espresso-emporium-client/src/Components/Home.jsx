import React from 'react';
import { useLoaderData } from 'react-router';
import Hero from './Hero';
import IntroCard from './IntroCard';
import ProductContainer from './ProductContainer';

const Home = () => {
    const coffees = useLoaderData();
    console.log(coffees);
    

    return (
        <div>
            <Hero></Hero>
            <IntroCard></IntroCard>
            <ProductContainer coffees={coffees}></ProductContainer>
        </div>
    );
};

export default Home;