import './Bottle.css'
const Bottle = ({bottle,handleAddToCart}) => {

    const {img, name, price,stock} = bottle;
    
    return (
        <div className="card">

            <img src={img} className='bottle-img'></img>
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <p>Stock Remaining : {stock}</p>
            <button onClick={()=>{handleAddToCart(bottle)}}>Buy Now</button>
            
        </div>
    );
};

export default Bottle; 