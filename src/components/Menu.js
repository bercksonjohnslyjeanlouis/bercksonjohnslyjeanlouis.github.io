import React from "react";
import options from "../data/fr/menu.json"
import {Link} from "gatsby";


const Menu = () => {
    return (
        <div>
            <ul>
            {options.map((option, index) => {
                return <li>
                    <Link to={option.link}>
                        {option.anchor}
                    </Link>
                </li>
            })}
            </ul>
        </div>
    )
}

export default Menu;
