import React from "react";
import { getImg, getPrice } from "../utils/helper";

export const CartListProduct = (props) => {
    return (
        <div className="box-light-cart-list">
            {getImg(props.newBoxBaby.image)}
            <span>{props.newBoxBaby.name}</span>
            <select
                className="select-counter-cart-list"
                defaultValue={ props.newBoxBaby.num }
                onChange={(e) => {props.handleChange(e, props.newBoxBaby.price); props.totalNum(); props.totalPrice();}}
                >
                {(() => {
                    let numbers = [];
                    for(let i = 1; i <= 20; i++){
                        if(i < 10) {
                            numbers.push(<option key={`0${+i}`} defaultValue={`0${+i}`}>0{i}</option>)
                        }else {
                            numbers.push(<option key={i} defaultValue={i}>{i}</option>)
                        }
                    }
                    return numbers;
                })()}
            </select>
            <span>
                ${(props.newBoxBaby.num * getPrice(props.newBoxBaby.price)).toFixed(2)}
            </span>
            <button className="btn main-btn-remove"
            onClick={() => props.handleRemove(props.newBoxBaby)}>remove</button>
        </div>
    );
};
