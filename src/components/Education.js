import React from 'react';
import studies from '../data/fr/studies.json'

const Education = () => {

    return (
        <section className="experience section" >

                <div className="section-inner-g">
                    <h2 className="heading">ÉDUCATION</h2>
                    <div className="deco"></div>
                    <div className="content">
                        {studies.map((study) => (
                                <div key={study.id} className="item">
                                    <h3 className="title">
                                        <i className={study.icon}></i>&nbsp;&nbsp;&nbsp;
                                        <span>{study.name}</span>
                                        <span className="place">
                      <a href={study.link}>
                        <span>{study.university}</span>
                      </a>
                    </span>
                                        <br />
                                        <span className="year">{study.year}</span>
                                    </h3>
                                    <ul className="list-unstyled">
                                        {study.courses.map((course, index) => (
                                            <li key={index}>{`- ${course}`}</li>
                                        ))}
                                    </ul>
                                </div>
                        ))}
                    </div>
                </div>
        </section>
    );
};

export default Education;
