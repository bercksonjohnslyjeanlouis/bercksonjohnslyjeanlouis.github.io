import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Hero from "./Hero";
import InfosJLBJ from "./InfosJLBJ";
import Subscribe from "./Subscribe";
import ContactMe from "./ContactMe";
import BackTop from "./BackTop";

import '../assets/plugins/fontawesome/css/all.css'
import '../assets/plugins/bootstrap@5.3.2/dist/css/bootstrap.min.css'
import '../assets/css/styles1.css'
import '../assets/plugins/devicon/devicon-base.css'
import '../assets/plugins/animate/animate.css'
import '../assets/plugins/devicon/devicon.min.css'
import '../assets/plugins/dark-mode-switch/dark-mode.css'
import Profile from "./Profile";

const Layout = ({ children, page, description, profile }) => {
    return (
        <>
            <Navbar profile={profile} ></Navbar>
            { profile ? (<Profile></Profile>) : (<Hero description={description} page={page}></Hero>)}

            <div className="container sections-wrapper">
                <div className="row">
                    <div className="primary col-md-8 col-lg-8 col-12">
                        {children}
                    </div>

                    <div className="secondary col-lg-4 col-12">
                        <InfosJLBJ></InfosJLBJ>
                        <Subscribe></Subscribe>
                        <ContactMe></ContactMe>
                    </div>
                </div>
            </div>

            <BackTop></BackTop>
            <Footer></Footer>

        </>
    )
}

export default Layout