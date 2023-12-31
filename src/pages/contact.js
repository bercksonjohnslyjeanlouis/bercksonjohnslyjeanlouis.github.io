import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const SuccessMessage = () => {
    return (
        <Layout>
            <section className="about section">
                <div className="section-inner-g">
                    <div className="content">
                <Row>
                    <Col className="content">
                        <p style={{ textAlign: 'center' }} id="about">
                            Thank you! The form has been submitted successfully.
                            <br />
                            <br />
                            I will reply to you soon ...
                        </p>
                        <hr />
                        <p style={{ textAlign: 'center' }}>
                            <br />
                            <a href="/" style={{ width: '100%', textAlign: 'center' }} className="btn btn-cta-primary mt-3 p-2">
                                Retourner à l'accueil
                            </a>
                        </p>
                    </Col>
                </Row>
                </div>
            </div>
        </section>
        </Layout>
    );
};

export default SuccessMessage;

export const Head = () => <SEO title={'Contact'} description={'Contact'} ></SEO>
