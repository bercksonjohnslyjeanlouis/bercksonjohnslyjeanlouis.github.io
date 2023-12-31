import React from 'react';
import testimonials from "../data/fr/testimonials.json"
import SEO from "../components/SEO";
import Layout from "../components/Layout"; // Import your store hook

const Testimonial = () => {

    return (
        <Layout page={'Testimonial'} description={'Ce qu\'on dit de moi...'}>
        <section className="about section" >

                <div className="section-inner-g">
                    <div className="content" id="temoignage">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="item mb-5">
                                <blockquote className="quote">
                                    <p>
                                        <i className="fas fa-quote-left"></i>&nbsp;&nbsp;
                                        <span style={{ textAlign: 'justify' }}>{testimonial.comment}</span>
                                    </p>
                                </blockquote>
                                <p className="source">
                                    <strong>
                                        <span className="nam">{testimonial.name}</span>
                                    </strong>
                                    <br />
                                    <em>
                                        <span className="titl">{testimonial.title}</span>
                                    </em>
                                </p>
                            </div>
                        ))}

                        <div className="my-3 d-flex justify-content-center align-items-center text-center">
                            <a
                                className="btn btn-cta-primary"
                                href="https://www.linkedin.com/in/bercksonjohnslyjeanlouis/details/recommendations/?detailScreenTabIndex=0"
                            >
                                VOIR PLUS SUR LINKEDIN
                            </a>
                        </div>
                    </div>
                </div>

        </section>
            </Layout>
    );
};

export default Testimonial;

export const Head = () => <SEO title={'Testimonial'} description={'Ce qu\'on dit de moi...'}></SEO>