import React, { use } from 'react';
import Country from '../country/country';
import './countries.css'
import { useState } from 'react';
const Countries = ({countriesPromise}) => {

    const countries = use(countriesPromise);

    const [visitedContries, setVisitedCountries] = useState([])
    const handleVisitedCountries = (country) =>{

        const newVisitedCountries = [...visitedContries, country];
        setVisitedCountries(newVisitedCountries);

    }


    const [visitedFlags, setVisitedFlags] = useState([]);
    const handleVisitedFlag = (flag) => {

    }

    return (
        <div >
            <h1>Contry List : {countries.lenght}</h1>
            <h3>Traveled so far : {visitedContries.length} </h3>
            <ol>
                {
                    visitedContries.map(country => <li>{country.name.common}</li>)
                }
            </ol>

            <div className='countries'>
            {
                countries.map(country => <Country 
                    key={country.cca3} 
                    country={country}
                    handleVisitedCountries = {handleVisitedCountries}
                    handleVisitedFlag={handleVisitedFlag}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;