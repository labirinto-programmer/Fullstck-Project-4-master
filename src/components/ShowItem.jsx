import React from "react";
import { Btn } from "./Button";
import { ItemGrid } from "./ItemGrid";

export const ShowItem = (props) => {
    return (
        <section className="showitem">
            <ItemGrid
                products={props.boxs}
                limit={props.num}
            />
            <Btn classbtn="main-btn-light-bc" text="more products" />
        </section>
    );
};
