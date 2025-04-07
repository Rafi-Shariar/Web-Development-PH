import React from 'react';
import Bottle from '../Bottle/Bottle';

const Cart = ({cart,handleRemoveCart}) => {
    return (
        <div>
            {
                cart.map(bottle => <div key={bottle.id}>
                    <p>-- {bottle.name}</p>
                    <button onClick={ ()=>{handleRemoveCart(bottle.id)}}>Remove</button>
                </div>)
            }
            
        </div>
    );
};

export default Cart;