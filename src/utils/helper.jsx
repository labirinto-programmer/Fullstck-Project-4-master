import React from 'react';

export const cutImgLink = allname => allname.split("/")[2].split(".")[0];

export const getImg = (ele, name) => {
    return  <img src={require(`../img/${cutImgLink(ele)}.png`)} alt={name}/>
}

export const getPrice = (pric) => {
    const cutPrice = pric.split("$")[0];
    return +cutPrice;
}

