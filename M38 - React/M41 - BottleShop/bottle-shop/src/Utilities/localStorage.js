const saveCartToLocalStorage = (cart) =>{
    const cartItems = JSON.stringify(cart);
    localStorage.setItem('cart', cartItems);
}

const addItemtoCartLocalStorage = (id) =>{
    const cart = getCartFromLocalStorage();
    const newCart = [...cart,id];
    saveCartToLocalStorage(newCart);
}


const getCartFromLocalStorage =()=>{

    const storedCartString = localStorage.getItem('cart');

    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }

    return [];

}

const removeFromLocalStorage = (id) => {
    const storedCart = getCartFromLocalStorage();
    const remaingCart = storedCart.filter(storedID => storedID !== id);
    saveCartToLocalStorage(remaingCart);
}

export {getCartFromLocalStorage as getStoredCart, 
    addItemtoCartLocalStorage as AddToStoredCart,
    removeFromLocalStorage as removeItem};