import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import experiences from '../data/fr/experiences.json'



const Experience = () => {
    return (
        <section className="experience section">
            <Container>
                <h2 className="heading">EXPERIENCES</h2>
                <div className="deco"></div>

                {experiences.map((experience) => (
                    <div key={experience.id} className="content item" style={{ textAlign: 'justify' }} id="experience">
                        <h3 className="title">
                            <i className={experience.icon}></i>&nbsp;&nbsp;&nbsp;
                            <span>{experience.title}</span>
                            <span className="place">
                                <a href={experience.link}>
                                    <span>{experience.institution}</span>
                                </a>
                            </span>
                            <br />
                            <span className="year">{experience.year}</span>
                        </h3>

                        <ul className="list-unstyled">
                            {experience.tasks.map((task, index) => (
                                    <li key={index}>{`- ${task}`}</li>
                            ))}
                        </ul>
                        <p>{experience.description}</p>
                    </div>
                    )
                ) }
            </Container>
        </section>
    );
};

export default Experience;
