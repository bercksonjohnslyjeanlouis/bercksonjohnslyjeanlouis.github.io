import React, { useEffect, useState } from 'react';
import {Row, Col, Button, Spinner, Card, CardImg, CardBody} from 'react-bootstrap';
import events from '../data/fr/events.json'
import LinkedinButton from "../components/LinkedinButton";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const Events = () => {
    const [visibleEvents, setVisibleEvents] = useState(4);

    const loadMoreEvents = () => {
        setVisibleEvents((prev) => prev + 4);
    };

    return (
        <Layout page={'ÉVÉNEMENTS'} description={'Mes événements...'}>
        <section className="about section" id="events">
            <div className="section-inner-g">
                <div className="content">
                <Row className="d-flex gap-3">
                    {events.slice(0, visibleEvents).map((event,index) => (
                            <Card key={event.id} className="col-12 col-md-6 p-0 mb-4">
                                <a href={event.link} className="m-0 p-0">

                                    <CardImg
                                        className="card-img-top m-0 p-0"
                                        title={event.title}
                                        src={'../../'+event.image}
                                        alt={event.title}
                                    />
                                </a>
                                <CardBody>
                                    <a href={event.link} className="ti" style={{ textDecoration: 'none' }}>
                                        <h5 className="card-title">{event.title}</h5>
                                    </a>
                                    <div className="postcard__subtitle small">
                                        <i className="fas fa-calendar-alt mx-2"></i>
                                        <small>{event.date}</small>
                                    </div>
                                    <div className="postcard__bar"></div>

                                    <p className="card-text text-justify pt-2" style={{ textAlign: 'justify' }}>
                                        {event.description}
                                    </p>

                                    <div className="card-text d-flex justify-content-between text-muted">
                                        <div>
                                            <i className="fa-solid fa-folder"></i>&nbsp;<span>{event.type}</span>
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-house-chimney-user"></i>&nbsp;<span>{event.institution}</span>
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-location-dot"></i>&nbsp;<span>{event.location}</span>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                            ))}
                </Row>


                <div className="my-3 d-flex justify-content-center align-items-center text-center">
                    {visibleEvents < events.length && (
                        <Button variant="cta-primary" onClick={loadMoreEvents}>
                            VOIR PLUS D'ÉVÉNEMENTS +
                        </Button>
                    )}
                </div>

                {visibleEvents >= events.length && (
                    <LinkedinButton></LinkedinButton>
                )}
                </div>

            </div>
        </section>
        </Layout>
    );
};

export default Events;


export const Head = () => <SEO title={'ÉVÉNEMENTS'} description={'Mes événements...'} ></SEO>
