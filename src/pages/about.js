import * as React from "react"
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";


const About = () => {
  return (
      <Layout>
          <Hero page={'ABOUT'} description={"It's the about page"}></Hero>
        <div>
         <h1>ABOUT</h1>
        </div>
      </Layout>
)
}

export default About

export const Head = () => <SEO title={'ABOUT'} ></SEO>
