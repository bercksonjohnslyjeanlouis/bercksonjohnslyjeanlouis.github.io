import React from "react";
import options from "../data/fr/menu.json"
import {Link} from "gatsby";

const Hero = ({page,description}) => {
    return (
        <div className="container-fluid pt-5 pb-0 mb-0 px-md-5">
            <header className="section-header">
                <h2>{page}</h2>
                <p className="mt-3 text-center">
                    {description}
                </p>
            </header>
        </div>
    )
}




export default Hero;
