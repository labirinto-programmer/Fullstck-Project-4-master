import React, {useState} from "react";
import { getImg, getPrice } from "../utils/helper";

const DetailsHero = (props) => {
    const [activeClass, setActiveClass] = useState(1);
    const addActiveClass = (itemNum) => {
        setActiveClass(itemNum);
    }

    const productKey = props.link;
    const findKey = props.boxs.find((el) => el.image.includes(productKey));

    return (
        <section className="details-hero">
            <div className="container">
                <div className="imgs-details-hero">
                    <div className="boxs-imgs-details-hero">
                        <div className="boxs-imgs-single">{getImg(findKey.image)}</div>
                        <div className="boxs-imgs-single">{getImg(findKey.image)}</div>
                        <div className="boxs-imgs-single">{getImg(findKey.image)}</div>
                    </div>
                    <div className="big-imgs-details-hero">{getImg(findKey.image)}</div>
                </div>
                <div className="text-details-hero">
                    <div className="box-text-details-hero">
                        <span className="span-box-text-details-hero">
                            ${getPrice(findKey.price)}
                        </span>
                        <h2>{findKey.name}</h2>
                        <p>{findKey.description}</p>
                        <div className="colors-box-text-details-hero">
                            <div className="title-colors-box-text-details-hero">
                                <span>color:</span>
                                <span>pink</span>
                            </div>
                            <div className="boxs-colors-box-text-details-hero">
                                <div className={activeClass === 1 ? "active" : ""} onClick={() => addActiveClass(1)}></div>
                                <div className={activeClass === 2 ? "active" : ""} onClick={() => addActiveClass(2)}></div>
                                <div className={activeClass === 3 ? "active" : ""} onClick={() => addActiveClass(3)}></div>
                            </div>
                        </div>
                        <div className="btn-box-text-details-hero">
                            <select
                                className="select-counter"
                                defaultValue={ props.num }
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
                            <button
                                className="btn main-btn-add-bc"
                                onClick={(e) =>
                                    props.handleClick(e, findKey, productKey)
                                }
                            >
                                add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetailsHero;
