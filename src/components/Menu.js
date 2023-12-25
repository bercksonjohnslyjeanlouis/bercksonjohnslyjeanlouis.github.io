// src/components/layout.js
import React from "react";
const Menu = ({ children }) => {
    return (
        <div>
            <header>...</header>
            {/* Page content */}
            {children}
            {/* Your shared footer */}
            <footer>...</footer>
        </div>
    );
};
export default Menu;
