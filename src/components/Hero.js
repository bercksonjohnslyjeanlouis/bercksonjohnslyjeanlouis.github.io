import React from "react";

const Hero = ({page,description}) => {
    return (
        <header style={{backgroundColor : 'white' }} className="section-header text-center mb-5 pt-4 pb-1">
            <h3 className="text-center text-uppercase text-black">
                {page}
            </h3>
            <p className="position-relative">
                {description}
            </p>
        </header>
    )
}




export default Hero;
