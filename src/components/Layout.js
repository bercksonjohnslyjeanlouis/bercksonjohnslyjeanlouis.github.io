import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Hero from "./Hero";
import InfosJLBJ from "./InfosJLBJ";
import Subscribe from "./Subscribe";
import ContactMe from "./ContactMe";
import BackTop from "./BackTop";

const Layout = ({ children, page, description }) => {
    return (
        <>
            <Navbar />
            <Hero description={description} page={page}></Hero>
            <div className="container sections-wrapper">
                <div className="row">
                    <div className="primary col-md-8 col-lg-8 col-12">
                        {children}
                    </div>
                </div>
            </div>

            <div className="secondary col-lg-4 col-12">
                <InfosJLBJ></InfosJLBJ>
                <Subscribe></Subscribe>
                <ContactMe></ContactMe>

                <BackTop></BackTop>

            </div>

            <Footer></Footer>

        </>
    )
}

export default Layout