import * as React from "react"
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Profile from "../components/Profile";


const About = () => {
  return (
      <Layout>
          <Profile></Profile>
          {/*<Hero page={'ABOUT'} description={"It's the about page"}></Hero>*/}
      </Layout>
)
}

export default About

export const Head = () => <SEO title={'ABOUT'} ></SEO>
