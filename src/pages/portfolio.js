import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import LinkedinButton from "../components/LinkedinButton";
import portfolio from "../data/fr/portfolio.json"

const Portfolio = () => {
    return (
        <Layout page={'PORTFOLIO'} description={'Mes realisations...'}>

        <section className="about section">
            <div className="section-inner-g">
                <div className="content">
                    <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {portfolio.map((service, index) => (


                            <Col key={index} md={6} className="mx-0 mx-1 mb-3 align-items-center d-flex justify-content-center align-items-center text-center">
                                <Card>
                                    <div>
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{ textAlign: 'center' }} className="width-100 py-3">
                                                <h1 className="mb-1 text-center py-2">
                                                    <span className="text-reset">{service.count}</span>
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div style={{ textAlign: 'center' }} className="overflow-hidden flex-nowrap width-full">
                                                <h5 className="mb-1 text-center py-2">
                                                    <span className="text-reset">{service.category}</span>
                                                </h5>
                                                <p style={{ textAlign: 'center' }}>
                                                    <Button variant="cta-primary-1" href={service.link}>
                                                        Voir les détails
                                                    </Button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
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

export default Portfolio;
