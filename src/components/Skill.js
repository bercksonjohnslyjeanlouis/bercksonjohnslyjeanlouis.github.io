import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import skills from '../data/fr/databases.json'

const Skill = () => {
    return (
        <section className="list music section">
                <div className="section-inner-g">
                    <h2 className="heading">COMPÉTENCES</h2>
                    <div className="deco"></div>
                    <div className="content">
                        <p className="intro" style={{ textAlign: 'justify' }} x-text="$store.database.map.section_skills"></p>
                        <div x-show="$store.database.loaded_skills">
                            {Object.keys(skills).map((group, groupIndex) => (
                                <div key={groupIndex}>
                                    <span>{groupIndex}</span>
                                    <Row className="py-1">
                                        {skills[group].map((skill, skillIndex) => (
                                            <Col key={skillIndex} xs={4} md={2}>
                                                <Card className="mb-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="width-full" style={{ textAlign: 'center' }}>
                                                            <i className={skill.icon} style={{ fontSize: '20px' }}></i>
                                                        </div>
                                                        <div className="col">
                                                            <div className="overflow-hidden flex-nowrap width-full" style={{ textAlign: 'center' }}>
                                                                <strong className="mb-1 text-center" style={{ fontSize: '11px' }}>
                                                                    <span x-text={skill.name} className="text-reset"></span>
                                                                </strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Skill;
