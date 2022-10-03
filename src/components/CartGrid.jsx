import React from 'react';
import { CartListProduct } from "./CartListProduct"

export const CartGrid = props => {
    const showCart = props.newBoxs.map((newBoxBaby) => { 
        return <CartListProduct
            key={newBoxBaby.id}
            newBoxBaby={newBoxBaby}
            handleChange={props.handleChange}
            totalNum={props.totalNum}
            totalPrice={props.totalPrice}
            handleRemove={props.handleRemove}
        />
    });

    return (
        <div className='light-cart-list'>
            {showCart}
        </div>
    );
}