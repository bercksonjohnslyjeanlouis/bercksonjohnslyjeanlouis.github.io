import * as React from "react"
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import {Col, Row} from "react-bootstrap";


const Index = () => {
  return(
      <Layout page={'404'} description={'Page Introuvable'}>
        <section className="about section">
          <div className="section-inner-g">
            <div className="content">
              <Row>
                <Col className="content">
                  <p style={{ textAlign: 'center' }} id="about">
                    Désolé, cette page n'existe pas...
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
  )
}

export default Index

export const Head = () => <SEO title={'404'} description={'Page Introuvable'}></SEO>
