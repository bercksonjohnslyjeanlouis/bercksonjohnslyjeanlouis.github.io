import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import team from "../data/fr/team.json"
import LinkedinButton from "../components/LinkedinButton";
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SEO from "../components/SEO";

const Team = () => {

    const MyImage=({src})=> {
        getImage(src)
    }

    return (
        <Layout page={'Collaborateurs'}  description={'Mes Collaborateurs...'}>

        <section className="about section">
            <div className="section-inner-g">
                <div className="content">
                    <Row className="d-flex gap-3">
                        {team.map((person, index) => (

                            <div className="col-xs-12 col-sm-6 col-md-4" key={index}>
                                <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                                    <div className="mainflip">
                                        <div className="frontside">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p>
                                                        <img className="img-fluid"
                                                             title={person.name}
                                                             src={'../../'+person.photo}
                                                             alt={person.name} />
                                                        </p>
                                                    <h4 className="card-title">{person.name}</h4>
                                                    <p className="card-text">{person.profile}</p>
                                                    <a className="btn btn-1">+</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="card-title">{person.name}</h4>
                                                    <p className="card-text">{person.about}</p>
                                                    <ul className="list-inline">
                                                        {person.networks.map((network, networkIndex) => (
                                                        <li className="list-inline-item" key={networkIndex}>
                                                            <a className="social-icon text-xs-center" target="_blank"
                                                               href={network.link}>
                                                                <i className={network.icon}></i>
                                                            </a>
                                                        </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Row>

                    <LinkedinButton></LinkedinButton>
                </div>
            </div>
        </section>
        </Layout>
    );
};

export default Team;
export const Head = () => <SEO title={'Collaborateurs'} description={'Mes collaborateurs...'}></SEO>