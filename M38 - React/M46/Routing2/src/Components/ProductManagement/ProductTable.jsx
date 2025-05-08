import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            <h3>Products: {products.length}</h3>
            <thead>
                <td>No</td>
                <td>Name</td>
                <td>Price</td>
                <td>Quantity</td>
            </thead>
            <tbody>
                {
                    products.map( (product,index) => 
                        <tr key={index}>
                             <td>{index+1}</td>
                            <td>{product.name}</td>
                             <td>{product.price}</td>
                            <td>{product.quantity}</td>
                        </tr>
                    )
                }
            </tbody>
        </div>
    );
};

export default ProductTable;