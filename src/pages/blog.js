import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import posts from '../data/fr/posts.json'
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SEO from "../components/SEO";

const Blog = () => {
    const [visiblePosts, setVisiblePosts] = useState(4);

    const loadMorePosts = () => {
        setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 4);
    };

    return (
        <Layout page={'BLOG'} description={"Les articles que j'ai ecrtits..."}>
        <section className="about section">
            <div className="section-inner-g">
                <div className="content">
                    <Row className="d-flex gap-3">
                        {posts.slice(0, visiblePosts).map((post, index) => (
                            <Col key={index} md={6} className="mb-4">
                                <Card className="p-0 animate-box" data-animate-effect="fadeInLeft">
                                    <a href={post.link} className="m-0 p-0" >
                                        <Card.Img
                                            title={post.description}
                                            src={'../../'+post.image}
                                            alt={post.description}
                                            style={{ display: 'block' }}
                                            onLoad={() => {}}
                                        />
                                    </a>
                                    <Card.Body>
                                        <a href={post.link} style={{ textDecoration: 'none' }}>
                                            <h5 className="card-title">{post.title}</h5>
                                        </a>
                                        <p className="card-text text-justify" style={{ textAlign: 'justify' }}>{post.summary}</p>
                                        <p>
                                            {post.tags.map((tag, tagIndex) => (
                                                <React.Fragment key={tagIndex}>
                                                    <em className="">{`#${tag}  `}</em>&nbsp;&nbsp;
                                                    <small>&nbsp;</small>
                                                </React.Fragment>
                                            ))}
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    <div className="my-3 d-flex justify-content-center align-items-center text-center">
                        <Button
                            style={{display : (visiblePosts >= posts.length) ? 'none' : 'block'}}
                            className="btn btn-cta-primary"
                            onClick={loadMorePosts}
                        >
                            VOIR PLUS D'ARTICLES +
                        </Button>
                    </div>

                    <div className="my-3 d-flex justify-content-center align-items-center text-center">
                        <a
                            href="https://www.linkedin.com/newsletters/berckson-johnsly-jean-louis-7029083089146400768"
                            className="btn btn-cta-primary"
                            style={{ display: visiblePosts >= posts.length ? 'block' : 'none' }}
                        >
                            ABONNEZ-VOUS À MON BLOG
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </Layout>
    );
};

export default Blog;


export const Head = () => <SEO title={'Berckson Johnsly JEAN-LOUIS'} ></SEO>