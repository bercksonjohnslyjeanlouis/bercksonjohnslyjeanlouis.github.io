import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const InfosJLBJ = () => {
    return (
        <aside className="info aside section">
            <Container className="section-inner shadow-sm rounded">
                <h2 className="heading sr-only">Contact</h2>
                <div className="content">
                    <ul className="list-unstyled">
                        <li>
                            <i className="fas fa-map-marker-alt text-dark"></i>
                            <span className="sr-only">Location:</span>
                            <span>Nord-est, HAITI</span>
                        </li>
                        <li>
                            <i className="fas fa-envelope text-dark"></i>
                            <span className="sr-only">Email:</span>
                            <a style={{ fontSize: '14px' }} href="mailto:bercksonjohnslyjeanlouis98@gmail.com">
                                bercksonjohnslyjeanlouis98@gmail.com
                            </a>
                        </li>
                        <li>
                            <i className="fas fa-globe text-dark"></i>
                            <span className="sr-only">Website:</span>
                            <a style={{ fontSize: '14px' }} href="https://www.bercksonjohnslyjeanlouis.github.io">
                                www.bercksonjohnslyjeanlouis.github.io
                            </a>
                        </li>
                        <li>
                            <i className="fas fa-phone text-dark"></i>
                            <span className="sr-only">Digicel:</span>
                            <a href="tel:47740432">(+509) 47 74 0432</a>
                        </li>
                        <li>
                            <i className="fas fa-phone text-dark"></i>
                            <span className="sr-only">Natcom:</span>
                            <a href="tel:40468284">(+509) 40 46 82 84</a>
                        </li>
                    </ul>
                </div>
            </Container>
        </aside>
    );
};

export default InfosJLBJ;
