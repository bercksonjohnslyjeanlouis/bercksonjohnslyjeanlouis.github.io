import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import experiences from '../data/fr/experiences.json'
import Hero from "./Hero";



const Experience = () => {
    return (
        <>
        <section className="experience section">
               <div style={{ textAlign:'justify', marginBottom:'20px'}} className="mb-4">
                   Je suis étudiant finissant en Sciences Informatiques et certifié en Sciences de Gestion.
                   Passionné par les TIC, je passe la plupart de mon temps sur un ordinateur portableet je pourrais même me
                   "qualifier comme quelqu’un d’actif dans le monde de la technologie. J’ai passé ces cinq dernières années
                    à surfer un peu partout sur le web et je crois que j’ai appris suffisamment de choses qui me permettront
                   de vous aider avec soucis concernant l’informatique.
               </div>
            <div>
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
            </div>
        </section>
        </>
    );
};

export default Experience;
