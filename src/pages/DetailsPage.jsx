import React from "react";
import DetailsHero from "../components/DetailsHero";
import MainHeading from "../components/MainHeading";
import { ShowItem } from "../components/ShowItem";
import Newsletter from "../components/Newsletter";
import { withRouter } from "../components/withRouter";

const DetailsPage = (props) => {
    return (
        <>
            <DetailsHero
                boxs={props.boxs}
                link={props.router.params.id}
                handleClick={props.handleClick}
                num={props.num}
                setNum={props.setNum}
            />
            <MainHeading />
            <ShowItem boxs={props.boxs} num={3} />
            <Newsletter />
        </>
    );
};

export default withRouter(DetailsPage);
