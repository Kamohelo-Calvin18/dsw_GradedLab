import React from 'react';
import productItem from './ProductItem'
import ProductItem from './ProductItem';

function ProductList(props){
    const products = props.products;

    if (products.length === 0){
        return <p>No products found.</p>
    }

    return(
        <ul>
            {products.map(product => (
                <ProductItem key={product.id} product={product}></ProductItem>
            ))}
        </ul>
    )
}

export default ProductList;

