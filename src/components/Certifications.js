import React from 'react';
import certifications from '../data/fr/certifications.json'

const Certification = () => {

    return (
        <section className="experience section">

                <div className="section-inner-g">
                    <h2 className="heading">CERTIFICATIONS DIVERSES</h2>
                    <div className="deco"></div>
                    <div className="content">
                        {certifications.map((certification, index) => (
                            <div key={index} className="item">
                                <h3 className="title">
                                    <i className={certification.icon}></i>&nbsp;&nbsp;&nbsp;
                                    <span>{certification.name}</span>
                                    <span className="place">
                    <a href={certification.link}>
                      <span>{certification.university}</span>
                    </a>
                  </span>
                                    <br />
                                    <span className="year">{certification.year}</span>
                                </h3>
                                <ul className="list-unstyled">
                                    {certification.courses.map((course, courseIndex) => (
                                        <li key={courseIndex}>{`- ${course}`}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>

        </section>
    );
};

export default Certification;
