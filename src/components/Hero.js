import React from "react";
import options from "../data/fr/menu.json"
import {Link} from "gatsby";

const Hero = ({page,description}) => {
    return (
        <header style={{backgroundColor : 'white' }} className="section-header text-center mb-5 pt-4 pb-1">
            <h3 className="text-uppercase text-black">
                {page}
            </h3>
            {/*<div className="d-flex align-items-center text-center">*/}
            {/*<div className="deco"></div>*/}
            {/*</div>*/}
            <p className="position-relative">
                {description}
            </p>
        </header>
    )
}




export default Hero;
