import React from 'react';
import { Product } from "./Product"

export const ItemGrid = props => {
    const list = props.products.slice(0, props.limit);
    const showProduct = list.map(box => { 
        return <Product
            key={box.image}
            box={box}
        />
    });

    return (
        <div className='container grid-three-column'>
            {showProduct}
        </div>
    );
}