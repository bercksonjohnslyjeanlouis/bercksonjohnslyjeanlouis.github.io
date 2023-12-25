import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Menu from "./Menu";

const Layout = ({ children }) => {
    return (
        <>

            <Menu />
            {children}

        </>
    )
}

export default Layout