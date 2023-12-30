import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const SubscribeForm = () => {

    return (
        <aside className="credits aside section">
            <Container className="section-inner shadow-sm rounded">
                <Form
                    action="https://bercksonjohnslyjeanlouis.us18.list-manage.com/subscribe/post?u=bd0755d85043060bb3d25399e&amp;id=af56b21906&amp;f_id=00d12ce7f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    noValidate
                >
                    <div id="mc_embed_signup_scroll">
                        <Form.Group controlId="formFirstName">
                            <Form.Control type="text" name="FNAME" required placeholder="Prénom" className="mb-3" />
                        </Form.Group>

                        <Form.Group controlId="formLastName">
                            <Form.Control type="text" name="LNAME" required placeholder="Nom" className="mb-3" />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Control type="email" name="EMAIL" required placeholder="Email" className="mb-3" />
                        </Form.Group>

                        <div id="mce-responses" className="clear foot">
                            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                        </div>

                        <input
                            type="text"
                            name="b_bd0755d85043060bb3d25399e_af56b21906"
                            tabIndex="-1"
                            value=""
                            style={{ position: 'absolute', left: '-5000px' }}
                            aria-hidden="true"
                        />

                        <Button type="submit" value="ABONNEZ-VOUS" name="subscribe" id="mc-embedded-subscribe" className="btn btn-cta-primary mt-3" style={{ width: '100%', marginLeft: '0px' }}>
                            ABONNEZ-VOUS
                        </Button>
                    </div>
                </Form>

            </Container>
        </aside>
    );
};

export default SubscribeForm;
