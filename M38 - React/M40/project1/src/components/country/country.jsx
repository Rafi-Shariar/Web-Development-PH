import React, { useState } from 'react';
import './country.css'

const Country = ({country,handleVisitedCountries, handleVisitedFlag}) => {


    const [visited, setVisited] = useState(false);
    

    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries(country);

        
    }



    return (
        <div className={`country  ${visited && 'visited-con'}`}>
            <p>name: {country.name.common}</p>
            <img src={country.flags.png} alt="" />
            <p>Independent: {country.independent ? 'Free' : 'Not Free'}</p>
            <button onClick={handleVisited}>{
                visited? 'Visited' : 'Not Visted'
                }</button>

                <button onClick={()=> handleVisitedFlag(country.flags.png)}>Add Visited Flag</button>
        </div>
    );
};

export default Country;