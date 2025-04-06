import React from 'react';

const Bottle = ({bottle}) => {

    const {img,name,price,stock} = bottle;

    return (
        <div>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
            <p>Remaining : {stock}</p>
                
        </div>
    );
};

export default Bottle;