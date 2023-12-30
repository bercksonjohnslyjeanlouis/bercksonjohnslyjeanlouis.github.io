import React from 'react';
import services from "../data/fr/services.json"
import { Card, Button, Row, Col } from 'react-bootstrap';
import Layout from "../components/Layout";
import Hero from "../components/Hero";

const Services = () => {
    return (
        <Layout>
            <Hero page={'SERVICES'} description={'Mes services...'}></Hero>
        <section className="about section">
            <div className="section-inner-g">
                <div className="content">
                    <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {services.map((service, index) => (
                            <Col key={index} md={6} className="mx-0 mx-1 mb-3 align-items-center d-flex justify-content-center align-items-center text-center">
                                <Card>
                                    <div>
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{ textAlign: 'center' }} className="width-100 py-3">
                                                <i className={service.icon} style={{ textAlign: 'center', fontSize: '60px' }}></i>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div style={{ textAlign: 'center' }} className="overflow-hidden flex-nowrap width-full">
                                                <h5 className="mb-1 text-center py-2">
                                                    <span className="text-reset">{service.name}</span>
                                                </h5>
                                                <p>{service.description}</p>
                                                <p style={{ textAlign: 'center' }}>
                                                    <Button variant="cta-primary-1" href={service.link}>
                                                        Commandez maintenant
                                                    </Button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    <div className="my-3 d-flex justify-content-center align-items-center text-center">
                        <a className="btn btn-cta-primary" href="/portfolio">
                            CONSULTER MON PORTFOLIO
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </Layout>
    );
};

export default Services;
