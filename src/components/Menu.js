import React, {useState} from "react";
import options from "../data/fr/menu.json"
import { Offcanvas, Accordion,Button } from 'react-bootstrap';
import {Link} from "gatsby";




const Menu = () => {
    const [show, setShow]=useState(false)
    const handleClose=()=>setShow(false)
    const handleShow=()=>setShow(true)

    return (
        <>

            <Button onClick={handleShow}
                    style={ { backgroundColor: '#f5f5f5',
                        cursor: 'pointer',
                        color: '#000000' } }
            >
                <i className={'fas fa-bars text-black'}></i>
            </Button>

            <Offcanvas  show={show} placement="start" tabIndex="-1" id="side_menu" onHide={handleClose} aria-labelledby="offcanvasLabel">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasLabel">MENU</Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <div>
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className="border-bottom border-gray border-1 py-2">
                                    <a href={option.link}
                                        className="text-decoration-none width-full"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#side_menu">
                                          <span>
                                                <i className={option.icon}></i>
                                                <strong>
                                                  <span className="ps-2">{`  ${option.anchor.toUpperCase()}`}</span>
                                                </strong>
                                          </span>
                                    </a>
                            </div>
                        ))}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

        </>

    )
}




export default Menu;
