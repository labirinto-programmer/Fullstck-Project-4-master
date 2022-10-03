import React from 'react';
import Hero from "../components/Hero";
import { ShowItem } from "../components/ShowItem";
import Newsletter from "../components/Newsletter";

import Data from "../data/store-items.json";

class HomePage extends React.Component {
    state = {
        items: Data
    };
    render() {
        return (
            <>
                <Hero />
                <ShowItem boxs={this.props.boxs}/>
                <Newsletter />
            </>
        );
    }
}

export default HomePage;