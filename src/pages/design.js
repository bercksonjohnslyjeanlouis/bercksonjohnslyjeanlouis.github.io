import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import LinkedinButton from "../components/LinkedinButton";
import Layout from "../components/Layout";
import designs from "../data/fr/designs.json";
import SEO from "../components/SEO";

const Design = () => {

    return (
        <Layout description={'Mes conceptions'} page={'Design'}>
        <section className="about section">
            <Container className="section-inner-g">
                <div className="content width-full">
                    {/*<div className="d-flex px-0 mx-0 justify-content-center align-items-center text-center pt-2 pb-4 ps-2">*/}
                    {/*    <Button*/}
                    {/*        onClick={() => setCurrentCategory(null)}*/}
                    {/*        className={`mx-1 ${currentCategory === null ? 'btn btn-cta-primary-1' : 'btn btn-cta-primary-2'}`}*/}
                    {/*    >*/}
                    {/*        **/}
                    {/*    </Button>*/}
                    {/*    {designsCategories.map((category, index) => (*/}
                    {/*        <Button*/}
                    {/*            key={index}*/}
                    {/*            onClick={() => setCurrentCategory(category)}*/}
                    {/*            className={`mx-1 ${currentCategory === category ? 'btn btn-cta-primary-1' : 'btn btn-cta-primary-2'}`}*/}
                    {/*        >*/}
                    {/*            {category}*/}
                    {/*        </Button>*/}
                    {/*    ))}*/}
                    {/*</div>*/}

                    <Row className="px-0 mx-0" id="designs_viewer">
                        {designs
                            // .filter((design) => (currentCategory ? design.category === currentCategory : true))
                            .map((design, index) => (
                                <Col key={index} className="col-12 col-md-6 mx-0 mb-4 px-0 align-items-center d-flex justify-content-center align-items-center text-center">
                                    <div className="mx-0 px-0">
                                        <div className="width-full mx-0 px-0">
                                            <div className="width-100 mx-0 px-0"  style={{ textAlign: 'center' }}>
                                                <img
                                                    className="card-img-top border border-1 border-gray rounded rounded-2 px-0 mx-0"
                                                    title={design.description}
                                                    src={'../../'+design.image}
                                                    alt={design.description}
                                                />
                                            </div>
                                        </div>
                                        <div className="col px-0 mx-0" style={{ display: 'none' }}>
                                            <div className="overflow-hidden flex-nowrap width-full px-0 mx-0" style={{ textAlign: 'center' }}>
                        <span className="mb-1 text-center py-2">
                          <span  style={{ textAlign: 'justify' }} className="text-reset"></span>
                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                    </Row>
                </div>



                <LinkedinButton></LinkedinButton>
            </Container>
        </section>
        </Layout>
    );
};

export default Design;
export const Head = () => <SEO title={'Berckson Johnsly JEAN-LOUIS'} ></SEO>