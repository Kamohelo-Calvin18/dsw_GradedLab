import React from 'react';

function ProductItem(props){
    const product = props.product;

    return(
        <li className='product-item'>
            <h2>{product.name}</h2>
            <p>Category: {product.category}</p>
            <p>Price: R{product.price}</p>
        </li>
    )
}

export default ProductItem;