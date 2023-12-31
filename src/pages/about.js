import * as React from "react"
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certification from "../components/Certifications";


const About = () => {
  return (
      <>
          <Layout description={'About me...'} page={'About'} profile={true}>
          <Experience></Experience>
          <Education></Education>
          <Certification></Certification>

          <section className="experience section" style={{marginTop: '-25px' }}>
              <div className="section-inner-g">
                  <div className="content">
                      <div className="my-3 d-flex justify-content-center align-items-center text-center mb-3">
                          <a
                              className="btn btn-cta-primary"
                              href="https://www.linkedin.com/in/bercksonjohnslyjeanlouis">
                              CONSULTER MON PROFIL LINKEDIN
                          </a>
                      </div>
                  </div>
              </div>
          </section>
          </Layout>
      </>
)
}

export default About

export const Head = () => <SEO title={'About'} description={'À propos de moi...'} ></SEO>
