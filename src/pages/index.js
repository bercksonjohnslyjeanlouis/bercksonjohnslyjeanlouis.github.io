import * as React from "react"
import About from "./about";
import SEO from "../components/SEO";


const Index = () => {
  return(
      <About></About>
  )
}

export default Index

export const Head = () => <SEO title={'Accueil'} ></SEO>
