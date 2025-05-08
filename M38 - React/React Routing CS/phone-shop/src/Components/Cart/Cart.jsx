import React from 'react';
import SingleCart from './SingleCart';

const Cart = ({data}) => {

    return (
        <div>
            <div className='grid grid-cols-3 gap-10 my-10'>
                { data.map(phone => <SingleCart phone={phone}></SingleCart>)}
            </div>
        </div>
    );
};

export default Cart;