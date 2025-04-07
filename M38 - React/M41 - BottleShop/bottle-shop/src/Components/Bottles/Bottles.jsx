import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { AddToStoredCart, getStoredCart, removeItem } from '../../Utilities/localStorage';
import Cart from '../Cart/Cart';
const Bottles = ({bottlesPromise}) => {
    
    const bottles = use(bottlesPromise);

    const [cart,setCart] = useState([]);
    const handleAddToCart = (bottle) =>{  
        
        const newCart = [...cart,bottle];
        setCart(newCart);
        
        AddToStoredCart(bottle.id);
    }
    
    useEffect( () => {
        const storedCartIds = getStoredCart();
        const storedCard = [];
        for(const id of storedCartIds){
            const cartBottle = bottles.find(bottle => bottle.id === id)
            if(cartBottle){
                storedCard.push(cartBottle);
            }
        }

        setCart(storedCard);
    }, [bottles])


    const handleRemoveCart = (id) =>{

        const remainingCart = cart.filter( bottle => bottle.id !== id);
        setCart(remainingCart);
        removeItem(id);

    }





    return (
        <div>
            <h3>Total Bottles : {bottles.length}</h3>
            <h3>Added to Cart : {cart.length}</h3>
            <div className='cart-container'>
                 <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
            </div>

            <div className='bottle-container'>
              {
                  bottles.map(bottle => <Bottle 
                    key={bottle.id} 
                    bottle={bottle} 
                    handleAddToCart={handleAddToCart}>

                    </Bottle>)
              }
            </div>

            
        </div>
    );
};

export default Bottles;