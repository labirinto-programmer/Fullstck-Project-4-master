import React from 'react';
import {getImg, cutImgLink, getPrice} from "../utils/helper";

export const Product = props => {

    return (
        <div className='card-showitem'>
            <a href={`/details/${ cutImgLink(props.box.image) }`}>
                <div className='card-img-showitem'>
                    {getImg(props.box.image)}
                </div>
                <div className='card-text-showitem'>
                    <span className='product name'>
                        { props.box.name }
                    </span>
                    <span className='product price'>
                    ${ getPrice(props.box.price) }
                    </span>
                </div>
            </a>
        </div>
    );
}