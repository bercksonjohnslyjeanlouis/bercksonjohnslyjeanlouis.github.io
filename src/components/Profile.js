import React from 'react';
import berckson from '../../static/images/main/berckson.jpg'
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';

const Profile = () => {
    return (
        <header className="header" style={{ display: `$router.path==='/' ? 'block' : 'none'` }}>
            <Container>
                <Row className="align-items-center pt-3">
                    <Col id="top">
                        <a href="/">
                            <Image
                                className="profile-image img-fluid float-start rounded-circle"
                                src={berckson}
                                alt="profile image"
                                style={{ width: '159px', height: '159px' }}
                            />
                        </a>
                        <div className="profile-content">
                            <h1 className="name">Berckson Johnsly JEAN-LOUIS</h1>
                            <h2 className="desc" id="header">
                                Technology & Management
                            </h2>
                            <ul className="social list-inline">
                                <li className="list-inline-item">
                                    <a href="https://www.linkedin.com/in/bercksonjohnslyjeanlouis" target="_blank">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.linkedin.com/newsletters/berckson-johnsly-jean-louis-7029083089146400768" target="_blank">
                                        <i className="fa-solid fa-square-rss"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://twitter.com/bercksonjohnsly" target="_blank">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/bercksonjohnslyjeanlouis" target="_blank">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://web.facebook.com/bercksonjohnslyjeanlouis98" target="_blank">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                {/*<li className="list-inline-item">*/}
                                {/*    <a href="#header">*/}
                                {/*        <i className="fab fa-telegram"></i>*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                <li className="list-inline-item">
                                    <a href="https://github.com/bercksonjohnslyjeanlouis" target="_blank">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item last-item">
                                    <a href="https://wa.me/50947740432?text=Hello!" target="_blank">
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    {/*<Col xs="auto" id="id">*/}
                    {/*    <div className="dark-mode-switch d-flex" style={{ display: 'none' }}>*/}
                    {/*        <Form.Check*/}
                    {/*            type="switch"*/}
                    {/*            id="darkSwitch"*/}
                    {/*            label="Mode Sombre"*/}
                    {/*            className="mx-auto mx-md-0 me-2"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <Button variant="cta-primary" target="_blank">*/}
                    {/*        <i className="fas fa-paper-plane"></i> Voir mon CV*/}
                    {/*    </Button>*/}
                    {/*</Col>*/}
                </Row>
            </Container>
        </header>
    );
};

export default Profile;
