import React from "react";
import heroimg from "../img/hero.png";
import { Btn } from './Button';

class Hero extends React.Component {
    render() {
        return (
            <section className="hero">
                <div className="content">
                    <div className="img-content">
                        <img src={ heroimg } alt="heroimg" />
                    </div>
                    <div className="text-content">
                        <div className="box-text-content">
                            <h1>Lorem ipsum dolor sit amet</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Ullamcorper ultrices magna mauris pellentesque dignissim ante
                                varius diam elit.
                            </p>
                            <Btn classbtn="main-btn-dark-bc" text="our products"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;
