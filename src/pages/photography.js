import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LinkedinButton from "../components/LinkedinButton";
import Layout from "../components/Layout";
import photos from "../data/fr/photos.json";
import SEO from "../components/SEO";

const Photography = () => {

    return (
        <Layout description={'Mes photos...'} page={'Photography'}>
            <section className="about section">
                <div className="section-inner-g">
                    <div className="content width-full">
                        {/*<div className="d-flex px-0 mx-0 justify-content-center align-items-center text-center pt-2 pb-4 ps-2">*/}
                        {/*    <Button*/}
                        {/*        onClick={() => setCurrentCategory(null)}*/}
                        {/*        className={`mx-1 ${currentCategory === null ? 'btn btn-cta-primary-1' : 'btn btn-cta-primary-2'}`}*/}
                        {/*    >*/}
                        {/*        **/}
                        {/*    </Button>*/}
                        {/*    {photosCategories.map((category, index) => (*/}
                        {/*        <Button*/}
                        {/*            key={index}*/}
                        {/*            onClick={() => setCurrentCategory(category)}*/}
                        {/*            className={`mx-1 ${currentCategory === category ? 'btn btn-cta-primary-1' : 'btn btn-cta-primary-2'}`}*/}
                        {/*        >*/}
                        {/*            {category}*/}
                        {/*        </Button>*/}
                        {/*    ))}*/}
                        {/*</div>*/}

                        <Row className="px-0 mx-0" id="photos_viewer">
                            {photos
                                // .filter((photo) => (currentCategory ? photo.category === currentCategory : true))
                                .map((photo, index) => (
                                    <Col key={index} className="col-12 col-md-6 mx-0 mb-4 px-0 align-items-center d-flex justify-content-center align-items-center text-center">
                                        <div className="mx-0 px-0">
                                            <div className="width-full mx-0 px-0">
                                                <div className="width-100 mx-0 px-0"  style={{ textAlign: 'center' }}>
                                                    <img
                                                        className="card-img-top border border-1 border-gray rounded rounded-2 px-0 mx-0"
                                                        title={photo.description}
                                                        src={'../../'+photo.image}
                                                        alt={photo.description}
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
                </div>
            </section>
        </Layout>
    );
};

export default Photography;
export const Head = () => <SEO title={'Photography'} description={'Mes photos...'} ></SEO>