import * as React from "react"
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Experience from "../components/Experience";


const About = () => {
  return (
      <>
          <Layout description={'About me...'} page={'About'} profile={true}>
          <Experience></Experience>
          </Layout>
      </>
)
}

export default About

export const Head = () => <SEO title={'About'} ></SEO>
