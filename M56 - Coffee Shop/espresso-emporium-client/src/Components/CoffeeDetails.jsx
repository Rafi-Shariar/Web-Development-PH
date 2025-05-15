import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffee  = useLoaderData();
    
    return (
        <div>

            <div>
        <img src={coffee.photourl} alt="" className="w-42" />
      </div>
      <div>
        <p>Name: {coffee.name}</p>
        <p>Chef: {coffee.chefname}</p>
        <p>taste: {coffee.taste}</p>
      </div>
            
        </div>
    );
};

export default CoffeeDetails;