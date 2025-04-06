import React, { use } from 'react';
import Bottle from '../bottle/bottle';

const Bottles = ({bottlePromise}) => {
    const bottles = use(bottlePromise);
    return (
        <div>
            <h3>Total Bottles : {bottles.lenght}</h3>
            <h2>Add to Cart : </h2>

            <div>
                {
                    bottles.map(bottle => <Bottle>
                        bottle={bottle}
                    </Bottle>)
                }
            </div>
            
        </div>          
    );
};

export default Bottles;