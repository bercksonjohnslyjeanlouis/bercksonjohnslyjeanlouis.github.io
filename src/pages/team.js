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
        <Layout page={'Collaborateurs'}  description={'Mes Collaborateurs'}>

        <section className="about section">
            <div className="section-inner-g">
                <div className="content">
                    <Row className="d-flex gap-3">
                        {team.map((person, index) => (

                            <Col key={index} md={6} className="p-0 mb-4 animate-box">
                                <Card data-animate-effect="fadeInLeft">
                                    <a href={person.link} className="m-0 p-0">
                                        <Card.Img className={'card-img-top m-0 p-0'}
                                            title={person.name}
                                            src={'../../'+person.photo}
                                            alt={person.name}
                                        />
                                    </a>
                                    <Card.Body>
                                        <h5 className="card-title">{person.name}</h5>
                                        <p style={{ marginTop: '-10px', marginBottom: '10px' }}>
                                            <em>{person.profile}</em>
                                        </p>
                                        <div style={{ marginTop: '15px' }} className="deco"></div>
                                        <p className="card-text text-justify" style={{ textAlign: 'justify', marginTop: '-10px' }}>
                                            {person.about}
                                        </p>
                                        <hr />
                                        <div className="card-text d-flex justify-content-center align-items-center text-center text-muted">
                                            {person.networks.map((network, networkIndex) => (
                                                <div key={networkIndex} className="mx-2">
                                                    <a href={network.link}>
                                                        <i className={network.icon}></i>
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
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
export const Head = () => <SEO title={'Berckson Johnsly JEAN-LOUIS'} ></SEO>