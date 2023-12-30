import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import projects from "../data/fr/projects.json"
import LinkedinButton from "../components/LinkedinButton";
import Layout from "../components/Layout";
import Hero from "../components/Hero";


const Development = () => {

    const [visibleProjects, setVisibleProjects] = React.useState(4);

    return (
        <Layout>
        <section className="about section">
            <div className="section-inner-g">
                <div className="content width-full">
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <div key={index} className="item mb-4">
                            <Card>
                                <Card.Body>
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="flex-grow-1 pt-1">
                                            <div className="mb-2 text-center">
                                                <span className="badge rounded-pill bg-dark">{project.category}</span><br />
                                                <span>{project.title}</span><br />
                                                <h5>{project.name}</h5>
                                            </div>
                                            <div className="width-full w-100 mt-2">
                                                <a href={project.link} className="m-0 p-0" data-i-load="false">
                                                    <img
                                                        className="card-img-top m-0 p-0"
                                                        title={project.name}
                                                        src={'/../..'+project.image}
                                                        alt={project.name}
                                                    />
                                                </a>
                                            </div>
                                            <div style={{ textAlign: 'justify' }} className="mt-2">
                                                <span className="d-block text-muted pt-2">{project.description}</span>
                                            </div>
                                            <div className="text-center pt-3 pb-2">
                                                <Button className="btn-1 btn-cta-primary-1" href={project.link}>
                                                    EN SAVOIR PLUS SUR CE PROJET
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="py-0 border-top">
                                    <Row>
                                        <Col className="text-center p-3">
                                            <h4 className="fs-5 mb-1">+</h4>
                                            <span className="d-block font-size-sm">Contributeurs</span>
                                        </Col>
                                        <Col className="p-3 text-center border-end border-start">
                                            <h4 className="fs-5 mb-1">+</h4>
                                            <span className="d-block font-size-sm">Status</span>
                                        </Col>
                                        <Col className="p-3 text-center">
                                            <h4 className="fs-5 mb-1">+</h4>
                                            <span className="d-block font-size-sm">Languages</span>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </div>
                    ))}

                    <div className="my-3 d-flex justify-content-center align-items-center text-center">
                        <Button
                            className="btn btn-cta-primary"
                            onClick={() => setVisibleProjects((prev) => prev + 4)}
                        >
                            VOIR PLUS DE PROJETS +
                        </Button>
                    </div>

                   <LinkedinButton></LinkedinButton>
                </div>
            </div>
        </section>
            </Layout>
    );
};

export default Development;
