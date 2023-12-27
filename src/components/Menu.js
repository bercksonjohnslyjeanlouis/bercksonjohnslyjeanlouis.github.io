import React, {useState} from "react";
import options from "../data/fr/menu.json"
import {Link} from "gatsby";




const Menu = () => {

    return (
        <div>
            <ul className={"ps-2 list-unstyled"} id={"menu"} >

                {options.map((option, index) => {
                    return(
                        <li id={index}
                            className={"accordion-item border-bottom border-gray border-1 py-2"}>
                            <Link to={option.link}>
                                <i className={option.icon}></i>
                                <span className={"ps-2"}>
                                    {option.anchor.toUpperCase()}
                                </span>
                            </Link>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}




export default Menu;
