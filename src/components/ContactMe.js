import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ContactMe = () => {

  return (
    <section className="github section contact-form">
      <Container className="section-inner shadow-sm rounded">
        <Form method="post" action="https://api.web3forms.com/submit">
          <input type="hidden" name="from_name" value="bercksonjohnslyjeanlouis.github.io" />
          <input type="hidden" name="subject" value="Notification" />
          <input type="hidden" name="access_key" value="bdac9ff3-aa56-4b47-838b-d25bd533a3ab" />

          <Form.Group controlId="formName">
            <Form.Control type="text" name="name" required placeholder="Nom Complet..." className="mb-3" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Control type="email" name="email" required placeholder="Email..." className="mb-3" />
          </Form.Group>

          <Form.Group controlId="formSubject">
            <Form.Control type="text" name="about" required placeholder="Objet..." className="mb-3" />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Control as="textarea" name="message" required placeholder="Message" rows={5} className="mb-3" />
          </Form.Group>

          <input type="hidden" name="redirect" value="https://bercksonjohnslyjeanlouis.github.io/contact.html" />

          <Button type="submit" style={{ width: '100%' }} className="btn btn-cta-primary mt-3">
            Écrivez-moi un message
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default ContactMe;
